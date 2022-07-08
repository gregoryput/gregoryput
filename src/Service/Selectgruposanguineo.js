import axios from "axios";
 export default async function Selectgruposanguineo(){
  
        const response = await axios.get("https://localhost:44395/ListarGruposSanguineos");
        const data = await response.data;
        return data
}