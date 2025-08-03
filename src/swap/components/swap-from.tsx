import { Input } from "@/components/ui/input";
import { Label } from "@/swap/components/label";
import { TokenSelector } from "@/swap/components/token-selector";
import { useSwapContext } from "@/swap/context/swap-context";

export const SwapFrom = () => {
  const { state, setState } = useSwapContext();

  const fetching = state.fetching;

  return (
    <div className="space-y-2">
      <Label>You pay</Label>
      <div className="flex gap-2">
        <Input
          className="flex-1"
          placeholder={fetching ? "Loading..." : "0.00"}
          type="number"
          disabled
          value={fetching ? "Loading..." : state.fromAmount}
        />
        <TokenSelector
          excludedTokens={[state.toToken]}
          token={state.fromToken}
          setToken={(token) => setState({ ...state, fromToken: token })}
        />
      </div>
    </div>
  );
};
