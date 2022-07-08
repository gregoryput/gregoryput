import axios from "axios";
export default async function SelectCargo(){
    const response =  await axios.get("https://localhost:44395/ListarCargos") 
    const data = response.data
    return data

}
