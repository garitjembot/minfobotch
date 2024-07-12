import fs from 'fs';
import archiver from 'archiver';

let handler = async (m, { conn, isOwner, command, text }) => {
  
  if (global.conn.user.jid !== conn.user.jid) return;

  conn.sendMessage(m.chat, {react: {text: '🔓', key: m.key}});

  const fake = {
    key: {
      participant: '6282220066467@s.whatsapp.net',
      remoteJid: '6282220066467@s.whatsapp.net'
    },
    message: { conversation: await style('Backup Script', 5) }
  };

  let backupZip = 'nightmare.zip';
  const output = fs.createWriteStream(backupZip);
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  output.on('close', async function() {
    let cap = 'Proses pengarsipan selesai. ' + await func.toSize(archive.pointer());
    console.log(cap);
    await conn.sendFile(nomerown + '@s.whatsapp.net', backupZip, backupZip, cap, fake);
    await m.react('✅');
  });

  archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on('error', function(err) {
    throw err;
  });
  
  archive.pipe(output);
  archive.glob('**/*', {
    ignore: ['node_modules/**', 'nightmare.zip'] // Mengecualikan file di dalam folder plugins
  });

  archive.finalize();
  await conn.delay(10000);
  await fs.unlinkSync(backupZip);
};

handler.help = ['backup'];
handler.tags = ['owner'];
handler.command = /^(backup)$/i;
handler.rowner = true;

export default handler;