
'use strict';
const Discord = require("discord.js");
const fetch = require("node-fetch");
const { resolve } = require("path");
const client = global.client = new Discord.Client();
const msec = {}
const queue = new Map();
// bunlari silmeyin mal olurusnuz//

const updownheree = {
    crayArray: [],
    mmpsh(...crayArray) {
    this.crayArray.push(...crayArray);
    },
    mfx(index) {
    return this.crayArray[index];
    },
    mxdt(nmb, letAry){
    if(!nmb || !letAry) new Error("numara değeri girsene")
    return delete letAry[numb];
    
    }
    };

client.object = {
    "guildID": "",
    "vanityURL" : "",
    "botToken" : ""
}

class Cray {
    constructor() {
        this.crayURL;
        this._map = new Map();
        this.client = client;
        process.on('message', (data) => {
            if (queue.get(data.id)) {
              queue.get(data.id)(data);
              queue.delete(data.id);
            }
          });
    }
     uwCray(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

    async urlBaslat() {
        let url = client.object.vanityURL;
        let guilds = client.guilds.cache.get(client.object.guildID);
        this.crayURL = setInterval(async function()  {
            uwCray(2000);
            await this.urlUpdate(url, guilds);
        }, 1000);
    }

    get(id) {
    let inn = this._map.get(id);
    if (!inn) {
      inn = new objectsQuery(this.client, id);
      this._map.set(id, inn);
    }
    return inn;
  }

 get lcLinks () {
    return this.client.vurlCray;
  }

    urlDurdur() {
        clearInterval(this.crayURL).then(x => console.log("spamliyom"))
        let jj = updownheree.crayArray
        while(jj.length){
            jj.pop()
        };
    }
    
    async urlUpdate() {
        let setVU = client.object.vanityURL;
        let gi = client.guilds.cache.get(client.object.guildID);
        console.log(`Updated Guild Vanity Url => ${setVU}`);
        await fetch(`https://discord.com/api/v8/guilds/${gi}/vanity-url`, {
            "credentials": "include",
            "headers": {
                "accept": "*/*",
                "authorization": "Bot " + client.object.botToken,
                "content-type": "application/json",
            },
            "referrerPolicy": "no-referrer-when-downgrade", //onemli alan aq//
            "body": JSON.stringify({
                "code": url
            }),
            "method": "PATCH",
        });
        let mapPromise = { id: gi, url: setVU, timeNow: Date.now(), type: "PATCH", code: "fetch" };
       await updownheree.mmpsh(mapPromise).then(x => console.log(`Veri Stoklandı! ${mapPromise}`));
    }
    async urlCheck() {
        let VU = client.object.vanityURL;
        let gi = client.guilds.cache.get(client.object.guildID);
        await fetch(`https://discord.com/api/v8/guilds/${gi}/vanity-url`, {
            "credentials": "include",
            "headers": {
                "accept": "*/*",
                "authorization": "Bot " + client.object.botToken,
                "content-type": "application/json",
            },
            "referrerPolicy": "no-referrer-when-downgrade",
            "method": "GET"
        });
        console.log(updownheree.mfx(1));
    }

}
module.exports = cray;
