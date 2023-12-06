import React from 'react';
import Header from './Header';
import './Blog.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Blog() {

  const { state } = useLocation();
  const navigate= useNavigate();

  function back() {
    navigate('/')
  }

  return (
    <>
    <Header />
    <div className='blog'>
        <h1>{state.title}</h1>
        <p>{state.body}</p>
        <button onClick={back}>Home</button>
    </div>
    </>
  )
}

export default Blog