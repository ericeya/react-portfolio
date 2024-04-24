import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Project(props) {
    return (
        <>
            <Card className='proj-card'>
                <Card.Img variant="top" src={props.screenshot} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary" className='proj-card-button'><a href={props.github} target="_blank">Github</a></Button>
                </Card.Body>
            </Card>

        </>

    )
}

