import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddPost from "./pages/AddPost";

function App() {
    return (
        <div>
            <div className="min-h-screen bg-gray-50">
              <Navbar/>
              <main>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/add-post" element={<AddPost />} />
            </Routes>
            </main>
            </div>
        </div>
    );
}

export default App;
