import React from 'react';
// import styles from "./style.module.css";


const LoaderSection = (props) => {

  const loaderStyles = {
    backgroundColor: "#eee",
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    ...props.extraStyles
  }

  const loaderswipeStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    animation: 'loaderAnimation 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
    width: '100%',
    background: 'linear-gradient(to right, #eeeeee 10%, #dddddd 50%, #eeeeee 90%)',
    height: '100%'
  }

  return (
    <div style={loaderStyles}>
        <div style={loaderswipeStyles}>
        </div>
    </div>
  )
}

export default LoaderSection;