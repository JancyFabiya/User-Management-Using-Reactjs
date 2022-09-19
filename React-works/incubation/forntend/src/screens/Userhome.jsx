import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import {useState,useEffect} from 'react'
import axios from 'axios';
import Header from '../components/Header/Header';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

  const info = localStorage.getItem("userInfo");
console.log(info,'aaaa');
  const [application, setApplication] = useState([]);
  
  

  const fetchApplication=async(info)=>{
    const applicdata=await axios.get(`/api/users/getApplication/${info}`)
    setApplication(applicdata.data)
    console.log(applicdata);
  }
  useEffect(() => {
    fetchApplication (info)
  }, []);
  return (
    <>
        <Header/>

    <section className="heading">
   
   
   <Link to={'/booking'}><Button  variant="dark" style={{marginLeft:10,marginBottom:6}} size="sm">Book a slot</Button></Link>

 
  </section>
  <div style={{ marginTop: "2%" }}>
<Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Slot Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {application.map((application) => (
            <TableRow
              key={application.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {application.companyname}
              </TableCell>
              <TableCell align="right">{application.name}</TableCell>
              <TableCell align="right">{application.email}</TableCell>
              <TableCell align="right">
                {(application.status !=='reject') ?(<p style={{color:'green'}}>{application.status}</p>):(<p style={{color:'red'}}>{application.status}</p>)}</TableCell>
              <TableCell align="right">
              {application.bookingStatus ? (<p style={{color:"green"}}>Allocated</p>) : (<p style={{color:"red"}}>Not Allocated</p>)}
</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </div>
    </>
  );
}
