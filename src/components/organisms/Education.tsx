import React from 'react'
import { education } from '@/db/personal-info'

interface Props {
  item: {
    university: string
    location: string
    degree: string
    start_at: string
    end_at: string
    description: {
      title: string
      text: string
    }
  }
}

function Education() {
  return (
    <div id="education" className="flex flex-col space-y-8 text-[#000]">
      <h1 className="font-bold text-blue text-xl">Education</h1>
      <div className="flex flex-col space-y-1">
        <p>
          <strong>{education.university}</strong>, {education.location} --{' '}
          {education.degree}
        </p>
        <p className="text-[#808080] text-sm">
          {education.start_at} - {education.end_at}
        </p>
        <p className="text-[#404040]">
          <strong>{education.description.title}:</strong>{' '}
          {education.description.text}
        </p>
      </div>
    </div>
  )
}

export default Education
