import {useState} from "react";
import {WSRoute, WSTime, WSUrl} from "../const";

const DEPTH_AMOUNT = 5;

let wsDepth; // for close Web Socket
const useWSDepth = () => {
  const [orderbookWS, setOrderbookWS] = useState();
  const [isWSDepthLoad, setWSDepthStatus] = useState(false);

  const connectWSDepth = ({symbol}) => {
    symbol = symbol.toLowerCase();
    wsDepth = new WebSocket(`${WSUrl.STREAM}${symbol}${WSRoute.DEPTH}${DEPTH_AMOUNT}${WSTime.MAX}`);

    wsDepth.onmessage = ({data}) => {
      const orderbookData = JSON.parse(data);

      setOrderbookWS(orderbookData);
      setWSDepthStatus(true);
    };
  };

  const disconnectWSDepth = () => {
    wsDepth.close();
    setWSDepthStatus(false);
  };

  return {
    orderbookWS,
    isWSDepthLoad,
    connectWSDepth,
    disconnectWSDepth,
  };
};

export default useWSDepth;
