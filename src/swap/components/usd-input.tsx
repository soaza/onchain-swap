import { Input } from "@/components/ui/input";
import { useSwapContext } from "@/swap/context/swap-context";

export const UsdInput = () => {
  const { state, setState } = useSwapContext();
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          className="flex-1"
          placeholder="Amount in USD"
          type="number"
          value={state.usdAmount}
          onChange={(e) => setState({ ...state, usdAmount: e.target.value })}
        />
      </div>
    </div>
  );
};
