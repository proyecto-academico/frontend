import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <div class="espaciado">
          <nav class="navbar border-bottom navbar-expand-lg">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="logo.png" alt=""/></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <hr/>
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link text-center" href="#">Inicio</a>
                      </li>
                  </ul>
              </div>
            </div>
          </nav>
      </div>

      <div class="container">
          <div class="espaciado-def row justify-content-center">
              <div class="espaciado-login p-4 rounded">
                  <div class="">
                      <h2 class="text-center">Iniciar sesión</h2>
                      <div class="form rounded shadow p-3">
                          <form method="POST" action="">
                              <div class="form-group">
                                  <div>
                                      <label for="username"><b>Usuario</b></label>
                                      <input type="text" class="form-control mt-1" placeholder="Ingrese su nombre de usuario" name="username" required/>
                                  </div>
                                  <div>
                                      <label for="pwd" class="mt-1"><b>Contraseña</b></label>
                                      <input type="password" class="form-control" placeholder="Ingrese su contraseña" name="pdw" required/>
                                  </div>
                                  <button type="submit" class="btn btn-success mt-3 w-100">Ingresar</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
