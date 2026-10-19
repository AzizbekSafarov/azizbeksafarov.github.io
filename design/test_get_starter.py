"""Offline transfer tests: real package bytes, corruption, unsafe paths and existing work."""
from pathlib import Path
import json
import tempfile
import unittest
import get_starter as fetcher

ROOT=Path(__file__).resolve().parent

def local_fetch(url):
    path=url.split('/design/',1)[1]
    return (ROOT/path).read_bytes()

class TransferTests(unittest.TestCase):
    def test_each_real_package_survives_transfer(self):
        with tempfile.TemporaryDirectory(prefix='starter-transfer-') as temp:
            for item in json.loads((ROOT/'catalog.json').read_text(encoding='utf-8'))['templates']:
                slug=item['slug'];target=Path(temp)/slug
                result=fetcher.install(slug,target,local_fetch)
                manifest=json.loads((ROOT/slug/'manifest.json').read_text(encoding='utf-8'))
                for entry in manifest['files']:
                    self.assertEqual(fetcher.hashlib.sha256((target/entry['path']).read_bytes()).hexdigest(),entry['sha256'])
                self.assertEqual(result['slug'],slug)
                plan=json.loads((target/'READING-PLAN.json').read_text(encoding='utf-8'))
                for entry in plan['documents']:
                    data=(target/entry['path']).read_bytes()
                    self.assertEqual(len(data),entry['bytes'])
                    self.assertEqual(fetcher.hashlib.sha256(data).hexdigest(),entry['sha256'])

    def test_corruption_leaves_no_destination(self):
        def corrupt(url):
            data=local_fetch(url)
            return data[:-1] if url.endswith('.zip') else data
        with tempfile.TemporaryDirectory(prefix='starter-corrupt-') as temp:
            target=Path(temp)/'project'
            with self.assertRaises(ValueError):fetcher.install('bloom',target,corrupt)
            self.assertFalse(target.exists())

    def test_existing_work_is_never_overwritten(self):
        with tempfile.TemporaryDirectory(prefix='starter-existing-') as temp:
            marker=Path(temp)/'work.txt';marker.write_text('existing work')
            with self.assertRaises(ValueError):fetcher.install('bloom',temp,local_fetch)
            self.assertEqual(marker.read_text(),'existing work')

    def test_pages_failure_uses_verified_raw_pair(self):
        def only_raw(url):
            if url.startswith(fetcher.SITE):raise OSError('Synthetic Pages failure')
            return local_fetch(url)
        with tempfile.TemporaryDirectory(prefix='starter-fallback-') as temp:
            result=fetcher.install('si',Path(temp)/'project',only_raw)
            self.assertEqual(result['source'],fetcher.RAW)

    def test_unsafe_archive_paths_rejected(self):
        for path in ['../escape','/root','a/../b','C:/file','a\\b','a//b','CON.txt','folder./x','x:stream']:
            with self.subTest(path=path),self.assertRaises(ValueError):fetcher.validate_path(path)
        self.assertEqual(str(fetcher.validate_path('site/assets/image.png')),'site/assets/image.png')

if __name__=='__main__':unittest.main()
