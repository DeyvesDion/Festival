<template>
 <div>
  <div class="header">
   <h1 class="headerTitle">
    Contactez-nous
   </h1>
  </div>
  <div class="container">
   <ContactForm></ContactForm>
  </div>
 </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from "@/components/Forms/ContactForm/ContactForm.vue";
export default {
 name: "Contact",
 components: {
  ContactForm,
 },
};
</script>

<style src="./Contact.css" scoped></style>
