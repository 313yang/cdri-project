import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import mainRouter from '@/router';
import { Header } from "@/components/Header";
import { MainContainer } from "@/styles/main.styled";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <MainContainer>
          <Routes>
            {mainRouter.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </MainContainer>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
