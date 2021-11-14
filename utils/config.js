require('dotenv').config()

const PORT = process.env.PORT || 3000
const REGION = process.env.REGION || "us-east-2"
const ENDPOINT = process.env.ENDPOINT || "http://localhost:8000"

module.exports = {
    PORT,
    REGION,
    ENDPOINT
}