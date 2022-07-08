
import axios from "axios";
export default async function SelectTallas(){

        const response = await axios.get("https://localhost:44395/ListarCamisetasTallas");
        const data = await response.data;
        return data
}