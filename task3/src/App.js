import React from "react";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <div className="bg-dark p-5" style={{ minHeight: "100vh" }}>
                <Container className="d-flex flex-wrap justify-content-center">
                    <Row>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Dashboard />}></Route>
                                <Route
                                    path="/users/:id"
                                    element={<User />}
                                ></Route>
                            </Routes>
                        </BrowserRouter>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
