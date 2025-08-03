import { createContext, useContext, type ReactNode } from "react";
import { TOKENS, type TTokenSymbols } from "@/swap/constants/tokens";
import { useState } from "react";
import { useSwap } from "@/hooks/useSwap";

export interface SwapState {
  fromToken: TTokenSymbols;
  toToken: TTokenSymbols;
  fromAmount: string;
  toAmount: string;
  usdAmount: string;
  fetching: boolean;
}

interface SwapContextType {
  state: SwapState;
  setState: React.Dispatch<React.SetStateAction<SwapState>>;
}

const SwapContext = createContext<SwapContextType>({
  state: {
    fromToken: TOKENS[0].symbol,
    toToken: TOKENS[1].symbol,
    fromAmount: "",
    toAmount: "",
    usdAmount: "",
    fetching: false,
  },
  setState: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useSwapContext = () => {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error("useSwapContext must be used within a SwapContextProvider");
  }
  return context;
};

export default SwapContext;

interface SwapContextProviderProps {
  children: ReactNode;
}

export const SwapContextProvider = ({ children }: SwapContextProviderProps) => {
  const [state, setState] = useState<SwapState>({
    fromToken: TOKENS[0].symbol,
    toToken: TOKENS[1].symbol,
    fromAmount: "",
    toAmount: "",
    usdAmount: "",
    fetching: false,
  });

  useSwap({
    usdAmount: state.usdAmount,
    fromToken: state.fromToken,
    toToken: state.toToken,
    setState,
  });

  return (
    <SwapContext.Provider value={{ state, setState }}>
      {children}
    </SwapContext.Provider>
  );
};
