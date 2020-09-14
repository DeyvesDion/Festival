<template>
 <div>
  <div class="seance">
   <h2 class="seanceTitle">
    Les prochaines séances
   </h2>
  </div>
  <div>
   <table class="table table-fixed table-striped">
    <thead class="tableTitle">
     <tr class="tTitre">
      <th scope="col">Séance</th>
      <th scope="col">Film</th>
      <th scope="col">Langue</th>
      <th scope="col">Détail</th>
     </tr>
    </thead>
    <tbody>
     <tr class="tTitre" v-for="(film, index) in Films" v-bind:key="index">
      <td>{{ film.Heure }}</td>
      <td>{{ film.Titre }}</td>
      <td>{{ film.Langue }}</td>
      <td>
       <button @click.prevent="details(film)" class="btn btn-outline-success">
        Voir
       </button>
      </td>
     </tr>
    </tbody>
   </table>
  </div>
 </div>
</template>

<script>
export default {
 name: "Seance",
 data() {
  return {
   Films: [
    { Heure: "9h10", Titre: "Casino", Langue: "Vost" },
    { Heure: "11h10", Titre: "Casino Vip", Langue: "Vost" },
    { Heure: "13h10", Titre: "Les invisibles", Langue: "Fr" },
    { Heure: "15h10", Titre: "All inclusive", Langue: "Fr" },
    { Heure: "17h10", Titre: "A star is born", Langue: "Vost" },
    {
     Heure: "19h10",
     Titre: "Qu'est-ce qu'on a fait au Bon Dieu",
     Langue: "Fr",
    },
    { Heure: "21h10", Titre: "Sang froid", Langue: "Fr" },
    { Heure: "23h10", Titre: "La favorite", Langue: "Fr" },
    { Heure: "01h10", Titre: "Blade runner", Langue: "Vost" },
    { Heure: "03h10", Titre: "L'ombre de Staline", Langue: "Fr" },
    { Heure: "05h10", Titre: "Chained", Langue: "Vost" },
   ],
  };
 },
 methods: {
  details(film) {
   let titreF = film.Titre;
   let filmH = film.Heure;
   let filmL = film.Langue;
   swal({
    title: titreF,
    text: `Prochaine séance à : ${filmH} Langue : ${filmL}`,
    // text: `Langue : ${filmL}`,
    button: "Fermer",
   });
  },
 },
};
</script>

<style src="./Seance.css" scoped></style>
