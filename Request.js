const axios = require('axios');

class Request {

    RandomString(length) {
        return Buffer.from(Math.random().toString()).toString("base64").substr(10, length);
    }


    async MakeRequest(token, api, data, unique_token = null, uri = null) {

        const AiUri = "https://api.rotic.ir/v2/services/" + token + "/ai";
        try {
            let form = JSON.stringify({
                api: api,
                data: data,
                unique_token: unique_token == null ? this.RandomString(10) : unique_token,
            })
            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: 10,
            }

            let value

            return await axios.post(AiUri, form, config).then(function (res) {
                value = res.data;
                return res.data;
            }).catch(function (error) {
                value = error;
                return error;
            });

        } catch (e) {
            return {
                "provider": {
                    "website": "https://rotic.ir",
                    "source": "Rotic Node.JS SDK"
                },
                "status": false,
                "response": [],
                "options": {},
                "error": {
                    "code": e.code,
                    "message": e.message
                }
            }
        }
    }
}

module.exports = Request