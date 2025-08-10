import React from 'react'
import HeaderTitle from '../components/ui/headerTitle'
import StudioFormaAbout from '../components/main/aboutSection'
import StudioFormaServices from '../components/main/servicesSection'
import Team from '../components/main/teamMembersSection'
import ContactSection from '../components/main/Contact'
import Footer from '../components/main/Footer'



const AboutPage = () => {
  return (
    <div>
           <HeaderTitle
              breadcrumb="HOME"
              currentPage="ABOUT"
              titlePrimary="ABOUT"
              titleSecondary="US"
            />
            <StudioFormaAbout />
            <StudioFormaServices />
            <Team />
            <ContactSection />
            <Footer />
    </div>
  )
}

export default AboutPage
