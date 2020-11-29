<template>
  <div id="pricing" class="mx-auto text-brown bg-babyblue h-full">
    <div class="max-w-screen-lg mx-auto">
      <div class="bg-darkbrown rounded mx-auto flex justify-center pt-8 pb-8 mb-10">
        <img class="w-9/12" :src="require('../assets/icons/home.svg')"/>
      </div>
      <div class="">
        <div data-aos="fade-left" class="">
          <h1 class="text-3xl text-center block text-textbrown">Pricing Packages</h1>
          <h1  class="text-md text-center pt-8 text-textbrown">Limited Time Offers</h1>
        </div>
        <div class="shadow-2xl max-w-xs mx-auto mt-10 rounded-md ">
          <div class="rounded border border-darkbrown bg-black h-20" ></div>
          <div class="bg-babyblue border z-10 relative hover:shadow-lg -mt-12 rounded-full flex items-center h-24  w-24 mx-auto  " >
             <img data-aos="flip-up" class="z-20 w-12  mx-auto relative" :src="require('../assets/icons/nut.png')"/>
          </div>
          <div class="pb-8" >
            <h1 class="text-md text-center pt-4 text-textbrown">₹ 100 Deal</h1>
            <h1 class="text-center pt-6 text-textbrown">Basic single page websites</h1>
            <h1 class="text-center pt-6 text-textbrown">Free UI & UX Design</h1>
            <h1 class="text-center pt-6 text-textbrown">Free Hosting</h1>
          </div>
        </div>
      </div>
      <div class="pt-12">
        <div data-aos="fade-left" class="">
          <h1 class="text-3xl text-center block text-textbrown">Basic Packages</h1>
        </div>
        <div class="tablet:flex justify-between">
          <div class="w-full mt-10">
            <h1 data-aos="fade-left" class="text-md text-center italic lato font-semibold pb-4 text-textbrown">Web Development</h1>
            <div class="shadow-2xl max-w-xs w-full mx-auto rounded-md ">
              <div class="rounded border border-darkbrown bg-black h-20" ></div>
              <div class="bg-babyblue hover:shadow-lg border z-10 relative -mt-12 rounded-full flex items-center h-24  w-24 mx-auto  " >
                  <img data-aos="flip-up" class="z-20 w-14  mx-auto relative" :src="require('../assets/icons/diamond.png')"/>
              </div>
              <div class="pb-8 px-4" >
                <h1 class="text-md text-center pt-4 text-textbrown">INR 2000/One-Time</h1>
                <h1 class="text-center pt-6 text-textbrown">Up-to 4 Pages</h1>
                <h1 class="text-center pt-6 text-textbrown">1 Month Free Maintenance </h1>
                <h1 class="text-center pt-6 text-textbrown">1 Year Free Domain and Hosting</h1>
                <h1 class="text-center pt-6 text-textbrown">Delivery Within 4 Days</h1>
                <h1 class="text-center pt-6 text-textbrown">Content Upload</h1>
              </div>
            </div>
          </div>
          <div class="w-full mt-10">
            <h1 data-aos="fade-left" class="text-md text-center italic lato font-semibold pb-4 text-textbrown">Social Media Marketing</h1>
            <div class="shadow-2xl max-w-xs w-full mx-auto rounded-md">
              <div class="rounded border border-darkbrown bg-black h-20" ></div>
              <div class="bg-babyblue hover:shadow-lg border z-10 relative -mt-12 rounded-full flex items-center h-24  w-24 mx-auto  " >
                  <img data-aos="flip-up" class="z-20 w-14 mx-auto relative" :src="require('../assets/icons/diamond.png')"/>
              </div>
              <div class="pb-8 px-4" >
                <h1 class="text-md text-center pt-4 text-textbrown">INR 3000/One-Time</h1>
                <h1 class="text-center pt-6 text-textbrown">Logo Design & Animation</h1>
                <h1 class="text-center pt-6 text-textbrown">Advertisement via Instagram & Facebook</h1>
                <h1 class="text-center pt-6 text-textbrown">1 Month Free Maintenance</h1>
                <h1 class="text-center pt-6 text-textbrown">Up-to 8 Posts and 4 Videos <br>( per month )</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="pt-12">
        <div data-aos="fade-left" class="">
          <h1 class="text-3xl text-center block text-textbrown">Premium Packages</h1>
        </div>
        <div class="tablet:flex justify-between">
          <div class="w-full mt-10">
            <h1 data-aos="fade-left" class="text-md text-center italic lato font-semibold pb-4 text-textbrown">Web Development</h1>
            <div class="shadow-2xl max-w-xs w-full mx-auto rounded-md ">
              <div class="rounded border border-darkbrown bg-black h-20" ></div>
              <div class="bg-darkbrown hover:shadow-lg z-10 relative -mt-12 rounded-full flex items-center h-24  w-24 mx-auto  " >
                  <img data-aos="flip-up" class="z-20 w-14 m-auto relative" :src="require('../assets/icons/star.png')"/>
              </div>
              <div class="pb-8 px-4" >
                <h1 class="text-md text-center pt-4 text-textbrown">INR 6000/One-time</h1>
                <h1 class="text-center pt-6 text-textbrown">Professional Websites</h1>
                <h1 class="text-center pt-6 text-textbrown">Up-to 8 Pages</h1>
                <h1 class="text-center pt-6 text-textbrown">3 Month Free Maintenance </h1>
                <h1 class="text-center pt-6 text-textbrown">2 Year Free Domain and Hosting</h1>
                <h1 class="text-center pt-6 text-textbrown">Delivery within 8 Days</h1>
              </div>
            </div>
          </div>
          <div class="w-full mt-10">
            <h1 data-aos="fade-left" class="text-md text-center italic lato font-semibold pb-4 text-textbrown">Social Media Marketing</h1>
            <div class="shadow-2xl  max-w-xs w-full mx-auto rounded-md">
              <div class="rounded border border-darkbrown bg-black h-20" ></div>
              <div class="bg-darkbrown  z-10 relative -mt-12 rounded-full flex items-center h-24  w-24 mx-auto  " >
                  <img data-aos="flip-up"  class="z-20 w-14 hover:shadow-lg m-auto relative" :src="require('../assets/icons/star.png')"/>
              </div>
              <div class="pb-8 px-4" >
                <h1  class="text-md text-center pt-4 text-textbrown">INR 6000/One-Time</h1>
                <h1 class="text-center pt-6 text-textbrown">Logo Design & Animation</h1>
                <h1  class="text-center pt-6 text-textbrown">Advertisement via Instagram/Facebook/Youtube </h1>
                <h1 class="text-center pt-6 text-textbrown">3 Months Free Maintenance </h1>
                <h1  class="text-center pt-6 text-textbrown">Up-to 10 Posts and 6 Videos<br>( per month )</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>
<style scoped>

.lato {
  font-family: 'Lato', sans-serif;
}

</style>
