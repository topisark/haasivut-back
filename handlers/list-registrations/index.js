import { getRegistrations } from '../../shared/dynamo'
import { csvResponse } from '../../shared/responses'

const header = 'osallistuu;nimi;ruoka;musiikki;puhe'

const getBooleanValue = value => value ? 'X' : ''

const itemToCsv = item => {
  const { name, attending, speech, specials, music } = item

  const attendingValue = getBooleanValue(attending)
  const speechValue = getBooleanValue(speech)

  return [attendingValue, name, specials, music, speechValue].join(';')
}

exports.handler = async event => {
  console.info('Received event', JSON.stringify(event, null, 2))

  const registrations = await getRegistrations()
  const csvItems = registrations.map(itemToCsv)

  const csv = header + '\n' + csvItems.join('\n')

  return csvResponse(csv)
}