import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import logoIcon from '../../public/pc-computer-engineer.svg'
import linkedinIcon from '../../public/linkedin.svg'
import githubIcon from '../../public/github.svg'
import downloadIcon from '../../public/download.svg'
import menuIcon from '../../public/menu.svg'

function NavBar() {
  const [navigationMenu, setNavigationMenu] = useState(false)

  return (
    <div className="flex flex-col justify-center bg-blue text-[#fff] py-4 fixed top-0 w-full opacity-95 shadow-xl">
      <div className="flex flex-row justify-between w-full md:max-w-[1280px] text-white px-2">
        <div className="flex flex-row space-x-8">
          <motion.div className="relative h-7 w-7" whileHover={{ scale: 1.5 }}>
            <a href="#" className="hidden sm:flex">
              <Image src={logoIcon} alt="Logo Icon" layout="fill" />
            </a>
            <div
              className="flex sm:hidden"
              onClick={() => setNavigationMenu(!navigationMenu)}
            >
              <Image src={menuIcon} alt="Logo Icon" layout="fill" />
            </div>
          </motion.div>
          <nav className="hidden sm:flex">
            <ul className="flex flex-row space-x-4 font-bold">
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
              >
                <a href="#work-experience">Work Experience</a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
              >
                <a href="#education">Education</a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
              >
                <a href="#projects">Projects</a>
              </motion.li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex flex-row space-x-4 fill-white">
            <motion.li
              className="relative h-6 w-6 hover:cursor-pointer"
              whileHover={{ scale: 1.5 }}
            >
              <a href="/Resume.pdf" target="_blank">
                <Image src={downloadIcon} alt="Download resume" layout="fill" />
              </a>
            </motion.li>
            <motion.li
              className="relative h-6 w-6 hover:cursor-pointer"
              whileHover={{ scale: 1.5 }}
            >
              <a
                href="https://www.linkedin.com/in/michel-bravo-sarria-870b38185/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={linkedinIcon} alt="LinkedIn Icon" layout="fill" />
              </a>
            </motion.li>
            <motion.li
              className="relative h-6 w-6 hover:cursor-pointer"
              whileHover={{ scale: 1.5 }}
            >
              <a
                href="https://github.com/mbravosarria"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={githubIcon} alt="Github Icon" layout="fill" />
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
      {navigationMenu && (
        <motion.div
          className="flex flex-col pt-4 pl-3"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          <nav>
            <ul className="flex flex-col space-y-4 font-bold">
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
              >
                <a
                  href="#work-experience"
                  onClick={() => setNavigationMenu(false)}
                >
                  Work Experience
                </a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
              >
                <a href="#education" onClick={() => setNavigationMenu(false)}>
                  Education
                </a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
              >
                <a href="#projects" onClick={() => setNavigationMenu(false)}>
                  Projects
                </a>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      )}
    </div>
  )
}

export default NavBar
