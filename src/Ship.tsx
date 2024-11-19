import NavBar from "./NavBar";

export default function Ship() {
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

                <NavBar activeButton="Nave"></NavBar>

                <div className="h-screen w-screen absolute top-0 bottom-0 -z-10">
                    <img
                        src="./src/assets/img/landingPage3.png"
                        alt="background"
                        className="h-full w-full"
                    />
                </div>
            </div>
        </>
    );
}
