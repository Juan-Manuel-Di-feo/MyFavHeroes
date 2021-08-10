import React from "react"
import Lottie from 'react-lottie'
import * as loading from './890-loading-animation.json'


    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: loading,
      rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      
      }}

    const Loading = () => {
      return(
        <div>
          <Lottie options={defaultOptions}></Lottie>
        </div>
      )
    }

    export default Loading;