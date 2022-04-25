import React from "react";
import { Button } from "react-bootstrap";

const MarkButton = (props) => {
    const { toToggle, xcompleted, xid } = props;
    return (
        <Button
            variant="outline-primary"
            onClick={(e) => toToggle(e, xid)}
        >
            {xcompleted ? `Uncomplete` : `Complete`}
        </Button>
    );
};

export default MarkButton;
