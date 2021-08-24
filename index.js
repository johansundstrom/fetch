const fetch = require('node-fetch');

let myData = {}
let names = {}

/*
//funkis 
fetch('http://192.168.250.103/rest/kiwigrid/wizard/devices')
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)))
  .catch(error => console.log(error)); */


/* //funkis 
async function myGet(){
  const response = await fetch('http://192.168.250.103/rest/kiwigrid/wizard/devices', {
    headers: {
      'Accept': 'application/json'
    }
  })
  names = await (response.json())
  //console.log(response.headers.get('Content-Type'));
  return names
} */


fetch('http://192.168.250.103/rest/kiwigrid/wizard/devices')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    myData = JSON.stringify(data)
    console.log(data.result.items[1].tagValues.TemperatureBattery.tagName + ": " + data.result.items[1].tagValues.TemperatureBattery.value)
    console.log(data.result.items[1].tagValues.VoltageBatteryCellMean.tagName + ": " + data.result.items[1].tagValues.VoltageBatteryCellMean.value)
    console.log(data.result.items[1].tagValues.StateOfCharge.tagName + ": " + data.result.items[1].tagValues.StateOfCharge.value)
    console.log(data.result.items[11].tagValues.PowerSelfConsumed.tagName + ": " + data.result.items[11].tagValues.PowerSelfConsumed.value)
    console.log(data.result.items[11].tagValues.PowerProduced.tagName + ": " + data.result.items[11].tagValues.PowerProduced.value)
  })
  .catch((err) => {
    // Do something for an error here
  })

