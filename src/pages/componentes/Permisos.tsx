import React from 'react'

interface Props 
{
    permiso1: string,
    permiso2: string
}

export const Permisos = (props:Props) => {
  return (
    <>
        <ul>
            <li>Premiso1: {props.permiso1}</li>
            <li>Premiso2: {props.permiso2}</li>
        </ul>
    </>
  )
}
