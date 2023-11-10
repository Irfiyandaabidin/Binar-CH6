import './App.css';
import { CarContextProvider } from './store/car-context';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from './components/Dashboard';
import Cars from './components/Cars';

function App() {
  return (
    <CarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            exact path='/'
            element={
              <Dashboard/>
            }
          />
          <Route
            exact path='/cars'
            element={
              <Cars/>
            }
          />
        </Routes>
      </BrowserRouter>
    </CarContextProvider>
  );
}

export default App;
