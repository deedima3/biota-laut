import { View } from 'moti';
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native'

type AnswerCardProps = {
  answer: string;
  isTrue: boolean;
}

const AnswerCard = ({ answer, isTrue }: AnswerCardProps) => {
  const [isPushed, setisPushed] = useState(false)

  return (
    <TouchableOpacity onPress={() => setisPushed(true)} className={`flex text-white items-center justify-center px-5 py-5 w-[170px] h-[170px] mt-2 ml-2 rounded-md font-bold ${isPushed ? `${isTrue ? "bg-green-400" : "bg-red-400"}` : "bg-gray-200"}`}>
      <Text className="text-xl">
        {answer}
      </Text>
    </TouchableOpacity>
  )
}

export default AnswerCard