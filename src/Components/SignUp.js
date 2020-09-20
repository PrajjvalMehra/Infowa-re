import React, { Component,useState } from "react";
import firebase from "../config/firebase";
import {stringify, v4 as uuid} from "uuid";

export default class SignUp extends Component {

// const [name,setName] = useState('');
// const [dob,setDob] = useState('');
// const [country,setCountry] = useState('');
// const [city,setCity] = useState('');
// const [area,setArea] = useState('');
// const [email,setEmail] = useState('');
// const [password,setPassword] = useState('');


constructor(props){
    super(props);
    this.handleOnChange=this.handleOnChange.bind(this);
    this.createForm=this.createForm.bind(this);
    this.readImages=this.readImages.bind(this);
    this.state={
        name:'',
        dob:'',
        country:'',
        city:'',
        area:'',
        email:'',
        password:'',
        img:'',
    }
}


    handleOnChange(e) {
        // setName(e.target.value);
        // setDob(e.target.value);
        // setCountry(e.target.value);
        // setCity(e.target.value);
        // setArea(e.target.value);
        // setEmail(e.target.value);
        // setPassword(e.target.value);
        this.setState({[e.target.name]:e.target.value})
        
    }
    
     readImages = async(e)=> {
        const file = e.target.files[0];
        const id = uuid();
        const storageRef = firebase.storage().ref("images").child(id);
        const imageRef = firebase.database().ref('images').child('photo').child(id);
        await storageRef.put(file);
        storageRef.getDownloadURL().then((url)=>{
            console.log(url);
            this.setState({img:url})
            console.log(this.state.img);
        });
    }
    
    createForm() {
        const formRef = firebase.database().ref("account");
        const Profile = {
          name:this.state.name,
          dob:this.state.dob,
          country:this.state.country,
          city:this.state.city,
          area:this.state.area,
          email:this.state.email,
          password:this.state.password,
          image:this.state.img,
        };
        formRef.push(Profile);

    }
    render(){
    
    return(
        <div>
                  
                <h3>Sign Up</h3>

                <div className="form-group">
                <label>Name</label>
                    <input type="name" onChange={this.handleOnChange} value={this.state.name} className="form-control" name="name" placeholder="Full Name" />
                   
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={this.handleOnChange} value={this.state.email} className="form-control" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="text"onChange={this.handleOnChange} value={this.state.dob}className="form-control" name="dob" placeholder="DD:MM:YYYY" />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text"onChange={this.handleOnChange} value={this.state.country}className="form-control" name="country" placeholder="Country" />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.city}className="form-control" name="city" placeholder="City" />
                </div>
                <div className="form-group">
                    <label>Area</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.area} className="form-control" name="area" placeholder="Area" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"onChange={this.handleOnChange} value={this.state.password} className="form-control" name="password" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Upload Image</label>
                    <input type="file" accept="image/*" onChange={this.readImages}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.createForm}>Sign Up</button>
                <p className="forgot-password text-right">
                    Admin Account <a href="./Login">sign in?</a>
                </p>
            
        </div>
            
    );
    }
}