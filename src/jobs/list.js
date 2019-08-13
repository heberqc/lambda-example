const jobs = [
  { id: 1, title: 'NodeJS dev'},
  { id: 2, title: 'Angular dev'}
]

module.exports.handler = async (evt, ctx) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      jobs,
    })
  }
}
