@echo off
echo Instalando e iniciando o WowClient...

:: Verifica se o Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js nao encontrado. Baixando e instalando...
    curl -o node-installer.msi https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi
    start /wait node-installer.msi /quiet
    del node-installer.msi
)

:: Verifica se o Git está instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git nao encontrado. Baixando e instalando...
    curl -o git-installer.exe https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe
    start /wait git-installer.exe /VERYSILENT /NORESTART
    del git-installer.exe
)

:: Clona o repositório (substitua pela URL do seu repositório)
git clone https://github.com/seu-usuario/wow-client.git .

:: Instala as dependências e inicia o projeto
call npm install
call npm run dev