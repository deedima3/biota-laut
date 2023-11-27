import { router } from "expo-router"
import { useEffect } from "react"
import { pb } from "utils/query/query"

const useLoginValidateData = () => {
    useEffect(() => {
        if(pb.authStore.isValid){
            router.replace('/dashboard')
        }
    }, [pb.authStore])
}

export {
    useLoginValidateData
}