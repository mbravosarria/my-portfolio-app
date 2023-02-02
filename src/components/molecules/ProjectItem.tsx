import React from 'react'
import Image from 'next/image'
import playIcon from '../../../public/basic-play-ui.svg'
import githubIcon from '../../../public/github-round.svg'

interface Props {
  item: {
    title: string
    description: string
    links: {
      code: string | undefined
      demo: string | undefined
    }
    skills: Array<string>
  }
}

function ProjectItem({ item }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-lg font-bold text-[#000000]">{item.title}</h2>
      <div className="flex flex-wrap">
        {item.skills.map((element) => (
          <div
            key={element}
            className="flex border px-1 mr-2 mb-2 rounded-lg text-sm font-bold text-[#404040]"
          >
            {element}
          </div>
        ))}
      </div>
      <p className="text-[#404040]">{item.description}</p>
      <div className="flex flex-row space-x-2">
        {item.links.code && (
          <div className="flex flex-row items-center px-4 text-blue border border-blue rounded-lg shadow-lg font-bold">
            <span className="relative w-5 h-5 mr-1">
              <Image src={githubIcon} alt="Code" layout="fill" />
            </span>
            <a href={item.links.code} target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        )}
        {item.links.demo && (
          <div className="flex flex-row px-4 text-[#fff] bg-blue rounded-lg shadow-lg font-bold">
            <span className="relative w-6 h-6">
              <Image src={playIcon} alt="Live Demo" layout="fill" />
            </span>
            <a href={item.links.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
