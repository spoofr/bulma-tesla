<template>
  <div>
    <section class="hero hero-image is-fullheight">
      <nav class="hero-head">
        <div class="columns is-mobile is-marginless heading has-text-weight-bold is-size-7">
          <div class="column left">
            <a href="#">
              <figure class="navbar-item has-text-black image">
                <img src="./assets/images/tesla.svg" alt="Tesla Inc" style="height: 1rem; width: 6.25rem">
              </figure>
            </a>
          </div>
          <div class="column center desktop">
            <p class="navbar-item"><a href="#" class="has-text-black">MODEL S</a></p>
            <p class="navbar-item"><a href="#" class="has-text-black">MODEL X</a></p>
            <p class="navbar-item"><a href="#" class="has-text-black">MODEL 3</a></p>
            <p class="navbar-item"><a href="#" class="has-text-white">ROADSTER</a></p>
            <p class="navbar-item"><a href="#" class="has-text-black">ENERGY</a></p>
          </div>
          <div class="column right">
            <a href="#"><p class="navbar-item has-text-black desktop">SHOP</p></a>
            <a href="#"><p class="navbar-item has-text-black desktop">SIGN IN</p></a>
            <a href="#">
              <figure class="navbar-item has-text-black image center" style="padding-top:0; padding-bottom:0; line-height: 1">
                <i class="mdi mdi-menu mdi-24px"></i>
              </figure>
            </a>          
          </div>
        </div>
      </nav>

      <header class="hero-body">
        <div class="is-overlay has-text-centered single-spaced" style="top: 120px;">
          <h1 class="subtitle is-4 has-text-weight-light has-text-black">Tesla</h1>
          <h2 class="title is-1 has-text-black">Roadster</h2>
        </div>
      </header>

      <main class="hero-footer center" style="padding: 2rem;">
        <div id="grid" style="width: 768px;">
          <div id="a" class="center-column">
            <p class="has-text-centered has-text-white has-text-weight-light">The quickest car in the world, with record-setting<br>acceleration, range and performance.</p>
          </div>
          <div id="b" class="center-column" style="padding: 10px 10px 10px 10px">
            <p class="title has-text-white">
              <i class="mdi mdi-speedometer has-text-white"
                style="width: 0.75em; height: 0.75em;"></i>
              1.9<span class="is-size-5">s</span>
            </p>
            <p class="subtitle has-text-white is-7 has-text-weight-light">0-60 mph</p>
          </div>
          <div id="c" class="center-column" style="border-left: 1px solid gray; padding: 10px 10px 10px 10px">
            <p class="title has-text-white"><span class="is-size-5">+</span>250<span class="is-size-5">mph</span></p>
            <p class="subtitle is-7 has-text-white has-text-weight-light">Top Speed</p>
          </div>
          <div id="d" class="center-column" style="border-left: 1px solid gray; padding: 10px 10px 10px 10px">
            <p class="title has-text-white">620<span class="is-size-5">mi</span></p>
            <p class="subtitle is-7 has-text-white has-text-weight-light">Range</p>
          </div>
          <div id="e" class="center-column" style="padding: 10px 10px 10px 10px">
            <a href="#" class="button is-black is-inverted is-rounded is-outlined has-text-light-bold is-uppercase"
              style="font-size: 0.875em; width: 100%; border: 0.25em solid white; padding-top: 20px; padding-bottom: 18px;">
              Reserve Now
            </a>
          </div>
        </div>
      </main>

      <main class="hero-footer center" style="margin-bottom: 0.2rem;">
        <p class="navbar-item center">
          <a href="#1">
            <i class="mdi mdi-36px mdi-chevron-down has-text-white"></i>
          </a>
        </p>
      </main>
    </section>
    
    <section id="1" class="has-background-black">
      <div>
        <video src="./assets/videos/tesla-roadster-loop.mp4" autoplay muted loop></video>
      </div>
      
      <div class="center" style="padding: 3rem;">
        <table class="table has-background-black" style="width: 768px;">
          <thead>
            <tr>
              <th class="has-text-white">Base Specs</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="has-text-white">
            <tr>
              <th class="has-text-white has-text-weight-light">Acceleration 0-60 mph</th>
              <td style="text-align: right">1.9 sec</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Acceleration 0-100 mph</th>
              <td style="text-align: right">4.2 sec</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Acceleration 1/4 mile</th>
              <td style="text-align: right">8.8 sec</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Top Speed</th>
              <td style="text-align: right">Over 250 mph</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Wheel Torque</th>
              <td style="text-align: right">10,000 Nm</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Mile Range</th>
              <td style="text-align: right">620 miles</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Seating</th>
              <td style="text-align: right">4</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Drive</th>
              <td style="text-align: right">All-Wheel Drive</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Base Price</th>
              <td style="text-align: right">$200,000</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Base Reservation</th>
              <td style="text-align: right">$0,000</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Founders Series Price</th>
              <td style="text-align: right">$250,000</td>
            </tr>
            <tr>
              <th class="has-text-white has-text-weight-light">Founders Series Reservation <br><small>(1,000 reservations available)</small></th>
              <td style="text-align: right">$250,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>

<style>

@import url('https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'GothamPro', sans-serif !important;
  font-size: 14px !important;
}
@media screen and (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}
}
.hero-image {
  background: black url('./assets/images/hero@2.jpg') center / cover;
}
@media (max-width: 1024px) {
 .hero {
    background: black url('./assets/images/hero-portrait@2.jpg') center / cover;
  }
}
@media (max-width: 768px) {
  .hero {
    background: black url('./assets/images/hero-mobile@2.jpg') center / cover;
  }
}
th {
  padding: 16px 0 16px 0 !important;
}
td {
  padding: 16px 0 16px 0 !important;
}
.mdi {
  line-height: 0;
}
</style>

