import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Price() {
  const apiKey = "32575427-A276-4126-96C8-11C816F64755";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams();
  const symbol = params.symbol;
  console.log(params);

  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState("null");
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <>{coin && coin.rate ? loaded() : loading()}</>;
}

export default Price;
