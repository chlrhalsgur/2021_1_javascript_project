var request = require('request');
service_key='k9FpTZ71Gf3BB%2FibO%2FJSQZT3TlCjWJU85r%2FkiumB2OKaueTUTwEj4gWI1nxdQ5EmfsTzmlMLA7vm0DDHjXC0qA%3D%3D'



var url = 'http://apis.data.go.kr/1262000/CountryCovid19SafetyServiceNew/getCountrySafetyNewsListNew';
var queryParams = '?' + encodeURIComponent('ServiceKey') + 'service_key'; 
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent('k9FpTZ71Gf3BB%2FibO%2FJSQZT3TlCjWJU85r%2FkiumB2OKaueTUTwEj4gWI1nxdQ5EmfsTzmlMLA7vm0DDHjXC0qA%3D%3D'); /* */
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('JSON'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('cond[country_nm::EQ]') + '=' + encodeURIComponent('ASD'); /* */
queryParams += '&' + encodeURIComponent('cond[country_iso_alp2::EQ]') + '=' + encodeURIComponent('KR'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
     console.log('Status', response.statusCode);
     console.log('Headers', JSON.stringify(response.headers));
     console.log('Reponse received', body); 
    



});