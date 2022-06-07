- **_npx i react-router-dom_: comando utilizado para instalar a biblioteca (dentro da pasta do projeto);**



- **React Router Dom (v.6):**

  - **Removendo qualquer versão antiga existente: _npm remove react-router-dom_;**

  - **Instalando a versão mais recente: _npm install react-router-dom@6_;**

  - **O arquivo _App.jsx_, ficará:**

    ```react
    import React from 'react';
    
    import { BrowserRouter } from  'react-router-dom' // Importando...
    
    import Menu from '../components/layout/Menu';
    import Content from '../components/layout/Content';
    
    import './App.css';
    
    
    
    export default function App(props) {
        return (
            <div className="app">
                <BrowserRouter> {/*Usamos a importação acima bem aqui*/}
                	<Menu />
                	<Content />
            	</BrowserRouter> {/*E aqui também*/}
            </div>
        );
    }
    ```

  - **OBS.: componente _Content.jsx_:**

    ```react
    import React from 'react';
    
    import { Routes, Route } from "react-router-dom"; 
    
    import Home from "../../views/examples/Home";
    import Param from "../../views/examples/Param";
    import About from "../../views/examples/About";
    import NotFound from "../../views/examples/NotFound";
    
    import './Content.css';
    
    export default function Content(props) {
        return (
            <main className="content">
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/param/:id" element={<Param />} />
                    <Route path="/" exact element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        );
    }
    ```




- **Com o uso do React Router, as componentes precisam ficar entre as tags <Router></Router>:**

  ```react
  import { BrowserRouter as Router } from  'react-router-dom';
  
  // App
  <div className="app">
     <Router> 
        <Menu />
        <Content />
     </Router>
  </div>
  ```

- **Na da tag <Route></Route>, temos o atributo _path_, que é onde indicamos a URL que será usada na navegação;**

- **E também da tag <Route></Route>, temos o atributo _element_ , que deve conter o componente que deve ser renderizado, sempre que selecionarmos a URL passada no _path_;**

- **Usando o React Router, ao invés de usarmos a tag <a></a>, iremos pegar o componente _Link_, para usar a tag <Link></Link>, que deve conter o atributo _to_, para indicar o local que iremos ao clicar no elemento de navegação:**

  ```react
  // Antes
  import React from 'react';
  
  import './Menu.css';
  
  export default function Menu(props) {
      return (
          <aside className="menu">
              <nav>
                  <ul>
                      <li>
                          <a href="/">Início</a>
                      </li>
  
                      <li>
                          <a href="/">Sobre</a>
                      </li>
                  </ul>
              </nav>
          </aside>
      );
  }
  
  // Depois
  import React from 'react';
  import {Link} from 'react-router-dom';
  
  import './Menu.css';
  
  export default function Menu(props) {
      return (
          <aside className="menu">
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Início</Link>
                      </li>
  
                      <li>
                          <Link to="/about">Sobre</Link>
                      </li>
                  </ul>
              </nav>
          </aside>
      );
  }
  ```

- **Não precisaremos mexer na estilização, porque o componente Link, acaba gerando uma tag <a></a>;**



- **Para passar parâmetros, a partir da URL, na própria URL passada no atributo _path_, adicionamos mais um barra, seguido por dois-pontos e um nome para identificar aquele parâmetro (o dois-pontos, indica que o identificador não é um valor literal):**

  ```react
  <Routes>
     <Route path="/param/:id" element={<Param />} />
  </Routes>
  ```

- **Agora, para isso funcionar, devemos ir onde temos de ir no _Link_ e adicionar o barra, seguido de qualquer coisa que vai representar esse identificador (parâmetro) [número, texto, ...]:**

  ```react
  <li>
    <Link to="/param/123">Param #01</Link>
  </li>
  ```

- **Agora, para capturar esse parãmetro que foi passado na URL (123), devemos ir no nosso componente (no meu caso, o componente Param), importar o componente _useParams_ e fazer:**

  ```react
  import React from 'react';
  
  import {useParams} from 'react-router-dom'; // Importando o useParams
  
  export default function Param(props) {
  
      const {id} = useParams(); // Mesmo identificador dado ao parâmetro
  
      return (
          <section className="param">
              <h1>Param</h1>
              <p>Valor: {id}</p> // Capturando o valor
          </section>
      );
  }
  ```

  

