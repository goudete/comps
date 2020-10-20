import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        //handle input function
    }

    render() {
        return (
            <div>
                <Card elevation={Elevation.TWO}>
                    <h5>Signup to clustr</h5>
                    <Form>
                        <FormGroup>
                            <Label for="">Username:</Label>
                            <Input
                                name="username"
                                id="username"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="">Email:</Label>
                            <Input
                                name="email"
                                id="email"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="">Password:</Label>
                            <Input
                                name="password"
                                id="password"
                                type="password"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="">Confirm Password:</Label>
                            <Input
                                name="confirmPassword"
                                id="confirmPassword"
                                type="password"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default SignupForm;