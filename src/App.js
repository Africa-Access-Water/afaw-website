import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";
import WorkInProgress from "./pages/WorkInProgress";
import NotFound from "./pages/404";
import AboutPage from "./pages/AboutPage";
import WhatWeDoPage from "./pages/WhatWeDo";
import HowWeWork from "./pages/HowWeWork";
import HowWeWorkPage from "./pages/HowWeWork";
import LanguageSuggestion from "./components/LanguageSuggestion";


function App() {
  return (
    <BrowserRouter>
      <LanguageSuggestion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-work" element={<Projects />} />
        <Route path="/our-work/:id" element={<SingleProject />} />
        <Route path="/blogs" element={<Posts />} />
        <Route path="/blogs/:id" element={<SinglePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/:projectSlug" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/donation/success" element={<SuccessPage />} />
        <Route path="/donation/failure" element={<FailurePage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />


        <Route path="*" element={<NotFound />} />
                
      </Routes>
    </BrowserRouter>
  );
}

export default App;
