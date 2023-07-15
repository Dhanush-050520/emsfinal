import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Table,Button} from 'react-bootstrap';
import { FaTrash,FaPenToSquare,FaCreativeCommonsBy } from "react-icons/fa6";
import { useNavigate } from 'react-router';





const Empdetails = () => {
    
    const [detail, setDetail] = useState([])
    const [page,setPage]=useState([])

    const navigate=useNavigate()
    
   
    useEffect(() => {
        axios.get('http://localhost:5000/posts').then(
            res => {setDetail(res.data);setPage(res.data.slice(0,10));}

        )
    }, [])
   

const delFun=(id)=>{
 const dele=window.confirm("Do you want to delete")
if(dele){
    axios.delete('http://localhost:5000/posts/'+id)
    .then(res=>{alert("Row deleted")})
    .catch(err=>console.log(err))
}
    }
    const editHand=(id)=>{
        navigate("edit/"+ id )
    }

    const viewfun=(id)=>{
        navigate("view/"+id)
    }

   


const pageNumbers=[]
for(let i=1;i< Math.ceil(detail.length/10)+1;i++){
    pageNumbers.push(i)     
}
const numHandler=(num)=>{
    setPage(detail.slice((num*10)-10,num*10))


}

    return (
        <div>
            <center><h1><b>Emp details</b></h1></center>
            <div className='container'>
                <div className='mt-3'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Id</th>
                                <th>phone</th>
                                <th>Address</th>
                                <th>Department</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        

                        <tbody>
                              {
                                page.map((user,index)=>{
                                    return <tr key={index}>
                                          <td>{user.name}</td>
                                          <td>{user.id}</td>
                                          <td>{user.phone}</td>
                                          <td>{user.address}</td>
                                          <td>{user.department}</td>
                                          <td><FaPenToSquare onClick={(e)=>editHand(user.id)}/></td>
                                          <td><FaTrash onClick={(e)=>delFun(user.id)}/> </td>
                                          <td><FaCreativeCommonsBy onClick={(e)=>viewfun(user.id)}/></td>

                                    </tr>

                                })
                              }
                        </tbody>
                       
                    </Table>
                </div>
                
            </div>

            
            <center>
            {
                pageNumbers.map(num=><Button key={num} style={{marginLeft:'1rem'}}
                  onClick={()=>numHandler(num)}>{num}</Button>)
            }
            </center>


            

            
           
        </div>
    )
}

export default Empdetails

