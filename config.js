const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~dZBAGJDJ#jotvTi3TiFOCfjLkQO_byu7bpy5McWevf2sf-w898Ew'
};
