import { Form } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Formulario() {

    return (

        <Form>
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