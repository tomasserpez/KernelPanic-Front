import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./contexts/AuthContext";

export default function Login(){

    const {logIn} = useAuth();
    const navigate = useNavigate()

    function handleLoginSubmit(e : any) {
        e.preventDefault();

        logIn(emailValue, passValue).then( (userCredential) => {
            alert(`Estas logueado con el usuario ${userCredential.user.email}`);
            navigate("/");
        }).catch((error) => {
            alert(`Error! ${error.code} - ${error.message}`)
        })
        
        
    }

    const [emailValue, setEmailValue] = useState('');
    const [passValue, setPassValue] = useState('');

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Ingrese a su cuenta!
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLoginSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">e-mail</label>
                                <input value={emailValue} onChange={e => setEmailValue(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="trader@example.com" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">contraseña</label>
                                <input value={passValue} onChange={e => setPassValue(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div className="flex flex-col">
                                <Link to="#" className="text-sm ps-1 font-medium text-primary-600 hover:underline dark:text-gray-200">Olvidé mi contraseña</Link>
                                <Link to="#" className="text-sm p-1 pt-2 font-medium text-primary-600 hover:underline dark:text-gray-200">Registrarse</Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Ingresar</button> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}