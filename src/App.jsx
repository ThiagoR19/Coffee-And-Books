import { Route, Switch } from "wouter";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Catalogo from "./pages/Catalogo/Catalogo";
import Home from "./pages/Home/Home"
import TerminosYCondiciones from "./pages/TerminosYCondiciones/TerminosYCondiciones";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import Carrito from "./pages/Carrito/Carrito";
import ProductoCafe from "./pages/ProductoCafe/ProductoCafe";

import './App.css'

export default function App() {
  return (
    <div>
      <Header/>
      
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/Catalogo/:filtro" component={Catalogo} />
        <Route path="/sobrenosotros" component={SobreNosotros} />
        <Route path="/faqs" component={PreguntasFrecuentes} />
        <Route path="/terminos" component={TerminosYCondiciones} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/productoCafe" component={ProductoCafe} />
        <Route path="/" component={Home} />
        <Route>404: ¡Página no encontrada!</Route>
      </Switch>

      <Footer />
    </div >
  );
}
