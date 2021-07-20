import React from 'react'
import axios from 'axios'
function Fetcher(props) {
    const baseURL = "https://api.prokerala.com/oauth/token";
    const woOAuth = "https://api.prokerala.com/token";

    var optionswOAuth = {
        method: 'POST',
        url: woOAuth,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: {
          grant_type: 'client_credentials',
          client_id: '3b7be719-ddf4-4a12-a6c0-979b438b6519',
          client_secret: '9weGuSHcT0xgwjky4xuXMrRvscFlti12Xn8WgnH4',

        }
      };
      var optionsBaseUrl = {
        method: 'POST',
        url: woOAuth,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: {
          grant_type: 'client_credentials',
          client_id: '3b7be719-ddf4-4a12-a6c0-979b438b6519',
          client_secret: '9weGuSHcT0xgwjky4xuXMrRvscFlti12Xn8WgnH4',

        }
      };
      axios.request(optionsBaseUrl).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      axios.request(optionswOAuth).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

    const renderCont = " cont"
    const today = fetch("https://api.prokerala.com/token?grant_type=client_credentials&client_id=a6ad1ed3-3558-45ac-b4fa-313bd6423165&client_secret=6IDzml9c8rbYIewgo3CqVbeS2eo7Hm7IqSDxWlxT").then(res => res.json())
        .then((data) => {
            renderCont = data.access_token;
        });

    return <h1>Hello, {renderCont}</h1>;
}

export default Fetcher;