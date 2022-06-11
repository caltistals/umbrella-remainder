import request from"request";

function get_weather(latitude, longitude) {
  const URL = "https://map.yahooapis.jp/weather/V1/place?";
  const coordinates = "coordinates=" + latitude + "," + longitude;
  const output_type = "&output=json";
  const api_key =
    "&appid=dj00aiZpPWd6R1lqejFjYTBFQiZzPWNvbnN1bWVyc2VjcmV0Jng9ZTg-";
  const uri = URL + coordinates + output_type + api_key;
  let res;

  request.get(
    {
      uri: uri,
    },
    function (err, req, data) {
      res = JSON.parse(data);
    }
  );
  console.log(res);
  return res;
}
export {get_weather};
