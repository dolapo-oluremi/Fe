import React from 'react'

const ErrorPage = () => {
  return (
    <div className='container'>
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">OOPS, Page Doesn't Exist</h5>
          <p class="card-text">We apologize but the page you're trying to visit doesn't exist in our directory</p>
          <a href="/" class="btn btn-primary">Home Page</a>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage