import { View } from 'moti'
import React from 'react'
import { Image, ImageBackground, Text } from 'react-native'
import DashboardImage from '../../assets/dashboard.png'
import OctopusImage from '../../assets/splash.png'
import StyledButton from 'components/Button/StyledButton'
import { router } from 'expo-router'

const Dashboard = () => {
  return (
    <View className='w-full relative z-[1] mt-10'>
      <Image className='w-full h-[500px] static z-[0]' resizeMethod="auto" source={{
        uri: Image.resolveAssetSource(DashboardImage).uri
      }} />
      <View className='w-full flex flex-row justify-center absolute top-0 right-0 left-0 z-[15] mt-28'>
        <Image className='w-[400px] h-[400px]' resizeMethod="scale" source={{
          uri: Image.resolveAssetSource(OctopusImage).uri
        }} />
      </View>
      <View className='mt-10 px-5'>
        <Text className="text-5xl font-bold">
          AquaQuest
        </Text>
        <Text className="text-3xl mt-1 w-full">
          The Marine Life Expedition
        </Text>
        <View className='flex flex-col mt-8'>
          <StyledButton
            title="Start Learning 🚀"
            onPress={() => router.push('/ar')}
          />
          <StyledButton
            title="Quiz 💫"
            onPress={() => router.push('/quiz')}
            extraClass='mt-4'
          />
        </View>
      </View>
    </View>
  )
}

export default Dashboard