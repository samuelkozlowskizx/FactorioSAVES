#!/bin/bash

echo "Instalando e iniciando o WowClient..."

# Verifica se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "Node.js não encontrado. Instalando..."
    
    # Detecta o gerenciador de pacotes
    if command -v apt &> /dev/null; then
        # Debian/Ubuntu
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif command -v dnf &> /dev/null; then
        # Fedora
        sudo dnf install -y nodejs
    elif command -v pacman &> /dev/null; then
        # Arch Linux
        sudo pacman -S nodejs npm --noconfirm
    elif command -v zypper &> /dev/null; then
        # openSUSE
        sudo zypper install -y nodejs20
    else
        echo "Sistema operacional não suportado"
        exit 1
    fi
fi

# Verifica se o Git está instalado
if ! command -v git &> /dev/null; then
    echo "Git não encontrado. Instalando..."
    
    if command -v apt &> /dev/null; then
        sudo apt-get install -y git
    elif command -v dnf &> /dev/null; then
        sudo dnf install -y git
    elif command -v pacman &> /dev/null; then
        sudo pacman -S git --noconfirm
    elif command -v zypper &> /dev/null; then
        sudo zypper install -y git
    else
        echo "Sistema operacional não suportado"
        exit 1
    fi
fi

# Dá permissão de execução ao script
chmod +x install-and-run.sh

# Clona o repositório (substitua pela URL do seu repositório)
git clone https://github.com/seu-usuario/wow-client.git .

# Instala as dependências e inicia o projeto
npm install
npm run dev