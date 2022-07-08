
import axios from "axios";
export default async function SelectMunicipio(){
        const response = await axios.get("https://localhost:44395/ListarProvinciasMunicipios");
        const data = await response.data 
        console.log(data)
        return data

}