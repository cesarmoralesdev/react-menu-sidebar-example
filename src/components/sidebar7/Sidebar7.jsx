
import { faBell, faUser, faBars, faWallet, faExchangeAlt, faSignOut, faHome, faSearch, faHandHolding, faQrcode, faMusic, faSquare, faShoppingBag, faChartBar, faPeopleGroup, faCar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar7.css';
import { useState } from 'react';
export const Sidebar7 = () => {
    const [asideOpen, setAsideOpen] = useState(true);
    const [profileOpen, setProfileOpen] = useState(false);



    return (
        <main className="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
            {/* <!-- header page --> */}
            <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
                {/* <!-- logo --> */}
                <div className="flex items-center space-x-2">
                    <button type="button" className="text-3xl" onClick={() => setAsideOpen(!asideOpen)}>
                        {/* <i className="bx bx-menu"></i></button> */}
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div>Logo</div>
                </div>

                {/* <!-- button profile --> */}
                <div>
                    <button type="button" onClick={() => setProfileOpen(!profileOpen)}
                        className="h-9 w-9 overflow-hidden rounded-full">
                        <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
                    </button>

                    {/* <!-- dropdown profile --> */}
                    {profileOpen && <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
                    // x-show="profileOpen" x-transition
                    >
                        <div className="flex items-center space-x-2 p-2">
                            <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" className="h-9 w-9 rounded-full" />
                            <div className="font-medium">Hafiz Haziq</div>
                        </div>

                        <div className="flex flex-col space-y-3 p-2">
                            <a href="#" className="transition hover:text-blue-600">My Profile</a>
                            <a href="#" className="transition hover:text-blue-600">Edit Profile</a>
                            <a href="#" className="transition hover:text-blue-600">Settings</a>
                        </div>

                        <div className="p-2">
                            <button className="flex items-center space-x-2 transition hover:text-blue-600">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                    </path>
                                </svg>
                                <div>Log Out</div>
                            </button>
                        </div>
                    </div>}
                </div>
            </header >

            {asideOpen && <div className="flex">
                {/* <!-- aside --> */}
                <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2" style={{ height: "90.5vh" }}>
                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl">
                            {/* <i className="bx bx-home"></i> */}
                            <FontAwesomeIcon icon={faHome} />
                            </span>
                        <span>Dashboard</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl">
                            {/* <i className="bx bx-cart"></i> */}
                            <FontAwesomeIcon icon={faCar} />
                            </span>
                        <span>Cart</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl">
                            {/* <i className="bx bx-shopping-bag"></i> */}
                        <FontAwesomeIcon icon={faShoppingBag} />
                        </span>
                        <span>Shopping</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl">
                            {/* <i className="bx bx-heart"></i> */}
                            <FontAwesomeIcon icon={faHeart} />
                            </span>
                        <span>My Favourite</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl">                            
                            {/* <i className="bx bx-user"></i> */}
                            <FontAwesomeIcon icon={faUser} />
                            </span>
                        <span>Profile</span>
                    </a>
                </aside>

                {/* <!-- main content page --> */}
                <div className="w-full p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quam odit officiis
                    magni doloribus ipsa dolore, dolores nihil accusantium labore, incidunt autem iure quae vitae voluptate,
                    esse asperiores aliquam repellat. Harum aliquid non officiis porro at cumque eaque inventore iure. Modi sunt
                    optio mollitia repellat sed ab quibusdam quos harum!</div>
            </div>}
        </main >
    );
}

