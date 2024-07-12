let handler = m => m
handler.all = async function(m) {
    let setting = global.db.data.settings[this.user.jid]
    if (setting.autoBio) {
        let fitur = Object.values(plugins).filter(v => v.help).map(v => v.help).flat(1)
            let _uptime = process.uptime() * 1000
            let uptime = clockString(_uptime);
            let bio = `𝘔𝘪𝘯𝘧𝘰 𝘉𝘰𝘵𝘤𝘩 𝘈𝘬𝘵𝘪𝘧 𝘴𝘦𝘭𝘢𝘮𝘢 ${uptime}\n❲ 𝘍𝘖𝘓𝘓𝘖𝘞 𝘐𝘎 𝘔𝘐𝘕𝘍𝘖 𝘉𝘖𝘛 𝘠𝘈𝘈 : 𝘱𝘦𝘥𝘥𝘭𝘦.𝘱𝘰𝘱_`
            this.updateProfileStatus(bio).catch(_ => _)
    }
}
export default handler

function clockString(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    return [d, ' Hari ️', h, ' Jam ', m, ' Menit '].map(v => v.toString().padStart(2, 0)).join('')
}