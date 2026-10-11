$taskFontFamilies = @(
    @{Name='Fraunces'; Slug='fraunces'; Repo='fraunces'},
    @{Name='Space Grotesk'; Slug='space-grotesk'; Repo='spacegrotesk'},
    @{Name='JetBrains Mono'; Slug='jetbrains-mono'; Repo='jetbrainsmono'},
    @{Name='DM Sans'; Slug='dm-sans'; Repo='dmsans'}
)
$taskFontsDirectory = Join-Path $PSScriptRoot 'assets\fonts'
New-Item -ItemType Directory -Path $taskFontsDirectory -Force | Out-Null
foreach ($taskFontFamily in $taskFontFamilies) {
    $taskFamilyQuery = $taskFontFamily.Name.Replace(' ', '+')
    $taskFontCss = (Invoke-WebRequest -Uri "https://fonts.googleapis.com/css2?family=$($taskFamilyQuery):wght@400..700&display=swap" -Headers @{'User-Agent'='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'} -UseBasicParsing).Content
    $taskFontBlocks = [regex]::Matches($taskFontCss, '(?s)/\* (latin|latin-ext) \*/\s*(@font-face\s*\{.*?\})')
    if ($taskFontBlocks.Count -eq 0) { throw "Font subsets missing: $($taskFontFamily.Name)" }
    $taskLocalCss = ''
    foreach ($taskFontBlock in $taskFontBlocks) {
        $taskFontSubset = $taskFontBlock.Groups[1].Value
        $taskFontRemoteUrl = [regex]::Match($taskFontBlock.Groups[2].Value, 'url\(([^)]+)\)').Groups[1].Value
        $taskFontFilename = "$($taskFontFamily.Slug)-$taskFontSubset.woff2"
        Invoke-WebRequest -Uri $taskFontRemoteUrl -OutFile (Join-Path $taskFontsDirectory $taskFontFilename)
        $taskLocalCss += $taskFontBlock.Groups[2].Value.Replace($taskFontRemoteUrl, $taskFontFilename) + "`n"
    }
    Set-Content -LiteralPath (Join-Path $taskFontsDirectory "$($taskFontFamily.Slug).css") -Value $taskLocalCss -Encoding utf8
    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/google/fonts/main/ofl/$($taskFontFamily.Repo)/OFL.txt" -OutFile (Join-Path $taskFontsDirectory "$($taskFontFamily.Slug)-OFL.txt")
    Write-Output "Downloaded local font: $($taskFontFamily.Name)"
}
