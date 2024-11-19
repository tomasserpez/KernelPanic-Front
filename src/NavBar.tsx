import { Link } from "react-router-dom"
import homeIcon from "./assets/svg/homeIcon.svg";
import profileIcon from "./assets/svg/profileIcon.svg";
import baseIcon from "./assets/svg/baseIcon.svg";
import shipIcon from "./assets/svg/shipIcon.svg";
import marketIcon from "./assets/svg/marketIcon.svg";
import missionIcon from "./assets/svg/missionIcon.svg";
import inventoryIcon from "./assets/svg/inventoryIcon.svg";

export default function NavBar({activeButton} : {activeButton : string}){
    
    return <nav className="w-5/6">
    <ul className="flex justify-around">
        <NavButton title="Inicio" link="/home" icon={homeIcon} activeButton={activeButton}></NavButton>
        <NavButton title="Perfil" link="/profile" icon={profileIcon} activeButton={activeButton}></NavButton>
        <NavButton title="Base" link="/base" icon={baseIcon} activeButton={activeButton}></NavButton>
        <NavButton title="Nave" link="/ship" icon={shipIcon} activeButton={activeButton}></NavButton>
        <NavButton title="Inventario" link="/inventory" icon={inventoryIcon} activeButton={activeButton}></NavButton>
        <NavButton title="Misiones" link="/mission" icon={missionIcon} activeButton={activeButton}></NavButton>
        <NavButton title="Mercado" link="/market" icon={marketIcon} activeButton={activeButton}></NavButton>
    </ul>
</nav>
}

function NavButton({title, link, icon, activeButton} : {title : string, link : string, icon: string,activeButton : string}){

    const baseClass = "text-white rounded hover:cursor-pointer p-2 hover:outline hover:outline-purple-700 hover:outline-4";
    const activeClass = "text-white rounded hover:cursor-pointer bg-purple-700 p-2 outline outline-purple-700 outline-4";

    return  <li className={activeButton == title ? activeClass : baseClass} title={title}>
                <Link to={link}>
                    <img
                        src={icon}
                        alt="Icono del mercado"
                    ></img>
                </Link>
            </li>
}