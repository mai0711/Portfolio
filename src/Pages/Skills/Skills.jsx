import React from 'react'
import "./Skills.css"
import javaImg from "../../Images/logo/java.png"
import reactImg from "../../Images/logo/react.png"
import nodeImg from "../../Images/logo/nodejs.png"
import jsImg from "../../Images/logo/javascript.png"
import mongoImg from "../../Images/logo/mongodb.png"
import mysqlImg from "../../Images/logo/mysql.png"
import htmlImg from "../../Images/logo/html.png"
import cssImg from "../../Images/logo/css.png"
import gitImg from "../../Images/logo/github.png"
import postmanImg from "../../Images/logo/postman.png"
import StarRating from '../../Components/StarRating/StarRating'


export default function Skills() {

  return (
    <div className='skill' id='skill'>
      <h1>Skills</h1>
      <div className="icons">

        <div className='star'>
          <img src={htmlImg} alt='HTML'/>
          <StarRating rating={4} />
        </div>

        <div className='star'>
          <img src={cssImg} alt='CSS'/>
          <StarRating rating={4} />
        </div>

        <div className='star'>
          <img src={jsImg} alt='Java Script'/>
          <StarRating rating={3} />
        </div>

        <div className='star'>
          <img src={javaImg} alt='Java'/>
          <StarRating rating={2} />
        </div>

        <div className='star'>
          <img src={reactImg} alt='React'/>
          <StarRating rating={3} />
        </div>

        <div className='star'>
          <img src={nodeImg} alt='Node.js'/>
          <StarRating rating={3} />
        </div>

        <div className='star'>
          <img src={mysqlImg} alt='MySQL'/>
          <StarRating rating={2} />
        </div>

        <div className='star'>
          <img src={mongoImg} alt='MongoDB'/>
          <StarRating rating={4} />
        </div>

        <div className='star'>
          <img src={gitImg} alt='Github'/>
          <StarRating rating={4} />
        </div>

        <div className='star'>
          <img src={postmanImg} alt='postman'/>
          <StarRating rating={3} />
        </div>

      </div>
      {/* <div className="description">
        <p>
        </p>
      </div> */}
    </div>
  )
}
