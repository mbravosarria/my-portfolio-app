import { workExperience } from '@/db/personal-info'
import React from 'react'
import WorkExperienceItem from '../molecules/WorkExperienceItem'

function WorkExperience() {
  return (
    <div id="work-experience">
      <h1 className="font-bold text-blue text-xl mb-8">Work Experience</h1>
      <div className="flex flex-col space-y-8">
        {workExperience.map((item) => (
          <WorkExperienceItem key={item.company} item={item} />
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
