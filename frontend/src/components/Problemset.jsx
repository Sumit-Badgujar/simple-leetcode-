
import React from 'react';



export const Problemset = ()=>{

    return (
        <>
           <div>
            <h1 className="uppercase text-3xl font-bold text-sky-600 text-center m-2
            p-1">Problemset</h1>
           
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-sky-700">
                <tr >
                    <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider text-black ">Q-id</th>
                    <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider text-black ">Title</th>
                    <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider text-black ">Acceptance</th>
                    <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider text-black ">Difficulty</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            <Problemrow id="1." title="Sort an array" acceptance="80.02%" difficulty="Easy" />
            <Problemrow id="2." title="Add Two Numbers" acceptance="43.5%" difficulty="Medium" />
            <Problemrow id="3." title="Median of Two Sorted Arrays" acceptance="40.8%" difficulty="Hard" />
            </tbody>
      </table>
           </div>
        </>
    )
};


export const  Problemrow = ({
    id, title,acceptance,difficulty
})=>{

    return (
        <>
           <tr className="bg-slate-300 ">
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {id}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {title}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {acceptance}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {difficulty}</td>
            </tr>
        </>
    )
};

