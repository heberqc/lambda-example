const jobs = [
  { id: 1, title: 'NodeJS dev'},
  { id: 2, title: 'Angular dev'}
]

module.exports.handler = async (evt, ctx) => {
  // console.log('evt:', evt)
  const jobIndex = jobs.findIndex(j => String(j.id) === evt.pathParameters.id)
  jobs.push(JSON.parse(evt.body))
  return {
    statusCode: 200,
    body: JSON.stringify({
      job: jobs[jobIndex],
    })
  }
}
