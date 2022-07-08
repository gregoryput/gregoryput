import React, {useState, useEffect} from 'react';
import { Formik } from "formik";




const Formulario = () =>{
    //peticiones de select
    const [cargo, setcargo] = useState();
    async function SelectCargo(){
        try {
            const response = await fetch("https://localhost:44395/ListarCargos");
            const data = await response.json();
            setcargo(data)
        } catch (error) {
            alert(error.message) 
        } finally{
            setLoading(false)
        }
    }
    const [sexo, setsexo] = useState();
    async function SelectSexo(){
        try {
            const response = await fetch("https://localhost:44395/ListarSexos");
            const data = await response.json();
            setsexo(data)
        } catch (error) {
            alert(error.message) 
        } finally{
            setLoading(false)
        }
    }

    const [nacionalidad, setnacionalidad] = useState();
    async function SelectNacionalidad(){
        try {
            const response = await fetch("https://localhost:44395/ListarNacionalidades");
            const data = await response.json();
            setnacionalidad(data)
        } catch (error) {
            alert(error.message) 
        } finally{
            setLoading(false)
        }
    }

    const [civil, setcivil] = useState();
    async function SelectCivil(){
        try {
            const response = await fetch("https://localhost:44395/ListarEstadosCiviles");
            const data = await response.json();
            setcivil(data)
        } catch (error) {
            alert(error.message) 
        } finally{
            setLoading(false)
        }
    }

    const [gruposanguineo, setgruposanguineo] = useState();
    async function Selectgruposanguineo(){
        try {
            const response = await fetch("https://localhost:44395/ListarGruposSanguineos");
            const data = await response.json();
            console.log(data)
            setgruposanguineo(data)
        } catch (error) {
            alert(error.message) 
        } finally{
            setLoading(false)
        }
    }


   

  
  

    

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        SelectCargo();
        SelectSexo();
        SelectNacionalidad();
        SelectCivil();
        Selectgruposanguineo();
    }, []);

    //check input
    //const [checkSeguro, setCheckSeguro] = useState(false)

    return(
        <div className="formulario ">
            <div className="card-body ml-5">
            
                <Formik
                 initialValues={{
                    FechaIngresaInstitucion: "",
                    CargoEnInstitucionID:"",
                    Cedula:"",
                    Nombre:"",
                    Apellido:"",
                    Apodo:"",
                    SexoID:"",
                    FechaNacimiento:"",
                    LugarDeNacimiento:"",
                    NacionalidadID:"",
                    EstadoCivilID:"",
                    EstaturaEnPie:"",
                    PesoEnLibras:"",
                    ColorDePelo:"",
                    CoLorDePiel:"",
                    GrupoSanguineoID:"",
                    TallaCamisetaID:"",
                    NumeroPasaporte:"",
                    NSS:"",
                    LicenciaCategoriaID:"",

                    }}
                    >
                        <form>
                            <div className="formulario">
                            <div className=" card  m-5 xs ">
                            <div className="card ">

                            <h5 className="card-title text-center mt-4 mb-5">Datos Personales </h5>
                                
                            <div className="row  mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaIngresaInstitucion"> Ingreso a la Institución 
                                    <input type="date" class="form-control mt-3" name="FechaIngresaInstitucion" placeholder="Institución "></input>
                                </label>
                                </div >
                                {loading ? (
                                         <></>
                                        ) : (
                                        <div className="col minicomponete">
                                            {
                                           <label htmlFor="CargoEnInstitucionID"> Cargo en la institución 
                                             <select name="CargoEnInstitucionID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                {cargo.map((cargos) => (
                                                    <option value={cargos.cargoId}>{cargos.cargoNombre}</option>
                                                ))} 
                                            </select>
                                            </label>
                                            }
                                        </div>
                                        )}
                            </div>
                           
                            <div className="row mt-3">
                                <div className="col  minicomponete">
                                <label htmlFor="Nombre"> Nombre 
                                    <input type="text" class="form-control mt-3" name="Nombre" placeholder="Nombre "></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="Apellido"> Apellido
                                    <input type="text" class="form-control mt-3" name="Apellido" placeholder="Apellido "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="Apodo"> Apodo
                                    <input type="text" class="form-control mt-3" name="Apodo" placeholder="Apodo"></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                {loading ? (
                                        <></>
                                                ) : (
                                        <div className="col minicomponete">
                                            {
                                            <label  htmlFor="SexoID"> Sexo
                                                <select name="SexoID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                    {sexo.map((sex) => (
                                                        <option value={sex.sexoId}>{sex.sexoNombre}</option>
                                                    ))} 
                                                </select>
                                                </label>
                                            }
                                    </div>
                                    )}
                            
                                    <div className="col minicomponete ">
                                    <label htmlFor="Cedula"> Cédula
                                        <input type="text" class="form-control mt-3" name="Cedula" placeholder="Cedula "></input>
                                    </label>
                                    </div>
                             </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento"> Fecha nacimiento
                                    <input type="date" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="LugarDeNacimiento"> Lugar nacimiento
                                    <input type="text" class="form-control mt-3" name="LugarDeNacimiento" placeholder="Lugar de Nacimiento "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                            {loading ? (
                                    <></>
                                    ) : (
                                         <div className="col minicomponete">
                                             {
                                                <label  htmlFor="EstadoCivilID"> Estado civil
                                                    <select name="EstadoCivilID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                        {civil.map((estado) => (
                                                            <option value={estado.estadoCivilId}>{estado.estadoCivilNombre}</option>
                                                        ))} 
                                                    </select>
                                                    </label>
                                             }
                                        </div>
                                        )}
                            </div>
                            
                            <div className="row mt-3">
                            {loading ? (
                                    <></>
                                    ) : (
                                         <div className="col minicomponete">
                                             {
                                                <label  htmlFor="NacionalidadID"> Nacionalidad
                                                    <select name="NacionalidadID"  className="form-select mt-3"  aria-label="Default select example"  > 
                                                        {nacionalidad.map((nacionalidad) => (
                                                            <option value={nacionalidad.nacionalidadId}>{nacionalidad.nacionalidadNombre}</option>
                                                        ))} 
                                                    </select>
                                                    </label>
                                             }
                                        </div>
                                        )}
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="EstaturaEnPie">Estatura en pie
                                    <input type="text" class="form-control mt-3" name="EstaturaEnPie" placeholder="Estatura"></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="PesoEnLibras"> Peso en libras
                                    <input type="text" class="form-control mt-3" name="PesoEnLibras" placeholder="Peso en libras"></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor=" ColorDePelo"> Color de pelo
                                        <input type="text" class="form-control mt-3" name=" ColorDePelo" placeholder="Color de pelo"></input>
                                    </label>
                                    </div>

                                    <div className="col minicomponete">
                                    <label htmlFor="CoLorDePiel"> Color de piel
                                        <input type="text" class="form-control mt-3" name="CoLorDePiel" placeholder="CoLor de piel "></input>
                                    </label>
                                    </div>
                                </div>


                                <div className="row mt-3">
                                    {loading ? (
                                            <></>
                                            ) : (
                                                    <div className="col minicomponete">
                                                        {
                                                        <label  htmlFor="GrupoSanguineoID"> Grupo sanguineo
                                                            <select name="GrupoSanguineoID"  className="form-select mt-3" placeholder='hola' aria-label="Default select example"  > 
                                                                {gruposanguineo.map((grupo) => (
                                                                    <option value={grupo.grupoSanguineoId}>{grupo.grupoSanguineo}</option>
                                                                ))} 
                                                            </select>
                                                            </label>
                                                        }
                                                </div>
                                                )}
                                 </div>
                                

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="FechaNacimiento">Talla camiseta
                                        <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder=""></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col minicomponete ">
                                    <label htmlFor="NumeroPasaporte"> Numero de Pasaporte
                                        <input type="text" class="form-control mt-3" name="NumeroPasaporte" placeholder="Numero Pasaporte"></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="FechaNacimiento"> Numero Cuenta
                                        <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="NSS"> NSS
                                        <input type="text" class="form-control mt-3" name="NSS" placeholder="NSS"></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col minicomponete ">
                                    <label htmlFor="LicenciaCategoriaID"> Licencia Categoría
                                        <input type="text" class="form-control mt-3" name="LicenciaCategoriaID" placeholder=""></input>
                                    </label>
                                    </div>
                                </div>

                                {loading ? (
                                         <></>
                                        ) : (
                                        <div className="col minicomponete">
                                            {
                                           <label className=' mt-3' htmlFor="LicenciaCategoriaID"> Licencia Categoría
                                             <select name="LicenciaCategoriaID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                {sexo.map((data) => (
                                                    <option value={data.sexoId}>{data.sexoNombre}</option>
                                                ))} 
                                            </select>
                                            </label>
                                            }
                                        </div>
                                        )}

                                <br/>
                                <br/>
                            </div>
                            </div>



                            <div className=" card  m-5 xs ">
                            <div className="card">
                            <h5 className="card-title text-center mt-4 mb-5">Información de contacto</h5>
                            <div className="row   ">
                                <div className="col minicomponete">
                                <label htmlFor="FechaIngresaInstitucion"> Ingreso Institución 
                                    <input type="text" class="form-control mt-3" name="FechaIngresaInstitucion" placeholder="Ingreso Institución "></input>
                                </label>
                                </div>

                                <div className="col minicomponete ">
                                <label htmlFor="CargoEnInstitucionID"> Cargo En Institución
                                    <input type="text" class="form-control mt-3" name="CargoEnInstitucionID" placeholder=""></input>
                                </label>
                                </div>
                            </div>
                           
                            <div className="row mt-3">
                                <div className="col  minicomponete">
                                <label htmlFor="Nombre"> Nombre 
                                    <input type="text" class="form-control mt-3" name="Nombre" placeholder="Nombre "></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="Apellido"> Apellido
                                    <input type="text" class="form-control mt-3" name="Apellido" placeholder="Apellido "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="Apodo"> Apodo
                                    <input type="text" class="form-control mt-3" name="Apodo" placeholder="Apodo"></input>
                                </label>
                                </div>

                                <div className="col minicomponete ">
                                <label htmlFor="Cedula"> Cédula
                                    <input type="text" class="form-control mt-3" name="Cedula" placeholder="Cedula "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="SexoID"> Sexo
                                    <input type="text" class="form-control mt-3" name="SexoID" placeholder=""></input>
                                </label>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento"> Fecha Nacimiento
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="LugarDeNacimiento"> Lugar Nacimiento
                                    <input type="text" class="form-control mt-3" name="LugarDeNacimiento" placeholder="LugarDeNacimiento "></input>
                                </label>
                                </div>
                            </div>
                                <br/>
                                <br/>
                            </div>
                            </div>

                            <div className=" card  m-5 xs ">
                            <div className="card">
                            <h5 className="card-title text-center mt-4 mb-5">Datos familiares</h5>
                            <div className="row   ">
                                <div className="col minicomponete">
                                <label htmlFor="FechaIngresaInstitucion"> Ingreso Institución 
                                    <input type="text" class="form-control mt-3" name="FechaIngresaInstitucion" placeholder="Ingreso Institución "></input>
                                </label>
                                </div>

                                <div className="col minicomponete ">
                                <label htmlFor="CargoEnInstitucionID"> Cargo En Institución
                                    <input type="text" class="form-control mt-3" name="CargoEnInstitucionID" placeholder=""></input>
                                </label>
                                </div>
                            </div>
                           
                            <div className="row mt-3">
                                <div className="col  minicomponete">
                                <label htmlFor="Nombre"> Nombre 
                                    <input type="text" class="form-control mt-3" name="Nombre" placeholder="Nombre "></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="Apellido"> Apellido
                                    <input type="text" class="form-control mt-3" name="Apellido" placeholder="Apellido "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="Apodo"> Apodo
                                    <input type="text" class="form-control mt-3" name="Apodo" placeholder="Apodo"></input>
                                </label>
                                </div>

                                <div className="col minicomponete ">
                                <label htmlFor="Cedula"> Cédula
                                    <input type="text" class="form-control mt-3" name="Cedula" placeholder="Cedula "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="SexoID"> Sexo
                                    <input type="text" class="form-control mt-3" name="SexoID" placeholder=""></input>
                                </label>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento"> Fecha Nacimiento
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="LugarDeNacimiento"> Lugar Nacimiento
                                    <input type="text" class="form-control mt-3" name="LugarDeNacimiento" placeholder="LugarDeNacimiento "></input>
                                </label>
                                </div>
                            </div>
                                <br/>
                                <br/>
                            </div>
                            </div>


                            <div className=" card  m-5 xs ">
                            <div className="card">
                            <h5 className="card-title text-center mt-4 mb-5">Experiencia</h5>
                            <div className="row   ">
                                <div className="col minicomponete">
                                <label htmlFor="FechaIngresaInstitucion"> Ingreso Institución 
                                    <input type="text" class="form-control mt-3" name="FechaIngresaInstitucion" placeholder="Ingreso Institución "></input>
                                </label>
                                </div>

                                <div className="col minicomponete ">
                                <label htmlFor="CargoEnInstitucionID"> Cargo En Institución
                                    <input type="text" class="form-control mt-3" name="CargoEnInstitucionID" placeholder=""></input>
                                </label>
                                </div>
                            </div>
                           
                            <div className="row mt-3">
                                <div className="col  minicomponete">
                                <label htmlFor="Nombre"> Nombre 
                                    <input type="text" class="form-control mt-3" name="Nombre" placeholder="Nombre "></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="Apellido"> Apellido
                                    <input type="text" class="form-control mt-3" name="Apellido" placeholder="Apellido "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="Apodo"> Apodo
                                    <input type="text" class="form-control mt-3" name="Apodo" placeholder="Apodo"></input>
                                </label>
                                </div>

                                <div className="col minicomponete ">
                                <label htmlFor="Cedula"> Cédula
                                    <input type="text" class="form-control mt-3" name="Cedula" placeholder="Cedula "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="SexoID"> Sexo
                                    <input type="text" class="form-control mt-3" name="SexoID" placeholder=""></input>
                                </label>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento"> Fecha Nacimiento
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="LugarDeNacimiento"> Lugar Nacimiento
                                    <input type="text" class="form-control mt-3" name="LugarDeNacimiento" placeholder="LugarDeNacimiento "></input>
                                </label>
                                </div>
                            </div>
                                <br/>
                                <br/>
                            </div>
                            </div>

                                <div className="centarlizar">
                                    <button type="button" class="btn btn-primary px-5 ">Enviar</button>
                                </div>
                            </div>
                        </form>
                </Formik>
            </div>
        </div>
        
    )
}
export default Formulario;