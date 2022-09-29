import React from 'react'

import HTML from '../assets/html.png'
import Android from '../assets/android.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Python from '../assets/python.png'
import JavaScript from '../assets/javascript.png'
import Java from '../assets/java.png'
import GitHub from '../assets/github.png'
import SkillItem from './SkillItem'


const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-amber-100 text-yellow-900">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-green-700">Skills</p>
                <p className="py-4">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <SkillItem text="HTML" img={HTML}/>
                <SkillItem text="Android Studio" img={Android}/>
                <SkillItem text="React.js" img={ReactImg}/>
                <SkillItem text="Tailwind CSS" img={Tailwind}/>
                <SkillItem text="Python" img={Python}/>
                <SkillItem text="JavaScript" img={JavaScript}/>
                <SkillItem text="Java" img={Java}/>
                <SkillItem text="GitHub" img={GitHub}/>
            </div>
        </div>
    </div>
  )
}

export default Skills