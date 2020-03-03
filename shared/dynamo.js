const DynamoDB = require('aws-sdk/clients/dynamodb')
const uuid = require('uuid/v4')
const docClient = new DynamoDB.DocumentClient({convertEmptyValues: true, region: 'eu-central-1'})

const { REGISTRATIONS_TABLE } = process.env

module.exports.addRegistration = async data => {
  return docClient.put({
    TableName: REGISTRATIONS_TABLE,
    Item: {
      ...data,
      id: uuid(),
      created: new Date().toISOString()
    }
  }).promise()
}

module.exports.getRegistrations = async (items = [], lastKey = null) => {
  const data = await docClient.scan({
    TableName: REGISTRATIONS_TABLE,
    ExclusiveStartKey: lastKey,
  }).promise()

  console.log("REGISTRATIONS_TABLE", REGISTRATIONS_TABLE)
  console.log("data", data)

  const foundItems = data && data.Items
  const combinedItems = [ ...foundItems, ...items ]

  if (data.LastEvaluatedKey) {
    return getRegistrations(combinedItems, data.LastEvaluatedKey)
  }

  return combinedItems
}