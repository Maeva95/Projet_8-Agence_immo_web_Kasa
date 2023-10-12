import { useState } from 'react'
import  '../../../style.css'
import expand from '../../assets/Expand.svg'
import { PropTypes } from 'prop-types'


export default function Collapse ({collapsible, children}) {
    const [hidden, visible] = useState(collapsible)
    
	return (
        <div className='collapse'>
            <button onClick={() => visible (!hidden)}>
                <img src={expand} alt='icone collapse' className={hidden ? 'collapse-icon collapse-icon__close' : 'collapse-icon collapse-icon__open'}/> 
            </button>
            {!hidden && 
            <div className={hidden ? 'collapse-content collapse-content__close' : 'collapse-content collapse-content__open'}> 
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
