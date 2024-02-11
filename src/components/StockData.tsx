import React, { useState, useEffect } from "react";

const StockData: React.FC<{ stockName: string }> = ({ stockName }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": "uHml9lnZBJaAQCFD42DjU1UhxLvwgFx2/IH7e9959+8=",
        },
      };

      try {
        const response = await fetch(
          `https://openapiv1.coinstats.app/coins/${stockName}`,
          options
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [stockName]);

  return <div></div>;
};

export default StockData;
