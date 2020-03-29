const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0791e9060b6c0aecb3a0f0ea22b0570a/' + latitude + ',' + longitude

    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
        callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
        ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. The temperature high for the day will be ' +
        body.daily.data[0].temperatureHigh + '. The temperature low for the day will be ' + body.daily.data[0].temperatureLow + '.')
        }
    })
}

module.exports = forecast