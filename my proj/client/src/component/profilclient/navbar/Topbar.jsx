import React from 'react'
import "../navbar/topbar.css"
function Topbar() {
  return (
    <div >
        <div className="search__container77">
          <p className="search__title77">
            Go ahead, hover over search
          </p>
          <input className="search__input77" type="text" placeholder="Search" />
        </div>
        <div className="credits__container77">
          <p className="credits__text">Background color: Pantone Color of the Year 2016 <a href="https://www.pantone.com/color-of-the-year-2016" className="credits__link">Rose Quartz</a></p>
        </div>
    </div>
  )
}

export default Topbar