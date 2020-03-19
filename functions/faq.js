const ANSWERS = {
  editor: 'VSCode',
  font: 'Dank Mono',
  theme: "Synthwave '84 (no blur)",
}

function getBody(key) {
  if (key) {
    return ANSWERS[key]
  }

  return ANSWERS
}

exports.handler = async event => {
  const key = event.queryStringParameters.key

  return {
    statusCode: 200,
    body: JSON.stringify(getBody(key)),
  }
}
