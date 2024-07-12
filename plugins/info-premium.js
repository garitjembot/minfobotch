let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix 
}) => {
const list = `⋄ ᴘʀᴇᴍɪᴜᴍ ᴍᴇʟʟ ʙᴏᴛᴄʜ ⋄
ʟɪsᴛ ᴘʀᴇᴍɪᴜᴍ ᴀᴅᴀ ᴅɪ ɴᴏᴍᴇʀ 8
https://msha.ke/hitoritomd
`

conn.sendThumb(m.chat, list, 'https://telegra.ph/file/2e3cd79eb99c4b86f27a8.jpg', m)
}
handler.help = handler.command = ['premium','prem']
handler.tags = ['main']
export default handler