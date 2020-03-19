const ANSWERS = {
  editor: 'VSCode',
  font: 'Dank Mono',
  theme: "Synthwave '84 (no blur)",
}

const getBody = key => (key ? ANSWERS[key] : ANSWERS)

exports.handler = async event => {
  const { key = '' } = event.queryStringParameters
  const body = getBody(key)

  if (body === undefined) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: `An answer for key "${key}" was not found.`,
      }),
    }
  }

  return {
    statusCode: 200,
    body,
  }
}
