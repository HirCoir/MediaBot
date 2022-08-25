# MediaBot

Mediabot es un ChatBot de Whatsapp  basado en el proyecto  **[Baileys](https://github.com/adiwajshing/Baileys)**.  A su vez este proyecto es base de [otro](https://github.com/DikaArdnt/Hisoka-Morou) el cuál solo se dejó las características que aún funcionan.
## Características
° Reproducir videos de YouTube

° Descargar MP3 y Videos de YouTube

° Navegar en Google

° Navegar/Descargar en Google Images
° Descargar de Pinterest
° Descargar imagenes de Wikimedia
° Descargar Tono de llamada
° SpeedTest
° Ver información de servidor

## Instalación
### Instalación Ubuntu, Debian, Devuan, Rasp.

    # Instalamos dependencias.
    sudo apt install -y git ffmpeg imagemagick webp nodejs npm
    #Clonamos el repo.
    git clone https://github.com/HirCoir/MediaBot
    cd MediaBot
    npm install
    # Ejecutamos el Bot
    npm start
## Instalar usando Docker.
### 

    # Clonamos el repo.
    git clone https://github.com/HirCoir/MediaBot
    cd MediaBot
    # Construimos el contenedor
    docker build -t mediabot .
    # Iniciamos el contenedor
    docker run -d -it --name=mediabot restart=always mediabot
## Iniciar el contenedor con límite de RAM

    docker run -d -it --name=mediabot restart=always --memory=500mb mediabot
