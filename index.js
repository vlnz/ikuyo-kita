require("dotenv").config();
const Ikuyokita = require("./structures/ikuyokita");
const { exec } = require("child_process");
const client = new Ikuyokita();

if(process.env.REPL_ID){
    console.log(
        "Replit system detect, 🎁 `unhandledRejection` event listener"
    );
    process.on("unhandledRejection", (reason,promise) => {
        promise.catch((err)=>{
            if (err.status === 429) {
                exec("kill all");
            }
        });
    });
}

client.build();

module.exports = client;