const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~sZQDHDqT#QBTbxBKvtoiJe1KX1vzpgIye9HVia9u4y27oKxMN3vs'
};
