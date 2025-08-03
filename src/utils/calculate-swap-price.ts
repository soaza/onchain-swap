export const calculateSwapPrice = (usdAmount: string, tokenPrice: number) => {
  return (parseFloat(usdAmount) / tokenPrice).toString();
};
