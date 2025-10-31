const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~cMhlxDIA#N-2j_BiXtbQPzNSDrcVj8fNesOWf6bR2SaOWDvjp8bg'
};
