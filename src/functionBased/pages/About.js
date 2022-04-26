import React from "react"
import { useMatch } from "react-router-dom"

const About = () => {
    console.log(useMatch())
  return <div>hello from about page</div>
}
export default About