require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	

	
	try {


	    
        } catch (err) {
            console.error(err)
        }
	    

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('Mensaje')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> De'), chalk.green(m.isGroup ? pushname : 'Chat privado', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
            
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
       

        case 'google': case 'Indagar': case 'investigar': case 'rebuscar': case 'apañarse': case 'inquirir': case 'pesquisar': case 'averiguar': case 'agenciárselas': case 'despabilarse': case 'Agenciar': case 'curiosear': case 'espigar': case 'estudiar': case 'huronear': case 'informar': case 'localizar': case 'mirar': case 'rastrear': case 'reconocer': case 'recurrir': case 'revolver': case 'solicitar': case 'sondear': case 'sonsacar': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Búsqueda de Google desde: : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Titulo* : ${g.title}\n`
                teks += `⭔ *Descripcion* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'GIMAGE': case 'IMG': case 'DIMAGE': case 'IMAGEN': case 'FOTO': 
        case 'gimage': case 'img': case 'dimage': case 'imagen': case 'foto': 
        case 'Gimage': case 'Img': case 'Dimage': case 'Imagen': case 'Foto': 
        case 'descargarimagen': case 'i': case 'imagenes': case 'ver': case 'ft':
        case 'Representación': case 'idea': case 'concepto': case 'sensación':
        case 'imaginación': case 'figuración': case 'noción': case 'símbolo':
        case 'percepción': case 'vislumbre': case 'estatua': case 'modelo':
        case 'aspecto': case 'efigie': case 'reproducción': case 'apariencia':
        case 'Lámina': case 'pintura': case 'ilustración': case 'dibujo': case 'grabad':
        case 'Alegoría': case 'busto': case 'camafeo': case 'cara': case 'emblema':
        case 'encarnación': case 'ensueño': case 'escena': case 'escultura': case 'espectro':
        case 'estampa': case 'fotografía': case 'metáfora': case 'negativo':
        case 'personificación': case 'retrato': case 'sombra': case 'xerografía':
        case 'xilografía': case 'ícono': case 'ídolo': case 'visión': case 'fotografía':
        case 'retrato': case 'idea': case 'mirada': case 'percepción': case 'panorama':
        case 'visual': case 'cuadro': case 'pintura': case 'vista': case 'impresión':
        case 'reflejo': case 'panorámica': case 'perspectiva': case 'perfil':
        case 'apariencia': case 'ilustración': case 'imaginería': case 'persona':
        case 'concepto': case 'cara': case 'aspecto': case 'pensamiento':
        case 'personalidad': case 'noción': case 'foto instantánea': case
        'estilo': case 'espejo': case 'apreciación': case 'creencia': case 'perspicacia':
        case 'representación': case 'bosquejo': case 'escena': case 'sensación':
        case 'ideal': case 'concepción': case 'plano': case 'esquema': case 'situación':
        case 'marco': case 'enfoque': case 'toma': case 'pensado': case 'arte': case 'vistazo': {
            if (m.chat) {}
        if (!text) throw `Ejemplo: ${prefix + command} gatitos`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Siguiente imagen 🏞️'}, type: 1},
                    {buttonId: `gimage ${text} gif`, buttonText: {displayText: 'Buscar en Gif 🤷‍♂️'}, type: 2}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 Resultado 」-------*
*Resultado de: ${text}
*Enlace de imagen* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }

        break
	    case 'play': case 'ytplay':case 'poner': case 'reproducir':case 'buscaryt': case 'byt':
        case 'reproducir': case 'buscary': case 'video': case 'buscadoryt': case 'youtubesearch': case 'ytplay': {
                if (!text) throw `Ejemplo : ${prefix + command} Avengers`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1},
                    {buttonId: `play ${text}`, buttonText: {displayText: 'Siguiente resultado'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Titulo : ${anu.title}
⭔ ID : ${anu.videoId}
⭔ Duracion : ${anu.timestamp}
⭔ Vistas : ${anu.views}
⭔ Subido : ${anu.ago}
⭔ Autor : ${anu.author.name}
⭔ Canal : ${anu.author.url}
⭔ Descripcion : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'descargarmp3': case 'youtubeaudio': case 'youtube-audio':
        case 'descargarmusica': case 'musica': case "dmusica":  case 'yt-a-mp3':
        case 'ytaudio': case 'ytaudio': case 'ytaudio': case 'ytaudio': case 'ytaudio':
         case 'dltubaudio': case 'dltubeaudio': case 'ytm': case 'descargarlinkaudio': case 'ytl':{
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://www.youtube.com/watch?v=_lfNV5gQQqM&ab_channel=JohnOrtizOrdo%C3%B1ez 128kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('Error, el archivo pesa demasiado '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔Tamaño del archivo : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔Tipo: MP3\n⭔Calidad: ${args[1] || '320kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo':case 'dlvideo':case 'downloadvideo':case 'downloadlinkyoutube':case 'dlvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '720p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('Archivo por encima del límite '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Tirulo : ${media.title}\n⭔ Tamaño del archivo: ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusion : ${args[1] || '720p'}` }, { quoted: m })
            }
        
            break
            case 'pinterest':case 'pimage':case 'pimagen':case 'pimg':
            case 'pi':case 'pinterestimg':case 'proimg':case 'p': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔Url : '+result }, { quoted: m })
            }
            case 'wikimedia': {
                if (!text) throw 'Ingrese lo que desea buscar'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Siguiente imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Titulo : ${result.title}\n⭔ Entrada : ${result.source}\n⭔Url de imagen: ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }

	    break
        case 'tono':case 'tonollamada':case 't':case 'tllamada':case 'tn': {
		if (!text) throw `Ejemplo : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }

            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
                Velocidad de respuesta ${latensi.toFixed(4)} Segundos\n\n ${oldd - neww} _milisegundos_\n\nTiempo de ejecución: ${runtime(process.uptime())}

💻 Información de servidor\n
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_Uso de memoria de NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Uso total de la CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Uso de núcleos de CPU (${cpus.length} CPU central)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest':case 'speedt':case 'st':case 'testdevelocidad':
            case 'internet':case 'señal':case 'ivps':case 'speed': {
            m.reply('Iniciando test de velocidad')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python3 speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }

            break
            case 'ayuda': case 'menu': case 'help': case '?': {
                anu = `┌──⭓ *Comandos de uso*

┌──⭓ *Descargas*
│
│ *Descargar MP3 de YouTube*
│⭔ ${prefix}ytmp3 [url]
│
│ *Descargar Video de YouTube*
│⭔ ${prefix}ytmp4 [url]
│
└───────⭓

┌──⭓ *Buscar y descargar*
│
│ *Buscar videos en YouTube*
│⭔ ${prefix}play
│
│ *Buscar en Google*
│⭔ ${prefix}google
│
│*Buscar imágenes en Google*
│⭔ ${prefix}gimage
│
│ *Buscar imágenes en Pinterest*
│⭔ ${prefix}pinterest
│
│ *Buscar imágenes en Wikipedia*
│⭔ ${prefix}wikimedia]
│
│ *Descargar tono de llamada*
│⭔ ${prefix}tono
│
└───────⭓
┌───────⭓ *Velocidad del VPS*
│ *Test de velocidad*
│⭔ ${prefix}speedtest
│
│ *Info de servidor*
│⭔ ${prefix}ping
└───────⭓`
                let btn = [{

                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                        } else if (setbot.templateLocation) {
                        hisoka.send5ButLoc(m.chat, anu, hioka.user.name, global.thumb, btn)
                        }
                     }


		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}

