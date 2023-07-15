import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Button,Form,Card } from 'react-bootstrap'


const Edited = () => {
    const {id}=useParams();
    


    useEffect(()=>{
        axios.get('http://localhost:5000/posts/'+ id).then(res=> res.data)
        .then((res2)=>{
            setId1(res2.id)
            setName1(res2.name)
            setPhone1(res2.phone)
            setAddress1(res2.address)
            setDepartment1(res2.department)
        })
        .catch((err) => {
            console.log(err.message);
        })

    },[])

    const [id1,setId1]=useState("")
    const [name1,setName1]=useState("")
    const [phone1,setPhone1]=useState("")
    const [address1,setAddress1]=useState("")
    const [department1,setDepartment1]=useState("")
    
const editsubhandler=(e)=>{
e.preventDefault();


axios.put('http://localhost:5000/posts/'+id,{
    name:name1,
    id:id1,
    phone:phone1,   
    address:address1,
    department:department1

}).then((res1)=>{alert("post successfully")
}).catch((err) => {
    console.log(err.message);

})
}

    return (
        <div>
             
                <Card style={{width:"50rem",marginLeft:"190px",padding:"20px"}}>
                <center><h1><b>Edit Employee Details</b></h1></center>
        <Form onSubmit={editsubhandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" placeholder="enter name" value={name1}  onChange={e=>setName1(e.target.value)}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control type="text" placeholder="enter id" value={id1} disabled="disabled" onChange={e=>setId1(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="enter phone" value={phone1}  onChange={e=>setPhone1(e.target.value)}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="address" value={address1}  onChange={e=>setAddress1(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Department</Form.Label>
            <Form.Control as="select" value={department1}  onChange={e=>setDepartment1(e.target.value)}>
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
    )
}

export default Edited;
