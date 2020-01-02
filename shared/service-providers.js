const DynamoDB = require('aws-sdk/clients/dynamodb')
const docClient = new DynamoDB.DocumentClient({convertEmptyValues: true, region: 'eu-central-1'})

const { SERVICE_PROVIDERS_TABLE } = process.env

module.exports.getServiceProviders = async () => {
  const data = await docClient.scan({
    TableName: SERVICE_PROVIDERS_TABLE,
  }).promise()

  return data && data.Items
}

module.exports.getServiceProviderById = async id => {
  const data = await docClient.get({
    TableName: SERVICE_PROVIDERS_TABLE,
    Key: { id }
  }).promise()

  return data && data.Item
}