import { randomBytes } from "crypto"


const _size = process.argv[2].split(",").filter(arg => arg.startsWith("--size="))
const size = _size.length > 0 ? parseInt(_size[0].slice(7), 10) : 256

console.log(randomBytes(size).toString('base64'))
console.log("Don't forget to clear your console now")
