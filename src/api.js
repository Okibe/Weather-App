export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const geoAPiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3a435b6330msh2fbe9a6c80ca00ep1bfd6bjsn3601d96bb7c5",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "db419fc9f919746ab515be3e924f8e7e";

// try {
//   const response = await fetch(GEO_API_URL, geoAPiOptions);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
// esGbwrm39mshS2BCl0RALxQRtZTp1W&sFMjsnyJlJzDXVkW0H

// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3a435b6330msh2fbe9a6c80ca00ep1bfd6bjsn3601d96bb7c5',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
