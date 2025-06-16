import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faExchangeAlt, faGift, faHome, faSign, faSignOut, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'


export const Sidebar2 = () => {
    // Estado para controlar la visibilidad de la barra lateral en dispositivos móviles
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Función para alternar la visibilidad de la barra lateral
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        // Contenedor principal de la aplicación, similar al body original
        <div className="bg-gray-200 min-h-screen font-sans">
            {/* Barra de navegación superior (siempre visible) */}
            <nav className="bg-white border-b border-gray-300 w-full z-30">
                <div className="flex justify-between items-center px-4 py-2 sm:px-9">
                    {/* Ícono de Menú para dispositivos pequeños (oculto en lg) */}
                    <button id="menu-button" className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-cyan-500" onClick={toggleSidebar}>
                        <i className="fas fa-bars text-cyan-500 text-lg"></i>
                    </button>
                    {/* Logo */}
                    <div className="ml-1">
                        <img
                            src="https://images.pexels.com/photos/32440654/pexels-photo-32440654/free-photo-of-entrada-encantadora-de-un-cafe-parisino-lleno-de-plantas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="logo"
                            className="ml-[2rem] h-16 w-24 rounded-lg shadow-md" // Clase 'rounded-lg' añadida aquí
                        />
                    </div>


                    {/* Ícono de Notificación y Perfil */}
                    <div className="flex space-x-4">
                        <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-cyan-500">
                            {/* <i className="fas fa-bell text-cyan-500 text-lg"></i> */}
                            <FontAwesomeIcon icon={faBell} />
                        </button>

                        {/* Botón de Perfil */}
                        <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-cyan-500">
                            {/* <i className="fas fa-user text-cyan-500 text-lg"></i> */}
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Contenedor que aplica lg:flex para la barra lateral y el contenido principal */}
            <div className="lg:flex">
                {/* Barra lateral */}
                <div
                    id="sidebar"
                    // Clases condicionales para mostrar/ocultar la barra lateral
                    // En pantallas grandes (lg), siempre es 'block' y se posiciona normalmente.
                    // En pantallas pequeñas, se oculta/muestra según el estado 'isSidebarOpen'
                    // y se usa 'fixed' con 'transform' para el deslizamiento.
                    className={`
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 
            lg:static lg:block 
            bg-white w-64 h-screen fixed top-0 left-0 
            rounded-none border-none shadow-lg lg:shadow-none 
            z-20 transition-transform duration-300 ease-in-out
          `}
                >
                    {/* Items de la barra lateral */}
                    <div className="p-4 space-y-4 pt-8">
                        {/* Inicio */}
                        <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400 group">
                            {/* <i className="fas fa-home text-white text-lg"></i> */}
                            <FontAwesomeIcon icon={faHome} />
                            <span className="-mr-1 font-medium">Inicio</span>
                        </a>
                        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:bg-gray-100 transition-colors duration-200">
                            {/* <i className="fas fa-gift text-lg group-hover:text-cyan-600"></i> */}
                            <FontAwesomeIcon icon={faGift} />
                            <span>Recompensas</span>
                        </a>
                        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:bg-gray-100 transition-colors duration-200">
                            <i className="fas fa-store text-lg group-hover:text-cyan-600"></i>
                            <span>Sucursales</span>
                        </a>

                        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:bg-gray-100 transition-colors duration-200">
                            {/* <i className="fas fa-wallet text-lg group-hover:text-cyan-600"></i> */}
                            <FontAwesomeIcon icon={faWallet} />
                            <span>Billetera</span>
                        </a>
                        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:bg-gray-100 transition-colors duration-200">
                            {/* <i className="fas fa-exchange-alt text-lg group-hover:text-cyan-600"></i> */}
                            <FontAwesomeIcon icon={faExchangeAlt} />
                            <span>Transacciones</span>
                        </a>
                        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:bg-gray-100 transition-colors duration-200">
                            {/* <i className="fas fa-user text-lg group-hover:text-cyan-600"></i> */}
                            <FontAwesomeIcon icon={faUser} />
                            <span>Mi cuenta</span>
                        </a>
                        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:bg-gray-100 transition-colors duration-200">
                            {/* <i className="fas fa-sign-out-alt text-lg group-hover:text-cyan-600"></i> */}
                            <FontAwesomeIcon icon={faSignOut} />
                            <span>Cerrar sesión</span>
                        </a>
                    </div>
                </div>

                {/* Overlay cuando el sidebar está abierto en móvil */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-10 lg:hidden"
                        onClick={toggleSidebar} // Cierra el sidebar al hacer clic fuera
                    ></div>
                )}

                {/* Contenido principal (ajustado para el espacio de la barra lateral) */}
                <div className="flex-1 px-4 py-6 sm:px-6 sm:py-8 w-full">
                    {/* Buscador */}
                    <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
                        <div className="flex items-center">
                            <i className="px-3 fas fa-search text-gray-400 ml-1"></i>
                            <input type="text" placeholder="Buscar..." className="ml-3 focus:outline-none w-full text-gray-700" />
                        </div>
                    </div>

                    {/* Contenedor Principal de Cajas */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
                        {/* Caja Grande */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:col-span-1">
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-5 h-full">
                                <div>
                                    <p className="text-gray-500 text-lg">Saldo actual</p>
                                    <h2 className="text-5xl font-bold text-gray-700">50.365</h2>
                                    <p className="text-gray-500 text-lg">25.365 $</p>
                                </div>
                                <img src="https://cdn-icons-png.flaticon.com/512/218/218390.png" alt="wallet" className="pl-[2em] h-12 md:h-20 w-45" />
                            </div>
                        </div>

                        {/* Caja Blanca con Cajas Pequeñas */}
                        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-2">
                            {/* Cajas pequeñas */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
                                {/* Caja pequeña 1 */}
                                <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                                    <i className="fas fa-hand-holding-usd text-white text-5xl"></i>
                                    <p className="text-white text-lg font-medium">Depositar</p>
                                </div>

                                {/* Caja pequeña 2 */}
                                <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                                    <i className="fas fa-exchange-alt text-white text-5xl"></i>
                                    <p className="text-white text-lg font-medium">Transferir</p>
                                </div>

                                {/* Caja pequeña 3 */}
                                <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                                    <i className="fas fa-qrcode text-white text-5xl"></i>
                                    <p className="text-white text-lg font-medium">Canjear</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabla */}
                    <div className="bg-white rounded-lg p-4 shadow-md my-4">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-white">
                                <tr>
                                    <th colSpan="2" className="px-4 py-2 text-left border-b-2 border-gray-200">
                                        <h2 className="text-xl font-bold text-gray-700">Transacciones</h2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-3 text-left align-middle w-1/2">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Comercio</h3>
                                            <p className="text-sm text-gray-500">24/07/2023</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right align-middle text-cyan-500 w-1/2">
                                        <p className="text-xl font-bold"><span>150$</span></p>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-3 text-left align-middle w-1/2">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Comercio</h3>
                                            <p className="text-sm text-gray-500">24/06/2023</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right align-middle text-cyan-500 w-1/2">
                                        <p className="text-xl font-bold"><span>15$</span></p>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-3 text-left align-middle w-1/2">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Comercio</h3>
                                            <p className="text-sm text-gray-500">02/05/2023</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right align-middle text-cyan-500 w-1/2">
                                        <p className="text-xl font-bold"><span>50$</span></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

