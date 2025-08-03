import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TOKENS } from "@/swap/constants/tokens";

export const TokenSelector = () => {
  return (
    <Select defaultValue={TOKENS[0].symbol}>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="Select a token" />
      </SelectTrigger>
      <SelectContent>
        {TOKENS.map((token) => (
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
