
import axios from "axios";
export default async function SelectProvincia(){
    const response = await axios.get("https://localhost:44395/ListarProvincias");
    const data = await response.data;
    return data

}