import { Link, router } from 'expo-router';
import { View, Text } from 'moti';
import React from 'react'
import { Pressable } from 'react-native';

type BiotaCard = {
    emoji: string;
    title: string;
    id : string;
}

const BiotaCard = ({ title, emoji, id}: BiotaCard) => {
    return (
        <Pressable className='flex flex-row items-center rounded-md px-3 py-2 border-[1px]' onPress={() => router.push(`/ar/${id}`)}>
                <View className='flex flex-row items-center w-full bg-white'>
                <View className='w-12 h-12 bg-gray-300 rounded-full flex flex-row items-center justify-center'>
                    <Text className='w-max h-max text-2xl'>
                        {emoji}
                    </Text>
                </View>
                <Text className="text-black font-bold text-xl ml-5">
                    {title}
                </Text>
                </View>
            </Pressable>
    )
}

export default BiotaCard