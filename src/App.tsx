import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "@/components/Header";
import { MainRoutes } from "./components/router";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Header />
        <MainRoutes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
