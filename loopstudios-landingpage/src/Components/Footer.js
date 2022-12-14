import React from 'react'
import logo from '../images/logo.svg'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div>
           <div>
            <img src={logo} alt="" />
            </div>
           <ul>
                <li><button>About</button></li>
                <li><button>Careers</button></li>
                <li><button>Events</button></li>
                <li><button>Products</button></li>
                <li><button>Support</button></li>
            </ul>
        </div>

        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer