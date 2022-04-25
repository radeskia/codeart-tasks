import React from "react";
import { Button, Toast } from "react-bootstrap";

const ToastComp = (props) => {
    const { setShowWarning, setRefetch, showWarning, refetch } = props;
    return (
        <Toast
            onClose={(e) => {
                setShowWarning(!showWarning);
                setRefetch(!refetch);
            }}
            show={showWarning}
            animation={false}
            style={{ margin: "auto" }}
        >
            <Toast.Header>
                <strong className="me-auto">Out of Data!</strong>
            </Toast.Header>
            <Toast.Body>
                We've run out of data. Please close this window so we can fetch
                our data again!
                <Button
                    className="mx-4"
                    variant="outline-primary"
                    onClick={(e) => {
                        setShowWarning(false);
                        setRefetch(!refetch);
                    }}
                >
                    Close
                </Button>
            </Toast.Body>
        </Toast>
    );
};

export default ToastComp;
