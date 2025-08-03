import { useTokenPrice } from "@/hooks/useTokenPrice";
import type { TTokenSymbols } from "@/swap/constants/tokens";
import { type SwapState } from "@/swap/context/swap-context";
import { calculateSwapPrice } from "@/utils/calculate-swap-price";
import { useEffect } from "react";

export const useSwap = ({
  fromToken,
  toToken,
  usdAmount,
  setState,
}: {
  fromToken: TTokenSymbols;
  toToken: TTokenSymbols;
  usdAmount: string;
  setState: React.Dispatch<React.SetStateAction<SwapState>>;
}) => {
  const { data: fromTokenPriceInfo, isFetching: fromTokenFetching } =
    useTokenPrice(fromToken);
  const { data: toTokenPriceInfo, isFetching: toTokenFetching } =
    useTokenPrice(toToken);

  useEffect(() => {
    setState((state) => ({
      ...state,
      fetching: fromTokenFetching || toTokenFetching,
    }));
  }, [fromTokenFetching, toTokenFetching, setState]);

  useEffect(() => {
    if (!fromTokenPriceInfo || !toTokenPriceInfo || !usdAmount) {
      return;
    }

    const fromAmount = calculateSwapPrice(
      usdAmount,
      fromTokenPriceInfo.unitPrice
    );
    const toAmount = calculateSwapPrice(usdAmount, toTokenPriceInfo.unitPrice);

    setState((state) => ({
      ...state,
      fromAmount,
      toAmount,
    }));
  }, [setState, usdAmount, fromTokenPriceInfo, toTokenPriceInfo]);
};
