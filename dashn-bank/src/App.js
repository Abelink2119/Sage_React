import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Category from "./Pages/Category";
import Electronics from "./Pages/Electronics";
import Users from "./Pages/Users";
import Layout from "./Pages/Layout";
import UserProfile from "./Pages/UserProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="category" element={<Category />}>
            <Route path="electronics" element={<Electronics />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserProfile />} /> {/* Dynamic */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
