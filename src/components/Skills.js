import React from 'react'

import HTML from '../assets/html.png'
import Android from '../assets/android.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Python from '../assets/python.png'
import JavaScript from '../assets/javascript.png'
import Java from '../assets/java.png'
import GitHub from '../assets/github.png'


const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-amber-100 text-yellow-900">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-green-700">Skills</p>
                <p className="py-4">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

                <div className="shadow-md hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={HTML} alt="HTML-icon" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Android} alt="HTML-icon" />
                    <p className="my-4">Android Studio</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ReactImg} alt="HTML-icon" />
                    <p className="my-4">React.js</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Tailwind} alt="HTML-icon" />
                    <p className="my-4">Tailwind CSS</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Python} alt="HTML-icon" />
                    <p className="my-4">Python</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={JavaScript} alt="HTML-icon" />
                    <p className="my-4">JavaScript</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Java} alt="HTML-icon" />
                    <p className="my-4">Java</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={GitHub} alt="HTML-icon" />
                    <p className="my-4">GitHub</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills