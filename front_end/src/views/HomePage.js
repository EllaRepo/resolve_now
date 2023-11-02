import React from 'react'

function Homepage() {
  return (
    <div style={{ paddingTop: 40 }}>
      <>
  <main role="madin" style={{ marginTop: 30 }}>
    <div className="jumbotron mb-0 bg-image text-center shadow-1-strong rounded text-white" style={{backgroundImage: 'url("https://i.imgur.com/ODYWmg9.jpg")' }}>
      <div className="container">
        <h1 className="display-3 text-center">Welcome to ResolveNow</h1>
        <h2 class="text-center">Online Complaint Registration Management - OCRM</h2>
        <hr></hr>
        <div className="d-flex justify-content-center">
        <p className="text-justify w-50 p-3 ">
          Welcome to our Complaint Registration Management website! Welcome 
          understand that voicing your concerns is important, and we're here
          to make the process seamless for you. Our user-friendly platform allows
          you to register complaints effortlessly ensuring that your feedback reaches
          the right channels for prompt resolution. With our advanced tracking system,
          you can stay updated on the progress of your complaint, giving you peace of mind.
          Join us today and let us help you navigate the path to effective complaint resolution.
        </p>
      </div>
      </div>
    </div>
  </main>
  <footer className="text-right pr-5 bg-dark text-white" >
    <p claddName="">Copyright ©2023 Ellabex</p>
  </footer>
</>
    </div>
  )
}

export default Homepage