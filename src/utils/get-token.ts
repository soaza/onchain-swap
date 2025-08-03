import { TOKENS } from "@/swap/constants/tokens";

export const getTokenBySymbol = (symbol: string) => {
  return TOKENS.find((token) => token.symbol === symbol);
};
