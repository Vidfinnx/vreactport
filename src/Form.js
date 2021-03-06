import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EmailForm() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
      };

    return (
        <div className="inputForm">
            <Form onSubmit={handleSubmit}>
            {message && <span style={{ fontFamily: 'Digital', backgroundColor: 'black', color: '#6495ed'}}>Thank You for Your Submission</span>}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EmailForm
