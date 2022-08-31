import './App.css';
import { MainView } from './views/MainView';
import {LoginView } from './views/LoginView';
import {LandingView } from './views/LandingView';
import {LoggedRoute} from './components/LoggedRoute';
import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
   <>
   <Routes>
   <Route path="/" element={<LandingView/>} />
      <Route path="/login" element={<LoginView/>} />
      <Route
            exact
            path="/admin"
            element={<LoggedRoute component={MainView} />}
          />
  
      <Route path ="*" element={<>Ops..</>}/>
      </Routes>
    </>
  );
}
