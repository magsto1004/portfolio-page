import React from 'react'

const SkillItem = (props) => {
  return (
    <div className="shadow-md hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={props.img} alt="icon" />
        <p className="my-4">{props.text}</p>
    </div>
  )
}

export default SkillItem