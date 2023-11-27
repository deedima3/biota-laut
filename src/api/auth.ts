import { loginSchema, registerSchema } from 'constant/schema'
import { pb } from 'utils/query/query'
import * as z from 'zod'

const loginUser = async (data : z.infer<typeof loginSchema>) => {
    return await pb.collection('users').authWithPassword(data.email, data.password)
}

const registerUser = async (data : z.infer<typeof registerSchema>) => {
    await pb.collection('users').create({
        ...data,
        emailVisibility : true
    })
}

export {
    loginUser,
    registerUser
}