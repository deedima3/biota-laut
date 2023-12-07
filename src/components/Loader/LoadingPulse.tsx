import DarkenBackground from 'components/Modal/DarkenBackground'
import React from 'react'
import OctopusImage from '../../assets/splash.png'
import { Image } from 'react-native'


type LoadingPulseParam = {
  isLoading : boolean
}

const LoadingPulse = ({ isLoading } : LoadingPulseParam) => {
  return (
    <DarkenBackground onClose={() => {}}>
      <Image className="w-[500px] h-[500px] animate-pulse transition-all duration-200" source={{ uri : Image.resolveAssetSource(OctopusImage).uri }} />          
    </DarkenBackground>
  )
}

export default LoadingPulse