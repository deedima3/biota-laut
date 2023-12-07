import { getAllBiota } from 'api/biota'
import { router } from 'expo-router'
import { View, Text, MotiScrollView } from 'moti'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import BiotaCard from 'components/Card/BiotaCard'
import { getAllQuiz } from 'api/quiz'
import LoadingPulse from 'components/Loader/LoadingPulse'

const ARDashboard = () => {
    const onBack = () => {
        router.push('/dashboard')
    }

    const { data, isLoading } = useQuery({
        queryFn : () => getAllQuiz(),
        queryKey : ['quiz'],
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
                    AR QUIZ
                </Text>
                <Text className='text-4xl font-bold text-center'>
                    Test Your Knowledge
                </Text>
                <Text className='text-gray-400 text-xl'>
                    Select one
                </Text>
            </View>
            <View className='flex flex-col w-full mt-14'>
                {
                    data && data.map(({emoji, title, id}, key) => {
                        return <BiotaCard route='quiz' emoji={emoji} title={title} id={id} key={key}/>
                    })
                }
            </View>
            <LoadingPulse isLoading={isLoading}/>
        </MotiScrollView>
    )
}

export default ARDashboard