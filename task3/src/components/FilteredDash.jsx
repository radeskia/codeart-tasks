import React from "react";

import Card from "../components/Card";

const FilteredDash = (props) => {
    const { data, toDelete, toToggle, showReq } = props;

    return data.map((x, index) => {
        if (showReq === "All") {
            return (
                <Card
                    key={index}
                    title={x.title}
                    toToggle={toToggle}
                    xid={x.id}
                    xcompleted={x.completed}
                    toDelete={toDelete}
                    user={x.userId}
                />
            );
        } else if (showReq === "Finished") {
            if (x.completed === true) {
                return (
                    <Card
                        key={index}
                        title={x.title}
                        toToggle={toToggle}
                        xid={x.id}
                        xcompleted={x.completed}
                        toDelete={toDelete}
                        user={x.userId}
                    />
                );
            } else {
                return null;
            }
        } else if (showReq === "Unfinished") {
            if (x.completed === false) {
                return (
                    <Card
                        key={index}
                        title={x.title}
                        toToggle={toToggle}
                        xid={x.id}
                        xcompleted={x.completed}
                        toDelete={toDelete}
                        user={x.userId}
                    />
                );
            } else {
                return null;
            }
        } else {
            return null;
        }
    });
};

export default FilteredDash;
