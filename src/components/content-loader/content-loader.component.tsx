import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: {}) => (
    <ContentLoader 
      speed={2}
      width={1000}
      height={500}
      viewBox="0 0 1000 500"
      backgroundColor="#840cd4"
      foregroundColor="#faa8ec"
      {...props}
    >
      <circle cx="10" cy="20" r="8" /> 
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="10" cy="50" r="8" /> 
      <rect x="25" y="45" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="10" cy="80" r="8" /> 
      <rect x="25" y="75" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="10" cy="110" r="8" /> 
      <rect x="25" y="105" rx="5" ry="5" width="220" height="10" /> 
      <rect x="65" y="120" rx="0" ry="0" width="248" height="70" />
    </ContentLoader>
)

export default MyLoader