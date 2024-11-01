import { Link } from "react-router-dom";
import homeIcon from "./assets/svg/homeIcon.svg";
import profileIcon from "./assets/svg/profileIcon.svg";
import baseIcon from "./assets/svg/baseIcon.svg";
import shipIcon from "./assets/svg/shipIcon.svg";
import marketIcon from "./assets/svg/marketIcon.svg";
import missionIcon from "./assets/svg/missionIcon.svg";
import inventoryIcon from "./assets/svg/inventoryIcon.svg";

export default function Inventory() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="h-3/4 flex items-center justify-around">
                    <div className="flex flex-col items-center w-2/5 h-3/4">
                        <p className="text-4xl text-white font-Revalia">
                            Space Traders
                            <span className="text-5xl text-center block font-Revalia">
                                Game
                            </span>
                        </p>
                        <img
                            src="./src/assets/img/logoSpaceTraders.png"
                            alt="logo"
                            className="h-3/6"
                        />
                    </div>

                    <div className="flex flex-col w-2/5 h-3/4 rounded border-purple-700 border-4 p-8 justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="font-bold text-2xl mb-2 font-Revalia text-lime-700">
                                ¡ Bienvenido viajero !
                            </h2>

                            <p className="text-white text-xl font-Revalia">
                                La aventura te espera, explora cada esquina de
                                la galaxia inexploradas, completa misiones
                                yextrae minerales para mejorar tu nave
                            </p>
                        </div>
                    </div>
                </div>

                <nav className="w-5/6">
                    <ul className="flex justify-around">
                        <li className="text-white rounded hover:cursor-pointer p-2 hover:outline hover:outline-purple-700 hover:outline-4" title="Inicio">
                            <Link to="/home">
                                <img src={homeIcon} alt="Icono de inicio"></img>
                            </Link>
                        </li>

                        <li className="text-white rounded hover:cursor-pointer p-2 hover:outline hover:outline-purple-700 hover:outline-4" title="Perfil">
                            <Link to="/profile">
                                <img
                                    src={profileIcon}
                                    alt="Icono de perfil"
                                ></img>
                            </Link>
                        </li>

                        <li className="text-white rounded hover:cursor-pointer p-2 hover:outline hover:outline-purple-700 hover:outline-4" title="Base">
                            <Link to="/base">
                                <img src={baseIcon} alt="Icono de base"></img>
                            </Link>
                        </li>

                        <li className="text-white rounded hover:cursor-pointer p-2 hover:outline hover:outline-purple-700 hover:outline-4" title="Nave">
                            <Link to="/ship">
                                <img src={shipIcon} alt="Icono de nave"></img>
                            </Link>
                        </li>

                        <li className="text-white rounded hover:cursor-pointer bg-purple-700 p-2 outline outline-purple-700 outline-4" title="Inventario">
                            <Link to="/inventory">
                                <img
                                    src={inventoryIcon}
                                    alt="Icono del inventario"
                                ></img>
                            </Link>
                        </li>

                        <li className="text-white rounded hover:cursor-pointer p-2 hover:outline hover:outline-purple-700 hover:outline-4" title="Misiones">
                            <Link to="/mission">
                                <img
                                    src={missionIcon}
                                    alt="Icono de misiones"
                                ></img>
                            </Link>
                        </li>

                        <li className="text-white rounded hover:cursor-pointer p-2 hover:outline hover:outline-purple-700 hover:outline-4" title="Mercado">
                            <Link to="/market">
                                <img
                                    src={marketIcon}
                                    alt="Icono del mercado"
                                ></img>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="h-screen w-screen absolute top-0 bottom-0 -z-10">
                    <img
                        src="./src/assets/img/landingPage2.png"
                        alt="background"
                        className="h-full w-full"
                    />
                </div>
            </div>
        </>
    );
}