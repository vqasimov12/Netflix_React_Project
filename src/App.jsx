import Landingpage from "landing/Landingpage";
import SingIn from "pages/signIn/SingIn";
import SingUp from "pages/signUp/SignUp";
import NotFound from "pages/notFoundPage/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      

      <Route path="/"element={<Landingpage />} />
      <Route path="/signin" element={<SingIn />} />
      <Route path="/signup" element={<SingUp/>} />
      <Route path="*" element={<NotFound/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
