import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Pagina2 = () => {
    const [nombre,setNombre] = useState("Joselito")
    const [apellido,setApellido] = useState("Vaca")
    const [eNombre,setENombre] = useState("")
    const validarNombre = (valor:string)=>{
        if (valor.length<4){
            setENombre("Debes ingresar 4 caracteres")
        }
        else {
            setENombre("")
        }
        setNombre(valor)
    }
    return (
        <>
            <h1>Registrar</h1>
            <h2>Bienvenido {nombre} {apellido}</h2>
                <Form >
                    <Form.Group className="mb-3" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingresa tu nombre" 
                            onChange={(e)=>validarNombre(e.currentTarget.value)}/>
                        
                    </Form.Group>
                    <Form.Text>{eNombre}</Form.Text>

                    <Form.Group className="mb-3" >
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingresa tu apellido"
                            onChange={(e)=>setApellido(e.currentTarget.value)} 
                            />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Acepto los terminos y condiciones" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Registrar
                    </Button>
                </Form>
        </>
    )
    }
export default Pagina2
