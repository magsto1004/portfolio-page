import React from 'react'

const WorkItem = (props) => {
  return (
    <div style={{backgroundImage: `url(${props.image})`}} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">         
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-amber-100 tracking-wider">
                {props.text}
            </span>
            <div className="pt-8 text-center">
                { props.about != "" ? <a href={props.about}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">About</button>
                </a> : <a></a>}
                { props.code != "" ? <a href={props.code}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-100 text-yellow-900 font-bold text-lg">Code</button>
                </a> : <a></a> }
            </div>
        </div>
    </div>
  )
}

export default WorkItem