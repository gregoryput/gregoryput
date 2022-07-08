export default async function SelectCargo(){
   try {
    const response = await fetch("https://localhost:44395/ListarCargos");
    const data = await response.json();
    return data
   } catch {
     const valor = false
     return valor
   }
}

