import axios from "axios";

export default async function SelectSexo(){
    const response = await axios.get("https://localhost:44395/ListarSexos");
    const data = await response.data;
    return data
}