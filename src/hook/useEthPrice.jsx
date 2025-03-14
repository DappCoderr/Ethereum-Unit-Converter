import React from "react";
import { useEffect, useState } from "react";

const useEthPrice = () => {
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setEthPrice(data.ethereum.usd);
      } catch (error) {
        console.error("Error fetching ETH price:", error);
      }
    };
    fetchPrice();
  }, []);

  return {
    ethPrice,
  };
};

export default useEthPrice;
