
import { faBell, faUser, faBars, faWallet, faExchangeAlt, faSignOut, faHome, faSearch, faHandHolding, faQrcode, faMusic, faSquare, faShoppingBag, faChartBar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar5.css';
export const Sidebar5 = () => {
    return (
        <div className="min-h-screen flex flex-row bg-gray-100">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-center h-20 shadow-md">
                    <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                {/* <i className="bx bx-home"></i> */}
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                {/* <i className="bx bx-music"></i> */}
                                <FontAwesomeIcon icon={faMusic} />
                            </span>
                            <span className="text-sm font-medium">Music</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                {/* <i className="bx bx-drink"></i> */}
                                <FontAwesomeIcon icon={faSquare} />
                            </span>
                            <span className="text-sm font-medium">Drink</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                {/* <i className="bx bx-shopping-bag"></i> */}
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>
                            <span className="text-sm font-medium">Shopping</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                {/* <i className="bx bx-chat"></i> */}
                                <FontAwesomeIcon icon={faChartBar} />
                            </span>
                            <span className="text-sm font-medium">Chat</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                {/* <i className="bx bx-user"></i> */}
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className="text-sm font-medium">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                {/* <i className="bx bx-bell"></i> */}
                                <FontAwesomeIcon icon={faBell} />
                            </span>
                            <span className="text-sm font-medium">Notifications</span>
                            <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                {/* <i className="bx bx-log-out"></i> */}
                                <FontAwesomeIcon icon={faSignOut} />
                            </span>
                            <span className="text-sm font-medium">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

