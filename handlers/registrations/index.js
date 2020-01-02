import { addRegistration } from '../../shared/dynamo'
import { successResponse } from '../../shared/responses'

exports.handler = async event => {
  console.info('Received event', JSON.stringify(event, null, 2))

  const parsedBody = event.body && JSON.parse(event.body)

  console.info('Registration body', parsedBody)

  await addRegistration(parsedBody)

  return successResponse()
}