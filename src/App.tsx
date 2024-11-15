import "./index.css";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function App() {
    const { getUser} = useAuth();

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="h-3/4 flex items-center justify-around">
                    <div className="flex flex-col items-center w-2/5 h-3/4">
                        <p className="text-4xl text-white font-Revalia">
                            Space Traders
                            <span className="text-5xl text-center block font-Revalia">Game</span>
                        </p>
                        <img
                            src="./src/assets/img/logoSpaceTraders.png"
                            alt="logo"
                            className="h-3/6"
                        />
                    </div>

                    <div className="flex flex-col w-2/5 h-3/4 rounded border border-purple-700 border-4 p-8 justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="font-bold text-2xl mb-2 font-Revalia text-lime-700">
                                ¡ Bienvenido viajero !
                            </h2>

                            <p className="text-white text-xl font-Revalia">
                                La aventura te espera, explora cada esquina de la
                                galaxia inexploradas, completa misiones yextrae
                                minerales para mejorar tu nave
                            </p>
                        </div>

                        <button
                            className="rounded border border-lime-700 border-4 text-white font-Revalia hover:border-lime-800 hover:text-gray-200 rounded-lg text-center px-2 py-4"
                        >
                            {getUser() == null ? (
                            <Link
                                to={"/login"}
                                className="text-xl"
                            >
                                Ir al login
                            </Link>
                        ) : (
                            <Link
                                to={"/home"}
                                className="text-xl"
                            >
                                Ir al login
                            </Link>                                          
                        )}
                        </button>
                    </div>
                </div>

                <div className="h-screen w-screen absolute top-0 bottom-0 -z-10">
                    <img
                        src="./src/assets/img/landingPage2.png"
                        alt="background"
                        className="h-full w-full"
                    />
                </div>
            </div>
            
            
            
            
            
            
            
            
            {/* <div className="bg-gray-900 h-screen flex items-start">
                <div>
                    <p>
                        Space Traders<span>Game</span>
                    </p>
                    <img src="@logoSpaceTraders.png" alt="logo" />
                </div>
                
                <div className="flex flex-col w-3/5 rounded overflow-hidden shadow-lg m-16 ms-40 p-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-7xl mb-2  text-opacity-85 font-Revalia text-purple-700">
                            Bienvenido al cliente de SpaceTraders!
                        </div>
                    </div>

                    <div className="px-6 pt-4 pb-2 flex flex-col m-11">
                        {getUser() == null ? (
                            <Link
                                to={"/login"}
                                className="text-xl font-medium hover:underline text-gray-200"
                            >
                                Ir al login
                            </Link>
                        ) : (
                            <Link
                                to={"/home"}
                                className="text-xl font-medium hover:underline text-gray-200"
                            >
                                Ir al login
                            </Link>                                          
                        )}
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default App;
