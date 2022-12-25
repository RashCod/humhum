import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="121" r="114" /> 
    <rect x="12" y="247" rx="10" ry="10" width="253" height="20" /> 
    <rect x="8" y="276" rx="10" ry="10" width="261" height="64" /> 
    <rect x="9" y="357" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="349" rx="18" ry="18" width="143" height="40" />
  </ContentLoader>
)

export default Skeleton