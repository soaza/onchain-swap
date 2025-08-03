import "./App.css";
import { SwapFrom } from "@/swap/components/swap-from";
import { UsdInput } from "@/swap/components/usd-input";
import { SwapTo } from "@/swap/components/swap-to";

const SwapIcon = () => {
  return (
    <div className="mx-auto size-10 flex items-center justify-center rounded-full bg-muted cursor-pointer hover:bg-muted/80 hover:scale-105 transition-all duration-300">
      ↓↑
    </div>
  );
};
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-6 space-y-6 rounded-xl bg-card shadow-lg">
        <UsdInput />
        <SwapFrom />
        <SwapIcon />
        <SwapTo />
      </div>
    </div>
  );
}

export default App;
