import React from 'react'

const CourseItem = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">         
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-amber-100 tracking-wider">
                    {props.text}
                </span>
                <div className="pt-8 text-center">
                    <a href={props.url}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">View</button>
                    </a>
                </div>
            </div>
        </div>
      )
}

export default CourseItem