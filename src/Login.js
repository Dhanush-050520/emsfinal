import React ,{useState}from 'react';
import {Button,Form,Card} from 'react-bootstrap';
import './App.css';
import { FaUserTie } from 'react-icons/fa';
import  { useNavigate } from 'react-router-dom';





const Login=()=>{
const navigate=useNavigate();


  const [state,setState]=useState({user:' ',pass:' '})
  const {user,pass}=state;
  const changeHandler=(e)=>{
           e.preventDefault();
           setState({...state,[e.target.name]:e.target.value})
  }
  const submitHandler=(e)=>{
      e.preventDefault();
       fetch('http://localhost:5000/users').then((res)=>res.json()).then((res2)=>{
        const usercred=res2.find((ele)=>{ return ele.username===user && ele.password===pass
          
        
        })
        if(usercred){
         
             console.log("login success")
           localStorage.setItem("user",user)
             
             navigate('admin' )
        }
        else{
            alert("login failure")
        }
       })
  }


  
    return(
       <div>
         
          
        <center>
       <Card style={{width:"20rem" ,marginTop:"10rem",padding:"20px",backgroundColor:"skyblue",borderRadius:"20px"}}>
  <Form  onSubmit={submitHandler}>
  <Form.Group controlId="formBasicEmail">
    <h1>Login</h1>
    <FaUserTie size="3rem"/>
    <h5 style={{marginTop:"3px"}}>Sign in to your account</h5><br/>
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Username"  name ='user' value ={user} onChange={(e)=>changeHandler(e)} style={{borderRadius:"7px"}}/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label >Password</Form.Label>
   
    <Form.Control type="password" placeholder="Password" name="pass" value={pass} onChange={(e)=>changeHandler(e)} style={{borderRadius:"7px"}}/>
  </Form.Group><br/>
  <Button type="submit"  variant="primary"  className='logdesign'>
    Login
  </Button>
</Form>
</Card>
</center>
</div> 

       
    )
}
export default Login;
