import React from 'react';
function Contact(){
    return(
        <div>
        <section id="Contact">
    <h2 class="coh2">CONTACT ME</h2>

    <div class="container text-center">
      <div class="xyz row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
        <div class="col">
          <div class="p-3">

            <a href="https://www.linkedin.com/in/bhargav-sasi-chandan-67575a249/">
              <i class="icon fa-brands fa-linkedin fa-4x"></i>
            </a>

          </div>
        </div>
        <div class="col">
          <div class="p-3">

            <a href="https://github.com/Sasichandan01">
              <i class=" icon fa-brands fa-github fa-4x"></i>
            </a>
          </div>
        </div>
        <div class="col">
          <div class="p-3">
            <a href="https://www.instagram.com/accounts/login/">
                <i class="icon fa-brands fa-instagram fa-4x"></i>
            </a>


          </div>
        </div>
        <div class="col">
          <div class="p-3">

            <a href="mailto:bhargavsasichandan@gmail.com">
              <i class="icon fa-solid fa-envelope fa-4x"></i>
            </a>

          </div>
        </div>

      </div>
    </div>
  </section>
        
        </div>
    );
}
export default Contact;