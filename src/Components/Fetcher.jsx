import React from 'react'
function Fetcher(props) {
    const renderCont = " cont"
    const today = fetch("https://api.prokerala.com/token?grant_type=client_credentials&client_id=a6ad1ed3-3558-45ac-b4fa-313bd6423165&client_secret=6IDzml9c8rbYIewgo3CqVbeS2eo7Hm7IqSDxWlxT").then(res => res.json())
        .then((data) => {
            renderCont = data.access_token;
        });

    return <h1>Hello, {renderCont}</h1>;
}

export default Fetcher;