<template>
  <div id="app" class="mx-auto p-8 text-brown bg-babypink h-full">
    <header class="max-w-screen-lg mx-auto flex justify-between pb-10">
      <div class="inline-flex">
        <h1 class="text-lg text-brown "> Tweak Digital Service </h1>
      </div>
      <div class="inline-flex">
        <div class="text-brown cursor-pointer hover:bg-hoverpink px-2 py-1 rounded"><p>Home</p></div>
        <div class="text-brown ml-12 cursor-pointer hover:bg-hoverpink px-2 py-1 rounded"><p>Service</p></div>
        <div class="text-brown ml-12 cursor-pointer hover:bg-hoverpink px-2 py-1 rounded"><p>Pricing Packages</p></div>
        <div class="text-brown ml-12 cursor-pointer hover:bg-hoverpink px-2 py-1 rounded"><p>Contact Us</p></div>
      </div>
    </header>
    <body class="max-w-screen-lg mx-auto">
      <div class="bg-darkbrown rounded mx-auto flex justify-center pt-8 pb-8 mb-10">
        <img class="w-9/12" :src="require('./assets/icons/home.svg')"/>
      </div>
      <div class="">
        <div class="">
          <h1 class="text-3xl text-center block text-textbrown">Affordable Digital Services Packages</h1>
          <h1 class="text-md flex m-auto text-center pt-8 w-6/12 text-textbrown">Our Expert Will Help You To Choose Best Package For You 
  Just Contact Us</h1>
        </div>
        <div class="pt-10 flex justify-between">
          <div class="">
            <img class="w-36 flex justify-self-center m-auto" :src="require('./assets/icons/objective.svg')"/>
            <p class="w-64 pt-8 text-center">We help you to widen your business to a large network of an audience through online </p>
          </div>
           <div class="">
            <img class="w-36 flex justify-self-center m-auto" :src="require('./assets/icons/strategy.svg')"/>
            <p class="w-64 pt-8 text-center">Our experts study your Business, first and give you best methods to grow it. </p>
          </div>
           <div class="">
            <img class="w-36 flex justify-self-center m-auto" :src="require('./assets/icons/technology.svg')"/>
            <p class="w-64 pt-8 text-center">Building backlinks is always a headache, Just leave it to us. We are know to provide high authority links.</p>
          </div>
        </div>
        <div class="">
          <h1 class="text-3xl text-center block text-textbrown">Who are we.. ?</h1>
          <h1 class="text-md text-center pt-8  text-textbrown">What is Tweak Digital Services...</h1>
        </div>
        <div class="mt-8 pt-6 pb-6 pr-8 pl-8 bg-darkbrown rounded">
          <p class="text-center leading-10 text-textpink">We are spirited youths who want to give people quality Digital Services at very low cost. Especially to locals who are trying so hard to gain recognition as a brand. In an era where everything depends on the internet, where people spend most of there time on Smartphones. It's kind of shocking that many people are still not using Digital Platforms as a tool for Marketing. The main reason why people are still using Posters, Notice and Billboards not Digital Platforms is the price. So here we are We try our very best to give people quality Digital Marketing Services at a Very low Price Starting at just ₹ 1999. It's a No-brainer when you can easily gain popularity without any hassle by using Social Media and Landing Pages at a very low cost.</p>
        </div>
        <h1 class="text-3xl pt-10 text-center block text-textbrown">Founders</h1>
        <div class="flex justify-between">
          <div class="pt-12">
            <h1 class="text-2xl text-center handwritten mx-auto pb-10 ">Eazhilamuthan</h1>
            <p class="text-center mx-auto">Co-Founder Of Tweak Digital Services<p>
            <p class="text-center mx-auto" >Front End Web Developer, UI UX Designer,Site Managment and Brand Respondent</p>
          </div>
           <div class="w-0.5 mt-6 ml-20 mr-20 rounded-md h-48 bg-darkbrown opacity-30"></div>
           <div class="pt-12">
            <h1 class="text-2xl text-center handwritten mx-auto pb-10 ">Kishore Kumar</h1>
            <p class="text-center mx-auto">Co-Founder Of Tweak Digital Services<p>
            <p class="text-center mx-auto " >Motion Graphics Designer, Illustrator, Social Media Marketing and Sales Consultant</p>
          </div>
        </div>
          <div class="mt-10 bg-darkbrown pt-10 pb-10 pl-10 pr-10 rounded">
            <div class="flex items-center justify-between ">
              <img class="max-w-screen-sm flex justify-self-center m-auto" :src="require('./assets/pngs/social1.png')"/>
              <div class="pl-10">
                <h1 class="text-3xl pb-6 text-right"> Tweak Digital Services </h1>
                <p class="footer-text leading-8 text-right"> We believe that <b> every business needs a digital marketing partner </b> who wants to <i> invest the time </i> to get to know that business. We are here to grow your digital business. If you really serious about your online business then simply give a call. </p>
                <div class="inline-flex  ml-40 pt-6  ">
                  <img class="flex justify-self-center m-auto w-16" :src="require('./assets/icons/fb.svg')"/>
                  <img class="flex justify-self-center m-auto ml-4 w-16" :src="require('./assets/icons/insta.svg')"/>
                  <img class="flex justify-self-center m-auto ml-4 w-16" :src="require('./assets/icons/linkedin.svg')"/>
                  <img class="flex justify-self-center m-auto ml-4 w-16" :src="require('./assets/icons/twitter.svg')"/>
                  <img class="flex justify-self-center m-auto ml-4 w-16" :src="require('./assets/icons/whatsapp.svg')"/>
                </div>
                </div>
              </div>
              <div class="mt-6 mb-6 w-12/12 h-0.5 bg-babypink opacity-30"></div>
              <div class="pt-6 flex justify-between">
                <div class="inline-flex items-center">
                  <img class="w-16" :src="require('./assets/icons/phone.png')"/>
                  <div class="pl-4 text-babypink">
                    <p>+91 7010137212</p>
                    <p>+91 9361649326</p>
                  </div>
                </div>
                 <div class="inline-flex items-center" >
                  <img class="w-16" :src="require('./assets/icons/gmail.png')"/>
                  <div class="pl-4 text-babypink">
                    <p>tweakdigitalservices.com</p>
                  </div>
                </div>
                 <div class="inline-flex items-center" >
                  <img class="w-16" :src="require('./assets/icons/map.png')"/>
                  <div class="pl-4 text-babypink">
                    <p>Woraiyur, Trichy</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="pt-6 text-center text-sm">Copyright @ tweakdigitalservices 2020 This site is Designed and Developed by Eazhilamuthan in regards of Tweak Digital Services</p>
          
        

      </div>
    </body>
   
  </div>
</template>

<script>


export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');
@font-face {
    font-family: 'Reey-Regular';
    src: url("assets/fonts/Reey-Regular.otf") format("opentype");
}


#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.handwritten {
  font-family: 'Reey-Regular';
}

.footer-text {
  font-family: 'Varela', sans-serif;
}

</style>
