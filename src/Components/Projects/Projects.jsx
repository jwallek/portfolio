import React from 'react'
import './Projects.css'
import { HiOutlineExternalLink } from 'react-icons/hi'

function Projects() {
  return (
    <div className='projects-container'>
      <div className="projects-body">
        <div className="project" data-aos="flip-up" data-aos-duration="1500">
          <div className="project-top">
            <div className="project-top-logo">🛍️</div>
            <div className="project-top-title">
              <span>E-Commerce App</span> 
              <div className="project-links">
              <a href="https://github.com/jwallek/nozama-frontend" target={"_blank"}className="project-link" rel="noreferrer">Github<HiOutlineExternalLink/></a>
                <a href="https://nozama-jwallek.vercel.app/" target={"_blank"}className="project-link" rel="noreferrer">Live Link<HiOutlineExternalLink/></a>
              </div>
              </div>
          </div>
          <div className="project-bottom">
            <div className="project-bottom-description">
              Full-Stack e-commerce app, "Nozama", utilizes the Fake Store API allowing users to make an account, sign in and sign out,
              edit account settings, add/delete items to/from their cart and wish list, place orders 
              and see their order history. This application was made with the MERN stack, Redux for state management,
              and JWT Authentication for creating tokens for users.
            </div>
          </div>
        </div>
        <div className="project" data-aos="flip-up" data-aos-duration="1500">
          <div className="project-top">
            <div className="project-top-logo">🗺️</div>
            <div className="project-top-title">
              <span>Voilà Translate App</span> 
              <div className="project-links">
              <a href="https://github.com/jwallek/voila-client" target={"_blank"}className="project-link" rel="noreferrer">Github<HiOutlineExternalLink/></a>
                <a href="https://voila-eight.vercel.app/" target={"_blank"}className="project-link" rel="noreferrer">Live Link<HiOutlineExternalLink/></a>
              </div>
              </div>
          </div>
          <div className="project-bottom">
            <div className="project-bottom-description">
              Full-Stack translation application, "Voilà", utilizes a deep translation API and a text-to-speech API and 
              allows users to perform CRUD operations. Created using the MERN stack and GraphQL 
             
            </div>
          </div>
        </div>
        <div className="project" data-aos="flip-up" data-aos-duration="1500">
          <div className="project-top">
            <div className="project-top-logo">😋</div>
            <div className="project-top-title">
              <span>Recipes App</span> 
              <div className="project-links">
              <a href="https://github.com/jwallek/recipe_app" target={"_blank"}className="project-link" rel="noreferrer">Github<HiOutlineExternalLink/></a>
              <a href="https://jwallek.github.io/recipe_app/" target={"_blank"}className="project-link" rel="noreferrer">Live Link<HiOutlineExternalLink/></a>
              </div>
            </div>
          </div>
          <div className="project-bottom">
          <div className="project-bottom-description">
            Project from my Web Development Module in University. Written in HTML, CSS, and Javascript,
            the application, "E-Z Recipes", fetches recipes and data from a local JSON file and displays
            them. The user can modify how the recipes are sorted as well as choose to display certain recipes,
            such as for breakfast, lunch, and dinner. 
          </div>
          </div>
        </div>
        <div className="project" data-aos="flip-up" data-aos-duration="1500">
          <div className="project-top">
            <div className="project-top-logo">🏎️</div>
            <div className="project-top-title">
              <span>Porsche Home Page</span>
              <div className="project-links">
                <a href="https://github.com/jwallek/porsche_home_page" target={"_blank"}className="project-link" rel="noreferrer">Github<HiOutlineExternalLink/></a>
                <a href="https://jwallek.github.io/porsche_home_page/" target={"_blank"}className="project-link" rel="noreferrer">Live Link<HiOutlineExternalLink/></a>
              </div>
            </div>
          </div>
          <div className="project-bottom">
          <div className="project-bottom-description">
            Front-end project, written in HTML, CSS, Javascript and utilizes Bootstrap. 
            Recreated the home page on the website for Porsche.
          </div>
          </div>
        </div>
        <div className="project" data-aos="flip-up" data-aos-duration="1500">
          <div className="project-top">
            <div className="project-top-logo">☕</div>
            <div className="project-top-title">
              <span>Starbucks Home Page</span> 
              <div className="project-links">
              <a href="https://github.com/jwallek/starbucks_home_page" target={"_blank"}className="project-link" rel="noreferrer">Github<HiOutlineExternalLink/></a>
              <a href="https://jwallek.github.io/starbucks_home_page/" target={"_blank"}className="project-link" rel="noreferrer">Live Link<HiOutlineExternalLink/></a>
              </div>
            </div>
          </div>
          <div className="project-bottom">
          <div className="project-bottom-description">
            Front-end project, written in HTML, CSS, Javascript and utilizes Bootstrap. 
            Recreated the home page on the website for Starbucks.
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects