
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import useState from 'react'
import CiEdit from 'react-icons/ci';
import Formulario from './Forms';
import axios from 'axios';


function Editar({id}) {

    const [show,setShow] = useState(false)

    function excluirDados() {

        axios.delete("https://apiaulas.thiagodev502.repl.co/funcionarios/"+ id).then(() => {location.reload()})
        .catch((erro) => {
            console.log("Erro ao excluir", erro)
        })
    }

    return (

        <div>
            <span style={{cursor:"pointer"}} onClick={() => setShow(true)} className='text-primary'><CiEdit /></span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={excluirDados} variant='danger'>Editar</Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Editar