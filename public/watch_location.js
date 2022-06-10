// リアルタイムで位置情報を取得

var syncerWatchPosition = {
	count: 0 , // 処理回数
	lastTime: 0 , // 前回の処理
} ;

function displayInfo( result ) {
    const latitude = document.getElementById("latitude");
    const longitude = document.getElementById("longitude");
    const speed = document.getElementById("speed");
    latitude.innerHTML = "緯度: " + result.latitude;
    longitude.innerHTML = "経度: " + result.longitude;
    speed.innerHTML = "速度: " + result.speed;
}

// 位置情報の取得に成功したとき
function successFunc(position) {
    var result = {};
    ++syncerWatchPosition.count ; // 処理回数をインクリメント
	var nowTime = ~~( new Date() / 1000 ) ;	// UNIX Timestamp

    // 前回の書き出しから3秒以上経過していたら描写
    if( (syncerWatchPosition.lastTime + 3) > nowTime ){
		return false ;
	}

    //緯度
    result.latitude = position.coords.latitude;
    //経度
    result.longitude = position.coords.logitude;
    //速度
    result.speed = position.coords.speed;
    

}



// 位置情報の取得に失敗したとき
function errorFunc(error) {
    var errorMessage = {
        0: "原因不明のエラーが発生しました",
        1: "位置情報の取得が許可されませんでした",
        2: "電波状況などで位置情報が取得できませんでした",
        3: "位置情報の取得に時間がかかりすぎたためタイムアウトしました"
    }

    alert(errorMessage[error.code]);
}



var optionObj = {
    "enableHighAccuracy":true,
    "timeout": 100000000000,
    "maximumAge": 0
};

navigator.geolocation.watchPosition( successFunc, errorFunc , optionObj);


