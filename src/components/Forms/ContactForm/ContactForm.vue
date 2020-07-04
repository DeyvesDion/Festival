<template>
 <div>
  <div class="container">
   <div class="row contact">
    <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
     <!-- Formulaire de contact -->
     <form @submit.prevent="submit" class="">
      <div class="form-row">
       <div class="form-group col-md-6">
        <label for="inputFirstName">Nom <span class="required">*</span></label>
        <input
         type="text"
         id="inputFirstName"
         placeholder="Votre nom"
         class="form-control"
         v-model.trim="$v.FirstName.$model"
         :class="{
          'is-invalid': $v.FirstName.$error,
          'is-valid': !$v.FirstName.$invalid,
         }"
        />
        <div class="valid-feedback">Le nom est valide !</div>
        <div class="invalid-feedback">
         <span v-if="!$v.FirstName.required">Le nom est requis !</span>
         <span v-if="!$v.FirstName.minLength"
          >Le nom doit avoir au moins
          {{ $v.FirstName.$params.minLength.min }} lettres !</span
         >
         <span v-if="!$v.FirstName.maxLength"
          >Le nom doit au plus avoir
          {{ $v.FirstName.$params.maxLength.max }} lettres !</span
         >
        </div>
       </div>
       <div class="form-group col-md-6">
        <label for="inputName">Prénom <span class="required">*</span></label>
        <input
         type="text"
         id="inputFirstLastName"
         placeholder="Votre prenom"
         class="form-control"
         v-model.trim="$v.LastName.$model"
         :class="{
          'is-invalid': $v.LastName.$error,
          'is-valid': !$v.LastName.$invalid,
         }"
        />
        <div class="valid-feedback">Le prénom est valide !</div>
        <div class="invalid-feedback">
         <span v-if="!$v.LastName.required">Le prénom est requis !</span>
         <span v-if="!$v.LastName.minLength"
          >Le prenom doit avoir au moins
          {{ $v.LastName.$params.minLength.min }} lettres !</span
         >
         <span v-if="!$v.LastName.maxLength"
          >Le prenom doit au plus avoir
          {{ $v.LastName.$params.maxLength.max }} lettres !</span
         >
        </div>
       </div>
      </div>
      <div class="form-group">
       <label for="inputEmail">Email <span class="required">*</span></label>
       <input
        type="email"
        class="form-control"
        id="inputEmail"
        placeholder="Votre email"
        v-model.trim="$v.Email.$model"
        :class="{
         'is-invalid': $v.Email.$error,
         'is-valid': !$v.Email.$invalid,
        }"
       />
       <div class="valid-feedback">L'email est valide !</div>
       <div class="invalid-feedback">
        <span v-if="!$v.Email.required">L'email est requis !</span>
        <span v-if="!$v.Email.isUnique">L'email est correct !</span>
       </div>
      </div>

      <div class="form-group">
       <label for="message">Message</label>
       <textarea
        v-model.trim="message"
        name="message"
        class="form-control"
        id="message"
        cols="20"
        rows="5"
        placeholder="Votre message"
       ></textarea>
      </div>

      <button class="btn btn-outline-success" type="submit">
       Envoyez
      </button>
     </form>
     <!-- Fin formulaire de contact -->
    </div>
    <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
     <address class="text-center addr">
      Parc Monceau, Boulevard de Courcelles Paris
     </address>
     <h2 class="contactTitle">FESTIVAL DES FILMS DE PLEIN AIR</h2>
     <div class="col-auto d-none d-lg-block">
      <iframe
       class="carte"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.873553136576!2d2.306766314900409!3d48.87968700716222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fbe98f714c3%3A0xe62425fddeddc402!2sParc+Monceau!5e0!3m2!1sfr!2sfr!4v1550141425796"
       height="450"
       frameborder="0"
       allowfullscreen
      ></iframe>
     </div>
    </div>
   </div>
   <div class="trajet">
    <h2 class="mb-4">Comment venir</h2>
    <div class="row">
     <article class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
      <h4><i class="fas fa-subway mr-3"></i> En métro</h4>
      <p>
       Prendre la ligne 2 du métro et descendre à la station Monceau. Prendre la
       sortie bd de courcelles. Prendre la direction ouest du Boulevard de
       Courcelles/Place de la république Dominicaine vers Avenue Ferdousi.
      </p>
     </article>
     <article class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
      <h4><i class="fas fa-bus mr-3"></i>En bus</h4>
      <p>
       Superatis Tauri montis verticibus qui ad solis ortum sublimius
       attolluntur, Cilicia spatiis porrigitur late distentis dives bonis
       omnibus terra, eiusque lateri dextro adnexa Isauria, pari sorte uberi
       palmite viget et frugibus minutis, quam mediam navigabile flumen
       Calycadnus interscindit.
      </p>
     </article>
     <article class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
      <h4><i class="fas fa-car mr-3"></i>En véhicule</h4>
      <p>
       Rentrer l'adresse : Parc Monceau, 35 Boulevard de Courcelles, 75008 Paris
       dans votre gps et suivez les instructions.
      </p>
     </article>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import {
 required,
 email,
 minLength,
 maxLength,
} from "vuelidate/lib/validators";
export default {
 name: "ContactForm",
 data() {
  return {
   FirstName: "",
   LastName: "",
   Email: "",
   message: "",
  };
 },
 validations: {
  FirstName: {
   required,
   minLength: minLength(3),
   maxLength: maxLength(15),
  },
  LastName: {
   required,
   minLength: minLength(3),
   maxLength: maxLength(60),
  },
  Email: {
   required,
   email,
   isUnique(value) {
    if (value === "") return true;

    var email_regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return new Promise((resolve) => {
     setTimeout(() => {
      resolve(email_regex.test(value));
     }, 350 + Math.random() * 300);
    });
   },
  },
 },
 methods: {
  submit() {
   if (this.$v.$invalid) {
    swal({
     title: "Echec",
     text: "Remplissez les champs recquis",
     icon: "error",
     button: "Fermer",
    });
   } else {
    swal({
     title: "Message envoyé avec succes",
     text: "Vous receverez un mail de confirmation",
     icon: "success",
     button: "Fermer",
    });
   }
   this.FirstName = "";
   this.LastName = "";
   this.Email = "";
   this.message = "";
  },
 },
};
</script>

<style src="./ContactForm.css" scoped></style>
