import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fromToken, getChains } from "./store/services/Tokens";
import { useEffect, useState } from "react";

function App() {
  const [isTestnet, setIsTestnet] = useState(false);

  const [fromtokenId, setFromtokenId] = useState(137);

  const { data, isLoading, fromTokenData } = useSelector(
    (state) => state.muwpay
  );
  console.log("🚀 ~ App ~ fromTokenData:", fromTokenData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChains(isTestnet));
    dispatch(fromToken({ isTestnet, fromtokenId }));
  }, [isTestnet, fromtokenId]);

  return (
    <>
      <div className="text-center">
        <div className="h-16">
          {isLoading && (
            <div className="wrapper">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <span>Loading</span>
            </div>
          )}
        </div>

        <button
          className="bg-red-700 text-white px-4 py-2 w-52 rounded-lg"
          onClick={() => setIsTestnet(!isTestnet)}
        >
          Currently on {isTestnet ? "Testnet" : "Mainnet"}
        </button>
      </div>
    </>
  );
}

export default App;
