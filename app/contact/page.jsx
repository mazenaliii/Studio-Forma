import React from 'react'
import HeaderTitle from '../components/ui/headerTitle'
import ContactSection from '../components/main/Contact'
import Footer from '../components/main/Footer'
import SocialSection from '../components/main/socialSection'

const ContactPage = () => {
  return (
    <div>
        <HeaderTitle
          breadcrumb="HOME"
          currentPage="CONTACT"
          titlePrimary="CONTACT"
          titleSecondary="US"
        />
        <ContactSection />
        <SocialSection />
        <Footer />
    </div>
  )
}

export default ContactPage
