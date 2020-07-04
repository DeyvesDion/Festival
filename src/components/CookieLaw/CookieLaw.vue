<template>
 <CookieLaw>
  <div slot-scope="props">
   <p>
    Ce site utilise des cookies <span class="cookie">🍪</span> pour vous
    permettre de profiter d'une expérience complète et optimiser le
    fonctionnement du site.
    <button class="btn btn-outline-info ml-5 mr-3 skew" @click="props.accept">
     <span>Accepter et Continuer</span>
    </button>
    <button class="btn btn-outline-info ml-5 mr-3 skew" @click="props.close">
     <span>Ignorer</span>
    </button>
   </p>
  </div>
 </CookieLaw>
</template>

<script>
import CookieLaw from "vue-cookie-law";

export default {
 components: {
  CookieLaw,
 },
 data() {
  return {};
 },
};
</script>
<style src="./CookieLaw.css" scoped></style>
