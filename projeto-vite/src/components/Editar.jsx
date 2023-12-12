import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import useState from 'react'
import MdEdit from 'react-icons/md';
import Formulario from './Forms';
import axios from 'axios';


function Editar({id}) {

    const [show,setShow] = useState(false)

    return (

        <div>
            <span style={{cursor:"pointer"}} onClick={() => setShow(true)} className='text-primary'><MdEdit /></span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario id={id}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Editar