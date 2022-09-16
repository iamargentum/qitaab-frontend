import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateNode } from './pages/create/Create';
import { NetworkView } from './pages/networkView/NetworkView';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/app/'>
          <Route path='create-node' element={<CreateNode />}></Route>
          <Route path='network-view' element={<NetworkView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
