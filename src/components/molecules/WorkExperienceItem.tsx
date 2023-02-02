import React from 'react'

interface Props {
  item: {
    company: string
    location: string
    location_type: string
    job_title: string
    employment_type: string
    start_at: string
    end_at: string
    skills: Array<string>
  }
}

function WorkExperienceItem({ item }: Props) {
  return (
    <div className="flex flex-col space-y-1 text-[#000]">
      <p>
        <strong>{item.company}</strong>, {item.location} ({item.location_type}{' '}
        -- {item.job_title} - {item.employment_type})
      </p>
      <p className="text-[#808080] text-sm">
        {item.start_at} - {item.end_at}
      </p>
      <div className="flex flex-wrap">
        {item.skills.map((element) => (
          <div
            key={element}
            className="flex border border-[#404040] font-bold rounded-md px-2 mr-2 mb-2 text-center text-sm text-[#404040]"
          >
            {element}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperienceItem
