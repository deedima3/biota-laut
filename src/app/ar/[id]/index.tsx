import { useQuery } from '@tanstack/react-query'
import { getBiotaByID } from 'api/biota'
import { useLocalSearchParams } from 'expo-router'
import { View } from 'moti'
import React from 'react'
import { ArViewerView } from "react-native-ar-viewer";
import { Platform } from 'react-native'

const Biota = () => {
    const { id } = useLocalSearchParams()

    const { data, isLoading } = useQuery({
        queryFn : () => getBiotaByID(id as string),
        queryKey : ['biota'],
    })

  return (
    <ArViewerView 
    style={{flex: 1}}
    model={Platform.OS === 'android' ? 'dice.glb' : 'dice.usdz'}
    lightEstimation
    manageDepth
    allowRotate
    allowScale
    allowTranslate
    disableInstantPlacement
    onStarted={() => console.log('started')}
    onEnded={() => console.log('ended')}
    onModelPlaced={() => console.log('model displayed')}
    onModelRemoved={() => console.log('model not visible anymore')}
    planeOrientation="both" />
  )
}

export default Biota