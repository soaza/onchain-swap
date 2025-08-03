import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TOKENS, type TTokenSymbols } from "@/swap/constants/tokens";

interface Props {
  token: TTokenSymbols;
  setToken: (token: TTokenSymbols) => void;
  excludedTokens?: TTokenSymbols[];
}
export const TokenSelector = ({ token, setToken, excludedTokens }: Props) => {
  const tokenOptions = TOKENS.filter(
    (token) => !excludedTokens?.includes(token.symbol)
  );

  return (
    <Select
      defaultValue={token}
      onValueChange={(value) => setToken(value as TTokenSymbols)}
    >
      <SelectTrigger className="w-24">
        <SelectValue placeholder="Select a token" />
      </SelectTrigger>
      <SelectContent>
        {tokenOptions.map((token) => (
          <SelectItem
            key={`${token.symbol}-${token.chainId}`}
            value={token.symbol}
          >
            {token.symbol}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
