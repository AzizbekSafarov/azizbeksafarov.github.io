# Local preview for Windows without Node or Python. Serves this project to this computer only.
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$kit = Get-Content -Raw -Encoding UTF8 -LiteralPath (Join-Path $here 'kit.json') | ConvertFrom-Json
$root = [IO.Path]::GetFullPath([IO.Path]::Combine($here, $kit.serve_root)).TrimEnd('\') + '\'
$types = @{
  '.html' = 'text/html; charset=utf-8'; '.css' = 'text/css; charset=utf-8'
  '.js' = 'text/javascript; charset=utf-8'; '.mjs' = 'text/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'; '.md' = 'text/plain; charset=utf-8'; '.txt' = 'text/plain; charset=utf-8'
  '.svg' = 'image/svg+xml'; '.png' = 'image/png'; '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.webp' = 'image/webp'
  '.woff2' = 'font/woff2'; '.woff' = 'font/woff'; '.ttf' = 'font/ttf'
}
$listener = $null
foreach ($candidate in 8080..8099) {
  $trial = New-Object Net.HttpListener
  $trial.Prefixes.Add("http://localhost:$candidate/")
  try { $trial.Start(); $listener = $trial; $port = $candidate; break } catch { $trial.Close() }
}
if (-not $listener) { throw 'Bo''sh port topilmadi (8080-8099).' }
Write-Host "$($kit.name): http://localhost:$port/ - to'xtatish uchun shu oynani yoping"
Start-Process "http://localhost:$port/"
while ($listener.IsListening) {
  $context = $listener.GetContext()
  $response = $context.Response
  try {
    $relative = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath).TrimStart('/')
    if ($relative -eq '') { $relative = $kit.entry }
    $hidden = @($relative -split '[\\/]' | Where-Object { $_.StartsWith('.') -or $_ -eq 'node_modules' }).Count -gt 0
    $target = [IO.Path]::GetFullPath([IO.Path]::Combine($root, $relative.Replace('/', '\')))
    if ([IO.Directory]::Exists($target)) { $target = [IO.Path]::Combine($target, 'index.html') }
    if ($hidden -or $relative.Contains(':') -or -not $target.StartsWith($root, [StringComparison]::OrdinalIgnoreCase)) {
      $response.StatusCode = 403
    } elseif (-not [IO.File]::Exists($target)) {
      $response.StatusCode = 404
    } else {
      $bytes = [IO.File]::ReadAllBytes($target)
      $type = $types[[IO.Path]::GetExtension($target).ToLowerInvariant()]
      if (-not $type) { $type = 'application/octet-stream' }
      $response.ContentType = $type
      $response.Headers['Cache-Control'] = 'no-store'
      $response.ContentLength64 = $bytes.Length
      if ($context.Request.HttpMethod -ne 'HEAD') { $response.OutputStream.Write($bytes, 0, $bytes.Length) }
    }
  } catch {
    try { $response.StatusCode = 400 } catch { }
  } finally {
    try { $response.Close() } catch { }
  }
}
