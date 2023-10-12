import style from '../Collapse/Collapse.module.css'
import { useState } from 'react'
import  '../Collapse/Collapse.module.css'
import expand from '../../assets/Expand.svg'
import { PropTypes } from 'prop-types'


export default function Collapse ({collapsible, children}) {
    const [hidden, visible] = useState(collapsible)
    
	return (
        <div className='collapse'>
            <button onClick={() => visible (!hidden)}>
                {!hidden ? <img src={expand} alt='icone fermé' id='close'/> : <img src={expand} alt='icone ouvert' id='open'/>}
            </button>
            {!hidden ? 
            <div> </div> : 
            <div className={style.collapseContent} aria-expanded={hidden}>
                {children}
            </div>
            }

        </div>
    )
}
Collapse.propTypes = {
    collapsible: PropTypes.node,
    children: PropTypes.node
}
