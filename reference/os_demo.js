const os = require("os");
const { uptime } = require("process");

//Platform
console.log(os.platform());

//CPU Arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//CPU Free memory
console.log(os.freemem());

//ToTal Memory
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Up time
console.log(uptime());
