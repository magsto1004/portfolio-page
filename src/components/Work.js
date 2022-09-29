import React from 'react'
import WorkItem from './WorkItem.js'
import ReactPortfolio from '../assets/react-portfolio.png'
import Utepils from '../assets/utepils.png'
import Proto1060 from '../assets/1060-proto.png'
import CodegradeResearch from '../assets/codegrade-research.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-yellow-900 bg-amber-50">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div classname="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-green-700">Work</p>
                <p className="py-6">Check out some of my recent projects</p>
            </div>

            {/* container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <WorkItem about="https://github.com/magsto1004/portfolio-page/blob/master/README.md" code="https://github.com/magsto1004/portfolio-page" image={ReactPortfolio} text="Portfolio in React JS"/>
                <WorkItem about="" code="" image={CodegradeResearch} text="Research project at UiO"/>
                <WorkItem about="https://github.com/magsto1004/Utepils/blob/master/README.md" code="https://github.com/magsto1004/Utepils" image={Utepils} text="Utepils"/>
                <WorkItem about="" code="https://github.com/magsto1004/IN1060" image={Proto1060} text="Tangible interaction with Arduino"/>
            </div>

        </div>
    </div>
  )
}

export default Work