// App.js
import React from "react";
import useEthereumConverter from "./hook/useEthereumConverter";
import useEthPrice from "./hook/useEthPrice";
import ConverterInput from "./component/ConverterInput";
import "./App.css";

const App = () => {
  const {
    ethValue,
    weiValue,
    gweiValue,
    handleInputChange,
    setEthValue,
    setWeiValue,
    setGweiValue,
  } = useEthereumConverter();

  const { ethPrice } = useEthPrice();

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Ethereum Unit Converter</h1>
        <p className="subtitle">Gwei & Wei Converter</p>
        <div className="price-tag">
          <p>ETH Current Price: ${ethPrice || "Loading..."}</p>
        </div>
      </header>

      <div className="converter-container">
        <ConverterInput
          label="Wei"
          value={weiValue}
          placeholder="Wei Units (WEI)"
          onChange={handleInputChange}
          unit="wei"
          setter={setWeiValue}
        />
        <ConverterInput
          label="GWei"
          value={gweiValue}
          placeholder="GWei Units (GWEI)"
          onChange={handleInputChange}
          unit="gwei"
          setter={setGweiValue}
        />
        <ConverterInput
          label="Ether"
          value={ethValue}
          placeholder="Ether Units (ETH)"
          onChange={handleInputChange}
          unit="eth"
          setter={setEthValue}
        />
      </div>
    </div>
  );
};

export default App;
