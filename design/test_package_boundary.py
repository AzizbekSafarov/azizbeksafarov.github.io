"""Regression: stale extra files and accidental local-only packaging.

Neutral filesystem fixtures only; no competition exercise or provider call.
"""
from pathlib import Path
import hashlib
import json
import subprocess
import tempfile
import unittest
from unittest.mock import patch
import build_handoff

ROOT = Path(__file__).resolve().parent


class PackageBoundaryTests(unittest.TestCase):
    def test_extracted_folder_must_match_inventory(self):
        with tempfile.TemporaryDirectory(prefix='ustoz-package-boundary-') as folder:
            target = Path(folder)
            files = {'verify-package.mjs': (ROOT/'handoff/verify-package.mjs').read_bytes(), 'note.txt': b'Neutral fixture.'}
            for name, data in files.items():
                (target/name).write_bytes(data)
            manifest = {'schema_version': 1, 'files': [{'path': name, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()} for name, data in files.items()]}
            (target/'PACKAGE-MANIFEST.json').write_text(json.dumps(manifest))
            def verify():
                return subprocess.run(['node', 'verify-package.mjs'], cwd=target, capture_output=True).returncode
            self.assertEqual(verify(), 0)
            extra = target/'unexpected.txt'
            extra.write_text('Extra file must be reported, not silently accepted.')
            self.assertNotEqual(verify(), 0)
            extra.unlink()
            (target/'note.txt').write_text('Modified')
            self.assertNotEqual(verify(), 0)

    def test_collector_rejects_environment_and_omits_dependencies(self):
        with tempfile.TemporaryDirectory(prefix='ustoz-collector-boundary-') as folder:
            target = Path(folder)
            source = target/'si-site'
            source.mkdir()
            (source/'index.html').write_text('<p>Neutral fixture</p>')
            (source/'node_modules').mkdir()
            (source/'node_modules/local.js').write_text('fixture')
            with patch.object(build_handoff, 'ROOT', target):
                self.assertEqual(set(build_handoff.source_files({'id': '11'}, [])), {'site/index.html'})
                (source/'.env').write_text('SYNTHETIC_ONLY=placeholder')
                with self.assertRaises(ValueError):
                    build_handoff.source_files({'id': '11'}, [])


if __name__ == '__main__':
    unittest.main()
