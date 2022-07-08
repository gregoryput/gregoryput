import axios from "axios";

export default async function SelectNacionalidad(){
        const response = await axios.get("https://localhost:44395/ListarNacionalidades");
        const data = await response.data
        return data
}