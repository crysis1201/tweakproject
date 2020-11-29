<template>
  <div id="home" class="mx-auto text-brown bg-babyblue h-full">
    <body class="max-w-screen-lg mx-auto">
      <div class="bg-darkbrown rounded mx-auto flex justify-center pt-8 pb-8 mb-10">
        <img class="w-9/12" :src="require('../assets/icons/home.svg')"/>
      </div>
      <div class="">
        <div data-aos="fade-left" class="">
          <h1 class="text-3xl text-center block text-textbrown">Affordable Digital Services Packages</h1>
          <h1 class="text-md flex m-auto text-center pt-8 w-6/12 text-textbrown">Our Expert Will Help You To Choose Best Package For You 
  Just Contact Us</h1>
        </div>
        <div data-aos="fade-right" class="pt-10 tablet:flex tablet:justify-between">
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
        <div data-aos="fade-left" class="pt-6 tablet:pt-0">
          <h1 class="text-3xl text-center block text-textbrown">Who are we.. ?</h1>
          <h1 class="text-md text-center pt-8  text-textbrown">What is Tweak Digital Services...</h1>
        </div>
        <div data-aos="fade-right" class="mt-8 pt-6 pb-6 pr-8 pl-8 bg-darkbrown rounded">
          <p class="text-center leading-10 text-textpink">We are spirited youths who want to give people quality Digital Services at very low cost. Especially to locals who are trying so hard to gain recognition as a brand. In an era where everything depends on the internet, where people spend most of there time on Smartphones. It's kind of shocking that many people are still not using Digital Platforms as a tool for Marketing. The main reason why people are still using Posters, Notice and Billboards not Digital Platforms is the price. So here we are We try our very best to give people quality Digital Marketing Services at a Very low Price Starting at just ₹ 1999. It's a No-brainer when you can easily gain popularity without any hassle by using Social Media and Landing Pages at a very low cost.</p>
        </div>
        <h1 data-aos="fade-left" class="text-3xl pt-10 text-center block text-textbrown">Founders</h1>
        <div data-aos="fade-right" class="mobile:flex justify-between">
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
     dropdown: false,
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

#home {
  max-width: 940px;
  margin: 0 auto;
  padding: 0 5%;
  clear: both;
}

</style>
