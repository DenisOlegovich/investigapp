import { Box } from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard";
import StockData from "./StockData";

export type secPapersProps = {
  name: string;
  price: number;
};

const secPapers: secPapersProps[] = [
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
    <>
      {secPapers.map((item: any, index: any) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
}

export default Portfolio;
