import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownComp = (props) => {
    const { showReq, setShowReq } = props;
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {showReq}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => setShowReq("All")}>
                    Show All
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => setShowReq("Finished")}>
                    Show Finished
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => setShowReq("Unfinished")}>
                    Show Unfinished
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownComp;
