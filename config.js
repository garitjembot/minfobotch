/*
nyari apa?
ubah aja di folder function/settings/settings.js
*/
import './function/settings/settings.js'
import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

// Owner
global.owner = [
['6285881668165', 'Wang Xin Ryu', true]
]
global.mods = []
global.prems = []
global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Info
global.nomerbot = '6285714779871'
global.pairingNumber = '6285714779871'
global.nomorwa = '6285881668165'
global.nameown = 'Wang Xin Ryu'
global.nomerown = '6285881668165'
global.packname = 'By Ig : peddle.pop_'
global.author = '© ig : peddle.pop_'
global.namebot = '𝘔𝘐𝘕𝘍𝘖 𝘉𝘖𝘛𝘊𝘏'
global.wm = '𝘉𝘠 : 𝘛𝘌𝘎𝘈𝘙
global.stickpack = '𝘉𝘠 𝘛𝘌𝘎4𝘙'
global.stickauth = '© 𝘐𝘎 : 𝘱𝘦𝘥𝘥𝘭𝘦.𝘱𝘰𝘱_'

// Thumbnail 
global.ppKosong = 'https://i.ibb.co/3Fh9V6p/avatar-contact.png'
global.didyou = 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg'
global.rulesBot = 'https://telegra.ph/file/afcfa712bd09f4fcf027a.jpg'
global.thumbnail = 'https://telegra.ph/file/7371a1a45af362dbe9e86.jpg'
global.thumb = 'https://telegra.ph/file/7371a1a45af362dbe9e86.jpg'
global.logo = 'https://telegra.ph/file/3e2027d3fd27a3db9f9f8.jpg'
global.unReg = 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg'
global.registrasi = 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg'
global.confess = 'https://telegra.ph/file/03cabea082a122abfa5be.jpg'
global.access = 'https://telegra.ph/file/5c35d4a180b9074a9f11b.jpg'
global.tqto = 'https://telegra.ph/file/221aba241e6ededad0fd5.jpg'
global.spotify = 'https://telegra.ph/file/d888041549c7444f1212b.jpg'
global.weather = 'https://telegra.ph/file/5b35ba4babe5e31595516.jpg'
global.gempaUrl = 'https://telegra.ph/file/03e70dd45a9dc628d84c9.jpg'
global.akses = 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg'
global.wel = 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4'
global.good = 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4'

// Sosmed
global.sig = 'https://instagram.com/peddle.pop_'
global.sgh = 'https://github.com/kontolkejepit'
global.sgc = 'https://whatsapp.com/channel/0029VaZ0TVEHQbRwjvl0Gr22'
// payment 
global.pgopay = '088212717003'
global.wait = 'b-entar ngab😂'
global.eror = 'hehehe error ni'
global.uptime = 'u1926789-7d5be0f640d2beef922590f7'
global.xyro = 'vRFLiyLPWu'
global.lol = 'GataDios'
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})