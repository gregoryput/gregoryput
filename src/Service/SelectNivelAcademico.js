
import axios from "axios";
export default async function SelectNivelAcademico(){

        const response = await axios.get("https://localhost:44395/ListarNivelesAcademicos");
        const data = await response.data;
        return data

}