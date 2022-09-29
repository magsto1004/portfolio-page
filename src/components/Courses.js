import React from 'react'
import CourseItem from './CourseItem'
import KotlinCert from '../assets/kotlin-cert.png'
import AndroidCert from '../assets/android-cert.png'

const Courses = () => {
    return (
        <div name="courses" className="w-full md:h-screen text-yellow-900 bg-amber-50">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div classname="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-green-700">Courses</p>
                    <p className="py-6">// These are certificates for courses I have taken</p>
                </div>
    
                {/* container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <CourseItem url="https://github.com/magsto1004/portfolio-page" image={KotlinCert} text="Learn Kotlin"/>
                    <CourseItem url="https://github.com/magsto1004/Utepils" image={AndroidCert} text="Build Basic Android Apps with Java"/>
                </div>    
            </div>
        </div>
    )
}

export default Courses