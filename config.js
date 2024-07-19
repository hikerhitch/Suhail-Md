const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_13_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDUzLFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVVBCenZaMGZqVG92NGxPeUxRenhZdVVvMWYralZXRU9oRFBVV0lrRTNTcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieXlsTVpBb3hRX2lxUFZZTlVSNFJzUVwiLFxuICBcInBob25lSWRcIjogXCJjNmZjMWIzOS05MTY2LTQyNGItODMzNC1mMWY5YmRlMTQwMmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTQ0LFxuICAgICAgMjAwLFxuICAgICAgMjUwLFxuICAgICAgMjIxLFxuICAgICAgMjM3LFxuICAgICAgODksXG4gICAgICAxMTEsXG4gICAgICAyMjYsXG4gICAgICAxOSxcbiAgICAgIDQwLFxuICAgICAgMTc0LFxuICAgICAgMTcxLFxuICAgICAgNjksXG4gICAgICAxMzQsXG4gICAgICAyMjEsXG4gICAgICAxNjQsXG4gICAgICAyNDQsXG4gICAgICAxMzMsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMjEyLFxuICAgICAgMjUzLFxuICAgICAgMjEwLFxuICAgICAgNTksXG4gICAgICAxODksXG4gICAgICAzNCxcbiAgICAgIDE0NSxcbiAgICAgIDIxNCxcbiAgICAgIDkyLFxuICAgICAgMzcsXG4gICAgICAxMTgsXG4gICAgICAyMzgsXG4gICAgICAyMTMsXG4gICAgICAxMzcsXG4gICAgICAyMjgsXG4gICAgICAyMDQsXG4gICAgICA3NyxcbiAgICAgIDEyMSxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDQTNQQ0o0VlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ4NzEwNzk5OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAxNjUwOTgzODU0NzM6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUdNbVowRkVLYTU0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJac294TVM5TWRweUkyeTZ5RkZUaDA5Y3lNaXVsWENPRmJGV0lxcEQrU0M0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIld2Q0xoa0d5RmFKb2w0RnFlOUFVK3dVTGdzdzFYajkyaHR2UFFVL3N3WlhuL3RnWXZGMjJTTGRmQ2h1b1J4RUtiLzV6L0JRdUJxSmJ0Zm5jY3pqWUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInR1ekJiM0xtU294TTRSbDhlUXpndUQvNDlTRlRGWmZQTGRhZDUzZzRZcDY0NW1EWE5vSkpaaDJqQzFIUTJDWTJCN0FhbFRackpRMFNGNHhCaUc3ekN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0ODcxMDc5OToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI5Mzk5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZzalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnNqLmpzb24iOiAie1wia2V5RGF0YVwiOlwieUE0eStUVHFTYSsvZEliTE9MYXF2bTdVYTVUWXlJaXU2Yy80ZkxtTjNmaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDAzNDA1ODIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
