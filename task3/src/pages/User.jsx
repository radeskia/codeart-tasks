import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const User = () => {
    let { id } = useParams();
    const [data, setData] = useState();

    const getInitials = (names) => {
        const splitNames = names.split(" ");

        return (
            splitNames.shift().charAt(0).toUpperCase() +
            splitNames.pop().charAt(0).toUpperCase()
        );
    };
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            setData(res.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div>
                <Link to="/">
                    <Button variant="primary">Back</Button>
                </Link>
            </div>
            <div>
                {data && (
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "3rem",
                                    height: "3rem",
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    borderRadius: "50%",
                                    color: "white",
                                }}
                            >
                                {getInitials(data.name)}
                            </div>
                            <p>{data.username}</p>
                            <p>{`${data.address.street}, ${data.address.city}`}</p>
                            <a href={`mailto: ${data.email}`}>{data.email}</a>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default User;
