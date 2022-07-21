import Home from './componentes/home';
import Projetos from './componentes/projetos';
import Rodape from './componentes/rodape';
import Sobre from './componentes/sobre';
import Tecnologias from './componentes/tecnologias';


function App() {
  const logo = '< V B L />'
  return (
    <>
      <Home logo={logo}/>
      <Sobre/>
      <Projetos />
      <Tecnologias/>
      <Rodape logo={logo}/>
    </>
  );
}

export default App;
