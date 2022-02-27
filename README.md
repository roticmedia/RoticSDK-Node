# RoticSDK-Node
Node.js SDK let you call Rotic Intelligent Solutions API

For Chat:
```
const rotic = require("./RoticSDK")

rotic.token ="{YOUR_TOKEN}"
rotic.api ="{YOUR_API_TOKEN}"
rotic.unique_token ="{Random_Generated_String}"

rotic.chat("Hello World").then((data) => {
    console.log(data)
});
```