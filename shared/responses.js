module.exports.successResponse = data => ({
  statusCode: 200,
  body: JSON.stringify(data || {}),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

module.exports.csvResponse = data => ({
  statusCode: 200,
  body: data,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/csv',
  }
})

module.exports.badRequestResponse = {
  statusCode: 400,
  body: JSON.stringify({ error: 'Incorrect or missing parameters' }),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
}

module.exports.notFoundResponse = {
  statusCode: 404,
  body: JSON.stringify({ error: 'Not found' }),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
}


module.exports.errorResponse =  error => ({
  statusCode: 500,
  body: JSON.stringify(error || {}),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

