import { Form } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Formulario({id, setShow}) {

    function enviarDados(event) {
        const nome = event.target[0].value
        const cargo = event.target[1].value
        const departamento = event.target[2].value
        const salario = event.target[3].value
    }

    if(id) {
        axios.put("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id,

        {
            nome,
            cargo,
            departamento,
            salario
        }

        ).then(() => {

        }
        );

    }
    return (

        <Form onSubmit={enviarDados}>
            <Form.Group>
                <Form.Label>Nome:</Form.Label>
                <Form.control type="text"></Form.control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Cargo:</Form.Label>
                <Form.control type="text"></Form.control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Departamento:</Form.Label>
                <Form.control type="text"></Form.control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Salário:</Form.Label>
                <Form.control type="text"></Form.control>
            </Form.Group>
            <Form.Group>
                <Form.control className='btn btn-primary mt-3' type="submit"></Form.control>
            </Form.Group>
            
        </Form>

    )

}

export default Formulario