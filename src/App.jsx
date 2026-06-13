import { Route, Switch, Link } from "wouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalogo from "./pages/Catalogo/Catalogo";

import './App.css'
export default function App() {
  return (
    <div>
      <Header />
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/about">Acerca de</Link>
        <Link href="/Catalogo">Catalogo de Productos</Link>
      </nav>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about">  
          <div>Contenido de Acerca de</div>
        </Route>
        <Route path="/Catalogo" component={Catalogo}/>
        <Route>404: ¡Página no encontrada!</Route>
      </Switch>
      <Footer />
    </div>
  );
}

const Home = () => <h2>Inicio</h2>;