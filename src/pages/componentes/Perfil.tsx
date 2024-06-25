import React from 'react'
import { Permisos } from './Permisos';

interface Props{
    nombre:string,
    apellido:string,
    edad?:number
}
export const Perfil = (props:Props) => {
  return (
    <>
        <p>Nombrer {props.nombre} </p>
        <p>Apellido {props.apellido} </p>
        <p>Edad: {props.edad} </p>

        {
            props.edad != undefined && 
            props.edad > 18 && 
            <>
            <p>Es mayor de edad</p> 
            <Permisos permiso1="Dormirse tarde" permiso2="Conducir"/>
            </>
            
            || 
            props.edad!=undefined && 
            props.edad < 18 && 
            <>
            <p>Es menor de edad</p> 
            <Permisos permiso1="Ser Fachero" permiso2="Llorar"/>
            </>
        }
        
    </>

    )
}
