const jobs = [
  { id: 1, title: 'NodeJS dev'},
  { id: 2, title: 'Angular dev'}
]

module.exports.handler = async (evt, ctx) => {
  // console.log('evt:', evt)
  jobs.push(JSON.parse(evt.body))
  return {
    statusCode: 200,
    body: JSON.stringify({
      jobs,
    })
  }
}
