import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function Registro() {
    const { signUp } = useAuth();
    const navigate = useNavigate();

    function handleRegistroSubmit(e: any) {
        e.preventDefault();

        if(passRepeatValue !== passValue){
            alert("Las contraseñas no coinciden!")
            return;
        }
        signUp(emailValue, passValue)
            .then((userCredential) => {
                alert(
                    `Estas logueado con el usuario ${userCredential.user.email}`
                );
                navigate("/");
            })
            .catch((error) => {
                alert(`Error! ${error.code} - ${error.message}`);
            });
    }

    const [emailValue, setEmailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [passRepeatValue, setPassRepeatValue] = useState("");

    return (
        <section className="relative">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex flex-row items-center space-between">
                            <img src="./src/assets/img/logoSpaceTraders.png" alt="logo" className="w-12 me-3"/>
                            <p className="font-Revalia text-purple-600 text-3xl text-center">SPACE TRADERS</p>
                        </div>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-purple-600 font-Revalia text-center">
                            Crear cuenta
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleRegistroSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium font-Revalia text-gray-900 dark:text-lime-600"
                                >
                                    Ingresar Email:{" "}
                                    <span className="text-amber-600">
                                        &lt;email&gt;
                                    </span>
                                </label>
                                <input
                                    value={emailValue}
                                    onChange={(e) =>
                                        setEmailValue(e.target.value)
                                    }
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Revalia"
                                    placeholder="trader@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-600 font-Revalia"
                                >
                                    Ingresar contraseña:{" "}
                                    <span className="text-amber-600">
                                        &lt;contraseña&gt;
                                    </span>
                                </label>
                                <input
                                    value={passValue}
                                    onChange={(e) =>
                                        setPassValue(e.target.value)
                                    }
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Revalia"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="passwordRepeat"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-600 font-Revalia"
                                >
                                    Repetir contraseña:{" "}
                                    <span className="text-amber-600">
                                        &lt;repetir contraseña&gt;
                                    </span>
                                </label>
                                <input
                                    value={passRepeatValue}
                                    onChange={(e) =>
                                        setPassRepeatValue(e.target.value)
                                    }
                                    type="password"
                                    name="passwordRepeat"
                                    id="passwordRepeat"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Revalia"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <Link
                                    to="/login"
                                    className="text-sm p-1 pt-2 font-medium text-primary-600 hover:underline dark:text-gray-200 font-Revalia"
                                >
                                    Volver a Login
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-auto text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-Revalia"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="h-screen w-screen absolute top-0 bottom-0 -z-10">
                <img src="./src/assets/img/landingPage1.webp" alt="background" className="h-full w-full"/>        
            </div>
        </section>
    );
}
