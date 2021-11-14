const config = require('./utils/config')

const AWS = require("aws-sdk")

const AWSConfig = {
    region: config.REGION,
    endpoint: config.ENDPOINT
}

AWS.config.update(AWSConfig)

const DynamoDB = new AWS.DynamoDB.DocumentClient()

module.exports = DynamoDB