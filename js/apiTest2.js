
// open(전달방식, URL주소, 동기여부);


// var obj = {
//     dat
// }
var fetch = require('node-fetch')

url = 'http://apis.data.go.kr/1262000/CountryCovid19SafetyServiceNew/getCountrySafetyNewsListNew?serviceKey=k9FpTZ71Gf3BB%2FibO%2FJSQZT3TlCjWJU85r%2FkiumB2OKaueTUTwEj4gWI1nxdQ5EmfsTzmlMLA7vm0DDHjXC0qA%3D%3D&returnType=JSON&numOfRows=10&pageNo=1&cond[country_nm::EQ]=%EC%9D%BC%EB%B3%B8&cond[country_iso_alp2::EQ]=JP'

var fetch = require('node-fetch')
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    //body:JSON.stringify(obj)       
})
  .then(res => res.json())
  .then(res => {
    // data를 응답 받은 후의 로직
    // console.log(res['data'][0]['continent_eng_nm']);
    console.log(res => req)
    // console.log(res)
    
    
});

