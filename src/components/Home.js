import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-amber-100">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-green-700">Hi, my name is</p>
                <h1 className="text-yellow-900 text-4xl sm:text-7xl font-bold">Magnus Stokkeland</h1>
                <h2 className="text-yellow-600 text-4xl sm:text-7xl font-bold">I'm a computer science student at the University of Oslo</h2>
                <p className="text-yellow-600 py-4 max-w-[700px]">
                    I'm currently finishing the last year of my bachelor's degree in UX-design, with my sights set on a master's degree in either
                    UX-design or Programming and System Architecture.
                </p>
                <div>
                    <button className="text-yellow-900 border-2 border-yellow-900 px-6 py-3 my-2 hover:bg-green-700 hover:border-green-700 hover:text-amber-100 duration-300">View work <HiArrowNarrowRight className="ml-3" /></button>
                </div>
            </div>
        </div>
    )
}

export default Home