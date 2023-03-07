import { Link } from "react-router-dom"
import './Header.css'
import $ from 'jquery'

function Header(){
  return(
    <header>
      <div id="headwrap">
        <h1><Link to='/'>Travel.com</Link></h1>
        <nav>
          <h2 className="hide">MainNavigation</h2>
          <ul>
            <li><Link to='/'>Booking</Link></li>
            <li><Link to='/confirm'>Confirm</Link></li>
          </ul>
          <p className="hclose"><span className="material-symbols-outlined" onClick={() => {$('#headwrap>nav').fadeOut(1000)}}>
close
</span></p>
        </nav>
        <p className="hmenu"><span className="material-symbols-outlined" onClick={() => {$('#headwrap>nav').fadeIn(1000)}}>
menu_open
</span></p>
      </div>
    </header>
  )
}


export default Header