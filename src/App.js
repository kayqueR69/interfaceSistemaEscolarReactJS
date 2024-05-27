import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Informacoes } from './pages/Informacoes'
import { LoginAluno } from './pages/useraluno/LoginAluno';
import { CadastroAluno } from './pages/useraluno/CadastroAluno';
import { PaginaAluno } from './pages/useraluno/paginaAluno/PaginaAluno';
import { PaginaAlterarNome } from './pages/useraluno/paginaAluno/alterarnome/PaginaAlteracao';
import { LoginProfessor } from './pages/userprofessor/loginProfessor';
import { PaginaProfessor } from './pages/userprofessor/paginaprofessor/PaginaProfessor';
import { PaginaDeAlteracaoProf } from './pages/userprofessor/paginaprofessor/alterardados/PaginaDeAlteracao';
import { PaginaTurma } from './pages/userprofessor/paginaprofessor/turmas/PaginaTurma';
import { AdicionarDisciplina } from './pages/userprofessor/paginaprofessor/turmas/disciplinas/PaginaAddDisciplina';
import { Header } from './layouts/Header';
import { PaginaAlterarDisc } from './pages/userprofessor/paginaprofessor/turmas/disciplinas/PaginaAlterar';
import { PaginaAtribuirNota } from './pages/userprofessor/paginaprofessor/turmas/alunos/atribuirnota/PaginaAtribuirNota';
import { PaginaVincularTurma } from './pages/useraluno/form/PaginaVincularTurma';
import { CadastroProfessor } from './pages/userprofessor/CadastroProfessor';

function App() {
    return (
        <div className="App">
            <Router>

                <Header/>

                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/informacoes' element={<Informacoes/>}/>
                    <Route path='/loginaluno' element={<LoginAluno/>}/>
                    <Route path='/cadastroaluno' element={<CadastroAluno/>}/>
                    <Route path='/aluno/:id/:idTurma' element={<PaginaAluno/>}/>
                    <Route path='/aluno/alterarnome/:id/:idTurma' element={<PaginaAlterarNome/>}/>
                    <Route path='/vincularturma/:idAluno' element={<PaginaVincularTurma/>}/>
                    <Route path='/loginprofessor' element={<LoginProfessor/>}/>
                    <Route path='/cadastroprofessor' element={<CadastroProfessor/>}/>
                    <Route path='/paginaprofessor/:id' element={<PaginaProfessor/>}/>
                    <Route path='/prof/alterar/:id' element={<PaginaDeAlteracaoProf/>}/>
                    <Route path='/turma/:id/:idProfessor' element={<PaginaTurma/>}/>
                    <Route path='/adicionardisc/:idTurma/:idProfessor' element={<AdicionarDisciplina/>}/>
                    <Route path='/alterardisc/:id' element={<PaginaAlterarDisc/>} />
                    <Route path='/atribuirnota/:idAluno/:idDisciplina' element={<PaginaAtribuirNota/>}/>
                </Routes>
                
            </Router>
        </div>
    );
}

export default App;
