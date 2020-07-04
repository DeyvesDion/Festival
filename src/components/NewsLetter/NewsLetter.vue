<template>
 <div>
  <div class="box">
   <h2 class="title">Suivez l'actualité du festival</h2>
   <hr />
   <h5 class="newsL">
    La newsletter du festival vous informe de tous les événements et spectacles
    dès leur parution
   </h5>
   <form class="form-inline mt-5 mb-5">
    <div class="form-group mx-sm-3 mb-2">
     <input
      type="email"
      class="form-control"
      id="inputEmail"
      name="inputEmail"
      placeholder="Votre email"
     />
    </div>
    <button type="button" class="btn mb-2">
     Ok
    </button>
   </form>
   <div class="social">
    <i class="fab fa-facebook" title="Facbook"></i>
    <i class="fab fa-twitter" title="Twitter"></i>
    <i class="fab fa-instagram" title="Instagram"></i>
    <i class="fab fa-snapchat" title="Snapchat"></i>
    <i class="fab fa-youtube" title="Youtube"></i>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 name: "NewsLetter",
};
</script>

<style src="./NewsLetter.css" scoped></style>
