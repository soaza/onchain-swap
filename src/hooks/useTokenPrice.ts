import { getTokenInfo, getTokenPrice } from "@/swap/api/swap";
import type { TTokenSymbols } from "@/swap/constants/tokens";
import { getTokenBySymbol } from "@/utils/get-token";
import { useQuery } from "@tanstack/react-query";

export const useTokenPrice = (tokenSymbol: TTokenSymbols) =>
  useQuery({
    queryKey: ["tokenInfo", tokenSymbol],
    queryFn: async () => {
      const token = getTokenBySymbol(tokenSymbol);

      if (!token) {
        throw new Error("Token not found");
      }

      const tokenInfo = await getTokenInfo({
        symbol: tokenSymbol,
        chainId: token.chainId,
      });

      const tokenPrice = await getTokenPrice(token.chainId, tokenInfo.address);
      return tokenPrice;
    },
  });
