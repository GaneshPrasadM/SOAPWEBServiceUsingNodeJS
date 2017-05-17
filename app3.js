"use strict";
 
var soap = require('strong-soap').soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
var url = 'http://www.webservicex.net/globalweather.asmx?wsdl';
 
var requestArgs = {
  symbol: 'IBM'
};
 
var options = {};
soap.createClient(url, options, function(err, client) {
  var method = client['GetCitiesByCountry'];
  method(requestArgs, function(err, result, envelope, soapHeader) {
    //response envelope
    console.log('Response Envelope: \n' + envelope);
    //'result' is the response body
    console.log('Result: \n' + JSON.stringify(result));
    client.GetCitiesByCountry({name: 'india',CountryName:'india'}, function(err, result, envelope, soapHeader) {
      // Result is a javascript object 
      // Envelope is the response envelope from the Web Service 
      console.log('Result: \n' );
      console.log('Result: \n' + JSON.stringify(result));
      // soapHeader is the response soap header as a JavaScript object 
  })
  });
});