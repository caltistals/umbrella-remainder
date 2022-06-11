import get_weather from "./get_weather_by_meteo.js";

// リアルタイムで位置情報を取得
let syncerWatchPosition = {
  count: 0, // 処理回数
  lastTime: 0, // 前回の処理
};

let optionObj = {
  enableHighAccuracy: true,
  timeout: 100000000000,
  maximumAge: 0,
};

let result = {
    latitude: null,
    longitude: null,
    speed: null
};

// 位置情報の取得に成功したとき
function successFunc(position) {
  console.log("位置情報の取得に成功");
  ++syncerWatchPosition.count; // 処理回数をインクリメント
  let nowTime = ~~(new Date() / 1000); // UNIX Timestamp

  // 前回の書き出しから3秒以上経過していたら描写
  if (syncerWatchPosition.lastTime + 3 > nowTime)
    return false;

  //緯度
  result.latitude = position.coords.latitude;
  //経度
  result.longitude = position.coords.longitude;
  //速度
  result.speed = position.coords.speed;

  get_weather(result.latitude,result.longitude);
  

}

// 位置情報の取得に失敗したとき
function errorFunc(error) {
  let errorMessage = {
    0: "原因不明のエラーが発生しました",
    1: "位置情報の取得が許可されませんでした",
    2: "電波状況などで位置情報が取得できませんでした",
    3: "位置情報の取得に時間がかかりすぎたためタイムアウトしました",
  };

  console.error(errorMessage[error.code]);
}

navigator.geolocation.watchPosition(successFunc, errorFunc, optionObj);
