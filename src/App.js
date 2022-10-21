import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'
import NotFoundPage from './pages/NotFoundPage'
import Nabvar from './components/Navbar'
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Nabvar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/users" element={<UsersPage/>} />
        <Route path="/users/:id" element={<UserPage/>} />
        <Route path="/dashboard/*" element={<Dashboard/>} >
          <Route path="welcome" element={<p>Welcome</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
