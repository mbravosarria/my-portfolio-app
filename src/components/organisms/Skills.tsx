import { hardSkills, softSkills, technicalSkills } from '@/db/personal-info'
import React from 'react'

function Skills() {
  return (
    <div className="flex ml-3 flex-wrap sm:flex-col sm:space-y-8">
      <div className="flex flex-col">
        <h2 className="mb-2 sm:text-blue text-[#fff] font-bold">Hard Skills</h2>
        {hardSkills.map((item) => (
          <p key={item} className="ml-4 text-sm sm:text-[#808080] text-[#fff]">
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-col">
        <h2 className="mb-2 sm:text-blue text-[#fff] font-bold">Soft Skills</h2>
        {softSkills.map((item) => (
          <p key={item} className="ml-4 text-sm sm:text-[#808080] text-[#fff]">
            {item}
          </p>
        ))}
      </div>
      <h2 className="sm:text-blue text-[#fff] font-bold mt-16 mb-4">
        Technical Skills
      </h2>
      <div className="flex flex-wrap sm:flex-col sm:space-y-4">
        {technicalSkills.map((item) => (
          <div key={item.title} className="flex flex-col sm:mb-0 mb-8">
            <h3 className="mb-2 mr-8 sm:mr-0 text-sm sm:text-[#000] text-[#fff] font-bold">
              {item.title}
            </h3>
            {item.skills.map((element) => (
              <p
                key={element}
                className="ml-4 text-sm sm:text-[#808080] text-[#fff]"
              >
                {element}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
