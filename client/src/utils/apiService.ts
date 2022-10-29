
const BASE_URL = process.env.REACT_APP_BASE_URL as string;
interface IUserDetails {
    firstName:string,
    surname:string, 
    email:string,
    telephoneNumber:number|string, 
    gender:string,
    dateOfBirth: Date,
    comment:string,
}

export const createUser = async (userDetails:IUserDetails) => {
    try{
        const response = await fetch(`${BASE_URL}/user/create`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        const json = await response.json();
        if(!json.data) throw new Error(json.error)
        return json.data;
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message)
        }
    }
}