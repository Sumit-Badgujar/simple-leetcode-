
export const Problem = ()=>{

    return (
        <>
            <h2 className="uppercase text-3xl font-bold text-sky-600 text-center m-2
            p-1"> &lt;&#47;&gt; Coding ground</h2>
            <div 
            className="flex gap-px">
                <ProblemCard  className="w-1/2"/>
                <CompilerCard />
            </div>
        </>
    )
};

export const ProblemCard = ()=>{

    return (
        <>
            <div className="bg-slate-900 text-white h-screen w-full m-0 p-5 ">
                <div>
                    <div className="text-2xl mb-5 p-3 font-bold ">
                        <span>1.  </span>
                        <span >Two Sum</span>
                    </div>
                    <div
                    className="text-lg font-mono  mb-5 p-3 ">
                       Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
                    </div>

                    <Example />
                    <Example />

                </div>
            </div>
        </>
    )
};


export const Example = ()=>{

    return (
        <>
            <span className="text-xl font-semibold text-white-900 m-3"
            >Example {1}</span>
            <br />
            <div className="text-xl font-light text-white-900 m-3">INPUT: nums = [2,7,11,15], target = 9</div>
            <div className="text-xl font-light text-white-900 m-3">OUTPUT: [0,1]</div>
        </>
    )
};

export const CompilerCard = () => {
    return (
      <div className="flex flex-col h-screen w-screen bg-slate-900 items-center justify-center">
        <div className="w-full  bg-slate-900 rounded-lg shadow-lg">
          {/* Header Section */}
          <div className="bg-slate-800 text-cyan-400 text-2xl font-bold p-4 rounded-t-lg">
            <h2>Code Here</h2>
          </div>
  
          {/* Main Section */}
          <div className="flex-grow p-4">
            <textarea
              className="w-full h-96 bg-black text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Write your code here..."
            ></textarea>
          </div>
  
          {/* Footer Section */}
          <div className="bg-slate-800 p-4 flex justify-end space-x-4 rounded-b-lg">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Run
            </button>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  