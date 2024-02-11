import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function PortfolioCard(stockName: any) {
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
          `https://openapiv1.coinstats.app/coins/${stockName.name}`,
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
  console.log(stockName.stockName);
  return (
    <Box
      backgroundColor="Green"
      borderRadius="15px"
      padding="10px"
      marginBottom="10px"
    >
      <Stat>
        <StatLabel>{!!data && data.name}</StatLabel>
        <StatNumber>{!!data && data.price} $</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          23.36%
        </StatHelpText>
      </Stat>
    </Box>
  );
}

export default PortfolioCard;
