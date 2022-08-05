import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
