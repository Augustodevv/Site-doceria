@echo off
rem Ceres Brigadeiros — abre o site local (duplo clique aqui, NAO no index.html)
title Ceres Brigadeiros - site local
cd /d "%~dp0"
where node >nul 2>&1
if %errorlevel%==0 (
  start "" "http://127.0.0.1:8317/"
  node servidor-local.js
) else (
  where python >nul 2>&1
  if %errorlevel%==0 (
    start "" "http://127.0.0.1:8317/"
    python -m http.server 8317
  ) else (
    echo.
    echo Instale o Node em https://nodejs.org e tente de novo.
    echo (Sem Node/Python, abra o index.html direto no navegador.)
    echo.
    pause
  )
)
