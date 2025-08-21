import React from 'react'
import { createPortal } from 'react-dom'

const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
        {copied && (
          <div style={{ position: 'absolute', bottom: '3rem', left: '0'}}>
            <p>Text copied to clipboard</p>
          </div>
        )}
    </section>,
    document.querySelector('#popup-content') // Ensure this matches the ID in your index.html
  )
}

export default PopupContent