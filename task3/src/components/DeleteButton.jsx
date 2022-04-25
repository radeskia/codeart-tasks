import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = (props) => {
    const { toDelete, xid } = props;
    return (
        <Button
            variant="danger"
            onClick={(e) => toDelete(e, xid)}
        >
            Delete
        </Button>
    );
};

export default DeleteButton;
