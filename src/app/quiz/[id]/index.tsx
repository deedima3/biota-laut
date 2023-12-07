import { getQuisQuestionByID, getQuizQuestion } from 'api/quiz'
import BiotaCard from 'components/Card/BiotaCard'
import { router, useLocalSearchParams } from 'expo-router'
import { MotiScrollView, View } from 'moti'
import { Text } from 'moti'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import LoadingPulse from 'components/Loader/LoadingPulse'
import AnswerCard from 'components/Card/AnswerCard'

const QuizDetail = () => {
    const { id } = useLocalSearchParams()

    const onBack = () => {
        router.push('/dashboard')
    }

    type Questions = {
        id: string;
        answered: boolean;
    }

    const [questions, setQuestions] = useState<Questions[]>([])
    const [selectedQuestion, setSelectedQuestion] = useState(0)

    const { data, isLoading } = useQuery({
        queryFn: () => getQuizQuestion(id as string),
        queryKey: ['quiz', id],
        onSuccess: (data) => {
            setQuestions(data.field.map((fieldValue: string) => {
                return {
                    id: fieldValue,
                    answered: false
                }
            }))
        }
    })

    const { data: questionData, isLoading: isLoadingQuestion } = useQuery({
        queryFn: () => getQuisQuestionByID(questions[selectedQuestion].id),
        queryKey: ['question', selectedQuestion],
        enabled: !isLoading
    })

    const onAnswerQuestion = () => {
        if (questions.length > selectedQuestion + 1) {
            setTimeout(() => setSelectedQuestion(selectedQuestion + 1))
        }
    }

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
                <Text className='text-4xl'>
                    {data?.title} {data?.emoji}
                </Text>
                <Text className='text-xl text-center mt-5'>
                    {questionData?.question}
                </Text>
            </View>
            <View className='flex flex-row flex-wrap mt-6'>
                {
                    questionData && questionData.answer && questionData.answer.map((answerValue => {
                        return <AnswerCard answer={answerValue.name} isTrue={answerValue.value} />
                    }))
                }
            </View>
            <LoadingPulse isLoading={isLoading || isLoadingQuestion} />
        </MotiScrollView>
    )
}

export default QuizDetail