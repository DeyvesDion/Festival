<template>
 <div>
  <!-- <NavBar>NavBar</NavBar> -->
  <Banner></Banner>
  <div class="container">
   <div class="news mt-5">
    <div class="row">
     <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
      <Slider></Slider>
     </div>
     <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
      <News></News>
     </div>
    </div>
    <div class="row mb-5">
     <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
      <Seance></Seance>
     </div>
     <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
      <NewsLetter></NewsLetter>
     </div>
    </div>
   </div>
  </div>
  <div class="container-fluid imgB">
   <h2>Le festival en image</h2>
   <button type="button" class="btn btn-outline-success">
    Voir les images
   </button>
  </div>
 </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import Slider from "@/components/Slider/Slider.vue";
import News from "@/components/News/News.vue";
import Seance from "@/components/Seance/Seance.vue";
import NewsLetter from "@/components/NewsLetter/NewsLetter.vue";
export default {
 name: "Accueil",
 components: {
  Banner,
  Slider,
  News,
  Seance,
  NewsLetter,
 },
};
</script>

<style src="./Accueil.css" scoped></style>
