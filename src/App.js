
import  {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Conteiner from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Professores from './components/pages/Professores';
import Alunos from './components/pages/Alunos';
import Salas from './components/pages/Salas';
import NovoAluno from './components/pages/NovoAluno';
import NovoProfessor  from './components/pages/NovoProfessor';
import NovaSala from './components/pages/NovaSala';

function App() {
  return (

    <Router>
      <Navbar/>
      <Conteiner customClass="min-height">
        <Routes>
          
          <Route  path="/" element={<Home />} > </Route>
          <Route  path="/NovaSala" element={<NovaSala />} > </Route>
          <Route  path="/NovoAluno" element={<NovoAluno />} > </Route>
          <Route  path="/Alunos" element={<Alunos />} > </Route>
          <Route  path="/Professores" element={<Professores />} > </Route>
          <Route  path="/NovoProfessor" element={<NovoProfessor />} > </Route>
          <Route  path="/Salas" element={<Salas />} > </Route>
        </Routes>
        
        
      </Conteiner>
      <Footer/>
      
    </Router>
  );
}

export default App;
