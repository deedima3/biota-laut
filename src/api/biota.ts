import { pb } from "utils/query/query"

const getAllBiota = async () => {
    const res = await pb.collection('biota').getFullList()
    return res
}

const getBiotaByID = async (id : string) => {
    const res = await pb.collection('biota').getOne(id)
    return res
}

export {
    getAllBiota,
    getBiotaByID
}