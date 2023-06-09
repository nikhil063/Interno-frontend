import { Routes, Route } from 'react-router-dom';
import Pages from './components/Pages';
import Navbar from './components/Navbar';
import Nomatch from './components/Nomatch';
import Services from './components/Services';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Mainpage from './components/Mainpage';
import About from './components/About';
import Team from './components/Team';
import Teamsingle from './components/Teamsingle';
import Changelog from './components/Changelog';
import Licences from './components/Licences';
import Faq from './components/Faq';
import Projectsingle from './components/Projectsingle';
import Project from './components/Project';
import Blogdetails from './components/Blogdetails';
import Pricing from './components/Pricing';
import Servicesingle from './components/Servicesingle';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/servicesingle' element={<Servicesingle />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/blogdetails' element={<Blogdetails />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/projectsingle' element={<Projectsingle />} />
        <Route path='/team' element={<Team />} />
        <Route path='team/teamsingle' element={<Teamsingle />} />
        <Route path='/changelog' element={<Changelog />} />
        <Route path='/licences' element={<Licences />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='*' element={<Nomatch />} />
      </Routes>
    </>
  );
}

export default App;
