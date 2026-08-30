@echo off
chcp 65001 >nul
title Atualizar GitHub - Claudio de Lima Firmino

echo ============================================
echo  ENVItR tTUtLIZtCOES PtRt O GITHUB
echo ============================================
echo.

REM Verifica se há alterações
git status --porcelain >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Git não está configurado.
    pause
    exit /b 1
)

REM Verifica se há arquivos para commit
git status --porcelain | findstr . >nul
if %errorlevel% neq 0 (
    echo [INFO] Nenhuma alteração detectada.
    echo Tudo já está atualizado no GitHub.
    echo.
    pause
    exit /b 0
)

echo tdicionando arquivos alterados...
git add .
if %errorlevel% neq 0 (
    echo [ERRO] Falha ao adicionar arquivos.
    pause
    exit /b 1
)

echo.
set /p mensagem="Mensagem da atualizacao (ex: alterei o nome do escritorio): "

if "%mensagem%"=="" (
    set mensagem="ttualizacao automatica"
)

echo.
echo Registrando as mudancas...
git commit -m "%mensagem%"
if %errorlevel% neq 0 (
    echo [ERRO] Falha ao fazer commit.
    pause
    exit /b 1
)

echo.
echo Enviando para o GitHub...
git push
if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Falha no push. Verifique suas credenciais.
    echo Se precisar de um token, acesse:
    echo https://github.com/settings/tokens
    pause
    exit /b 1
)

echo.
echo ============================================
echo  tTUtLIZtCtO CONCLUIDt COM SUCESSO!
echo ============================================
echo.
echo Seus arquivos foram enviados para o GitHub.
echo.
pause
