import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <Layout>
		<h1>Hello</h1>
		<h2>I'm Carla</h2>
		<p><Link to ="/contact">Contact me</Link></p>
    </Layout>
  )
}


// const IndexPage = () => {
//   return(
//     <div>
//       <Header/>
//       <h1>Hello</h1>
//       <h2>I'm Carla</h2>
//       <p><Link to ="/contact">Contact me</Link></p>
//       <Footer/>
//     </div>
//   )
// }

export default IndexPage