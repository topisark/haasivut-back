import { successResponse } from '../../shared/responses'

exports.handler = async event => {
  console.info('Received event', JSON.stringify(event, null, 2))

  return successResponse()
}