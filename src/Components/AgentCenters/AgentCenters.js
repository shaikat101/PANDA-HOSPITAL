import React from 'react';
import {Container,Table } from 'react-bootstrap';
import './agentCenters.css'

const AgentCenters = () => {
    return (
        
            
            <Container fluid className='agentDesign pt-4'> 
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>জেলা</th>
      
      <th>ঠিকানা</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Dhaka</td>
      
      <td>Zigatola,Dhanmondi</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Gazipur </td>
      
      <td>New Road</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Tangail</td>
      
      <td>Gonesh More</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Barishal</td>
      
      <td>Bazar Road</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Mymensing</td>
      
      <td>New Town Road</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Sylhet</td>
     
      <td>Basundhara Road</td>
    </tr>
    <tr>
      <td>7</td>
      <td>sunamganj</td>
      
      <td>Hospital Road</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Rajshahi </td>
      
      <td>Mosque Market</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Bagura </td>
      
      <td>Tarakandi Road</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Chittagong</td>
      
      <td>Demra</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Coxs-Bazar </td>
     
      <td>Ghatandi </td>
    </tr>
    <tr>
      <td>12</td>
      <td>Khulna</td>
     
      <td>Jhawchar</td>
    </tr>
  </tbody>
</Table>
            </Container>
            
    
    );
};

export default AgentCenters;