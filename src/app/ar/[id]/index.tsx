import { useQuery } from '@tanstack/react-query'
import { ViroARCamera, ViroARScene } from '@viro-community/react-viro'
import { getBiotaByID } from 'api/biota'
import { useLocalSearchParams } from 'expo-router'
import { View } from 'moti'
import React from 'react'

const Biota = () => {
    const { id } = useLocalSearchParams()

    const { data, isLoading } = useQuery({
        queryFn : () => getBiotaByID(id as string),
        queryKey : ['biota'],
    })
  return (
    <ViroARScene className='w-full h-full'>

    </ViroARScene>
  )
}

export default Biota