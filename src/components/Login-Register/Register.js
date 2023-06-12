import { useState } from 'react';
import Poster from './Poster';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login-Register.css';

function Register() {
  const navigate = useNavigate();
  const [name, setName,] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('profession', profession);
      formData.append('password', password);
      formData.append('confirmPassword', confirmPassword);
      console.log(formData);
      

      try {
        const response = await axios.post('https://localhost5050/register', formData);
        console.log(response);
        window.alert('Your Registration is Successful');
        navigate('/sign');
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message) {
          window.alert(error.response.data.message);
        } else {
          window.alert('An error occurred during registration.');
        }
      }
    } else {
      window.alert('Password does not match with confirm password.');
    }
  };

  return (
    <>
      <main className="sr_main">
        <Poster />
        <section className="register">
          <h1 style={{ marginTop: '90px' }} id="register_heading">
            Register
          </h1>
          <div style={{ margin: '3%' }}>Register to continue accessing pages</div>
          <form onSubmit={handleSubmit} id="register_form">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            /><br />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            /><br />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            /><br />
            <input
              type="text"
              placeholder="Profession"
              name="profession"
              onChange={(e) => setProfession(e.target.value)}
              value={profession}
            /><br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            /><br />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            /><br />
            <button id="register_btn" type="submit">Register</button><br />
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;