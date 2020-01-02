const DynamoDB = require('aws-sdk/clients/dynamodb')
const uuid = require('uuid/v4')
const docClient = new DynamoDB.DocumentClient({convertEmptyValues: true, region: 'eu-central-1'})

const { REGISTRATIONS_TABLE } = process.env

module.exports.addRegistration = async data => {
  return docClient.put({
    TableName: REGISTRATIONS_TABLE,
    Item: {
      ...data,
      id: uuid()
    }
  }).promise()
}
