import React from 'react'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgb(0,0,0,0.5)',
    zIndex: '1000',
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '30vh',
    left: '40vw',
    trasform: 'tranlate(-50%,-50%)',
    backgroundColor: 'rgb(0,0,0)',
    padding: '150px',
    borderRadius: '50%',
}


export default function Modal({isOpen}) {
  
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>Modal</div>
            </div>
        )
    }
        
    return null

}

