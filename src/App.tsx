import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/header";
import DelayedData from "./test";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Header /> */}
      <DelayedData />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
