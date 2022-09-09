import {Main, Sidebar} from "./containers"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex w-screen">
      <Sidebar />
      <Main />
    </div>
    </QueryClientProvider>
 
  )
}

export default App
 