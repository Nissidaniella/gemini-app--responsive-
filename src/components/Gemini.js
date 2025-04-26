import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHandshake, faStar} from '@fortawesome/free-solid-svg-icons';
import "../Responsive.css";

export default function Gemini() {
  return (
    <>
    <div className="gemini-container">
      <div className="gem1">
        <h1>
         GEMINI
        </h1>

      </div>

      <div className='gem2'>
        <h1> Godman Earl Mission And International Initiatives </h1>
      </div>

     
      <div className="gem3">
        
        <span className="g3" style={{ display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon className='white' icon={faBrain} style={{ marginRight: '8px', fontSize:'25px' }} />
      <div>
        <div>Competence</div>
        <div  className='g3-text'>Predictable quality. Standardized results <br></br> everyday/time</div>
      </div>
    </span>

    <span className="g3" style={{ display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon className='white' icon={faHandshake} style={{ marginRight: '8px', fontSize:'25px' }} />
      <div>
        <div>Influence</div>
        <div  className='g3-text'>Positive Impact</div>
      </div>
    </span>


    <span className="g3" style={{ display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon className='white' icon={faStar} style={{ marginRight: '8px', fontSize:'25px' }} />
      <div>
      <div className='color'>Excellence</div>
      <div  className='g3-text'>Not just being 'the' best, but  being 'your' best</div>
      </div>
    </span>



    

      </div>


    </div>

   
  </>
  )
}
