import React from 'react'
import Image from 'next/image'
import { personalInfo, contactInfo } from '@/db/personal-info'
import linkIcon from '../../../public/link-external.svg'

function PersonalInfo() {
  return (
    <div className="flex flex-col w-full space-y-4 text-[#000]">
      <div className="flex flex-col space-y-4 sm:flex-row justify-between w-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl">{personalInfo.name}</h1>
          <h2 className="font-bold">{personalInfo.headline}</h2>
        </div>
        <div className="flex flex-col">
          <p>
            {contactInfo.city}, {contactInfo.state} {contactInfo.postal_code}
          </p>
          <p className="font-bold">Contact with me:</p>
          <div className="flex flex-row items-center">
            <a
              href={`mailto:${contactInfo.email}`}
              className="underline text-blue"
            >
              {contactInfo.email}
            </a>
            <span className="relative w-4 h-4">
              <Image src={linkIcon} alt="Link Icon" layout="fill" />
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-justify text-[#606060]">{personalInfo.summary}</p>
      </div>
    </div>
  )
}

export default PersonalInfo
