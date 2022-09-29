import './App.css';
import { Home } from './pages/home';
import { AppHome } from './pages/appHome';
import { LoginButton } from './pages/user/login';
import { CreateNode } from './pages/create/Create';
import { TempLogout } from './pages/user/tempLogout';
import { NetworkView } from './pages/networkView/NetworkView';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginButton />}></Route>
        <Route path='/logout' element={<TempLogout />}></Route>
        <Route path='/app/'>
          <Route path='' element={<AppHome />}></Route>
          <Route path='create-node' element={<CreateNode />}></Route>
          <Route path='network-view' element={<NetworkView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
