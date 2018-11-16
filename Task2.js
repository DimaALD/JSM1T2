const fs = require('fs')
const json = require('./3.json')
function checkProperties() {
  let array = []
  let result = true;
  if (typeof json.flag !== 'boolean') {
    array.push("flag : " + json.flag); result = false
  }
  if (!Array.isArray(json.myPromises)) {
    array.push("myPromises : " + json.myPromises); result = false
  }
  if (typeof json.element !== 'object') {
    array.push("element : " + json.element); result = false
  }
  if (json.screenshot !== null) {
    array.push("screenshot : " + json.screenshot); result = false
  }
  if (typeof json.elementText !== 'string') {
    array.push("elementText : " + json.elementText); result = false
  }
  if (!json.allElementsText.toString().includes('const')) {
    array.push("allElementsText : " + json.allElementsText); result = false
  }
  if (json.counter < 10) {
    array.push("counter : " + json.counter); result = false
  }
  if (json.config !== 'Common') {
    array.push("config : " + json.config); result = false
  }
  if (!/FiRst/i.test(json.const)) {
    array.push("const : " + json.const); result = false
  }
  if (json.parameters.length !== 8) {
    array.push("parameters : " + json.parameters); result = false
  }
  if (typeof json.description !== 'string' || !(json.description.length > 5 && json.description.length < 13)) {
    array.push("description : " + json.description); result = false
  }
  if (result === true) { return 'Ok' } else { return array }
}
function printInFile(path, result) {
  let text = result.join('\r\n')
  fs.writeFile(path, text, (err) => {
    if (err) { console.log(err.message) }
  })
}
printInFile('task2.txt', checkProperties())

