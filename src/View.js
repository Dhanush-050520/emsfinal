import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useState } from 'react'
import { Card,ListGroup } from 'react-bootstrap'

const View = () => {
    const {id}=useParams()
    const [view1,setView1]=useState([])
   

    useEffect(()=>{
      axios.get('http://localhost:5000/posts/'+ id).then(res=>(res.data)).then((res1)=>
        setView1(res1)
 
    )
    },[])


    
    return (
        <div>
           
           <center>
            <h1>welcome to {view1.name} page</h1>
            <Card style={{width:"18rem"}}>
            <ListGroup>
  <ListGroup.Item><b>NAME</b>:{view1.name}</ListGroup.Item>
  <ListGroup.Item><b>ID</b>:{view1.id}</ListGroup.Item>
  <ListGroup.Item><b>DEPARTMENT:</b>{view1.department}</ListGroup.Item>
  <ListGroup.Item><b>PHONE:</b>{view1.phone}</ListGroup.Item>
  <ListGroup.Item><b>ADDRESS:</b>{view1.address}</ListGroup.Item>
</ListGroup>
</Card>
</center>

            

            
            
        </div>
    )
}

export default View
