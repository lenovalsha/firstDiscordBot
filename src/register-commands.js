require('dotenv').config();
const { REST} =  require('@discordjs/rest')
const { Routes} =  require('discord-api-types/v9')



const commands = [
    {
        name: 'joke',
        description: 'random joke generator',
    },
    {
        name: 'chuck',
        description: 'random Chuck norris facts',
    },
    {
        name: 'trump',
        description: 'things trump has said',
    },
    
];
const rest = new REST({version: '9'}).setToken(process.env.TOKEN);

(async () =>{
    try{
        console.log("registering slash commands...")
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
            {
                body: commands
            }
        )
        console.log(" slash commands were registered...")
    }catch(error){
console.log(`there was an erros: ${error}`)
    }
})()