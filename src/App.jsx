import Landingpage from "landing/Landingpage";
import SingIn from "./signIn/SingIn";
import SingUp from "./signUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" >
      <Route index element={<Landingpage />} />
      </Route>

      <Route path="/signin" element={<SingIn />} />
      <Route path="/signup" element={<SingUp/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
