import { Input } from "@/components/ui/input";

export const UsdInput = () => {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input className="flex-1" placeholder="Amount in USD" type="number" />
      </div>
    </div>
  );
};
