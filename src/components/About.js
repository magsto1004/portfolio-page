import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-amber-100 text-yellow-900">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-green-700">
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>I'm Magnus, nice to meet you! Please take a look around.</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About