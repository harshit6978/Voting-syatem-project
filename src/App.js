import './App.css';
import Navbar from './componnet/Common/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './componnet/Common/Login/Login.jsx';
import { AdminNav } from './componnet/Admin/Header/AdminNav.js';
import { UserNav } from './componnet/User/Header/UserNav.js';
import Cookies from 'js-cookie';
import Party from './componnet/Admin/Pages/Party/Party.jsx';
import Dashboard from './componnet/Admin/Pages/Dashboard/Dashboard.jsx';
import Election from './componnet/Admin/Pages/Election/Election.jsx';
// import Cookies from "js-cookie";



function App() {

  let role = Cookies.get("role");

  if (role === "admin") {
    return (
      <>
        <Navbar data={AdminNav} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Election" element={<Election />} />
          <Route path="/party" element={<Party />} />
          <Route path="/Student" element={""} />
          <Route path="*" element={""} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={UserNav} />
        <Routes>
          <Route path="/" element={""} />
          <Route path="/FacultyCo" element={""} />
          <Route path="/Faculty" element={""} />
          <Route path="/Student" element={""} />
          <Route path="*" element={""} />
        </Routes>
      </>
    );
  } else if (!role) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    )

  }
}

export default App;
