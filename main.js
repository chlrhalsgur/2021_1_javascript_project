const { default: axios } = require('axios');
const readline = require('readline');


const KEY = 'BXFXVSp5M1Cx%2FqLABK3PfodfUqUwVORQ%2F6y35EI8kLR76Latp3OFIt2gtPDfkLj%2F%2F2jv77m2UXOyDIGJX4%2BwfA%3D%3D'
const BASEURL = 'https://api.odcloud.kr/api/15077586/v1/centers?';
const DEFAULTPAGE = '4';
const DEFAULTPERPAGE = '64';
const MAPBASEURL = 'https://www.google.com/maps/place/';


var data = [];



const input = () => new Promise(resolve => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', line => {
    rl.close();
    resolve(line);
  });
});


var curry = url_curry => baseurl => defaultPage => defaultPerPage => KEY => url_curry(baseurl, defaultPage, defaultPerPage, KEY);


var getApi = function (url, pagePerValue = DEFAULTPERPAGE) {
  console.log('API 요청 중...');
  axios.get(url) // url 접속 -> 정보 보내기
    .then(res => {
      for (let i = 0; i < pagePerValue; i++) {
        data.push([
          res['data']['data'][i]["facilityName"],
          res['data']['data'][i]["address"],
          res['data']['data'][i]["phoneNumber"],
          res['data']['data'][i]["centerName"],
          res['data']['data'][i]["updatedAt"],
          MAPBASEURL + res['data']['data'][i]["lat"] + ',' + res['data']['data'][i]["lng"],
          res['data']['data'][i]["sido"],
          res['data']['data'][i]["sigungu"]
        ]);
      }
    })
  console.log('API 요청 완료')
}



// Main
var main =async function() {
  var url = [];
  var menu = 0;
  var menuValue = 0;
  var location = ''

  console.log('+-----------------------------------------------------------+')
  console.log('전국 코로나 백신 접종 가능 기관 정보');

  process.stdout.write('URL 가져오기 (Yes/No): ');
  var q1 = await input();


  //Get URL 
  if (q1 == 'yes' || q1 == 'y' || q1 == 'Yes' || q1 == 'Y') {
    console.log('전체 정보 가져오기 : 0')
    console.log('특정 정보 가져오기 : 1')

    process.stdout.write('입력하시오. ');
    var selectAll = await input(); 

    console.log('URL 요청 중...');

    // URL currying
    function url_curry(baseurl, page, perPage, KEY) {
      return baseurl + 'page=' + page + '&perPage=' + perPage + '&serviceKey=' + KEY
    } 
    var getUrl = curry(url_curry)
    let result1 = getUrl(BASEURL)


    if (selectAll == '0') {
      for (let i = 0; i < 4; i++) {
        url[i] = result1(i + 1)(DEFAULTPERPAGE)(KEY);
      }
    }
    else {
      process.stdout.write('페이지를 입력하시오. (1 ~ 4페이지 숫자만 입력)');
      let pageValue = await input()
      let result2 = result1(pageValue)
      console.log('페이지 지정 완료.')
      process.stdout.write('페이지당 자료 수를 입력하시오. (최소 1 ~ 최대 64)');
      var pagePerValue = await input()
      let result3 = result2(pagePerValue)
      console.log('자료 지정 완료.')
      var url = result3(KEY) // let이 아닌 var 사용 (실행컨텍스트)
    }
    console.log('URL 요청 완료')
    console.log(url)
  }
  else return 0;
  console.log('+-----------------------------------------------------------+')



  // Get API
  process.stdout.write('API 가져오기 (Yes/No): ');
  var q2 = await input();


  if (q2 == 'yes' || q2 == 'y' || q2 == 'Yes' || q2 == 'Y') {
    if (selectAll == '0') {
      for (let i = 0; i < url.length; i++) {
        getApi(url[i]);
      }
    }
    else {
      getApi(url, pagePerValue)
    }
  }
  else return 0;
  
  
  
  console.log('+-----------------------------------------------------------+')

  console.log('보기 방식을 선택하시오.');
  console.log('백신 기관 모두 보기            : 0')
  console.log('백신 기관 지역별(도 구분) 보기 : 1')
  console.log('백신 기관 지방병(시 구분) 보기 : 2')

  process.stdout.write('입력하시오.: ');
  menu = await input();
  console.log('+-----------------------------------------------------------+')

  if (menu == '0') {
    console.log('백신 기관 모두 보기')
    menuValue = 0;
  }
  else if (menu == '1') {
    console.log('백신 기관 지역별(도 구분) 보기')
    menuValue = 6;
  }
  else if (menu == '2') {
    console.log('백신 기관 지방병(시 구분) 보기')
    menuValue = 7;
  }
  console.log('+-----------------------------------------------------------+')
  if (menu != '0') {
    process.stdout.write('검색 범위를 입력하시오. (예시 : 충청북도 또는 의정부시): ');
    location = await input();
    console.log('+-----------------------------------------------------------+')
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i][menuValue] == location || menuValue == 0) {
      console.log('┌-----------------------------------------------------------┐')
      console.log('| 기관명 : ', data[i][0]);
      console.log('| 주소 : ', data[i][1]);
      console.log('| 전화번호 : ', data[i][2]);
      console.log('| 센터 이름 : ', data[i][3]);
      console.log('| 업데이트 날짜 : ', data[i][4]);
      console.log('| 지도 보기 : ', data[i][5]);
      console.log('└-----------------------------------------------------------┘')
    }
  }
   
}
var vaccine = main();
vaccine;