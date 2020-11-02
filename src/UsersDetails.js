import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'

const UsersDetails = ({users}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="danger" onClick={handleShow}>
        See more
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
    <Modal.Title>{users.name} <br/>
    {users.website}
    </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {users.address.street},{users.address.suite},{users.address.city}<p>zip:{users.address.zipcode}</p> <br/>
            <h5> company: {users.company.name}</h5>
            <span>"</span>{users.company.catchPhrase}<span>"</span>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default UsersDetails
