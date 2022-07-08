import axios from "axios";

export default async function SelectCivil(){
        const response =  await axios.get("https://localhost:44395/ListarEstadosCiviles"); 
        const data = response.data
        return data
}