import React from "react";
import MarkButton from "./MarkButton";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

const Card = (props) => {
    const { title, toToggle, toDelete, xid, xcompleted, user } = props;
    return (
        <Link
            to={`/users/${user}`}
            className="list-group-item d-flex justify-content-between"
            style={{ textDecoration: "none" }}
        >
            <div className="d-inline-flex">{title}</div>
            <div className="d-inline-flex ">
                <MarkButton
                    toToggle={toToggle}
                    xid={xid}
                    xcompleted={xcompleted}
                />
                <DeleteButton toDelete={toDelete} xid={xid} />
            </div>
        </Link>
    );
};

export default Card;
