import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { Grid, TextField, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material'
import './UserApplication.css';
import { Form } from 'react-bootstrap';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import { useNavigate } from "react-router-dom";
import MainScreen from '../components/MainScreen';
import Header from '../components/Header/Header';



const UserApplication = () => {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [teamandbackground, setTeamandbackground] = useState("");
    const [companyandproduct, setCompanyandproduct] = useState("");
    const [problem, setProblem] = useState("");
    const [solution, setSolution] = useState("");
    const [valueproposition, setValueproposition] = useState("");
    const [competators, setCompetators] = useState("");
    const [revenue, setRevenue] = useState("");
    const [potentialmarketsize, setPotentialmarketsize] = useState("");
    const [plan, setPlan] = useState("");
    const [type, setType] = useState("");
    const [businessproposal, setBusinessproposal] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userInfo=localStorage.getItem('userInfo')
  console.log(userInfo,'application');

  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(name);
    const userid=userInfo
    console.log(userid,'aaaaaaaaa')
//   if(password !==conformpassword){
//   setMessage('Passwords Do not Match');
//   }else{
//     setMessage(null)
    try{
    //   const config = {
    //     headers: {
    //       'Content-type':'application/json',
    //     },
    //   }
    //   setLoading(true)
  
      const companydata = await axios.post(
        "/api/users/userapplication",
        {userid,name,phonenumber,email,address,city,state,phonenumber,companyname,teamandbackground,companyandproduct,
        problem,solution,valueproposition,competators,revenue,potentialmarketsize,
    plan,type,businessproposal},
        // config
      );
    //   setLoading(false);
    //   localStorage.setItem("userInfo",JSON.stringify(data));
      if(companydata){
        navigate("/logged")
      }
    }catch(error){
  setError(error.response.data.message)
//   setLoading(false);
  
    }
  
//   }
  }
  return (
    <>
            <Header/>

    <MainScreen title=' Create your slot'>
    <div className='Box'>
  {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
    {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
      {loading && <Loading />}
      <Form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="name"
                        name='name'
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="email"
                        name='email'
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}       
                                     />
                </Grid>


                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Address"
                        name='address'
                        type="text"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}              
                              />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="City"
                        name='city'
                        type="text"
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}               
                             />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="State"
                        name='state'
                        type="text"
                        value={state}
                        onChange={(e)=>setState(e.target.value)}               
                             />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Phone no"
                        type="number"
                        name='phoneno'
                        value={phonenumber}
                        onChange={(e)=>setPhonenumber(e.target.value)}          
                                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Company name"
                        type="text"
                        name='companyname'
                        value={companyname}
                        onChange={(e)=>setCompanyname(e.target.value)}
                        />                    
                </Grid>
                {/* <Grid sx={{ mt: 2.5 }} item sm={6} xs={12}>
                    <label>Companylogo</label>  <br />
                    <input type='file' name='logo'
                    //  onChange={handleImage} 
                     />
                </Grid> */}
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Describe your team and background"
                        type="text"
                        name='teamandbackground'
                        value={teamandbackground}
                        onChange={(e)=>setTeamandbackground(e.target.value)}             
                               />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Describe your Company and Product"
                        type="text"
                        name='companyandproduct'
                        value={companyandproduct}
                        onChange={(e)=>setCompanyandproduct(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Describe the problem you are trying to solve"
                        type="text"
                        name='problem'
                        value={problem}
                        onChange={(e)=>setProblem(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="What is unique about your solution"
                        type="text"
                        name='solution'
                        value={solution}
                        onChange={(e)=>setSolution(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="What is your value proposition for the customer"
                        type="text"
                        name='valueproposition'
                        value={valueproposition}
                        onChange={(e)=>setValueproposition(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Who are your competators and what is your competatiev advantage?"
                        type="text"
                        name='competators'
                        value={competators}
                        onChange={(e)=>setCompetators(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Explain your revenue model"
                        type="text"
                        name='revenue'
                        value={revenue}
                        onChange={(e)=>setRevenue(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="What is the potential market size of the product?"
                        type="text"
                        name='potentialmarketsize'
                        value={potentialmarketsize}
                        onChange={(e)=>setPotentialmarketsize(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="How do you market or plan to market your products and services?"
                        type="text"
                        name='plan'
                        value={plan}
                        onChange={(e)=>setPlan(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>

                    <FormLabel id="demo-radio-buttons-group-label">Type of incubation needed</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="type"
                        value={type}
                        onChange={(e)=>setType(e.target.value)}                    >
                        <FormControlLabel className='radio' value="Physical incubation" control={<Radio />} label="Physical incubation" />
                        <FormControlLabel value="Virtual incubation" control={<Radio />} label="Virtual incubation" />
                    </RadioGroup>

                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Upload a detailed business proposal"
                        type="text"
                        name='businessproposal'
                        value={businessproposal}
                        onChange={(e)=>setBusinessproposal(e.target.value)}                    />
                </Grid>
                <Grid item xs={12}>
                    <Button className='button' variant="contained" color="success" type='submit' >
                        Submit
                    </Button>
                </Grid>
            </Grid>
            </Form>
     </div>
     </MainScreen>
     </>
  );
}

export default UserApplication;
