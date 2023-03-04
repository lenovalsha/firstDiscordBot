const { Client, IntentsBitField } = require("discord.js");
const https = require("https"); //no need to install anything
require('dotenv').config(); //for our token


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]

})
// client.on('messageCreate',(message)=>{
//     const url = `https://v2.jokeapi.dev/joke/any?contains=${message}`;
//     var sendJoke = false;

// https.get(url,  (response) => {
//     response.on("data", (data) => {
//         const jokeData = JSON.parse(data);
//         const jokecontent = jokeData.joke;
//         if(message.author.bot)//if the author is a bot
//         {
//             return;
//         }
        
//             message.reply(jokecontent);
//             sendJoke = true;

    
// })
   
// })
// })

//event listeners           
client.on('ready', (c)=> {
    console.log("The bot is ready")
    console.log(`${c.user.tag}`)//bots username + tag
})
//new event listener
client.on('interactionCreate',(interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'joke')
    {
        const url = `https://v2.jokeapi.dev/joke/any`;

    https.get(url,  (response) => {
    response.on("data", (data) => {
        const jokeData = JSON.parse(data);
        const jokecontent = jokeData.joke;

            interaction.reply(jokecontent);
            sendJoke = true;


        })
        })
    }
    if(interaction.commandName === 'chuck')
    {
        const url = 'https://api.chucknorris.io/jokes/random';
        https.get(url,  (response) => {
            response.on("data", (data) => {
                const DATA = JSON.parse(data);
                const content = DATA.value;
                    interaction.reply(content);
                })
                })
    }
    if(interaction.commandName === 'trump')
    {
        const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random/';
        https.get(url,  (response) => {
            response.on("data", (data) => {
                const DATA = JSON.parse(data);
                const content = DATA.message;
                    interaction.reply(content);
                })
                })
    }
})

client.login(process.env.TOKEN);
