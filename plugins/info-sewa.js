let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix 
}) => {
const list = `⋄ SEWA MELL BOTCH ⋄
SEWA BOT SILAHKAN KLIK LINK INI
https://msha.ke/hitoritomd lalu klik nomer 8`

conn.sendFile(m.chat, 'https://telegra.ph/file/cf1c9bce36f1890e1d458.jpg', '', list, m)
}
handler.help = handler.command = ['sewa','sewabot']
handler.tags = ['main']
export default handler