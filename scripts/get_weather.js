function get_weather(latitude, longitude) {
  const request = require("request");
  const URL = "https://map.yahooapis.jp/weather/V1/place?";
  const coordinates = "coordinates=" + latitude + "," + longitude;
  const output_type = "&output=json";
  const api_key =
    "&appid=dj00aiZpPWd6R1lqejFjYTBFQiZzPWNvbnN1bWVyc2VjcmV0Jng9ZTg-";
  const uri = URL + coordinates + output_type + api_key;

  request.get(
    {
      uri: uri,
    },
    function (err, req, data) {
      const parse_data = JSON.parse(data);
      console.log(parse_data["Feature"][0]["Geometry"]);
      for(let i = 0; i < 7; i++)
      {
        console.log(parse_data['Feature'][0]['Property']['WeatherList']['Weather'][i]['Date'])
        console.log(parse_data['Feature'][0]['Property']['WeatherList']['Weather'][i]['Rainfall'])
      }
    }
  );
}
module.exports = get_weather;
