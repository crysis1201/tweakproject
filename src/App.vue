<template>
  <div id="app" class="mx-auto p-8 text-brown bg-babyblue" >
    <header data-aos="fade-left" class="max-w-screen-lg mx-auto flex justify-between items-center pb-10">
      <div class="inline-flex">
        <h1 class="text-lg text-brown "> Tweak Digital Service </h1>
      </div>
      <div class="tablet:inline-flex hidden ">
        <router-link to="/"><div class="text-brown cursor-pointer mr-12 hover:bg-hoverblue px-2 py-1 rounded"><p>Home</p></div></router-link>
        <div class="dropdown relative inline-block mx-auto" >
          <div class=" dropBtn text-brown cursor-default   px-2 py-1 rounded"><p>Services</p></div>
          <div class="dropdown-content hidden rounded-md absolute mx-auto w-auto border-hoverblue border-2 bg-dropblue shadow-inner z-1">
            <router-link to="/social-Media-Marketing"><div class="text-brown text-center cursor-pointer hover:bg-hoverblue px-2 mx-4 py-1 my-3 italic rounded"><p>Social Media Marketing</p></div></router-link>
            <router-link to="/Web-Development"><div class="text-brown text-center cursor-pointer hover:bg-hoverblue px-2 mx-4 py-1 my-3 italic rounded"><p>Web Development</p></div></router-link>
          </div>
        </div>
        <router-link to="/pricing"><div class="text-brown ml-12 cursor-pointer hover:bg-hoverblue px-2 py-1 rounded"><p>Pricing</p></div></router-link>
        <router-link to="/contact"><div class="text-brown ml-12 cursor-pointer hover:bg-hoverblue px-2 py-1 rounded"><p>Contact Us</p></div></router-link>
      </div>
      <div @click='toggle = !toggle' class="flex tablet:hidden">
            <div id="menu-btn"  @click="menuOpen = ! menuOpen" v-bind:class="{open: menuOpen}" class="menu-btn cursor-default flex items-center tablet:hidden ">
              <div id="menu-btn__burger" class="menu-btn__burger"></div>
              <p class="ml-3 cursor-default inner font-medium">Menu</p>
            </div>
      </div>
    </header>
      <div v-show='toggle' class="bg-babyblue z-10 transition-opacity tablet:hidden border-textpink border-opacity-70 border-2 h-auto pt-8 pb-8  w-11/12 mx-auto rounded shadow-2xl absolute left-0 right-0 ">
        <div class="w-auto pb-3">
          <router-link to="/"><p @click='toggle = !toggle, menuOpen = ! menuOpen' class="text-center noselect text-brown cursor-default pb-1 ">Home</p></router-link>
          <div class="w-1/4 rounded mx-auto h-0.5 bg-textbrown opacity-40"></div>
        </div>
          <div class="w-auto pb-3 pt-3">
          <p class="text-center noselect text-brown cursor-default pb-2" @click="dropDown = ! dropDown" >Services</p>
          <div class="drop-m transition-opacity "  v-bind:class="{show: dropDown}">
            <router-link to="/Social-Media-Marketing"><p @click="menuOpen = ! menuOpen, toggle = !toggle" class="text-center noselect text-brown cursor-default pb-1  "><i>Social Media Marketing</i></p></router-link>
            <router-link to="/Web-Development"><p @click="menuOpen = ! menuOpen, toggle = !toggle" class="text-center noselect text-brown cursor-default pb-2 "><i>Web Development</i></p></router-link>
          </div>
          <div class="w-1/4 rounded mx-auto h-0.5 bg-textbrown opacity-40"></div>
        </div> <div class="w-auto pb-3 pt-3">
          <router-link to="/pricing"><p @click="menuOpen = ! menuOpen, toggle = !toggle" class="text-center noselect text-brown cursor-default pb-1 ">Pricing</p></router-link>         
          <div class="w-1/4 rounded mx-auto h-0.5 bg-textbrown opacity-40"></div>
        </div> <div class="w-auto pb-3 pt-3">
          <a href="#contactus"><p @click="menuOpen = ! menuOpen, toggle = !toggle" class="text-center noselect text-brown cursor-default pb-1 ">Contact Us</p></a>
          <div class="w-1/4 rounded mx-auto h-0.5 bg-textbrown opacity-40"></div>
        </div>
      </div>
    <router-view />
    <div id="contactus" class="mt-10 bg-darkbrown pt-10 pb-10 pl-10 pr-10 mx-auto max-w-screen-lg rounded">
            <div data-aos="fade-left" class="md:flex mx-auto items-center justify-between">
              <div class="mx-auto">
                <img class="md:hidden mx-auto" :src="require('./assets/pngs/social.png')"/>
                <img class="max-w-screen-sm md:flex justify-self-center mx-auto hidden" :src="require('./assets/pngs/social1.png')"/>
              </div>
              <div class="tablet:pl-10">
                <h1 class="text-3xl pb-6 text-center md:text-right"> Tweak Digital Services </h1>
                <p class="footer-text leading-8 text-center md:text-right"> We believe that <b> every business needs a digital marketing partner </b> who wants to <i> invest the time </i> to get to know that business. We are here to grow your digital business. If you really serious about your online business then simply give a call. </p>
              </div>  
            </div>
            <div data-aos="fade-right" class="md:float-right text-center mx-auto">
              <div class="mobile:inline-flex justify-end pt-6 hidden">
                  <img class="w-16" :src="require('./assets/icons/fb.svg')"/>
                  <img class="ml-4 w-16" :src="require('./assets/icons/insta.svg')"/>
                  <img class="ml-4 w-16" :src="require('./assets/icons/linkedin.svg')"/>
                  <img class="ml-4 w-16" :src="require('./assets/icons/twitter.svg')"/>
                  <img class="ml-4 w-16" :src="require('./assets/icons/whatsapp.svg')"/>
              </div>
              <div class="mobile:hidden justify-end pt-6  ">
                <div class="mx-auto inline-flex">
                  <img class="w-16 in" :src="require('./assets/icons/fb.svg')"/>
                  <img class="ml-4 w-16" :src="require('./assets/icons/insta.svg')"/>
                  <img class="ml-4 w-16" :src="require('./assets/icons/linkedin.svg')"/>
                </div>
                <div class="mx-auto inline-flex" >
                  <img class="ml-4 w-16" :src="require('./assets/icons/twitter.svg')"/>
                  <img class="ml-4 w-16" :src="require('./assets/icons/whatsapp.svg')"/>
                </div>
              </div>
            </div>
              <div class="mt-6 clear-both mb-6 w-12/12 h-0.5 bg-babypink opacity-30"></div>
              <div data-aos="fade-left" class="pt-6 sm:flex justify-between">
                <div class="tablet:inline-flex tablet:items-center block sm:pt-0 pt-4">
                  <img class="w-16 mx-auto" :src="require('./assets/icons/phone.png')"/>
                  <div class="tablet:pl-4 text-center pl-0 mx-auto tablet:pt-0 pt-4 text-babypink">
                    <p>+91 7010137212</p>
                    <p>+91 9361649326</p>
                  </div>
                </div>
                 <div class="tablet:inline-flex tablet:items-center block sm:pt-0 pt-4" >
                  <img class="w-16 mx-auto" :src="require('./assets/icons/gmail.png')"/>
                  <div class="tablet:pl-4 pl-0 text-center mx-auto tablet:pt-0 pt-4 text-babypink">
                    <p>tweakdigitalservices.com</p>
                  </div>
                </div>
                 <div class="tablet:inline-flex tablet:items-center block sm:pt-0 pt-4" >
                  <img class="w-16 m-auto" :src="require('./assets/icons/map.png')"/>
                  <div class="tablet:pl-4 pl-0 m-auto tablet:pt-0 pt-4 text-babypink text-center">
                    <p>Woraiyur, Trichy</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="pt-6 text-center text-sm">Copyright @ tweakdigitalservices 2020 This site is Designed and Developed by Eazhilamuthan in regards of Tweak Digital Services</p>
  </div>
</template>

<script>
export default {
  data: function () {
   return {
     menuOpen: false,
     toggle: false,
     dropDown: false,
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

        .dropdown:hover .dropdown-content {
          display: block;
        }
        
        .drop-m {
          display: none;
        }

        .drop-m.show {
          display: block;
        }

        .noselect {
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          -webkit-tap-highlight-color: transparent;
          
        }
        :focus {
          outline: none;
          box-shadow: none;
        }

</style>
