const Request = require("./Request")

class RoticSDK{

    token;
    api;
    unique_token;

    chat(data, unique_token = null) {
    try {
        if (this.api != null && this.token != null) {

            let request = new Request()
            return request.MakeRequest(this.token, this.api, data, this.unique_token==null?unique_token:this.unique_token)

        } else {
            return {
                "provider": {
                    "website": "https://rotic.ir",
                    "source": "Rotic Node.JS SDK"
                },
                "status": false,
                "response": [],
                "options": {},
                "error": {
                    "code": 207,
                    "message": "Token or Api token did not valueted!"
                }
            }
        }
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

module.exports = RoticSDK