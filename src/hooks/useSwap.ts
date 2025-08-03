import type { TTokenSymbols } from "@/swap/constants/tokens";
import { type SwapState } from "@/swap/context/swap-context";
import { useEffect } from "react";

export const useSwap = ({
  //   fromToken,
  //   toToken,
  usdAmount,
  setState,
}: {
  fromToken: TTokenSymbols;
  toToken: TTokenSymbols;
  usdAmount: string;
  setState: React.Dispatch<React.SetStateAction<SwapState>>;
}) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      fromAmount: usdAmount,
      toAmount: usdAmount,
    }));
  }, [setState, usdAmount]);
};
