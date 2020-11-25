<template>
  <div id="app" class="mx-auto p-8 text-brown bg-babypink" >
    <header class="max-w-screen-lg mx-auto flex justify-between items-center pb-10">
      <div class="inline-flex">
        <h1 class="text-lg text-brown "> Tweak Digital Service </h1>
      </div>
      <div class="tablet:inline-flex hidden ">
        <router-link to="/"><div class="text-brown cursor-pointer hover:bg-hoverpink px-2 py-1 rounded"><p>Home</p></div></router-link>
        <router-link to="/about"><div class="text-brown ml-12 cursor-pointer hover:bg-hoverpink px-2 py-1 rounded"><p>Services</p></div></router-link>
        <router-link to="/pricing"><div class="text-brown ml-12 cursor-pointer hover:bg-hoverpink px-2 py-1 rounded"><p>Pricing</p></div></router-link>
        <router-link to="/contact"><div class="text-brown ml-12 cursor-pointer hover:bg-hoverpink px-2 py-1 rounded"><p>Contact Us</p></div></router-link>
      </div>
      <div @click='toggle = !toggle' class="flex tablet:hidden">
            <div id="menu-btn"  @click="menuOpen = ! menuOpen" v-bind:class="{open: menuOpen}" class="menu-btn flex items-center tablet:hidden ">
              <div id="menu-btn__burger" class="menu-btn__burger"></div>
              <p class="ml-3 inner font-medium">Menu</p>
            </div>
      </div>
    </header>
      <div v-show='toggle' class="bg-babypink transition-opacity tablet:hidden border-textpink border-opacity-70 border-2 h-auto pt-8 pb-8  w-11/12 mx-auto rounded shadow-2xl absolute left-0 right-0 ">
        <div class="w-auto pb-3">
          <router-link to="/"><p class="text-center text-brown cursor-pointer pb-1 ">Home</p></router-link>
          <div class="w-1/4 rounded mx-auto h-0.5 bg-textbrown opacity-40"></div>
        </div>
          <div class="w-auto pb-3 pt-3">
          <router-link to="/services"><p class="text-center text-brown cursor-pointer pb-1 ">Services</p></router-link>
          <div class="w-1/4 rounded mx-auto h-0.5 bg-textbrown opacity-40"></div>
        </div> <div class="w-auto pb-3 pt-3">
          <router-link to="/pricing"><p class="text-center text-brown cursor-pointer pb-1 ">Pricing</p></router-link>         
          <div class="w-1/4 rounded mx-auto h-0.5 bg-textbrown opacity-40"></div>
        </div> <div class="w-auto pb-3 pt-3">
          <router-link to="/contact"><p class="text-center text-brown cursor-pointer pb-1 ">Contact Us</p></router-link>
          <div class="w-1/4 rounded mx-auto h-0.5 bg-textbrown opacity-40"></div>
        </div>
      </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function () {
   return {
     menuOpen: false,
     toggle: false,
   }
 }, 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');
@font-face {
    font-family: 'Reey-Regular';
    src: url("./assets/fonts/Reey-Regular.otf") format("opentype");
}


        #app {
          font-family: 'Varela Round', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .menu-btn {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 18px;
          cursor: pointer;
          transition: all .5s ease-in-out;
          /* border: 3px solid #fff; */
        }
        .menu-btn__burger {
          width: 18px;
          height: 2pt;
          background: rgb(0, 0, 0);
          border-radius: 5px;
          transition: all .5s ease-in-out;
        }
        .menu-btn__burger::before,
        .menu-btn__burger::after {
          content: '';
          position: absolute;
          width: 18px;
          height: 2pt;
          background: rgb(0, 0, 0);
          border-radius: 5px;
          transition: all .5s ease-in-out;
        }
        .menu-btn__burger::before {
          transform: translateY(-16px);
          margin-top: 10px;
        }
        .menu-btn__burger::after {
          transform: translateY(16px);
          margin-top: -10px;
        }
        /* ANIMATION */
        .menu-btn.open .menu-btn__burger {
          transform: translateX(-50px);
          background: transparent;
          box-shadow: none;
        }
        .menu-btn.open .menu-btn__burger::before {
          transform: rotate(45deg) translate(35px, -35px);
          margin-top: 0;
        }
        .menu-btn.open .menu-btn__burger::after {
          transform: rotate(-45deg) translate(35px, 35px);
          margin-top: 0px;
        }
</style>
