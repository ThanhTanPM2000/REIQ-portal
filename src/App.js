import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminLayout from "./Layout/AdminLayout.jsx";
import "./assets/less/App.less";

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
