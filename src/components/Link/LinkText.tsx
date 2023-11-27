import React from 'react'
import { Link } from 'expo-router'

type LinkTextParams = {
    route : string;
    text : string;
    extraClass? : string;
}

const LinkText = ({ text, route, extraClass = '' } : LinkTextParams) => {
  return (
    <Link href={route} className={extraClass ? extraClass : "text-base text-blue-400"}>
        {text}
    </Link>
  )
}

export default LinkText