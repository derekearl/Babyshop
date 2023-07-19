import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export default function About() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">About Us</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <p>
              Welcome to the Babyshop! Here we provide the best clothes for
              the little one in your life to make them look fabulous.
            </p>
            <p>
              Started in Rexburg, Idaho in 2023 family owned and operated, your family
              is our family. We make all of our products by hand using a ancient technique 
              with silk.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptas, quod, voluptates quibusdam voluptatibus quidem `
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptas, quod, voluptates quibusdam voluptatibus quidem
              voluptatum quos quia quas, nesciunt quia quas, nesciunt voluptatum
              quos quia quas, nesciunt
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptas, quod, voluptates quibusdam voluptatibus quidem `
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptas, quod, voluptates quibusdam voluptatibus quidem
              voluptatum quos quia quas, nesciunt quia quas, nesciunt voluptatum
              quos quia quas, nesciunt
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="card-img-top"
              src="../assets/babyshop1.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
