import { useContext } from "react";
import { Form, Button, Row, Col, Stack, Alert } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
const  Register= () => {
    const {registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading} =useContext(AuthContext);

    const handlePhoto = (e) => {
        updateRegisterInfo({...registerInfo, image: e.target.files[0]});
    }

    return (
        <Form onSubmit={registerUser} encType='multipart/form-data'>
            <Row
                style={{
                    height: "70vh",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "5%",
                }}
            >
                <Col xs={12} md={6} lg={4}>
                    <Stack gap={3}>
                        <h2>Register</h2>
                        <Form.Group controlId="formName">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={registerInfo.name}
                                onChange={(e) => updateRegisterInfo({...registerInfo, name: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={registerInfo.email}
                                onChange={(e) => updateRegisterInfo({...registerInfo, email: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={registerInfo.password}
                                onChange={(e) => updateRegisterInfo({...registerInfo, password: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile">
                            <Form.Control
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                name="photo"
                                onChange={handlePhoto}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={isRegisterLoading}>
                            {isRegisterLoading ? "Loading..." : "Register"}
                        </Button>
                        {registerError?.error && (
                            <Alert variant="danger">
                                <p>{registerError?.message}</p>
                            </Alert>
                        )}
                    </Stack>
                </Col>
            </Row>
        </Form>
    );
}

export default Register;