import "./App.css";
import UsersPage from "./pages/usersPage/UsersPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
