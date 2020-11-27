<template>
  <div id="services" class="mx-auto text-brown bg-babyblue h-full">
    <body class="max-w-screen-lg mx-auto">
      <div class="bg-darkbrown rounded mx-auto flex justify-center pt-8 pb-8 mb-10">
        <img class="w-9/12" :src="require('../assets/icons/home.svg')"/>
      </div>
      <div class="sm:px-16">
          <div class="tablet:flex justify-between items-center">
            <div class="tablet:max-w-sm" >
              <h1 class="text-3xl text-left pb-8 block text-textbrown" >
                Social Media Marketing Services
              </h1>
              <p class="text-md text-textbrown" >
                Do you need to get your business to a whole new level by using the most effective form of marketing available today? Good news, We are here to help...
              </p>
              <ul class="pt-8">
                <li class="items-center flex pb-2" >
                  <img class="max-w-xs w-4" :src="require('../assets/pngs/check.png')"/>
                  <p class="pl-6"> Brand Monitoring </p>
                </li>
                <li class="items-center flex pb-2" >
                  <img class="max-w-xs w-4" :src="require('../assets/pngs/check.png')"/>
                  <p class="pl-6"> Social Media Managment </p>
                </li>
                <li class="items-center flex pb-2" >
                  <img class="max-w-xs w-4" :src="require('../assets/pngs/check.png')"/>
                  <p class="pl-6"> Setup & Custom Profile </p>
                </li>
                <li class="items-center flex" >
                  <img class="max-w-xs w-4" :src="require('../assets/pngs/check.png')"/>
                  <p class="pl-6"> Social Media Contest </p>
                </li>
              </ul>
            </div>
            <div class="tablet:pt-0 pt-8 ">
              <img class="tablet:max-w-xs  sm:max-w-sm tablet:mx-0 mx-auto" :src="require('../assets/pngs/social2.png')"/>
            </div>
          </div>
          <div class="bg-darkblue mt-6 mobile:mb-0 mb-10  h-11/12">
            <div class="max-w-screen-lg mountain absolute top-3/4">
                <img class="mx-auto" :src="require('../assets/pngs/mountain.png')"/>
            </div>
            <div class="pt-10 mx-auto max-w-lg relative z-10  ">
              <h1 class="text-xl text-center mx-auto z-100 uppercase text-textbrown" >
                Content Marketing
              </h1>
              <p class="text-md text-textbrown mx-auto text-center pt-6 leading-8">
                We will guide you monthly and weekly on the tasks that needs to be done to build your online presence using blogging and social media marketing.
              </p>
              <img class="pt-10 w-56 mx-auto" :src="require('../assets/pngs/content.png')"/>
              <h1 class="text-xl pt-10 text-center mx-auto uppercase text-textbrown" >
                Content Marketing
              </h1>
              <p class="text-md text-textbrown mx-auto text-center pt-6 leading-8  ">
                We will guide you monthly and weekly on the tasks that needs to be done to build your online presence using blogging and social media marketing.
              </p>
            </div>
          </div>
          <div class=" mt-10 z-100 relative ">
              <h1 class="text-3xl text-left block text-textbrown pb-10" >
               Our Expertize
              </h1>
              <div>
                <div>
                  <div  class="tablet:flex items-center">
                    <div class="progress h-4 mx-0 px-0 max-w-md w-full bg-white " >
                      <div class="progress-value progress-1 h-4 rounded-tr-full rounded-br-full bg-progress1 "></div>
                    </div>
                    <div class="inline-flex pl-0 tablet:pl-20 pt-6 tablet:pt-0" >
                      <div class="text-md text-textbrown"> 96% </div>
                      <div class="text-md text-textbrown pl-10">Brand Monitoring</div>
                    </div>
                  </div>
                  <div class="max-w-md pt-2">
                    We publish 100% unique posts and videos according to your brand.
                  </div>
                </div>
                <div>
                  <div  class="tablet:flex items-center pt-6">
                    <div class="progress h-4 mx-0 px-0 max-w-md w-full bg-white " >
                      <div class="progress-value progress-2 h-4 rounded-tr-full rounded-br-full bg-progress2 "></div>
                    </div>
                    <div class="inline-flex pl-0 tablet:pl-20 pt-6 tablet:pt-0" >
                      <div class="text-md text-textbrown "> 94% </div>
                      <div class="text-md text-textbrown pl-10">Social Media Marketing</div>
                    </div>
                  </div>
                  <div class="max-w-md pt-2">
                   We manage your all social bookmarking sites to increase your sites digitally.
                  </div>
                </div>
                <div>
                  <div  class="tablet:flex items-center pt-6">
                    <div class="progress h-4 mx-0 px-0 max-w-md w-full bg-white " >
                      <div class="progress-value progress-3 h-4 rounded-tr-full rounded-br-full bg-progress3 "></div>
                    </div>
                    <div class="inline-flex pl-0 tablet:pl-20 pt-6 tablet:pt-0" >
                      <div class="text-md text-textbrown "> 98% </div>
                      <div class="text-md text-textbrown pl-10">Setup and Custom Profile</div>
                    </div>
                  </div>
                  <div class="max-w-md pt-2">
                    Our team experts design your logo, channel art and other graphics to give your user a premium experience
                  </div>
                </div>
                <div>
                  <div  class="tablet:flex items-center pt-6">
                    <div class="progress h-4 mx-0 px-0 max-w-md w-full bg-white " >
                      <div class="progress-value progress-4 h-4 rounded-tr-full rounded-br-full bg-progress4"></div>
                    </div>
                    <div class="inline-flex pl-0 tablet:pl-20 pt-6 tablet:pt-0" >
                      <div class="text-md text-textbrown "> 92% </div>
                      <div class="text-md text-textbrown pl-10">Effiecient Way Of Marketing</div>
                    </div>
                  </div>
                  <div class="max-w-md pt-2">
                   Our meme experts will help you to gain audience through memes with help of meme pages 
                  </div>
                </div>
              </div>
          </div>
      </div>
    </body>
  </div>
</template>
<style scoped>


@media screen and (min-width: 850px) {
  .mountain {
    top: 1280px;
  }
}

@media screen and (max-width: 850px) {
  .mountain {
    top: 1440px;
  }
}

@media screen and (max-width: 640px) {
  .mountain {
    top: 1500px;
  }
}

@media screen and (max-width: 350px) {
  .mountain {
    top: 1550px;
  }
}



.progress-1 {
  width: 96%;
  animation: load-1 3s normal forwards;
}

@keyframes load-1 {
  0% { width: 0; }
  100% { width: 96%; }
}

.progress-2 {
  width: 94%;
  animation: load-2 3s normal forwards;
}

@keyframes load-2 {
  0% { width: 0; }
  100% { width: 94%; }
}
.progress-3 {
  width: 98%;
  animation: load-3 3s normal forwards;
}

@keyframes load-3 {
  0% { width: 0; }
  100% { width: 98%; }
}

.progress-4 {
  width: 92%;
  animation: load-4 3s normal forwards;
}

@keyframes load-4 {
  0% { width: 0; }
  100% { width: 92%; }
}
</style>