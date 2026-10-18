param([switch]$Apply)
$ErrorActionPreference = 'Stop'
$sourceDesign = [IO.Path]::GetFullPath($PSScriptRoot)
$repoRoot = Split-Path -Parent $sourceDesign
$workspaceRoot = Split-Path -Parent $repoRoot
$mirrorRoot = Join-Path $workspaceRoot 'design-shablonlar'

function Assert-Contained([string]$Target, [string]$Root) {
    $absoluteTarget = [IO.Path]::GetFullPath($Target)
    $absoluteRoot = [IO.Path]::GetFullPath($Root).TrimEnd('\')
    if (-not $absoluteTarget.StartsWith($absoluteRoot + '\', [StringComparison]::OrdinalIgnoreCase)) {
        throw "Target escapes intended root: $absoluteTarget"
    }
    if (Test-Path -LiteralPath $absoluteTarget) {
        $item = Get-Item -LiteralPath $absoluteTarget -Force
        if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Refusing linked target: $absoluteTarget" }
    }
    return $absoluteTarget
}

# These are obsolete app sources or disposable copies made by earlier QA runs.
$retired = @(
    'internet-bosh-sahifa\assets\hq\directory.css',
    'internet-bosh-sahifa\assets\hq\fonts\mono.ttf',
    'internet-bosh-sahifa\assets\hq\fonts\mono-OFL.txt',
    'internet-bosh-sahifa\design\hq_v2.py',
    'internet-bosh-sahifa\design\__pycache__',
    'design-shablonlar\__pycache__',
    'internet-bosh-sahifa\design\material-expressive\public\fonts\google-sans-flex-latin.woff2',
    'internet-bosh-sahifa\design\material-expressive\public\fonts\google-sans-flex-latin-ext.woff2',
    'internet-bosh-sahifa\design\material-expressive\public\fonts\google-sans-flex.css',
    'handoff-verification', 'qa-packages-20261016', 'qa-packages-20261017'
)
foreach ($relative in $retired) {
    $target = Assert-Contained (Join-Path $workspaceRoot $relative) $workspaceRoot
    if (Test-Path -LiteralPath $target) {
        Write-Output "Retired: $relative"
        if ($Apply) { Remove-Item -LiteralPath $target -Recurse -Force }
    }
}

if (Test-Path -LiteralPath $mirrorRoot) {
    $null = Assert-Contained $mirrorRoot $workspaceRoot
    $mirrorFiles = Get-ChildItem -LiteralPath $mirrorRoot -File -Recurse -Force | Where-Object {
        $_.FullName -notmatch '[\\/](node_modules|\.git|__pycache__)[\\/]'
    }
    foreach ($file in $mirrorFiles) {
        $relative = [IO.Path]::GetRelativePath($mirrorRoot, $file.FullName)
        if (-not (Test-Path -LiteralPath (Join-Path $sourceDesign $relative) -PathType Leaf)) {
            $target = Assert-Contained $file.FullName $mirrorRoot
            Write-Output "Stale mirror file: $relative"
            if ($Apply) { Remove-Item -LiteralPath $target -Force }
        }
    }
}

if ($Apply) {
    foreach ($file in Get-ChildItem -LiteralPath $sourceDesign -File -Recurse -Force | Where-Object {
        $_.FullName -notmatch '[\\/](node_modules|\.git|__pycache__)[\\/]' -and $_.Extension -ne '.pyc'
    }) {
        $relative = [IO.Path]::GetRelativePath($sourceDesign, $file.FullName)
        $destination = Assert-Contained (Join-Path $mirrorRoot $relative) $mirrorRoot
        $null = New-Item -ItemType Directory -Path (Split-Path -Parent $destination) -Force
        Copy-Item -LiteralPath $file.FullName -Destination $destination -Force
    }
    Copy-Item -LiteralPath (Join-Path $sourceDesign 'kit.zip') -Destination (Join-Path $workspaceRoot 'TANLOV-KIT.zip') -Force
    Write-Output 'Current design mirror and TANLOV-KIT.zip synchronized.'
} else { Write-Output 'Dry run only. Run with -Apply to clean and synchronize.' }
