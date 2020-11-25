<template>
  <div id="home" class="mx-auto text-brown bg-babypink h-full">
    <body class="max-w-screen-lg mx-auto">
      <div class="bg-darkbrown rounded mx-auto flex justify-center pt-8 pb-8 mb-10">
        <img class="w-9/12" :src="require('../assets/icons/home.svg')"/>
      </div>
      <div class="">
        <div class="">
          <h1 class="text-3xl text-center block text-textbrown">Affordable Digital Services Packages</h1>
          <h1 class="text-md flex m-auto text-center pt-8 w-6/12 text-textbrown">Our Expert Will Help You To Choose Best Package For You 
  Just Contact Us</h1>
        </div>
        <div class="pt-10 tablet:flex tablet:justify-between">
          <div class="pt-6 tablet:pt-0">
            <img class="w-36 flex justify-self-center m-auto" :src="require('../assets/icons/objective.svg')"/>
            <p class="w-64 pt-8 mx-auto tablet:mx-0 text-center">We help you to widen your business to a large network of an audience through online </p>
          </div>
           <div class="pt-6 tablet:pt-0">
            <img class="w-36 flex justify-self-center m-auto" :src="require('../assets/icons/strategy.svg')"/>
            <p class="w-64 pt-8 mx-auto tablet:mx-0 text-center">Our experts study your Business, first and give you best methods to grow it. </p>
          </div>
           <div class="pt-6 tablet:pt-0">
            <img class="w-36 flex justify-self-center m-auto" :src="require('../assets/icons/technology.svg')"/>
            <p class="w-64 pt-8 mx-auto tablet:mx-0 text-center">Building backlinks is always a headache, Just leave it to us. We are know to provide high authority links.</p>
          </div>
        </div>
        <div class="pt-6 tablet:pt-0">
          <h1 class="text-3xl text-center block text-textbrown">Who are we.. ?</h1>
          <h1 class="text-md text-center pt-8  text-textbrown">What is Tweak Digital Services...</h1>
        </div>
        <div class="mt-8 pt-6 pb-6 pr-8 pl-8 bg-darkbrown rounded">
          <p class="text-center leading-10 text-textpink">We are spirited youths who want to give people quality Digital Services at very low cost. Especially to locals who are trying so hard to gain recognition as a brand. In an era where everything depends on the internet, where people spend most of there time on Smartphones. It's kind of shocking that many people are still not using Digital Platforms as a tool for Marketing. The main reason why people are still using Posters, Notice and Billboards not Digital Platforms is the price. So here we are We try our very best to give people quality Digital Marketing Services at a Very low Price Starting at just ₹ 1999. It's a No-brainer when you can easily gain popularity without any hassle by using Social Media and Landing Pages at a very low cost.</p>
        </div>
        <h1 class="text-3xl pt-10 text-center block text-textbrown">Founders</h1>
        <div class="mobile:flex justify-between">
          <div class="pt-12">
            <h1 class="text-2xl text-center handwritten mx-auto pb-10 ">Eazhilamuthan</h1>
            <p class="text-center mx-auto">Co-Founder Of Tweak Digital Services<p>
            <p class="text-center mx-auto" >Front End Web Developer, UI UX Designer,Site Managment and Brand Respondent</p>
          </div>
           <div class="w-0.5 mt-6 ml-20 mobile:flex hidden mr-20 rounded-md h-48 bg-darkbrown opacity-30"></div>
           <div class="pt-12">
            <h1 class="text-2xl text-center handwritten mx-auto pb-10 ">Kishore Kumar</h1>
            <p class="text-center mx-auto">Co-Founder Of Tweak Digital Services<p>
            <p class="text-center mx-auto " >Motion Graphics Designer, Illustrator, Social Media Marketing and Sales Consultant</p>
          </div>
        </div>
          <div class="mt-10 bg-darkbrown pt-10 pb-10 pl-10 pr-10 mx-auto rounded">
            <div class="md:flex mx-auto items-center justify-between">
              <div class="mx-auto">
                <img class="md:hidden mx-auto" :src="require('../assets/pngs/social.png')"/>
                <img class="max-w-screen-sm md:flex justify-self-center mx-auto hidden" :src="require('../assets/pngs/social1.png')"/>
              </div>
              <div class="tablet:pl-10">
                <h1 class="text-3xl pb-6 text-center md:text-right"> Tweak Digital Services </h1>
                <p class="footer-text leading-8 text-center md:text-right"> We believe that <b> every business needs a digital marketing partner </b> who wants to <i> invest the time </i> to get to know that business. We are here to grow your digital business. If you really serious about your online business then simply give a call. </p>
              </div>  
            </div>
            <div class="md:float-right text-center mx-auto">
              <div class="mobile:inline-flex justify-end pt-6 hidden">
                  <img class="w-16" :src="require('../assets/icons/fb.svg')"/>
                  <img class="ml-4 w-16" :src="require('../assets/icons/insta.svg')"/>
                  <img class="ml-4 w-16" :src="require('../assets/icons/linkedin.svg')"/>
                  <img class="ml-4 w-16" :src="require('../assets/icons/twitter.svg')"/>
                  <img class="ml-4 w-16" :src="require('../assets/icons/whatsapp.svg')"/>
              </div>
              <div class="mobile:hidden justify-end pt-6  ">
                <div class="mx-auto inline-flex">
                  <img class="w-16 in" :src="require('../assets/icons/fb.svg')"/>
                  <img class="ml-4 w-16" :src="require('../assets/icons/insta.svg')"/>
                  <img class="ml-4 w-16" :src="require('../assets/icons/linkedin.svg')"/>
                </div>
                <div class="mx-auto inline-flex" >
                  <img class="ml-4 w-16" :src="require('../assets/icons/twitter.svg')"/>
                  <img class="ml-4 w-16" :src="require('../assets/icons/whatsapp.svg')"/>
                </div>
              </div>
            </div>
              <div class="mt-6 clear-both mb-6 w-12/12 h-0.5 bg-babypink opacity-30"></div>
              <div class="pt-6 sm:flex justify-between">
                <div class="tablet:inline-flex tablet:items-center block sm:pt-0 pt-4">
                  <img class="w-16 mx-auto" :src="require('../assets/icons/phone.png')"/>
                  <div class="tablet:pl-4 text-center pl-0 mx-auto tablet:pt-0 pt-4 text-babypink">
                    <p>+91 7010137212</p>
                    <p>+91 9361649326</p>
                  </div>
                </div>
                 <div class="tablet:inline-flex tablet:items-center block sm:pt-0 pt-4" >
                  <img class="w-16 mx-auto" :src="require('../assets/icons/gmail.png')"/>
                  <div class="tablet:pl-4 pl-0 text-center mx-auto tablet:pt-0 pt-4 text-babypink">
                    <p>tweakdigitalservices.com</p>
                  </div>
                </div>
                 <div class="tablet:inline-flex tablet:items-center block sm:pt-0 pt-4" >
                  <img class="w-16 m-auto" :src="require('../assets/icons/map.png')"/>
                  <div class="tablet:pl-4 pl-0 m-auto tablet:pt-0 pt-4 text-babypink text-center">
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
// @ is an alias to /src

export default {
  name: "Home",
  data: function () {
   return {
     menuOpen: false,
     toggle: false,
   }
 }, 

};
</script>

<style scoped>

.handwritten {
  font-family: 'Reey-Regular';
}

.footer-text {
  font-family: 'Varela', sans-serif;
}

</style>
