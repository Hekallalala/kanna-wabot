let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 089518527362
│┝‷✧ *Dana:* 089518527362
│┝‷✧ *Linkaja:* 089518527362
│┝‷✧ *Gopay:* 089518527362
│┝‷✧ *Ovo:* 089518527362
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6289518527362?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm