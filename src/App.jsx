import React from 'react';
// Importa los componentes de react-router-dom necesarios
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Sidebar1 } from "./components/sidebar1/Sidebar1"
import { Sidebar2 } from "./components/sidebar2/Sidebar2"
import { Sidebar3 } from "./components/sidebar3/Sidebar3"
import { Sidebar4 } from "./components/sidebar4/Sidebar4"
import { Sidebar5 } from "./components/sidebar5/Sidebar5"
import { Sidebar6 } from "./components/sidebar6/Sidebar6"
import { Sidebar7 } from "./components/sidebar7/Sidebar7"
import { Sidebar8 } from "./components/sidebar8/Sidebar8"


export const App = () => {

  const SidebarRoutes = {
    Sidebar1: '/sidebar1',
    Sidebar2: '/sidebar2',
    Sidebar3: '/sidebar3',
    Sidebar4: '/sidebar4',
    Sidebar5: '/sidebar5',
    Sidebar6: '/sidebar6',
    Sidebar7: '/sidebar7',
    Sidebar8: '/sidebar8',
  };

  return (
    <>
      <Router>
        <div className="flex flex-col justify-center">

          {/* Aquí se definen las rutas */}
          <Routes>
            {/* Ruta para la pantalla principal de selección de Sidebars */}
            <Route path="/" element={
              <>
                <h1 className="text-5xl font-extrabold mb-12 text-shadow-lg text-center">
                  Selecciona el Estilo de Sidebar
                </h1>

                <div className="flex gap-8 justify-center items-center">
                  {/* Usamos <Link> en lugar de <button> para la navegación entre rutas */}
                  {Object.entries(SidebarRoutes).map(([SidebarName, path]) => (
                    <Link
                      key={SidebarName}
                      to={path} // 'to' especifica la ruta a la que navegar
                      className="
                      bg-black/15
                      hover:bg-white/20 backdrop-blur-sm
                      p-6 rounded-xl shadow-lg border border-white/20
                      font-semibold text-xl text-center
                      transition-all duration-300 ease-in-out
                      transform hover:scale-105 active:scale-95
                      focus:outline-none focus:ring-4 focus:ring-white/50
                      flex items-center justify-center
                    "
                      style={{ textDecoration: 'none' }} // Para quitar el subrayado de los links
                    >
                      {SidebarName.replace('Sidebar', 'Sidebar ')}
                    </Link>
                  ))}
                </div>
              </>
            } />

            {/* Rutas para cada componente de Sidebar */}
            {/* Al usar Route, el componente se renderizará cuando la URL coincida con el 'path' */}
            <Route path="/sidebar1" element={<Sidebar1 />} />
            <Route path="/sidebar2" element={<Sidebar2 />} />
            <Route path="/sidebar3" element={<Sidebar3 />} />
            <Route path="/sidebar4" element={<Sidebar4 />} />
            <Route path="/sidebar5" element={<Sidebar5 />} />
            <Route path="/sidebar6" element={<Sidebar6 />} />
            <Route path="/sidebar7" element={<Sidebar7 />} />
            <Route path="/sidebar8" element={<Sidebar8 />} />

            {/* Ruta para manejar URLs no encontradas */}
            <Route path="*" element={
              <div className="min-h-screen w-full bg-red-800 text-white flex flex-col items-center justify-center text-3xl font-bold">
                <p>Error 404: Página no encontrada.</p>
                <Link to="/" className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg text-white text-xl transition-colors duration-200">
                  Ir a Inicio
                </Link>
              </div>
            } />

          </Routes>
        </div>
      </Router>
    </>
  )
}

