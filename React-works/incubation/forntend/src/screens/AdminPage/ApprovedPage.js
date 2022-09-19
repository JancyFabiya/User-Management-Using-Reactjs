import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// function CustomToggle({ children, eventKey }) {
//   const decoratedOnClick = useAccordionButton(eventKey, () =>
//     console.log('totally custom!'),
//   );

//   return (
//     <button
//       type="button"
//       style={{ backgroundColor: 'pink' }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

function Example() {

    const [newapplication,setNewapplication]=useState([])
    


    const fetchnewApplication=async()=>{
        const getAppl=await axios.get('/api/admin/getapprovedApp');
        setNewapplication(getAppl.data)
        console.log(getAppl.data);
        
    }

    useEffect(()=>{
      fetchnewApplication();

        },[])
       
// const processingAppli=(id)=>{
//   const response=axios.patch(`api/admin/processingApp/${id}`)
//   setNewapplication((newapplication))
// }
// const approvedAppli=(id)=>{
//   const response=axios.patch(`api/admin/approvedApp/${id}`)
//   setNewapplication((newapplication))
// }
// const rejectAppli=(id)=>{
//   const response=axios.patch(`api/admin/rejectApp/${id}`)
//   setNewapplication((newapplication))
// }


  return (
    <>
     {newapplication.length<1 ? (
        <div>
          <h3 style={{color:"red"}}>Currently no applications</h3>
        </div>): (
    <div style={{marginTop:'3%'}}>
    {
      newapplication.map((newapplication)=>(
    <Accordion defaultActiveKey="1">
        
        <Card style={{margin:10, width: "100%" ,backgroundColor:'#f7f7f7'}}>
        <Card.Header>
          <Accordion.Header eventKey="0">{newapplication.companyname}</Accordion.Header>
        </Card.Header>
        <Accordion.Body eventKey="0">
          <Card.Body>
          <div className='row'>
        <div className='col-md-3'>
          <Card.Title>Address:</Card.Title>
          <Card.Text>{newapplication.address}</Card.Text>
        </div>
        <div className='col-md-3'>
          <Card.Title>City:</Card.Title>
          <Card.Text>{newapplication.city}</Card.Text>
        </div>
        <div className='col-md-3'>
          <Card.Title>State:</Card.Title>
          <Card.Text>{newapplication.state}</Card.Text>
        </div>
      </div>
      <br></br>
      <div style={{textAlign:"center"}}></div>
      <div className="row">
      <div className='col-md-6'>
          <Card.Title>problem:</Card.Title>
          <Card.Text>{newapplication.problem}</Card.Text>
        </div>
        <div className='col-md-6'>
          <Card.Title>Solution:</Card.Title>
          <Card.Text>{newapplication.solution}</Card.Text>
        </div>
        <br></br>
        <div className='col-md-6'>
          <Card.Title>Value proposition:</Card.Title>
          <Card.Text>{newapplication.valueproposition}</Card.Text>
        </div>
        <div className='col-md-6'>
          <Card.Title>Competators:</Card.Title>
          <Card.Text>{newapplication.competators}</Card.Text>
        </div>
      </div>
      <br></br>
      <div className="row">
              <div className="col-md-6" style={{}}>
              <Card.Title>Incubation Type:</Card.Title>
                <Card.Text>{newapplication.type}</Card.Text>
                </div>
                </div>
<br></br>
        {/* <Button onClick={() => processingAppli(newapplication._id)}>Processing</Button>
      <Button onClick={() => approvedAppli(newapplication._id)}>Approved</Button> */}
      <Link to='/slot'><Button>Book a Slot</Button></Link>
          </Card.Body>
        </Accordion.Body>
      </Card>
    </Accordion>
      ))}     

    </div>
        )}
    </>
  );
}

// render(<Example />);

export default Example;
// import React from 'react'

// // import Table from 'react-bootstrap/Table';
// import {  Button, Card } from 'react-bootstrap';
// import {useState,useEffect} from 'react'
// import axios from 'axios'

// function Notes() {

// const [newapplication,setNewapplication]=useState([])
    


//     const fetchnewApplication=async()=>{
//         const getAppl=await axios.get('/api/admin/getnewapplication');
//         setNewapplication(getAppl.data)
//         console.log(getAppl.data);
        
//     }

//     useEffect(()=>{
//       fetchnewApplication();

//         },[])
       
// const processingAppli=(id)=>{
//   const response=axios.patch(`api/admin/processingApp/${id}`)
//   setNewapplication((newapplication))
// }
// const approvedAppli=(id)=>{
//   const response=axios.patch(`api/admin/approvedApp/${id}`)
//   setNewapplication((newapplication))
// }
// const rejectAppli=(id)=>{
//   const response=axios.patch(`api/admin/rejectApp/${id}`)
//   setNewapplication((newapplication))
// }

// // const deleteHandler=(id)=>{
// //   axios.post(`/api/users/deleteUser/${id}`);
// //   setNewapplication((newapplication)=>{
// //               return newapplication.filter((newapplication)=>user._id !==id)
// //           })
// //       }
        




//   return (
//     <Table striped bordered hover>
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Name</th>
//         <th>Business proposal</th>
//         <th>Plan</th>
//         {/* <th>Edit</th>
//         <th>Block</th> */}
//         <th>View Details</th>
//       </tr>
//     </thead>
//     <tbody>
//       {newapplication.map((newapplication)=>(

// <tr>
// <td>1</td>
// <td>{newapplication.name}</td>
// <td>{newapplication.businessproposal}</td>
// <td>{newapplication.plan}</td>
// <td><Button >View Details</Button></td>
// {/* <td><Button>Block</Button></td> */}

// {/* <td><Button   */}
//     {/* // variant="danger" onClick={() => deleteHandler(user._id)}  */}
//     {/* >Delete</Button></td> */}
// </tr>

//       ))}
      
      
//     </tbody>
//   </Table>
//   )
// }

// export default Notes

 

