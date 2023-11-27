import { getAllBiota } from 'api/biota'
import PaddingLayout from 'components/Layout/PaddingLayout'
import { router } from 'expo-router'
import { View, Text, MotiScrollView } from 'moti'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import BiotaCard from 'components/Card/BiotaCard'

const ARDashboard = () => {
    const onBack = () => {
        router.push('/dashboard')
    }

    const { data, isLoading } = useQuery({
        queryFn : () => getAllBiota(),
        queryKey : ['biota'],
    })
    return (
        <MotiScrollView
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
            className="py-24 px-8 w-full"
        >
            <View className='flex flex-row justify-start w-full'>
                <Text className='w-full' onPress={() => onBack()}>
                ← Back
                </Text>
            </View>
            <View className='mt-4 text-black w-full flex flex-col items-center'>
                <Text className='text-base font-semibold'>
                    AR LEARNING PATH
                </Text>
                <Text className='text-4xl font-bold'>
                    Explore Marine Species
                </Text>
                <Text className='text-gray-400 text-xl'>
                    Select one
                </Text>
            </View>
            <View className='flex flex-col w-full mt-14'>
                {
                    data && data.map(({emoji, name, id}) => {
                        return <BiotaCard emoji={emoji} title={name} id={id}/>
                    })
                }
            </View>
        </MotiScrollView>
    )
}

export default ARDashboard