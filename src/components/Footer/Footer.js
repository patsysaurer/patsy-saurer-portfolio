import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="p-10 d-block text-center text-grey">
        &copy; Patsy Saurer | {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Footer