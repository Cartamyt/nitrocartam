const Discord = require('discord.js');
const client = new Discord.Client();

const token = "ODAyMjM4MjMxNzQ3NDkzOTY4.YAsUkw.FtWzp3OTD9MgUK6dxrRAdginwyo";

client.on('ready', () =>{
    console.log('gen bot is now online')
});
client.on('message', message =>{
    if (message.content === '.gen nitro'){
        message.author.send('Nitro generate by Cartam :');
    };
});
client.on('message', message =>{
if (!message.guild) return;
if (message.content === '.gen nitro'){
    var strig = `https://discord.gift/Gp4LcVQ7QBCCAwDC
    https://discord.gift/CZrxLrnLzuBAobQN
    https://discord.gift/TvgJgLM8pep7z3Pr
    https://discord.gift/TvgJgLM8pep7z3P
    https://discord.gift/TvgJgLM8pep7z3Pr
    https://discord.gift/Z7fkjBEYHHlt0ApH
    https://discord.gift/BvQJjNTG98ueM3ql
    https://discord.gift/RAMVf2LbVy9x9P9p
    https://discord.gift/a5pZJzUQxim4eOkn
    https://discord.gift/lpRrabZrG1I3z8Jb
    https://discord.gift/xrDwvkqTdtWZPjzm`
    var words = strig.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
});
client.login(process.env.TOKEN);