import { Input } from "@/components/ui/input";
import { Label } from "@/swap/components/label";
import { TokenSelector } from "@/swap/components/token-selector";

export const SwapFrom = () => {
  return (
    <div className="space-y-2">
      <Label>You pay</Label>
      <div className="flex gap-2">
        <Input className="flex-1" placeholder="0.00" type="number" disabled />
        <TokenSelector />
      </div>
    </div>
  );
};
