//Layout
import { Layout } from "./layout";

//Routes components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Empleado from "./pages/Empleado";
import ListEmpleado from "./pages/ListEmpleado";

const App = () => {
  document.addEventListener("keydown", (e) => {
    if ((e.which || e.keyCode) === 116) e.preventDefault();
  });
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path='/LugoTech/Empleado/registro'
            component={Empleado}
          />
          <Route exact path='/LugoTech/Empleado' component={ListEmpleado} />
          <Route exact path='/LugoTech/' component={ListEmpleado} />
          <Route
            path='/LugoTech/'
            component={() => (
              <div className='centrado'>
                <h1 className='col '>
                  <i className='fa fa-cog fa-spin h1'></i>
                  Estamos trabjando en ello...
                </h1>
              </div>
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
