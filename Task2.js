const fs = require('fs')
const json = require('./3.json')

let log = {}
let numOfWrongProperties = 0

function checkProperties() {
    if (typeof json.flag !== 'boolean') fillLogFile("flag", json.flag)

    if (!Array.isArray(json.myPromises)) fillLogFile("myPromises", json.myPromises)

    if (json.screenshot !== null) fillLogFile("screenshot", json.screenshot)

    if (typeof json.element !== 'object') fillLogFile("element", json.element)

    if (typeof json.elementText !== 'string') fillLogFile("elementText", json.elementText)

    if (!json.allElementsText.toString().includes('const')) fillLogFile("allElementsText", json.allElementsText)

    if (json.counter < 10) fillLogFile("counter", json.counter)

    if (!/FiRst/i.test(json.const)) fillLogFile("const", json.const)

    if (json.parameters.length !== 8) fillLogFile("parametres", json.parameters)

    if (typeof json.description !== 'string' || !(json.description.length > 5 && json.description.length < 13))
        fillLogFile("description", json.description)

    if (numOfWrongProperties != 0) {
        fs.writeFile('LOG.json', JSON.stringify(log), 'utf8', () => {
            console.log('LOG.json file was created. Num of wrong properties = ' + numOfWrongProperties)
        })
    } else {
        console.log('OK')
    }
}

function fillLogFile(property, value) {
    log[property] = value
    numOfWrongProperties++
}
checkProperties()



