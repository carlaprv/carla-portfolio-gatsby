import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
  return(
    <Layout>
      <h1>About</h1>
      <p>Carla holds a Bachelor's degree in Information Systems at USP, master student in Artificial Intelligence, software engineer and Google Developer Expert in Machine Learning. She promotes gender and race diversity in technology as co-organizer of perifaCode Community. She believes Technology is steadily changing the social good landscape and has been researching about the unconscious bias in Artificial Intelligence and its impacts on our society. </p>
      <p><Link to ="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage