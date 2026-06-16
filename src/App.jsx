import { Route, Switch, Link } from "wouter";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import TerminosYCondiciones from "./pages/TerminosYCondiciones/TerminosYCondiciones";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import Carrito from "./pages/Carrito/Carrito";

import './App.css'

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        {/* <Route path="/catalogo" component={Catalogo} /> */}
        <Route path="/sobrenosotros" component={SobreNosotros} />
        <Route path="/faqs" component={PreguntasFrecuentes} />
        <Route path="/terminos" component={TerminosYCondiciones} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/" ><div>Contenido de Acerca de</div></Route>
        <Route>404: ¡Página no encontrada!</Route>
      </Switch>
      <Footer />
    </main >
  );
}
