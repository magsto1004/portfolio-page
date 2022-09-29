import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-yellow-900 bg-amber-100">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div classname="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-green-700">Work</p>
                <p className="py-6">Check out some of my recent projects</p>
            </div>

            {/* container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* grid item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-amber-100 tracking-wider">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Demo</button>
                            </a>
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-amber-100 tracking-wider">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Demo</button>
                            </a>
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-amber-100 tracking-wider">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Demo</button>
                            </a>
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-amber-100 tracking-wider">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Demo</button>
                            </a>
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-amber-100 tracking-wider">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Demo</button>
                            </a>
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-amber-100 tracking-wider">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Demo</button>
                            </a>
                            <a href="">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work