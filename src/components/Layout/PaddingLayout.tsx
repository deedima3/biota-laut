import React from 'react'
import { MotiView } from 'moti'
import { Slot } from 'expo-router'

type PaddingLayoutParams = { 
children : React.ReactNode
}

const PaddingLayout = ({children} : PaddingLayoutParams) => {
  return (
    <MotiView 
    from={{
    opacity: 0,
    scale: 0.5,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      type: 'timing',
    }} 
    className="py-24 px-8 w-full">
        {children}
    </MotiView>
  )
}

export default PaddingLayout