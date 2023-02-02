import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import PersonalInfo from '@/components/organisms/PersonalInfo'
import Skills from '@/components/organisms/Skills'
import WorkExperience from '@/components/organisms/WorkExperience'
import Education from '@/components/organisms/Education'
import Projects from '@/components/organisms/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Michel Bravo</title>
        <meta name="description" content="Michel Bravo online portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-16.png" />
      </Head>
      <main className="bg-[#fff] max-w-[1280px] m-auto py-20 px-4 shadow-xl">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-full sm:w-[70%] space-y-10">
            <PersonalInfo />
            <WorkExperience />
            <Education />
            <Projects />
          </div>
          <div className="hidden sm:flex flex-col w-3/12">
            <Skills />
          </div>
        </div>
      </main>
    </>
  )
}
