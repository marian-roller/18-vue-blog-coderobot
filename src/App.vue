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
    <div id="main-container" class="container">

      <div class="row">

        <div class="col-md-8">
          <router-view :key="$route.fullPath" />
        </div>

        <div class="col-md-4">
          <Sidebar />
        </div>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/layout/Header';
  import Sidebar from '@/components/layout/Sidebar';
  import Footer from '@/components/layout/Footer';
  export default {
    name: 'app',
    components: {
      Header,
      Sidebar,
      Footer
    },
    created() {
      window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("navigation-bar").classList.remove("navbar-dark", "bg-transparent");
          document.getElementById("navigation-bar").classList.add("navbar-light", "bg-white", "border-bottom");
          var links = document.querySelectorAll(".nav-item");
          links.forEach((link) => {
            link.classList.remove("nav-link-color");
          });
        } else {
          document.getElementById("navigation-bar").classList.remove("navbar-light", "bg-white", "border-bottom");
          document.getElementById("navigation-bar").classList.add("navbar-dark", "bg-transparent");
          var links = document.querySelectorAll(".nav-item");
          links.forEach((link) => {
            link.classList.add("nav-link-color");
          });
        }
      };
    },
  }
</script>

<style>
  #app {
    font-family: 'Ubuntu', sans-serif;
    min-height: 100vh;
    position: relative;
    padding-bottom: 24px;
  }

  .navbar-scroll {
    border: 10px solid black;
    background: white;
  }

  .title-font {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
  }

  .nav-link-color {
    color: white !important;
  }

  .nav-link-color:hover {
    color: grey !important;
  }

  .router-link-exact-active:not(.navbar-brand) {
    border-bottom: 1px solid #bbb;
  }
</style>