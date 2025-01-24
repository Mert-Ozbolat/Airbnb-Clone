import Client from "./instance";


export async function getRequest(URL, params) {
    try {
        console.log(`Url test: ${URL}`)
        console.log(`Params test: ${params}`)
        const responce = await Client.get(URL, { params: params })
        return responce.data
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}