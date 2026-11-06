@echo off
rem Opens the site correctly: index.html cannot run its scripts and fonts when double-clicked.
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 goto powershell
set OCHISH_BROWSER=1
node serve.mjs
if not errorlevel 1 goto end
:powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0ochish.ps1"
if errorlevel 1 pause
:end
