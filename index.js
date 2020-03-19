exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: `
Editor: VSCode
Font: Dank Mono
Theme: Synthwave '84 (no blur)
`.trim(),
  })
}
