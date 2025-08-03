import "./App.css";
import { SwapFrom } from "@/swap/components/swap-from";
import { UsdInput } from "@/swap/components/usd-input";
import { SwapTo } from "@/swap/components/swap-to";
import {
  SwapContextProvider,
  useSwapContext,
} from "@/swap/context/swap-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  },
});

const SwapIcon = () => {
  const { setState } = useSwapContext();
  return (
    <Button
      onClick={() =>
        setState((state) => ({
          ...state,
          toToken: state.fromToken,
          fromToken: state.toToken,
        }))
      }
      className="mx-auto size-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-all duration-300 w-fit active:translate-y-1"
    >
      ↓↑
    </Button>
  );
};
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="w-full max-w-md p-6 space-y-6 rounded-xl bg-card shadow-lg">
          <SwapContextProvider>
            <UsdInput />
            <SwapFrom />
            <SwapIcon />
            <SwapTo />
          </SwapContextProvider>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
