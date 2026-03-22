const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  //====================menu=================================
  MENUMSG: function (pushname, config) {
    return `
> [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ♠ 𝙾𝚠𝚗𝚎𝚛  : ${config.OWNER_NAME}
> ♠ 𝙼𝚎𝚖    : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
> ==========================`.trim();
  },
  //======================download============================
  TIKTOK: function (datas,pushname, q) {
    return `
> [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ T I K T O K  D L ]
> ========================
> * Title  * ${datas.title}
> * Author * ${datas.author}
> * URL    * ${q}
> ========================`.trim();
  },
  FACEBOOK: function (title,pushname, q) {
    return `
> [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ F A C E B O O K  D L ]
> =======================
> *TITLE* - ${title}
> *Url*   - ${q} 
> =======================`.trim();
  },
  TWITTER: function (videoDescription, videoTitle,pushname) {
    return `
${config.BOTNAME || "> [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]"}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ T W I T T E R  D L ]
> =======================
> *Desc*  : ${videoDescription || "N/A"}
> *Title* : ${videoTitle}
> =======================`.trim();
  },
  DIRECT: function(pushname,fileName,fileSize,fileType){
    return `
"> [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*      
> [ D I R E C T  D L ]
> =======================        
> *File Name:* ${fileName}
> *File Size:* ${fileSize}
> *File Type:* ${fileType}
> =======================`
  },
  MEDIAFIRE: function(pushname,data,fileSize){
    return `
> [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ M E D I A F I R A ]
> ======================
> *File Name:* ${data.title}
> *File Size:* ${fileSize}
> ======================`
  },
  APK: function(pushname,data,correctsize) {
    return `
> [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ A P K  D L ]
> =======================
> *Nᴀᴍᴇ :* ${data.datalist.list[0].name}
> *Sɪᴢᴇ :* ${correctsize}MB
> *Pᴀᴄᴋᴀɢᴇ :* ${data.datalist.list[0].package}
> *Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* ${data.datalist.list[0].updated}
> *Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ${data.datalist.list[0].developer.name}
> =======================`
  },
  SPOTIFY: function(pushname,item) {
    return `
${config.BOTNAME || "> [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]"}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ S P O T I F Y  D L ]
> =====================
> *Title*  :${item.trackName}
> *Artist* : ${item.artistName}
> *Album*  : ${item.albumName}
> *Duration*: ${item.duration}
> *URL*: [Click Here](${item.externalUrl})
> =====================`
  },
  //=================main==================================
  IMG: "https://i.ibb.co/VWy8DK06/Whats-App-Image-2025-12-09-at-17-38-33-fd4d4ecd.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  MOVIETITLE: "> *『⚡ 𝗖𝗛𝗔𝗠𝗜 𝑪𝑰𝑵𝑬𝑴𝑨 』*",
  ALIVEMSG: function (config, pushname, runtime) {
    return `
    > [⚡ 𝗖𝗛𝗔𝗠𝗜 〽ᴅ ⚡]
    > 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
    > [  A  L  I  V  E  ]
    > =======================
    > ✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!
    >>>>>>>>>>>>>>>>>>>>>>>>>
    ┏━━━━❮𝑻𝑶𝑫𝑎𝒚❯━━━━
    ┃ *${new Date().toLocaleDateString("en-GB", {timeZone: "Asia/Colombo",})}*
    ┃ *${new Date().toLocaleTimeString("en-GB", {timeZone: "Asia/Colombo",})}*
    ┗━━━━━━━━━━━━━━━
    >>>>>>>>>>>>>>>>>>>>>>>>>
    ┏━━━━❮𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀❯━━━
    ┃𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    > ======================`.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, config,oce) {
    return `
> 🛡️ *𝘼𝙙𝙢𝙞𝙣:* ⚡ CHAMIYA ⚡`.trim();
  },
  SINHALASUB: function (movieData,oce) {
    return `
    
☘️ *𝗧ɪᴛʟᴇ : _${oce}${movieData.title}${oce}_*

▫️📝 *Tagline ➟* _${oce}${movieData.metadata.tagline || "N/A"}${oce}_
▫️🥇 *𝗜ᴍᴅʙ 𝗩ᴏᴛᴇꜱ ➟* _${oce}${movieData.metadata.imdbRating || "N/A"}${oce}_
▫️📅 *𝗥ᴇʟᴇᴀꜱᴇ 𝗬ᴇᴀʀ ➟* _${oce}${movieData.metadata.year}${oce}_
▫️🌎 *𝗖ᴏᴜɴᴛʀʏ ➟* _${oce}${movieData.metadata.country}${oce}_
▫️🎭 *𝗚ᴇɴʀᴇꜱ ➟* _${oce}${movieData.metadata.genres.join(", ")}${oce}_
▫️⏳ *𝗗ᴜʀᴀᴛɪᴏɴ ➟* _${oce}${movieData.metadata.duration}${oce}_
▫️🔠 *𝗟ᴀɴɢᴜᴀɢᴇ ➟* _${oce}${movieData.metadata.language}${oce}_
▫️👨‍💻 *𝗦ᴜʙᴛɪᴛʟᴇ 𝗕ʏ ➟* _${oce}${movieData.metadata.subtitleAuthor}${oce}_
▫️🌐 *𝗦ᴜʙᴛɪᴛʟᴇ 𝗦ɪᴛᴇ ➟* _${oce}${movieData.metadata.subtitleSite}${oce}_

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

*𝙹𝙾𝙸𝙽 𝚄𝚂 ➟* https://whatsapp.com/channel/0029VbBG8i6C6ZvZQZN9TB0j/107

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

▫️📌 *𝗗ᴇꜱᴄʀɪᴘᴛɪᴏɴ ➟*  
> ${oce}_${movieData.description}_${oce}`.trim();
  },
  CINESUBZ: function (title, metadata, rating,tagline,genres,quality,description,oce) {
    return `
    
☘️ *𝗧ɪᴛʟᴇ :* _${oce}${title}${oce}_

▫️📝 *Tagline ➟* _${oce}${tagline || "N/A"}${oce}_
▫️🥇 *𝗜ᴍᴅʙ 𝗩ᴏᴛᴇꜱ ➟* _${oce}${typeof rating === 'object' ? rating.value : rating}${oce}_
▫️📅 *𝗥ᴇʟᴇᴀꜱᴇ 𝗬ᴇᴀʀ ➟* _${oce}${metadata?.year || "N/A"}${oce}_
▫️🌎 *𝗖ᴏᴜɴᴛʀʏ ➟* _${oce}${metadata?.country || "N/A"}${oce}_
▫️🎭 *𝗚ᴇɴʀᴇꜱ ➟* _${oce}${genres}${oce}_
▫️⏳ *𝗗ᴜʀᴀᴛɪᴏɴ ➟* _${oce}${metadata?.runtime || metadata?.duration || "N/A"}${oce}_
▫️🔠 *𝗟ᴀɴɢᴜᴀɢᴇ ➟* _${oce}${metadata?.language || "English"}${oce}_
▫️👨‍💻 *𝗦ᴜʙᴛɪᴛʟᴇ 𝗕ʏ ➟* _${oce}${metadata?.subtitleBy || "N/A"}${oce}_
▫️📊 *𝗤ᴜᴀʟɪᴛʏ ➟* _${oce}${quality}${oce}_

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

*𝙹𝙾𝙸𝙽 𝚄𝚂 ➟* https://whatsapp.com/channel/0029VbBG8i6C6ZvZQZN9TB0j/107

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

▫️📌 *𝗗ᴇꜱᴄʀɪᴘᴛɪᴏɴ ➟*  
> ${oce}_${description || "No description available."}_${oce} `.trim();
  },
  CINETVSHOW: function (episodeInfo,quality,oce) {
    return `
> *『 𝙿𝙸𝙽𝙺 𝙻𝙾𝚃𝚄𝚂 𝙲𝙸𝙽𝙴𝙼𝙰 』*
> =====================
> 📺 *Series:* ${oce}${episodeInfo.series || "N/A"}${oce}
> 🎬 *Episode:* ${oce}${episodeInfo.seasonEpisode || "N/A"}${oce}
> 🏷️ *Title:* ${oce}${episodeInfo.episodeTitle || "N/A"}${oce}
> 📅 *Date:* ${oce}${episodeInfo.date || "N/A"}${oce}
> ⭐ *Rating:* ${oce}${episodeInfo.rating?.value || "N/A"}/10${oce}
> 📊 *Quality:* ${oce}${quality || "480p"}${oce}
> =====================
> 📌 *Episode Info:*
> ${oce}_${episodeInfo.title || "No additional information available."}_${oce}`.trim();
  },
  CINETVSHOWALLDL: function (seriesTitle,rating,metadata,genres,movieData,oce) {
    return `
> *『⚡ 𝙿𝙸𝙽𝙺 𝙻𝙾𝚃𝚄𝚂 𝙲𝙸𝙽𝙴𝙼𝙰 』*
> =====================
> 🎬 *Series:* ${oce}${seriesTitle}${oce}
> ⭐ *IMDb:* ${oce}${rating}${oce}
> 🗓️ *Year:* ${oce}${metadata.year || "N/A"}${oce}
> 🎭 *Genres:* ${oce}${genres}${oce}
> 📊 *Seasons:* ${oce}${movieData.seasons.length}${oce}
> 🌐 *Language:* ${oce}${metadata.language || "English"}${oce}
> =====================
> 📌 *Series Description:*  
> ${oce}_${movieData.description || "No description available."}_${oce}`.trim();
  },
  //=====================youtube===========================================
  SONG: function (data,pushname,oce) {
    return `
> [⚡ 𝗫Ｐ𝗥Ｏ𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ${oce}[  S  O  N  G    D  L  ]${oce}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> 🎶 *Title:* ${data.title}
> ⏱️ *Duration:* ${data.timestamp}
> 👁️ *Views:* ${data.views}
> 📅 *Uploaded On:* ${data.ago}
> 🔗 *Link:* ${data.url}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> =========================`.trim();
  },
  YTMP3: function (data) {
    return `
> [⚡ 𝗫Ｐ𝗥Ｏ𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]
> ==========================
> ➥ *Title:* ${data.title} 
> ➥ *Duration:* ${data.timestamp} 
> ➥ *Uploaded On:* ${data.ago} 
> ➥ *Link:* ${data.url}
> ==========================
        `.trim();
  },
  VIDEO: function (data,pushname,oce) {
    return  `
> [⚡ 𝗫Ｐ𝗥Ｏ𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ${oce}[  Y O U T U B E    D  L  ]${oce}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> 🎶 *Title:* ${data.title}
> ⏱️ *Duration:* ${data.timestamp}
> 👁️ *Views:* ${data.views}
> 📅 *Uploaded On:* ${data.ago}
> 🔗 *Link:* ${data.url}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> =========================`.trim();
  },
  YTMP4: function (data) {
    return `
> [⚡ 𝗫Ｐ𝗥Ｏ𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]
> ==========================
> ➥ *Title:* ${data.title} 
> ➥ *Duration:* ${data.timestamp} 
> ➥ *Uploaded On:* ${data.ago} 
> ➥ *Link:* ${data.url}
> ==========================
        `.trim();
  },
};
