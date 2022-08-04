
import Logo from "../../src/assets/myroti.png";
import PropTypes from 'prop-types';
import React, { useState } from 'react';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Card({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }
  return (
    <div>
      <div className="h-screen flex flex-row justify-center items-center bg-app-background bg-center bg-no-repeat bg-cover h-100 bg-roti-bg">
        <div className="grid grid-rows-12">
          <div className="flex flex-row bg-center justify-self-center">
            <img src={Logo} className="" style={{ width:200, opacity:0.6 }} />
          </div>

          <div className="glassmorphism-25 grid h-100 flex-col lg:flex-row bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full justify-self-center shadow-lg m-4 lg:m-6">
            <div className="justify-self-center pt-1 text-2xl font-bold" style={{ opacity:0.7 }}>
              LOGIN
            </div>
            <hr className="w-full border-1 border-black items-center justify-self-center flex" style={{ borderColor:"gray" }} />
            <form class="px-8 pt-4 pb-4 " onSubmit={handleSubmit}>
              <div class="mb-4">
                <input
                  class="shadow rounded-full appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Email"
                  style={{ opacity:0.8 }}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div class="">
                   <input
                  class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  style={{ opacity:0.8 }}
                  onChange={e => setPassword(e.target.value)}
                />
          
              </div>
              <div class="grid justify-items-center">
                <button
                  className=" hover:bg-blue-700 text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-full "
                  style={{ backgroundColor: "#DDACA2", }}
                  type="submit"
                >
                  <div style={{ opacity:0.7 }}>
                  submit
                  </div>
                 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}
Card.propTypes = {
  setToken: PropTypes.func.isRequired
}


