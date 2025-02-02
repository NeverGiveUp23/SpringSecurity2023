import React, {useState, useEffect} from "react";
import axios from "axios";
import budgetService from '../Service/BudgetService';
import {Link} from "react-router-dom";


const Register = (props: { onCreate: () => void; }) => {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        budgetService.registerUser({firstname, lastname, email, password})
            .then(res => {
                props.onCreate()
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
            })
            .catch(err => console.log(err))
    }





    return (
        <div>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="firstname"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        First Name</label>
                                    <input type="text" name="firstname" id="email"
                                           value={firstname}
                                           onChange={e => setFirstName(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="John " />
                                </div>
                                <div>
                                    <label htmlFor="lastname"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Last Name</label>
                                    <input type="text" name="lastname" id="email"
                                           value={lastname}
                                           onChange={e => setLastName(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder=" Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                       Your Email</label>
                                    <input type="email" name="email" id="email"
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                           value={password}
                                           onChange={e => setPassword(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           />
                                </div>
                                <Link to={"/dashboard"}>
                                    <button type="submit"
                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                                        an account
                                    </button>
                                </Link>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#"
                                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                    here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Register;