import axios from "axios";
export default async function SelectCategoria(){
        const response =  await axios.get("https://localhost:44395/ListarLicenciasCategorias") 
        const data = response.data
        return data
}