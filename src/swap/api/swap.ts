import type { IToken } from "@/swap/constants/tokens";
import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from "@funkit/api-base";

const API_KEY = import.meta.env.VITE_FUNKIT_API_KEY as string;

export const getTokenInfo = async (token: IToken) => {
  const response = await getAssetErc20ByChainAndSymbol({
    chainId: token.chainId,
    symbol: token.symbol,
    apiKey: API_KEY,
  });
  return response;
};

export const getTokenPrice = async (
  chainId: string,
  assetTokenAddress: string
) => {
  const response = await getAssetPriceInfo({
    chainId,
    assetTokenAddress,
    apiKey: API_KEY,
  });
  return response;
};
