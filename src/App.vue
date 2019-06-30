<template>
  <div id="app">
    <nav id="navigation-bar" class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">

      <router-link class="navbar-brand title-font" to="/">PHP Blog</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <router-link class="nav-item nav-link title-font nav-link-color" to="/">Home</router-link>
          <router-link class="nav-item nav-link title-font nav-link-color" to="/about">O nas</router-link>
          <router-link class="nav-item nav-link title-font nav-link-color" to="/posts">Blog</router-link>
          <router-link class="nav-item nav-link title-font nav-link-color" to="/contact">Kontakt</router-link>

        </div>
      </div>
    </nav>
    <Header />
    <div class="container">

      <div class="row">

        <div class="col-md-8">
          <router-view />
        </div>

        <div class="col-md-4">
          <Sidebar />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Header from '@/components/layout/Header';
  import Sidebar from '@/components/layout/Sidebar';
  export default {
    name: 'app',
    components: {
      Header,
      Sidebar
    },
  }


  window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      //document.getElementById("navigation-bar").classList.remove("navbar-dark", "bg-transparent");
      // document.getElementById("navigation-bar").classList.add("navbar-light", "bg-white", "border-bottom");

      $("#navigation-bar").removeClass("navbar-dark bg-transparent");
      $("#navigation-bar").addClass("navbar-light bg-white border-bottom");
      $(".nav-item").removeClass("nav-link-color");


    } else {
      // document.getElementById("navigation-bar").classList.remove("navbar-light", "bg-white", "border-bottom");
      // document.getElementById("navigation-bar").classList.add("navbar-dark", "bg-transparent");
      $("#navigation-bar").removeClass("navbar-light bg-white border-bottom");
      $("#navigation-bar").addClass("navbar-dark bg-transparent");
      $(".nav-item").addClass("nav-link-color");

    }
  };
</script>

<style>
  #app {
    font-family: 'Ubuntu', sans-serif;
  }

  .navbar-scroll {
    border: 10px solid black;
    background: white;
  }

  .title-font {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
  }

  .nav-link.title-font {
    /*font-weight: normal; */
  }

  .nav-link-color {
    color: white !important;
  }
</style>