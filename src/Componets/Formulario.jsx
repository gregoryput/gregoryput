import React, {useState, useEffect} from 'react';
import { Formik } from "formik";
import SelectCargo from '../Service/SelectCagos';
import SelectSexo from '../Service/SelectSexo';
import SelectProvincia from '../Service/SelectProvincia';
import SelectNivelAcademico from '../Service/SelectNivelAcademico';
import SelectMunicipio from '../Service/SelectMunicipio';
import Selectgruposanguineo from '../Service/Selectgruposanguineo';
import SelectCategoria from '../Service/SelectCategoria';
import SelectCivil from '../Service/SelectCivil';
import SelectNacionalidad from '../Service/SelectNacionalidad';
import SelectTallas from '../Service/SelectTallas';

const Formulario = () =>{

    const [formulario, setFormulario] = useState([]);
    const agregarHijo = (e) => {
        e.preventDefault()
        const hijos = {
            id:"",
            nombre:""
        }
        setFormulario([...formulario, ...[hijos] ]);
    }

    const Eliminarhijo = (h) => {
        
       const hijosremovido = formulario.filter((hijo)=> hijo !== h )
       console.log(hijosremovido)
        setFormulario(hijosremovido)
      }




    //peticiones de select
    const [cargo, setcargo] = useState([]);
    const [sexo, setsexo] = useState([]);
    const [nacionalidad, setnacionalidad] = useState([]);
    const [civil, setcivil] = useState([]);
    const [gruposanguineo, setgruposanguineo] = useState([]);
    const [tallas, settallas] = useState([]);
    const [municipio, setmunicipio] = useState([]);
    const [provincia, setpronvincia] = useState([]);
    const [categoria, setcategoria] = useState([]);
    const [nivelacademico, setnivelacademico] = useState([]);
    const [loading, setLoading] = useState(true);

    const [nivelSuperior,setNivelSuperior] = useState(false);

    const cambiarNivel = (e) =>  {
       const resultado = nivelacademico.filter((n) => n.nivelAcademicoId == e.target.value)
       if(resultado.length > 0 ){
            let nivel = resultado[0]
            setNivelSuperior(nivel.requiereNombre);
       }
        
    }

    useEffect(()=>{
        SelectCargo().then(datos => setcargo(datos));
        SelectSexo().then(data => setsexo(data));
        SelectNacionalidad().then(data => setnacionalidad(data));
        SelectCivil().then(data => setcivil(data));
        Selectgruposanguineo().then(data => setgruposanguineo(data));
        SelectTallas().then(data => settallas(data));
        SelectCategoria().then(data => setcategoria(data));
        SelectProvincia().then(data => setpronvincia(data));
        SelectMunicipio().then(data => setmunicipio(data));
        SelectNivelAcademico().then(data => setnivelacademico(data));
    }, []);

    //check input
    const [checkpasaporte, setcheckpasaporte] = useState(false)
    const [checkcuenta, setcheckcuenta] = useState(false)
    const [checknss, setchecknss] = useState(false)
    const [checklicencia, setchecklicencia] = useState(false)
    const [checkempleado, setcheckempleado] = useState(false)
    const [checkotrainstitucion, setcheckotrainstitucion] = useState(false)
    const [checksabenadar, setchecksabenadar] = useState(false)
    const [checksabeconducir, setchecksabeconducir] = useState(false)
    return(
        <div className="formulario ">
            <div className="card-body ml-5">
            
                <Formik>
                        <form >
                            <div className='card p-4 m-5 d-flex justify-content-center ' >
                                <img  className='w-50 d-flex justify-content-center' src="https://www.defensacivil.gob.do/images/plantilla/logo_defensa_civil_ultimate.png"  />
                            </div>

                            <div className="formulario">
                            <div className=" card  m-5 xs ">
                                <div className="card ">
                                <h2  className=' p-4 m-4 text-info'>Formulario</h2>

                                <h5 className="card-title text-center mt-4 mb-5">Datos Personales </h5>
                                    
                                <div className="row  mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="FechaIngresaInstitucion"> Ingreso a la Institución 
                                        <input type="date" className="form-control mt-3" name="FechaIngresaInstitucion" placeholder="Institución "></input>
                                    </label>
                                    </div >

                                    {loading ? (
                                              <div className="col minicomponete" >
                                              <div className="spinner-border" role="status"/>
                                              </div>
                                            ) : (
                                            <div className="col minicomponete">
                                                {
                                            <label htmlFor="CargoEnInstitucionID"> Cargo en la institución 
                                                <select  defaultValue=""  name="CargoEnInstitucionID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                <option   disabled >Selecciona cargo </option>
                                                        {cargo.map((cargos,i) => (
                                                            <option key={i} value={cargos.cargoId}>{cargos.cargoNombre}</option>
                                                        ))} 
                                                    </select>
                                                </label>
                                                }
                                            </div>
                                            )
                                        }
                                </div>
                            
                                <div className="row mt-3">
                                    <div className="col  minicomponete">
                                    <label htmlFor="Nombre"> Nombre 
                                        <input type="text" className="form-control mt-3" name="Nombre" placeholder="Nombre "></input>
                                    </label>
                                    </div>

                                    <div className="col minicomponete">
                                    <label htmlFor="Apellido"> Apellido
                                        <input type="text" className="form-control mt-3" name="Apellido" placeholder="Apellido "></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="Apodo"> Apodo
                                        <input type="text" className="form-control mt-3" name="Apodo" placeholder="Apodo"></input>
                                    </label>
                                    </div>
                                </div>

                            

                                <div className="row mt-3">
                                    {loading ? (
                                               <div className="col minicomponete" >
                                               <div className="spinner-border" role="status"/>
                                               </div>
                                                    ) : (
                                            <div className="col minicomponete">
                                                {
                                                <label  htmlFor="SexoID"> Sexo
                                                    <select defaultValue="" name="SexoID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                    <option value=""  disabled >Selecciona sexo </option>
                                                        {sexo.map((sex,i) => (
                                                            <option key={i} value={sex.sexoId}>{sex.sexoNombre}</option>
                                                        ))} 
                                                    </select>
                                                </label>
                                                }
                                        </div>
                                        )
                                    }
                                
                                        <div className="col minicomponete ">
                                        <label htmlFor="Cedula"> Cédula
                                            <input type="text" className="form-control mt-3" name="Cedula" placeholder="Cedula "></input>
                                        </label>
                                        </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="FechaNacimiento"> Fecha nacimiento
                                        <input type="date" className="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                    </label>
                                    </div>

                                    <div className="col minicomponete">
                                    <label htmlFor="LugarDeNacimiento"> Lugar nacimiento
                                        <input type="text" className="form-control mt-3" name="LugarDeNacimiento" placeholder="Lugar de Nacimiento "></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                {loading ? (
                                           <div className="col minicomponete" >
                                           <div className="spinner-border" role="status"/>
                                           </div>
                                        ) : (
                                            <div className="col minicomponete">
                                                {
                                                    <label  htmlFor="EstadoCivilID"> Estado civil
                                                        <select defaultValue="" name="EstadoCivilID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                        <option value=""  disabled >Selecciona estado civil </option>
                                                            {civil.map((estado,i) => (
                                                                <option key={i} value={estado.estadoCivilId}>{estado.estadoCivilNombre}</option>
                                                            ))} 
                                                        </select>
                                                    </label>
                                                }
                                            </div>
                                            )
                                        }
                                </div>

                                <div className="row mt-3">
                                {loading ? (
                                         <div className="col minicomponete" >
                                         <div className="spinner-border" role="status"/>
                                         </div>
                                        ) : (
                                            <div className="col minicomponete">
                                                {
                                                    <label  htmlFor="EstadoCivilID"> Nacionalidad
                                                        <select  defaultValue="" name="EstadoCivilID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                        <option value=""  disabled >Selecciona Nacionalidad </option>
                                                            {nacionalidad.map((estado,i) => (
                                                                <option key={i} value={estado.nacionalidadId}>{estado.nacionalidadNombre}</option>
                                                            ))} 
                                                        </select>
                                                    </label>
                                                }
                                            </div>
                                            )
                                        }
                                </div>

                                
                                
                        
                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="EstaturaEnPie">Estatura en pie
                                        <input type="text" className="form-control mt-3" name="EstaturaEnPie" placeholder="Estatura"></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="PesoEnLibras"> Peso en libras
                                        <input type="text" className="form-control mt-3" name="PesoEnLibras" placeholder="Peso en libras"></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                        <div className="col minicomponete">
                                        <label htmlFor=" ColorDePelo"> Color de pelo
                                            <input type="text" className="form-control mt-3" name=" ColorDePelo" placeholder="Color de pelo"></input>
                                        </label>
                                        </div>

                                        <div className="col minicomponete">
                                        <label htmlFor="CoLorDePiel"> Color de piel
                                            <input type="text" className="form-control mt-3" name="CoLorDePiel" placeholder="Color de piel "></input>
                                        </label>
                                        </div>
                                    </div>


                                    <div className="row mt-3">
                                        {loading ? (
                                                 <div className="col minicomponete" >
                                                 <div className="spinner-border" role="status"/>
                                                 </div>
                                                ) : (
                                                        <div className="col minicomponete">
                                                            {
                                                            <label  htmlFor="GrupoSanguineoID"> Grupo sanguineo
                                                                <select defaultValue="" name="GrupoSanguineoID"  className="form-select mt-3" placeholder='hola' aria-label="Default select example"  > 
                                                                <option value="" disabled >Selecciona </option>
                                                                    {gruposanguineo.map((grupo,i) => (
                                                                        <option key={i} value={grupo.grupoSanguineoId}>{grupo.grupoSanguineo}</option>
                                                                    ))} 
                                                                </select>
                                                            </label>
                                                            }
                                                    </div>
                                                )
                                            }
                                    </div>
                                                            
                                    <div className="row mt-3">
                                        {loading ? (
                                                  <div className="col minicomponete" >
                                                  <div className="spinner-border" role="status"/>
                                                  </div>
                                                ) : (
                                                        <div className="col minicomponete">
                                                            {
                                                            <label  htmlFor="GrupoSanguineoID"> Talla camiseta
                                                                <select defaultValue="" name="GrupoSanguineoID"  className="form-select mt-3" placeholder='hola' aria-label="Default select example"  > 
                                                                    <option value="" disabled >Selecciona Talla</option>
                                                                    {tallas.map((grupo,i) => (
                                                                        <option key={i} value={grupo.tallaCamisetaId}>{grupo.tallaCamiseta}</option>
                                                                    ))} 
                                                                </select>
                                                            </label>
                                                            }
                                                    </div>
                                                    )
                                                }
                                    </div>

                                    <div className="row mt-3">
                                        <div className=" col minicomponete">
                                        <label  className='mt-3' htmlFor="NumeroPasaporte"> Tiene numero de pasaporte
                                            <input className="form-check " type="checkbox" id="check_seguro" onChange={() => {setcheckpasaporte(!checkpasaporte);}} ></input>
                                                {checkpasaporte&&
                                                <input type="text" className="form-control mt-1" name="NumeroPasaporte" placeholder="Numero de pasaporte"></input>
                                                }           
                                            </label>
                                        </div> 
                                    </div>

                                    <div className="row mt-3">
                                        <div className=" col minicomponete">
                                        <label  className='mt-3' htmlFor="NumeroCuenta"> Tiene numero de cuenta *Banreservas*
                                            <input className="form-check " type="checkbox" id="check_seguro" onChange={() => {setcheckcuenta(!checkcuenta);}} ></input>
                                                {checkcuenta&&
                                                <input type="text" className="form-control mt-1" name="NumeroCuenta" placeholder="Numero de cuenta"></input>
                                                }           
                                            </label>
                                        </div> 
                                    </div>
                                    
                                    <div className="row mt-3">
                                        <div className=" col minicomponete">
                                        <label  className='mt-3' htmlFor="NSS"> Tiene Nss
                                            <input className="form-check " type="checkbox" id="check_seguro" onChange={() => {setchecknss(!checknss);}} ></input>
                                                {checknss&&
                                                <input type="text" className="form-control mt-1" name="NSS" placeholder="Nss"></input>
                                                }           
                                            </label>
                                        </div> 
                                    </div>
                                    
                                    <div className="row mt-3">
                                        <div className=" col minicomponete">
                                        <label  className='mt-3' htmlFor="LicenciaCategoriaID"> Tiene Licencias de conducir
                                            <input className="form-check " type="checkbox" id="check_seguro" onChange={() => {setchecklicencia(!checklicencia);}} ></input>
                                                {checklicencia&&
                                                    <select defaultValue="" name="LicenciaCategoriaID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                        <option value="" disabled >Selecciona Licencia</option>
                                                        {categoria.map((grupo,i) => (
                                                            <option key={i} value={grupo.licenciaCategoriaId}>{grupo.licenciaCategoria}</option>
                                                        ))} 
                                                    </select>
                                                }           
                                            </label>
                                        </div> 
                                    </div>

                                    
                              
                                    
                                    <br/>
                                    <br/>
                                </div>
                        </div>

                        <div className=" card  m-5 xs ">
                            <div className="card">
                            <h5 className="card-title text-center mt-4 mb-5">Información de contacto</h5>
                            
                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="Direccion"> Direccion
                                    <input type="text" className="form-control mt-3" name="Direccion" placeholder="Direccion "></input>
                                </label>
                                </div>
                            </div>    

                            <div className="row mt-3">
                                        {loading ? (
                                                  <div className="col minicomponete" >
                                                  <div className="spinner-border" role="status"/>
                                                  </div>
                                                ) : (
                                                        <div className="col minicomponete">
                                                            {
                                                            <label  htmlFor="ProvinciaId"> Provincia
                                                                <select defaultValue="" name="ProvinciaId"  className="form-select mt-3" placeholder='hola' aria-label="Default select example"  > 
                                                                    <option value="" disabled>Selecciona provincia</option>
                                                                    {provincia.map((grupo,i) => (
                                                                        <option key={i} value={grupo.provinciaId}>{grupo.provinciaNombre}</option>
                                                                    ))} 
                                                                </select>
                                                            </label>
                                                            }
                                                    </div>
                                                    )
                                                }

                                        {loading ? (
                                                  <div className="col minicomponete" >
                                                  <div className="spinner-border" role="status"/>
                                                  </div>
                                                ) : (
                                                        <div className="col minicomponete">
                                                            {
                                                            <label  htmlFor="MunicipioId"> Municipio
                                                                <select defaultValue="" name="MunicipioId"  className="form-select mt-3" placeholder='hola' aria-label="Default select example"  > 
                                                                    <option value="" disabled >Selecciona Municipio</option>
                                                                    {municipio.map((grupo,i) => (
                                                                        <option key={i} value={grupo.municipioId}>{grupo.municipioNombre}</option>
                                                                    ))} 
                                                                </select>
                                                            </label>
                                                            }
                                                    </div>
                                                    )
                                                }
                                    </div>
                                    
                                <div className="row mt-3">
                                    <div className="col  minicomponete">
                                    <label htmlFor="Sector"> Sector 
                                        <input type="text" className="form-control mt-3" name="Sector" placeholder="Sector "></input>
                                    </label>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="CorreoElectronico"> Correo electronico
                                        <input type="text" className="form-control mt-3" name="CorreoElectronico" placeholder="Correo "></input>
                                    </label>
                                    </div>
                                </div>     

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="TelefonoCelular"> Telefono celular
                                        <input type="text" className="form-control mt-3" name="TelefonoCelular" placeholder="celular "></input>
                                    </label>
                                    </div>
                                </div> 

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="TelefonoResidencial"> Telefono residencial <span>(opcional)</span>
                                        <input type="text" className="form-control mt-3" name="TelefonoResidencial" placeholder="Telefono residencial "></input>
                                    </label>
                                    </div>
                            
                                    <div className="col minicomponete">
                                    <label htmlFor="TelefonoOficina"> Telefono oficina <span>(opcional)</span>
                                        <input type="text" className="form-control mt-3" name="TelefonoOficina" placeholder="Telefono oficina"></input>
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
                            <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="NombrePadre"> Padre 
                                        <input type="text" className="form-control mt-3" name="NombrePadre" placeholder="Nombre "></input>
                                    </label>
                                    </div>
                                </div> 
                                
                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="NombreMadre"> Madre
                                        <input type="text" className="form-control mt-3" name="TelefNombreMadreonoCelular" placeholder="Nombre "></input>
                                    </label>
                                    </div>
                                </div> 

                                <div className="row mt-3">
                                    <div className="col minicomponete">
                                    <label htmlFor="NombreConyuge"> Conyuge
                                        <input type="text" className="form-control mt-3" name="NombreConyuge" placeholder="Nombre "></input>
                                    </label>
                                    </div>
                                </div> 



                                <div >
                                    <div className='col minicomponete'>
                                    <button className="btn btn-primary mt-3 "  onClick={(e)=>agregarHijo(e)}> Agregar hijo</button>
                                    </div>

                                    <div className='card m-5'>
                                    {formulario.map((hijo,i) => 

                                        (<div key={i} >
                                            <button className="b mt-5 ms-4"onClick={(e) => Eliminarhijo(hijo)} >X</button>
                                            <div className=" card-body row mt-3">
                                            <div className="col  minicomponete">
                                            <label htmlFor="Nombre"> Nombre 
                                                <input type="text" className="form-control mt-3" name="Nombre" placeholder="Nombre "></input>
                                            </label>
                                            </div>

                                            <div className="col minicomponete">
                                            <label htmlFor="Apellido"> Apellido
                                                <input type="text" className="form-control mt-3" name="Apellido" placeholder="Apellido "></input>
                                            </label>
                                            </div>

                                            <div className="row mt-3">
                                            {loading ? (
                                                    <div className="col minicomponete" >
                                                    <div className="spinner-border" role="status"/>
                                                    </div>
                                                            ) : (
                                                    <div className="col minicomponete">
                                                        {
                                                        <label  htmlFor="SexoID"> Sexo
                                                            <select  defaultValue="" name="SexoID"  className="form-select mt-3" aria-label="Default select example"  > 
                                                            <option value=""  disabled >Selecciona sexo </option>
                                                                {sexo.map((sex,i) => (
                                                                    <option key={i} value={sex.sexoId}>{sex.sexoNombre}</option>
                                                                ))} 
                                                            </select>
                                                        </label>
                                                        }
                                                </div>
                                                )
                                            }


                                            <div className="col minicomponete">
                                                <label htmlFor="FechaNacimiento"> Fecha nacimiento
                                                    <input type="date" className="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                                </label>
                                            </div>
                                         </div>
                                            </div>
                                            <br/>
                                        </div>)
                                    
                                )}
                                    </div>
                                    
                                </div>
                                  
                                <br/>
                                <br/>
                            </div>
                            </div>                   
                        
                            <div className=" card  m-5 xs ">
                            <div className="card">
                            <h5 className="card-title text-center mt-4 mb-5">Experiencia</h5>
                           
                            <div className="row ">
                                <div className=" col minicomponete">
                                <label  className='mt-3' htmlFor="EsEmpleado"> Tiene empleado (actualmente)
                                    <input className="form-check " type="checkbox" id="EsEmpleado" onChange={() => {setcheckempleado(!checkempleado);}} ></input>
                                        {checkempleado&&
                                        <input type="text" className="form-control mt-1" name="DondeTrabaja" placeholder="Donde"></input>
                                        }           
                                    </label>
                                </div> 
                            </div>    

                            <div className="row mt-3">
                                {loading ? (
                                            <div className="col minicomponete" >
                                            <div className="spinner-border" role="status"/>
                                            </div>
                                        ) : (
                                                <div className="col minicomponete">
                                                    {
                                                    <label  htmlFor="NivelAcademicoId"> Nivel academico
                                                        <select defaultValue="" onChange={(e)=> {cambiarNivel(e)}} name="NivelAcademicoId"  className="form-select mt-3" aria-label="Default select example"  > 
                                                            <option value="" disabled >Selecciona nivel academico</option>
                                                            {nivelacademico.map((grupo,i) => (
                                                                <option key={i}  value={grupo.nivelAcademicoId}>{grupo.nivelAcademicoNombre}</option>
                                                            ))} 
                                                        </select>
                                                    </label>
                                                    }
                                            </div>
                                            )
                                        }
                                </div>         
                                   {nivelSuperior&& (<>
                                        <div className="row mt-3">
                                        <div className="col minicomponete">
                                        <label htmlFor="NombreInstitucionAcademica"> Nombre de la institucion academica
                                            <input type="text" className="form-control mt-3" name="TelefonoCelNombreInstitucionAcademicaular" placeholder="Institucion academica "></input>
                                        </label>
                                        </div>
                                    </div> 

                                    <div className="row mt-3">
                                        <div className="col minicomponete">
                                        <label htmlFor="NombreCarrera"> Profesión
                                            <input type="text" className="form-control mt-3" name="NombreCarrera" placeholder="Carrera "></input>
                                        </label>
                                        </div>
                                    </div> 
                                   
                                   </>)
                                   
                                 }         
                               

                                <div className="row ">
                                <div className=" col minicomponete">
                                <label  className='mt-3' htmlFor="OtraInstitucionVoluntariosHaPertenecido">  En otra institucion ha pertenecido como voluntario 
                                    <input className="form-check " type="checkbox" id="OtraInstitucionVoluntariosHaPertenecido" onChange={() => {setcheckotrainstitucion(!checkotrainstitucion);}} ></input>
                                        {checkotrainstitucion&&
                                        <input type="text" className="form-control mt-1" name="OtraInstitucionVoluntariosNombre" placeholder="Nombre intitucion"></input>
                                        
                                        } 
                                         {checkotrainstitucion&&
                                            <label  className="mt-3 my-3"  htmlFor="otraInstitucionVoluntariosCargo"> Cargo dentro de la institucion  
                                                 <input type="text" className="form-control mt-3 my-3" name="otraInstitucionVoluntariosCargo" placeholder="Cargo "></input>
                                            </label>
                                        }               
                                    </label>
                                </div> 

                            <div className="row ">
                                <div className=" col minicomponete">
                                <label  className='mt-3' htmlFor="SabeNadar"> Sabe nadar
                                    <input className="form-check " type="checkbox" name="SabeNadar" onChange={() => {setchecksabenadar(!checksabenadar);}} ></input>        
                                </label>
                                </div> 
                            </div>  

                            <div className="row ">
                                <div className=" col minicomponete">
                                <label  className='mt-3' htmlFor="SabeConducir"> Sabe conducir
                                    <input className="form-check " type="checkbox" name="SabeConducir" onChange={() => {setchecksabeconducir(!checksabeconducir);}} ></input>        
                                </label>
                                </div> 
                            </div>    
                            </div>    
                                                
                                <br/>
                                <br/>
                            </div>
                            </div>

                            


                        <div className="centarlizar">
                            <button type="button" className="btn btn-primary px-5 ">Enviar</button>
                        </div>


                            </div>
                        </form>
                </Formik>
            </div>
        </div>
        
    )
}
export default Formulario;