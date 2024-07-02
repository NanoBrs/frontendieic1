import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Pagina3 = () => {
    const [valor1,setValor1] = useState("")
    const [valor2,setValor2] = useState("")
    const [resultado,setSuma] = useState("")

    const Sumar = (valor_1:string)=>{
        let suma = (valor_1)
        parseInt(valor_1) // Funcion para pasar string a int

    }
    return (
        <>
            <h1>Suma de valores</h1>
                <Form >
                    <Form.Group className="mb-3" >
                        <Form.Label>Valor 1</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Ingresa el valor 1 " 
                            onChange={(e)=>Sumar(e.currentTarget.value)}/>
                        
                    </Form.Group>
                    <Form.Text>{resultado}</Form.Text>

                    <Form.Group className="mb-3" >
                        <Form.Label>Valor 2</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Ingresa el valor 2"
                            />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Sumar
                    </Button>
                </Form>
        </>
    )
    }
export default Pagina3
