<template>
 <div>
  <div class="header">
   <h1 class="headerTitle">
    Réservez votre séance
   </h1>
  </div>
  <ReservForm></ReservForm>
  <div class="container"></div>
 </div>
</template>

<script>
// @ is an alias to /src
import ReservForm from "@/components/Forms/ReservationForm/ReservForm.vue";
export default {
 name: "Reservation",
 components: {
  ReservForm,
 },
};
</script>

<style src="./Reservation.css" scoped></style>
