{/* capa de servicios */}
import axios from ""axios;
const baseurl = import.meta.env.VITE_USER_API_URL;

export const userRegister = async () => {
    try {
        const url = `${baseUrl}/register`;
        const {data} = await axios.post(url, body);
        return data;
    } catch (error) {
        console.log(error)
        throw new Error 
        
    }
}