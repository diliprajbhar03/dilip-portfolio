import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import data from '../data/profile.json'

export default function Home(){
  return (
    <div>
      <Navbar social={data.social} />
      <main>
        <Hero data={data} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience items={data.experience} />
        <Contact data={data} />
      </main>
      <Footer />
    </div>
  )
}
