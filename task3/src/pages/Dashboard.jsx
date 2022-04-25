import React, { useEffect, useState } from "react";
import {
    ListGroup,
    ListGroupItem,
    InputGroup,
    FormControl,
    Spinner,
} from "react-bootstrap";
import axios from "axios";
import DropdownComp from "../components/DropdownComp";
import ToastComp from "../components/ToastComp";
import FilteredDash from "../components/FilteredDash";

const Dashboard = () => {
    const [data, setData] = useState();
    const [showReq, setShowReq] = useState("All");
    const [showWarning, setShowWarning] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const [search, setSearch] = useState("");

    /*<-- SearchBar--> */
    const handleSearch = (e) => {
        // e.preventDefault();
        setSearch(e.target.value);
    };

    /* <-- Toggle Button--> */
    const toToggle = (e, x) => {
        e.stopPropagation();
        e.preventDefault();
        for (let i = 0; i < data.length; i++) {
            if (data[i]["id"] === x) {
                let copy = [...data];
                copy[i]["completed"] === true
                    ? (copy[i]["completed"] = false)
                    : (copy[i]["completed"] = true);
                setData(copy);
            }
        }
    };
    /* <-- Delete Button--> */
    const toDelete = (e, x) => {
        e.stopPropagation();
        e.preventDefault();

        setData(data.filter((item) => item.id !== x));
        if (data.length === 1) {
            setShowWarning(true);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setData(res.data);
        };
        fetchData();
    }, [refetch]);
    return (
        <ListGroup style={{ minWidth: "800px" }}>
            <ListGroup.Item>
                {/* <-- DROPDOWN COMPONENT -->*/}
                <DropdownComp showReq={showReq} setShowReq={setShowReq} />

                {/* <-- TOAST COMPONENT -->*/}
                <ToastComp
                    setShowWarning={setShowWarning}
                    setRefetch={setRefetch}
                    showWarning={showWarning}
                    refetch={refetch}
                />
            </ListGroup.Item>
            <ListGroupItem>
                <InputGroup>
                    <FormControl
                        placeholder="Search"
                        onChange={(e) => handleSearch(e)}
                    />
                </InputGroup>
            </ListGroupItem>
            {/* <-- Data Dashboard --> */}
            {data ? (
                <FilteredDash
                    data={
                        search
                            ? data.filter((item) =>
                                  item.title.includes(`${search}`)
                              )
                            : data
                    }
                    showReq={showReq}
                    toDelete={toDelete}
                    toToggle={toToggle}
                />
            ) : (
                <Spinner
                    style={{ margin: "auto" }}
                    animation="border"
                    role="status"
                    variant="light"
                >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            )
        </ListGroup>
    );
};

export default Dashboard;
