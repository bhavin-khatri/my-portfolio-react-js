import React from 'react'
import "./Header.css"
import Images from '../../res/styles/Images'
const Header = () => {

  return(
    <div className="mainView">
      <div className="rowView">
        <div className="rowViewFlexStart">
          <div className="circleView">
            <span className="titleText">BK</span>
          </div>
          <span className="titleTextTextWhite">Dashboard</span>
          <img className="smallIcons" src={Images.ic_linkedin}/>
          <img className="smallIcons" src={Images.ic_github}/>
        </div>
        <div className="rowViewFlexStart">
          <img className="smallIcons" src={Images.ic_indian_flag}/>
          <img className="smallIcons" src={Images.ic_coffee_cup}/>
          <img className="profileIcon" src={Images.ic_bk}/>

        </div>
      </div>
    </div>
  )
}

export default Header;



