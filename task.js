const fs = require('fs')
const json = require('./3.json')

function checkProperties() {
    let json1 = '{'
    let result = 0;
    typeof json.flag !== 'boolean' ? json1 = json1.concat(('"flag" :"' + json.flag + '"' + '\r\n')) : result++
    
    !Array.isArray(json.myPromises) ? json1 = json1.concat(('"myPromises" :"' + json.myPromises + '"' + '\r\n')): result++

    json.screenshot !== null ? json1 = json1.concat(('"screenshot" :"' + json.screenshot + '"' + '\r\n')) : result++

    typeof json.element !== 'object' ? json1 = json1.concat(('"element" :"' + json.element + '"' + '\r\n')) :  result++

    typeof json.elementText !== 'string' ? json1 = json1.concat(('"elementText" :"' + json.elementText + '"' + '\r\n')) : result++

    !json.allElementsText.toString().includes('const') ? json1 = json1.concat(('"allElementsText" :"' + json.allElementsText + '"' + '\r\n')) 
    : result++

    json.counter < 10 ? json1 = json1.concat(('"counter" :"' + json.counter + '"' + '\r\n')) : result++

    !/FiRst/i.test(json.const) ? json1 = json1.concat(('"const" :"' + json.const + '"' + '\r\n')) :result++

    json.parameters.length !== 8 ? json1 = json1.concat(('"parametres" :"' + json.parameters + '"' + '\r\n')) :result++

    typeof json.description !== 'string' || !(json.description.length > 5 && json.description.length < 13) ?
    json1 = json1.concat(('"description" :"' + json.parameters + '"' + '\r\n')) : result++

    let x = json1.trim().split('\r\n').toString().concat('}')
    console.log(result)
    if(result === 10){console.log('OK')}
    else{printJSON(x)}
}
checkProperties()

function printJSON(js){
    fs.writeFileSync('./4.json',js)
}
