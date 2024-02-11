import { Box } from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard";
import StockData from "./StockData";
const secPapers: { name: string; price: number }[] = [
  {
    name: "bitcoin",
    price: 1000,
  },
  {
    name: "Ethereum",
    price: 100,
  },
  {
    name: "Apple",
    price: 111,
  },
];

// const secPapers = ["Bitcoin", "Ethereum", "Apple"];

const stockName = "Bitcoin";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": "uHml9lnZBJaAQCFD42DjU1UhxLvwgFx2/IH7e9959+8=",
  },
};

fetch(`https://openapiv1.coinstats.app/coins/${stockName}`, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
function Portfolio() {
  return (
    <Box maxW="500px">
      {secPapers.map((item, index) => (
        <PortfolioCard secPaper={item} key={index} />
      ))}
      <StockData stockName="bitcoin" />
    </Box>
  );
}

export default Portfolio;
