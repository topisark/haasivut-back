import { addRegistration } from '../../shared/dynamo'
import { sendRegistrationEmail } from '../../shared/email'
import { successResponse } from '../../shared/responses'

exports.handler = async event => {
  console.info('Received event', JSON.stringify(event, null, 2))

  const parsedBody = event.body && JSON.parse(event.body)

  console.info('Registration body', parsedBody)

  await Promise.all([
    addRegistration(parsedBody),
    sendRegistrationEmail(parsedBody)
  ])

  return successResponse()
}