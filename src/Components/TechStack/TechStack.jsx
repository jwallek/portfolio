import React from 'react'
import './TechStack.css'
import  ProgressBar  from 'react-bootstrap/ProgressBar'

function TechStack() {
  return (
    <div className='techstack-container'>
        <div className="techstack-column">
            <div className="techstack-column-title">Front-end</div>
            <div className="techstack-column-main">
                <div className="techstack-column-item" data-aos="zoom-in-right" data-aos-duration="1500">
                    <div className="techstack-column-item-title">HTML</div>
                    <div className="techstack-column-item-main"><ProgressBar now={100} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-right" data-aos-duration="1500" data-aos-delay="250">
                    <div className="techstack-column-item-title">CSS</div>
                    <div className="techstack-column-item-main"><ProgressBar now={100} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-right" data-aos-duration="1500" data-aos-delay="500">
                    <div className="techstack-column-item-title">JAVASCRIPT</div>
                    <div className="techstack-column-item-main"><ProgressBar now={80} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-right" data-aos-duration="1500" data-aos-delay="750">
                    <div className="techstack-column-item-title">REACT JS</div>
                    <div className="techstack-column-item-main"><ProgressBar now={70} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-right" data-aos-duration="1500" data-aos-delay="1000">
                    <div className="techstack-column-item-title">BOOTSTRAP</div>
                    <div className="techstack-column-item-main"><ProgressBar now={80} className='techstack-progress'/></div>
                </div>
            </div>
        </div>
        <div className="techstack-column">
        <div className="techstack-column-title">Back-end</div>
        <div className="techstack-column-main">
                 <div className="techstack-column-item" data-aos="zoom-in-up" data-aos-duration="1500">
                    <div className="techstack-column-item-title">NODE JS</div>
                    <div className="techstack-column-item-main"><ProgressBar now={60} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="250">
                    <div className="techstack-column-item-title">EXPRESS JS</div>
                    <div className="techstack-column-item-main"><ProgressBar now={60} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="500">
                    <div className="techstack-column-item-title">MONGOOSE JS</div>
                    <div className="techstack-column-item-main"><ProgressBar now={50} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="750">
                    <div className="techstack-column-item-title">SQL</div>
                    <div className="techstack-column-item-main"><ProgressBar now={60} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="1000">
                    <div className="techstack-column-item-title">PYTHON</div>
                    <div className="techstack-column-item-main"><ProgressBar now={50} className='techstack-progress'/></div>
                </div>
        </div>
        </div>
        <div className="techstack-column">
        <div className="techstack-column-title">Tools</div>
        <div className="techstack-column-main">
                <div className="techstack-column-item" data-aos="zoom-in-left" data-aos-duration="1500">
                    <div className="techstack-column-item-title">GIT/GITHUB</div>
                    <div className="techstack-column-item-main"><ProgressBar now={80} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-delay="250">
                    <div className="techstack-column-item-title">SLACK</div>
                    <div className="techstack-column-item-main"><ProgressBar now={100} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-delay="500">
                    <div className="techstack-column-item-title">TRELLO</div>
                    <div className="techstack-column-item-main"><ProgressBar now={100} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-delay="750">
                    <div className="techstack-column-item-title">FIGMA</div>
                    <div className="techstack-column-item-main"><ProgressBar now={50} className='techstack-progress'/></div>
                </div>
                <div className="techstack-column-item" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-delay="1000">
                    <div className="techstack-column-item-title">JUPYTER NOTEBOOKS</div>
                    <div className="techstack-column-item-main"><ProgressBar now={70} className='techstack-progress'/></div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default TechStack