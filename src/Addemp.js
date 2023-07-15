import React from "react";
import { Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
const Addemp = () => {
  const [empData, setData] = useState({
    empName: "",
    empId: "",
    empPhone: "",
    empAddress: "",
    empDepartment: "",
  });

  const { empName, empId, empPhone, empAddress, empDepartment } = empData;

  const cngHandler = (e) => {
    e.preventDefault();
    setData({ ...empData, [e.target.name]: e.target.value });
  };

 

  const subHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/posts", {
        name:empName,
        id:empId,
        phone:empPhone,
        address:empAddress,
        department:empDepartment,
      })
      
      .catch((err) => console.log(err));
      alert("data added succesfully ")
  };

  return (
    <div>
     
      <Card style={{ width: "50rem",marginLeft:"150px",padding:"40px"}}>
      <center><h1><b>Add Employee Details</b></h1></center>
      
        <Form onSubmit={subHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter name"
              value={empName}
              name="empName"
              onChange={cngHandler}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter id"
              value={empId}
              name="empId"
              onChange={cngHandler}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="enter phone"
              value={empPhone}
              name="empPhone"
              onChange={cngHandler}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="address"
              value={empAddress}
              name="empAddress"
              onChange={cngHandler}
            />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Department</Form.Label>
            <Form.Control
              as="select"
              value={empDepartment}
              name="empDepartment"
              onChange={cngHandler}
            >
              <option>.....</option>
              <option>Maintenance</option>
              <option>Developer</option>
              <option>Testing</option>
            </Form.Control>
          </Form.Group><br/>
          <center>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </center>
        </Form>
      </Card>
    </div>
  );
};

export default Addemp;
