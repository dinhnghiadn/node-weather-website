const request = require('postman-request')
const forecast = (latitude, longtitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=9dda07ee8e441ea3220d52efa8ba36ff&query=' +
    latitude +
    ',' +
    longtitude
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the weather services!', undefined)
    } else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degree out. It feels like ' +
          body.current.feelslike +
          ' degrees out.'
      )
    }
  })
}
module.exports = forecast
