// // src/components/Signup.js
// import React, { useState } from 'react';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Input validation
//     if (!email || !password) {
//       setMessage('Email and password are required');
//       return;
//     }

//     // API call to backend
//     try {
//       const response = await fetch('/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });

//       if (response.ok) {
//         setMessage('Signup successful!');
//       } else {
//         const errorData = await response.json();
//         setMessage(`Signup failed: ${errorData.message}`);
//       }
//     } catch (error) {
//       setMessage(`Signup failed: ${error.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//       <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Sign Up
//           </button>
//         </div>
//       </form>
//       {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//     </div>
//   </div>
// );
// };



// export default Signup;




export const Signup = ()=> {
  return (
    <>
      <div className="h-screen w-screen bg-slate-950 flex justify-center items-center">

        <div className="bg-slate-900 p-10 w-1/3 h-auto rounded " >
        
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Sign Up</h2>

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

        </div>
      
      </div>
    </>
  );
}
