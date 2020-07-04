<template>
 <div class="">
  <div class="container mt-5 mb-5">
   <div class="row">
    <div
     class="  col-md-4 col-lg-4 col-xs-12 col-sm-6 mb-4 mt-4"
     v-for="(film, index) in Films"
     v-bind:key="index"
    >
     <div class="card card_wrap shadow-sm">
      <img :src="film.Url" class="card-img-top" alt="" />
      <div class="card-body">
       <div class="d-flex justify-content-between align-items-center">
        <small class="card-title mr-3">{{ film.Titre }}</small>

        <button
         type="submit"
         @click.prevent="infoFilm(film)"
         class="btn btn-outline-success "
         data-toggle="modal"
         data-target="#Modal"
        >
         Détails
        </button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 name: "Card",
 components: {},
 data() {
  return {
   Films: [
    {
     Titre: "Sang froid",
     Annee: "27 février 2019",
     Duree: "1h 59min",
     Genre: "Action, Drame",
     Langue: "Fr",
     Url:
      "http://fr.web.img6.acsta.net/r_1920_1080/pictures/19/01/02/11/50/4939911.jpg",
     Description:
      "Bienvenue à Kehoe, luxueuse station de ski du Colorado. La police locale n’y est pas franchement très sollicitée jusqu’au jour où le fils d’un conducteur de chasse-neige, Nels Coxman, est assassiné sur ordre de Viking, un baron de la drogue. Armé d’une rage implacable et d’une artillerie lourde, Nels entreprend de démanteler le cartel de Viking.",
    },
    {
     Titre: "A star is born",
     Annee: "3 octobre 2018",
     Duree: "2h 16min",
     Genre: "Drame, Romance",
     Langue: "Vost",
     Url:
      "http://fr.web.img5.acsta.net/r_1920_1080/pictures/18/09/25/14/20/0923171.jpg",
     Description:
      "Jackson Maine, musicien chevronné, découvre Ally, une chanteuse qui a du mal à percer. Alors que la jeune femme est sur le point de renoncer à faire carrière, Jackson tombe amoureux d'elle et la propulse sur le devant de la scène. Bientôt éclipsé par le succès d'Ally, il vit de plus en plus de mal son propre déclin…",
    },
    {
     Titre: "Creed 2",
     Annee: "9 janvier 2019",
     Duree: "2h 10min",
     Genre: "Drame, Action",
     Langue: "Fr",
     Url:
      "http://fr.web.img5.acsta.net/r_1920_1080/pictures/18/11/27/14/25/1451897.jpg",
     Description:
      "La vie est devenue un numéro d'équilibriste pour Adonis Creed entre ses obligations personnelles et son entraînement pour son prochain grand match. Et l'enjeu du combat est d'autant plus élevé que son rival est lié au passé de sa famille. Mais il peut compter sur Rocky Balboa à ses côtés...",
    },
    {
     Titre: "Les invisibles",
     Annee: "9 janvier 2019",
     Duree: "1h 42min",
     Genre: "Comédie",
     Langue: "Fr",
     Url:
      "http://fr.web.img3.acsta.net/r_1920_1080/pictures/18/10/31/15/48/3233262.jpg",
     Description:
      "Suite à une décision municipale, l’Envol, centre d’accueil pour femmes SDF, va fermer. Il ne reste plus que trois mois aux travailleuses sociales pour réinsérer coûte que coûte les femmes dont elles s’occupent : falsifications, pistons, mensonges… Désormais, tout est permis !",
    },
    {
     Titre: "All inclusive",
     Annee: "13 février 2019",
     Duree: "1h 32min",
     Genre: "Comédie",
     Langue: "Fr",
     Url:
      "http://fr.web.img5.acsta.net/r_1920_1080/pictures/19/01/18/14/32/5433844.jpg",
     Description:
      "Planté par sa fiancée à l’aéroport, Bruno s’envole seul pour une semaine dans un club de vacances All Inclusive aux Caraïbes. Une mauvaise nouvelle n’arrivant jamais seule, il va devoir partager sa chambre avec Jean-Paul Cisse, éternel célibataire très envahissant…",
    },
    {
     Titre: "Qu'est-ce qu'on a encore fait au Bon Dieu?",
     Annee: "30 janvier 2019",
     Duree: "1h 39min",
     Genre: "Comédie",
     Langue: "Fr",
     Url:
      "http://fr.web.img3.acsta.net/r_1920_1080/pictures/18/10/30/09/17/3442022.jpg",
     Description:
      "Claude et Marie Verneuil font face à une nouvelle crise. Leurs gendres, Rachid, David, Chao et Charles sont décidés à quitter la France avec femmes et enfants pour tenter leur chance à l’étranger.Incapables d’imaginer leur famille loin d’eux, Claude et Marie sont prêts à tout pour les retenir...",
    },
   ],
  };
 },
 methods: {
  infoFilm(film) {
   let titreF = film.Titre;
   let filmD = film.Description;
   let filmI = film.Url;
   swal({
    title: titreF,
    text: filmD,
    button: "Fermer",
   });
  },
 },
};
</script>

<style src="./Card.css" scoped></style>
