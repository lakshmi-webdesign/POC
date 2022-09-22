import React , {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './component/Home';

import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Register from './component/Register';
import BalanceEnquiry from './component/BalanceEnquiry';

import Registration1 from './component/Registration1';

import FundTransfer from './component/FundTransfer';
import Ministatement from './component/Ministatement';
import Customizedstatement from './component/Customizedstatement';
import Forgotpassword from './component/Forgotpassword';
import Manager from './component/Manager';
import Admin from './component/Admin';
import ManagerHeader from './component/ManagerHeader';
import Newcustomer from './component/Newcustomer';
import EditCustomer from './component/EditCustomer';
import DeleteCustomer from './component/DeleteCustomer';

import NewAccount from './component/NewAccount';
import EditAccount from './component/EditAccount';
import DeleteAccount from './component/DeleteAccount';

function App() {
  const [show, setshow] =  useState(true);
  //const showheader = () => setshow(!show);

  return (
    <div className="App">
      
      <Router>
      {show?<Header />  :null}  
      {(!show)?<ManagerHeader />  :null}
        <Routes>
          <Route path='/' exact index element={<Home />} />
          <Route path='/balanceenquiry' element={<BalanceEnquiry />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/registration1' exact element={<Registration1 />} />
          
          <Route path="/fundtransfer" element={<FundTransfer />} />
          <Route path="/ministatement" element={<Ministatement />} />
          <Route path="/customizedstatement" element={<Customizedstatement />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/manager" element={<Manager setshow={setshow}/>} />
          <Route path="/manager/admin" element={<Admin setshow={setshow}/>} />
          <Route path="/manager/newcustomer" element={<Newcustomer setshow={setshow}/>} />
          <Route path="/manager/editcustomer" element={<EditCustomer setshow={setshow}/>} />

          <Route path="/manager/deletecustomer" element={<DeleteCustomer setshow={setshow}/>} />
          <Route path="/manager/newaccount" element={<NewAccount setshow={setshow}/>} />
          <Route path="/manager/editaccount" element={<EditAccount setshow={setshow}/>} />
          <Route path="/manager/deleteaccount" element={<DeleteAccount setshow={setshow}/>} />

          <Route path='/redirect' element={<Navigate to="/error-page" />} />
        </Routes>
      </Router>

      {show?<Footer style={{ left: '0', bottom: '0', right: '0' }} />:null}


    </div>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
export default App;