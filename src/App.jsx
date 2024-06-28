import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import NotFoundPage from "./pages/NotFoundPage";



function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path= "/" element = {<HomePage/>} />
        <Route path= "/students/:studentId" element = {<StudentDetailsPage/>} />
        <Route path= "/profile" element = {<UserProfilePage/>} />
        <Route path= "*" element = {<NotFoundPage/>} /> {/* fallback route  */}
      </Routes>

    </div>
  );
}

export default App;
