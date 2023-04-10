
import { Routes, Route } from 'react-router-dom';
import Pages from './components/Pages';
import Navbar from './components/Navbar';
import Nomatch from './components/Nomatch';
import Services from './components/Services';
import Project from './components/Project';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Mainpage from './components/Mainpage';
import About from './components/About';
import Team from './components/Team';
import Teamsingle from './components/Teamsingle';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/services' element={<Services />} />
        <Route path='/project' element={<Project />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/team' element={<Team />} />
        <Route path='team/teamsingle' element={<Teamsingle />} />
        <Route path='*' element={<Nomatch />} />
      </Routes>


    </>
  );
}

export default App;
