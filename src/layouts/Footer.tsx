import Skills from '@/components/organisms/Skills'
import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col justify-center bg-blue text-sm font-bold py-4 text-[#fff]">
      <div className="flex sm:hidden">
        <Skills />
      </div>
      <p className="text-center">Developed by mbravosarria</p>
    </div>
  )
}

export default Footer
