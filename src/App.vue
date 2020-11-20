<template>
  <div id="app" class="mx-auto p-8 text-brown bg-babypink h-screen">
    <header class="max-w-screen-lg mx-auto flex justify-between pb-10">
      <div class="inline-flex">
        <h1 class="text-lg text-brown "> Tweak Digital Service </h1>
      </div>
      <div class="inline-flex">
        <div class="text-brown"><p>Home</p></div>
        <div class="text-brown pl-12"><p>Service</p></div>
        <div class="text-brown pl-12"><p>Pricing Packages</p></div>
        <div class="text-brown pl-12"><p>Contact Us</p></div>
      </div>
    </header>
    <body class="max-w-screen-lg mx-auto">
      <div class="bg-darkbrown mx-auto flex justify-center pt-8 pb-8 mb-10">
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
#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
