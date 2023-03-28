import React from 'react';

function Title(){
    return (
     <div>

     <section id="title">

    
<nav class="navbar navbar fixed-top bg-light navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#image">Home</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="#About"><button type="button" class="btn btn-outline-dark btn-sm ">About</button></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#Projects"><button type="button" class="btn btn-outline-dark btn-sm ">Projects</button></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#Skills"><button type="button" class="btn btn-outline-dark btn-sm ">Skills</button></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#Contact"><button type="button" class="btn btn-outline-dark btn-sm ">Contact</button></a>
        </li>
    </ul>
 </div>
</nav>
  </section>
     </div>
    );
}
export default Title;