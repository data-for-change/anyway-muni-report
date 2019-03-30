import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";

class LoginPage extends Component {
  render() {
    return (
      <div style={{ background: "#C7C8C8", height: "100%" }}>
        <p style={{ textAlign: "center" , padding: "50px"}}>Login to ANYWAY</p>
        <Card
          style={{
            background: "#C6F4FF",
            borderRadius: "25px",
            verticalAlign: "middle",
            padding: "5%",
            margin: "10%"
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <FormGroup style={{ alignItems: "center" }}>
              <TextField
                style={{ width: 200 }}
                multiline="Controlled"
                id="standard-name"
                margin="normal"
                label="שם משתמש:"
                alignContent="middle"
              />
              <TextField
                style={{ width: 200 }}
                multiline="Controlled"
                id="standard-name"
                label="סיסמה:"
                margin="normal"
              />
            </FormGroup>
            <a href="http://localhost:3000">
            <button
              block
              bsSize="large"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              login
            </button>
            </a>
            
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
