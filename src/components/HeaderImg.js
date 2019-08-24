import React from "react"
import logo from "../images/tlmusic_logo_sepia2-e1565632083404.jpg"

const HeaderImg = props => {
  return (
    <img
      src={logo}
      alt="header_image"
      style={{
        paddingTop: "1em",
        overflow: "hidden",
      }}
    />
  )
}

export default HeaderImg
