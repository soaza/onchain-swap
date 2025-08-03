import { Input } from "@/components/ui/input";
import { useSwapContext } from "@/swap/context/swap-context";

export const UsdInput = () => {
  const { state, setState } = useSwapContext();
  return (
    <div className="space-y-2">
      <Input
        className="flex-1"
        placeholder="0.00"
        type="number"
        value={state.usdAmount}
        onChange={(e) => setState({ ...state, usdAmount: e.target.value })}
      />
      <div className="text-sm text-muted-foreground text-right">USD</div>
    </div>
  );
};
