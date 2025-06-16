
import { faBell, faUser, faBars, faWallet, faExchangeAlt, faSignOut, faHome, faSearch, faHandHolding, faQrcode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar4.css';
import { useState } from 'react';
export const Sidebar4 = () => {
    const [IsOpen, setIsOpen] = useState(true);

    const handleBars = () => {
        setIsOpen(!IsOpen);
    }

    return (
        <div className="bg-gray-200">
            <nav className="bg-white border-b border-gray-300">
                <div className="flex justify-between items-center px-9">
                    {/* <!-- Aumenté el padding aquí para añadir espacio en los lados -->
                    <!-- Ícono de Menú --> */}
                    <button id="menuBtn" className='text-cyan-500' onClick={handleBars}>
                        {/* <i className="fas fa-bars text-cyan-500 text-lg"></i> */}
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {/* <!-- Logo --> */}
                    <div className="ml-1">
                        <img
                            src="https://images.pexels.com/photos/32440654/pexels-photo-32440654/free-photo-of-entrada-encantadora-de-un-cafe-parisino-lleno-de-plantas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="mt-[1rem] mb-[1rem] h-8 w-12 rounded-lg shadow-md" />
                    </div>

                    {/* <!-- Ícono de Notificación y Perfil --> */}
                    <div className="space-x-4">
                        <button className='text-cyan-500'>
                            {/* <i className="fas fa-bell text-cyan-500 text-lg"></i> */}
                            <FontAwesomeIcon icon={faBell} />
                        </button>

                        {/* <!-- Botón de Perfil --> */}
                        <button className='text-cyan-500'>
                            {/* <i className="fas fa-user text-cyan-500 text-lg"></i> */}
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* <!-- Barra lateral --> */}
            {IsOpen === true && <div id="sideNav" className="lg:block bg-white w-64 h-screen fixed rounded-none border-none">
                {/* <!-- Items --> */}
                <div className="p-4 space-y-4">
                    {/* <!-- Inicio --> */}
                    <a href="#" aria-label="dashboard"
                        className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                        {/* <i className="fas fa-home text-white"></i> */}
                        <FontAwesomeIcon icon={faHome} />
                        <span className="-mr-1 font-medium">Inicio</span>
                    </a>

                    <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        {/* <i className="fas fa-wallet"></i> */}
                        <FontAwesomeIcon icon={faWallet} />
                        <span>Billetera</span>
                    </a>
                    <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        {/* <i className="fas fa-exchange-alt"></i> */}
                        <FontAwesomeIcon icon={faExchangeAlt} />
                        <span>Transacciones</span>
                    </a>
                    <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        {/* <i className="fas fa-user"></i> */}
                        <FontAwesomeIcon icon={faUser} />
                        <span>Mi cuenta</span>
                    </a>
                    <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        {/* <i className="fas fa-sign-out-alt"></i> */}
                        <FontAwesomeIcon icon={faSignOut} />
                        <span>Cerrar sesión</span>
                    </a>
                </div>
            </div>}

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">

                {/* <!-- Buscador --> */}
                <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
                    <div className="flex items-center">
                        {/* <i className="px-3 fas fa-search ml-1"></i> */}
                        <FontAwesomeIcon icon={faSearch} className="px-3 fas fa-search ml-1" />
                        <input type="text" placeholder="Buscar..." className="ml-3 focus:outline-none w-full" />
                    </div>
                </div>

                {/* <!-- Contenedor Principal --> */}
                <div className="lg:flex gap-4 items-stretch">
                    {/* <!-- Caja Grande --> */}
                    <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                        <div className="flex justify-center items-center space-x-5 h-full">
                            <div>
                                <p>Saldo actual</p>
                                <h2 className="text-4xl font-bold text-gray-600">50.365</h2>
                                <p>25.365 $</p>
                            </div>
                            <img src="https://cdn-icons-png.flaticon.com/512/218/218390.png" alt="wallet"
                                className="pl-[2em] h-12 md:h-20 w-45" />
                        </div>
                    </div>

                    {/* <!-- Caja Blanca --> */}
                    <div className="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
                        {/* <!-- Cajas pequeñas --> */}
                        <div className="flex flex-wrap justify-between h-full">
                            {/* <!-- Caja pequeña 1 --> */}
                            <div
                                className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                {/* <i className="fas fa-hand-holding-usd text-white text-4xl"></i> */}
                                <FontAwesomeIcon icon={faHandHolding} className="text-white text-4xl" />
                                <p className="text-white">Depositar</p>
                            </div>

                            {/* <!-- Caja pequeña 2 --> */}
                            <div
                                className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                {/* <i className="fas fa-exchange-alt text-white text-4xl"></i> */}
                                <FontAwesomeIcon icon={faExchangeAlt} className="text-white text-4xl" />
                                <p className="text-white">Transferir</p>
                            </div>

                            {/* <!-- Caja pequeña 3 --> */}
                            <div
                                className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                {/* <i className="fas fa-qrcode text-white text-4xl"></i> */}
                                <FontAwesomeIcon icon={faQrcode} className="text-white text-4xl" />
                                <p className="text-white">Canjear</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Tabla --> */}
                <div className="bg-white rounded-lg p-4 shadow-md my-4">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border-b-2 w-full">
                                    <h2 className="text-ml font-bold text-gray-600">Transacciones</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                    <div>
                                        <h2>Comercio</h2>
                                        <p>24/07/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                    <p><span>150$</span></p>
                                </td>
                            </tr>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                    <div>
                                        <h2>Comercio</h2>
                                        <p>24/06/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                    <p><span>15$</span></p>
                                </td>
                            </tr>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                    <div>
                                        <h2>Comercio</h2>
                                        <p>02/05/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                    <p><span>50$</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

