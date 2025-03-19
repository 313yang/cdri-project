import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "@/components/Header";
import { TabhostProvider } from "@/context/useTabhost";
import { Home } from "@/pages/Home";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TabhostProvider>
        <Header />
        <Home />
      </TabhostProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
