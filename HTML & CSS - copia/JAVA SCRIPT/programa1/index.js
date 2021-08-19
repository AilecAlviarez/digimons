var axios = require("axios").default;
var options = {
  method: "GET",
  url: "https://digimon-api.vercel.app/api/digimon",
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
