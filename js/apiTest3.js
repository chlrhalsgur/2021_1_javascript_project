// var xhr = new XMLHttpRequest();
// var url = 'http://apis.data.go.kr/1262000/CountryCovid19SafetyServiceNew/getCountrySafetyNewsListNew'; /*URL*/
// var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+''; /*Service Key*/
// queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent('-'); /**/
// queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('JSON'); /**/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('cond[country_nm::EQ]') + '=' + encodeURIComponent('가나'); /**/
// queryParams += '&' + encodeURIComponent('cond[country_iso_alp2::EQ]') + '=' + encodeURIComponent('GH'); /**/
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');