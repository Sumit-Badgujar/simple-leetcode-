
import React from 'react';
import { Link } from "react-router-dom";

export const Login = () =>{
    return (
        <>
          <div className="h-screen w-screen bg-slate-950 flex justify-center items-center">

            <div className="bg-slate-900 p-10 w-1/3 h-auto rounded " >

                <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Log In</h2>

                <div className="mb-4" >
                    <label className=" block text-yellow-50 text-lg font-bold mb-2"
                    htmlFor="email">Email</label>
                    <input 
                    className="shadow appearance-none  w-full rounded py-2 px-3 text-gray-900 leading-tight focus:outline-none  focus:shadow-outline"
                    type="email"
                    id="email"
                    // value={email}
                    placeholder="sumitsjb@gmail.com"
                    required  
                    />
                </div>


                <div className="mb-4  " >
                    <label className="block text-yellow-50 text-lg font-bold mb-2"
                    htmlFor="password">Password</label>
                    <input 
                    className="shadow appearance-none boder w-full rounded py-2 px-3 text-gray-900 leading-tight focus:outline-none  focus:shadow-outline"
                    type="password"
                    id="password"
                    // value={password}
                    placeholder="s*****n"
                    required  
                    />
                </div>



                <div className="flex items-center justify-center ">
                    <button
                    className=" w-4/5 bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 mt-10 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Submit</button>
                </div>

                {/* <div className="mt-4">
                    <Link to="/login" className="text-blue-500">Don't have an account? Sign up</Link>
                </div> */}

            </div>

            </div>
        </>
    )
};

