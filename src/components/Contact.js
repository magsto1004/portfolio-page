import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-amber-50 text-yellow-900 flex justify-center items-center p-4">
        <form action="https://getform.io/f/d5f5d29c-1886-47c4-8032-59665fbbdb92" method="POST" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-green-700">Contact</p>
                <p className="py-4">// Submit the form below or shoot me an email - magnus.stokkeland@icloud.com</p>
            </div>
            <input className="bg-amber-50 border-2 border-yellow-900 rounded-lg p-2" type="text" placeholder="Name" name="name" />
            <input className="bg-amber-50 border-2 border-yellow-900 rounded-lg p-2 my-4" type="email" placeholder="Email" name="email" />
            <textarea className="bg-amber-50 border-2 border-yellow-900 rounded-lg p-2" name="message" rows="10" placeholder="Message"></textarea>
            <button className="text-amber-50 bg-yellow-900 border-2 border-yellow-900 rounded-lg hover:bg-green-700 hover:border-green-700 hover:scale-110 duration-300 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact