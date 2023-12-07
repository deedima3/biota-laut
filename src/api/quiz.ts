import { pb } from "utils/query/query"

const getAllQuiz = async () => {
    const res = await pb.collection('quiz').getFullList()
    return res
}

const getQuizQuestion = async (id : string) => {
    const res = await pb.collection('quiz').getOne(id)
    console.log(res)
    return res
}

const getQuisQuestionByID = async (id : string) => {
    const res = await pb.collection('question').getOne(id)
    console.log("QuestionID", res)
    return res
}
export {
    getAllQuiz,
    getQuizQuestion,
    getQuisQuestionByID
}