import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { FcDocument } from "react-icons/fc";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { post } from '../utils/baseRequest';

const colStack = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const attemptFormCreation = async () => {};

const CreateFormPanel = () => {
    return (    
        <div>
            <Container>
                <Row>
                    <Col style={colStack}>
                        <FcDocument size={'6em'}/>
                        <BsFillPlusCircleFill />
                    </Col>
                </Row>
            </Container>
        </div>
    );      
};

export default CreateFormPanel;