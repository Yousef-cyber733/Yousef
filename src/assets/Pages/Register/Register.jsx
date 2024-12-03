import { Button, Form } from "react-bootstrap";
import MainLayout from "../../../Layouts/MainLayout";
import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { useFormik } from "formik";
import {object, string} from 'yup'

export default function Register() {
    const loginFormik = useFormik({
        validateOnMount: true,
        initialValues: {
            username:"yyyyyy",
            password: "",
        },
        validationSchema: object({
            username:string().email().required(),
            password:string().min(8).required(),
        }),
        // validate:(values) => {
        //     const errors = {};
        //     if (!values.username.includes("@gamil.com")) {
        //         errors.username = "Email not vaild";
        //     }
        //     if (values.password.length < 8) {
        //         errors.password = "password not valid";
        //     }
        // },
        onSubmit: (values)=>{
            console.log(values);
        }
    }) 
    return (
        <MainLayout>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...loginFormik.getFieldProps("username")} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...loginFormik.getFieldProps("password")} />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    {loginFormik.touched.username &&
                    loginFormik.errors.username && (
                        <span className="text-danger">
                            {loginFormik.errors.username}
                        </span>/text-danger
                    )
                    }
                </Form.Group>
                <Button variant="primary" onClick={loginFormik.handleSubmit}>
                    Submit
                </Button>
            </Form>

        </MainLayout>

    )
};