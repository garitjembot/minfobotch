/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
let type = (args[0] || '').toLowerCase()

switch (type) {
case 'leaderboard': case 'lb':
	let limit = 250
	let exp = 5000
	let money = 1000
	let level = 1
	let bank = 1
	let tabungan = 0
	
	list.map(([user, data], i) => (Number(data.limit = limit, data.exp = exp, data.money = money, data.level = level, data.bank = bank, data.atm = tabungan )))
		conn.reply(m.chat, `Sukses reset daftar *Leaderboard*`, m)
		break
case 'limit':
		let lim = !args || !args[1] ? 1000 : isNumber(args[1]) ? parseInt(args[1]) : 1000
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*Berhasil direset ${lim} / user*`, m)
		break
		default:
		return m.reply('[❗] invalid command\n/reset limit 20')
		}
}
handler.help = ['limit','leaderboad'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(reset)$/i

handler.owner = true

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}