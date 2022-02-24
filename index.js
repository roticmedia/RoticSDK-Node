const RoticSDK = require("./RoticSDK")

let rotic = new RoticSDK()
rotic.token ="6a105d7f17b029f067615f47b6e6b432"
rotic.api ="6a105d7f17b029f067615f47b6e6b43285"
console.log(rotic.chat("Hello world"))