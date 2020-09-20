import { database } from 'firebase';
import React, {useState,useEffect} from 'react';
import firebase from '../config/firebase';
import account from './SignUp';

export default function Admin(){

    const [Admin, setAdmin] = useState();

  useEffect(() => {
    const formRef = firebase.database().ref('account');
    formRef.on('value', (snapshot) => {
      const admins = snapshot.val();
      const Admin = [];
      var verify=sessionStorage.getItem('check');
      console.log(verify)
      if(sessionStorage.getItem('check')=="abcdef")
      {
        for (let id in admins) {
          Admin.push({ id, ...admins[id] });
        }
    }
    else{
        for (let id in admins) {
            if(admins[id].city==verify){
          Admin.push({ id, ...admins[id] });
      }
        }
    }
      
      setAdmin(Admin);
      console.log(Admin);
    });
  }, []);
  return (
    <div className = "container">
      {Admin
        ? Admin.map((Profile) => <div><h3>{Profile.name}</h3>{Profile.image ?<img src={Profile.image} height="100" width="200"/>:""} <h4>Email :     {Profile.email}</h4> <h4>Country :     {Profile.country}</h4> <h4>City :     {Profile.city}</h4> <h4>Area :     {Profile.area}</h4> <h4>Date of Birth :     {Profile.dob}</h4><br></br></div>)
        : ''}
    </div>
  );
}