import 'react-toastify/dist/ReactToastify.css';

import { IconContext } from 'react-icons';
import { FaPeopleGroup } from 'react-icons/fa6';
import { LuPencilLine } from 'react-icons/lu';
import { MdCurrencyExchange } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

import { Container } from './app.styles';

function App() {
  return (
    <Container>
      <img
        src={`https://avatars.githubusercontent.com/u/124714961?v=4`}
        alt="foto-do-desenvolvedor"
      />
      <h1>JOANNE EMILLY</h1>
      <p>DESENVOLVEDORA WEB</p>

      <IconContext.Provider value={{ color: '#fff', size: '2em' }}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="conversor">
                  <MdCurrencyExchange />
                  Conversor
                </Link>
              </li>
              <li>
                <Link to="extenso">
                  <LuPencilLine />
                  Número por Extenso
                </Link>
              </li>
              <li>
                <Link to="random-people">
                  <FaPeopleGroup />
                  People
                </Link>
              </li>
              <li>
                <Link to={'novo-projeto'}>Novo Projeto</Link>
              </li>
            </ul>
          </nav>
        </header>
      </IconContext.Provider>
      <Outlet />
    </Container>
  );
}

export default App;
