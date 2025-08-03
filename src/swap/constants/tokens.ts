export const TOKENS = [
  {
    symbol: "USDC",
    chainId: 1,
  },
  {
    symbol: "USDT",
    chainId: 137,
  },
  {
    symbol: "ETH",
    chainId: 8453,
  },
  {
    symbol: "WBTC",
    chainId: 1,
  },
] as const;

export type TTokenSymbols = (typeof TOKENS)[number]["symbol"];
