const AWS = require('aws-sdk')
const ses = new AWS.SES({ region: 'eu-west-1'})

export const sendRegistrationEmail = async data => {
  const params = {
    Destination: {
      ToAddresses: ['topi.sarkkinen@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: JSON.stringify(data, null, 2),
        },
      },
      Subject: {
        Data: 'Uusi ilmoittautuminen häihin!',
      },
    },
    Source: 'topi.sarkkinen@gmail.com',
  }

  try {
    await ses.sendEmail(params).promise()
  } catch(err) {
    console.warn('Error sending email', err)
  }
}
