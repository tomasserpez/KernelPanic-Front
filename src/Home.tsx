import { useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function Home() {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function cerrarSesionHandler() {
        signOut()
            .then(() => {
                alert("Sesión Cerrada!");
                navigate("/");
            })
            .catch((e) => {
                alert(`Se produjo un error ${e.code} - ${e.message}`);
            });
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="h-3/4 flex items-start justify-around">
                    <div className="flex flex-col items-center w-2/ h-3/4">
                        <p className="text-3xl text-white">
                            Space Traders
                            <span className="text-4xl block">Game</span>
                        </p>
                        <img
                            src="./src/assets/img/logoSpaceTraders.png"
                            alt="logo"
                            className="h-3/12 w-3/12"
                        />
                    </div>

                    <div className="flex flex-col w-2/5 h-3/4 border border-purple-700 border-4 p-8 justify-between">
                        <h2 className="font-bold text-2xl mb-2 font-Revalia text-lime-700">
                            ¡ Bienvenido viajero !
                        </h2>

                        <p className="text-white">
                            La aventura te espera,Explora cada esquina de la
                            galaxia inexploradas, completa misiones yextrae
                            minerales para mejorar tu nave
                        </p>

                        <button
                            onClick={cerrarSesionHandler}
                            className="text-lime-700 self-center bg-primary-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-base px-5 py-2.5 text-center"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>

                <nav>
                    <ul className="flex gap-4">
                        <li className="text-white">User</li>
                        <li className="text-white">Base</li>
                        <li className="text-white">Nave</li>
                        <li className="text-white">Home</li>
                        <li className="text-white">Market</li>
                        <li className="text-white">Missions</li>
                        <li className="text-white">Inventory</li>
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
