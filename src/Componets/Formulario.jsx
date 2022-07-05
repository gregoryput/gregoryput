import React from "react";
import { Formik, Form, Field } from "formik";



const Formulario = () =>{


    return(
        <div className="formulario">
         <div className=" card  m-5 xs ">
            <div className="card-body ml-5">
            <h5 className="card-title text-center">Datos Personales </h5>
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
                        <form >
                            <div className="cuerpo">
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

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento"> Estado Civil
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="NacionalidadID"> Nacionalidad
                                    <input type="text" class="form-control mt-3" name="NacionalidadID" placeholder=""></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="EstaturaEnPie">Estatura En Pie
                                    <input type="text" class="form-control mt-3" name="EstaturaEnPie" placeholder="Estatura"></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento"> Peso En Libras
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                </label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="Apodo"> Color Pelo
                                    <input type="text" class="form-control mt-3" name="Apodo" placeholder="Apodo"></input>
                                </label>
                                </div>

                                <div className="col minicomponete">
                                <label htmlFor="CoLorDePiel"> Color Piel
                                    <input type="text" class="form-control mt-3" name="CoLorDePiel" placeholder="CoLor de Piel "></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento">Grupo Sanguineo
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder=""></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento">Talla Camiseta
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

                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento"> Provincia
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col minicomponete ">
                                <label htmlFor="FechaNacimiento"> Sector
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder=""></input>
                                </label>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col minicomponete">
                                <label htmlFor="FechaNacimiento"> Dirección
                                    <input type="text" class="form-control mt-3" name="FechaNacimiento" placeholder="FechaNacimiento"></input>
                                </label>
                                </div>
                            </div>
                        </form>
                        
                </Formik>
            </div>
        </div>
        </div>
    )
}
export default Formulario;