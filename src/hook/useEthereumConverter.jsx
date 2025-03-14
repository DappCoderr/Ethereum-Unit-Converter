// useEthereumConverter.js
import { useEffect, useState } from "react";

const useEthereumConverter = () => {
  const [ethValue, setEthValue] = useState("");
  const [weiValue, setWeiValue] = useState("");
  const [gweiValue, setGweiValue] = useState("");
  const [activeField, setActiveField] = useState(null);

  const convertWei = (wei) => {
    const weiNum = parseFloat(wei);
    if (isNaN(weiNum)) return { gwei: "", eth: "" };
    return {
      gwei: (weiNum / 1e9).toString(),
      eth: (weiNum / 1e18).toString(),
    };
  };

  const convertGwei = (gwei) => {
    const gweiNum = parseFloat(gwei);
    if (isNaN(gweiNum)) return { wei: "", eth: "" };
    return {
      wei: (gweiNum * 1e9).toString(),
      eth: (gweiNum / 1e9).toString(),
    };
  };

  const convertEth = (eth) => {
    const ethNum = parseFloat(eth);
    if (isNaN(ethNum)) return { wei: "", gwei: "" };
    return {
      wei: (ethNum * 1e18).toString(),
      gwei: (ethNum * 1e9).toString(),
    };
  };

  useEffect(() => {
    if (activeField !== "wei") return;
    const { gwei, eth } = convertWei(weiValue);
    setGweiValue(gwei);
    setEthValue(eth);
    setActiveField(null);
  }, [weiValue, activeField]);

  useEffect(() => {
    if (activeField !== "gwei") return;
    const { wei, eth } = convertGwei(gweiValue);
    setWeiValue(wei);
    setEthValue(eth);
    setActiveField(null);
  }, [gweiValue, activeField]);

  useEffect(() => {
    if (activeField !== "eth") return;
    const { wei, gwei } = convertEth(ethValue);
    setWeiValue(wei);
    setGweiValue(gwei);
    setActiveField(null);
  }, [ethValue, activeField]);

  const handleInputChange = (value, field, setter) => {
    if (value === "") {
      setter("");
      setActiveField(null);
      return;
    }
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
      setActiveField(field);
    }
  };

  return {
    ethValue,
    weiValue,
    gweiValue,
    handleInputChange,
    setEthValue,
    setWeiValue,
    setGweiValue,
  };
};

export default useEthereumConverter;
