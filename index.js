const axios = require("axios")

class Spotify {
    async Download(url) {
        try {
        const response = (await axios.get("https://api.fabdl.com/spotify/get?url=" + url, {
            headers: {
                origin:
                    "https://spotifymp3.com",
                referer:
                    "https://spotifymp3.com/",
            }
        })).data
        return response.result
    } catch (e) {        
        return e.message
    }
}
    async getTask(gid, id) {
        try {
        const response = (await axios.get("https://api.fabdl.com/spotify/mp3-convert-task/" + gid + "/" + id, {
            headers: {
                origin:
                    "https://spotifymp3.com",
                referer:
                    "https://spotifymp3.com/",
            }
        })).data
        return 'https://api.fabdl.com' + response.result.download_url
    } catch (e) {        
        return e.message
    }
}
}

async function spotify(url) {
    const client = new Spotify()
    const { gid, id } = await client.Download(url)
    const result = await client.getTask(gid, id)
    console.log(result)
    return result
}

// spotify("https://open.spotify.com/track/7Lm4S2P0MHwBktcdNILLQA?si=3095c979c84e4318")
module.exports = { spotify }
