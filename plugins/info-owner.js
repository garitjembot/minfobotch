/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

// FAKE KONTAK
 const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: wm,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: namebot
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
	    	const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(global.nomerown + '@s.whatsapp.net')}\nFN:${await conn.getName(global.nomerown + '@s.whatsapp.net')}\nitem1.TEL;waid=${global.nomerown}:${global.nomerown}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:xiecump@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/peddle.pop_\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nitem5.TEL;Waid=Hobi gw main motor selain itu gatau yaa paling ngerusakin motor\nitem5.X-ABLabel:IM Wang Xin Ryu\nEND:VCARD`
	    
	
	const msg = await conn.sendMessage(m.chat, {contacts: { displayName: global.nameown, contacts: [{ vcard }] }, contextInfo: {
      externalAdReply: {
      title: await style(command, 1),
      body: await style('OWNER MINFOBOTCH', 1),
      thumbnail: await conn.resize('https://telegra.ph/file/85965f8427c019fb64a29.jpg', 300, 180),
      sourceUrl: `https://whatsapp.com/channel/0029VaZ0TVEHQbRwjvl0Gr22`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, { quoted: repPy})
    

  await conn.reply(m.chat, `Bang ${name} , tuh nomer owner gw`, msg)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler