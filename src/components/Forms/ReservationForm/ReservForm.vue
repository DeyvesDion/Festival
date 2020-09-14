<template>
    <div>
        <div class="container">
            <div class="row mt-5 resa">
                <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                    <Slider></Slider>
                </div>
                <div class="contactForm col-md-6 col-lg-6 col-xs-12 col-sm-12">
                    <form @submit.prevent="submit">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputFirstName"
                                    >Nom <span class="required">*</span></label
                                >
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
                                <div class="valid-feedback">
                                    Le nom est valide !
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.FirstName.required"
                                        >Le nom est requis !</span
                                    >
                                    <span v-if="!$v.FirstName.minLength"
                                        >Le nom doit avoir au moins
                                        {{
                                            $v.FirstName.$params.minLength.min
                                        }}
                                        lettres !</span
                                    >
                                    <span v-if="!$v.FirstName.maxLength"
                                        >Le nom doit au plus avoir
                                        {{
                                            $v.FirstName.$params.maxLength.max
                                        }}
                                        lettres !</span
                                    >
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputName"
                                    >Prénom
                                    <span class="required">*</span></label
                                >
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
                                <div class="valid-feedback">
                                    Le prénom est valide !
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.LastName.required"
                                        >Le prénom est requis !</span
                                    >
                                    <span v-if="!$v.LastName.minLength"
                                        >Le prenom doit avoir au moins
                                        {{
                                            $v.LastName.$params.minLength.min
                                        }}
                                        lettres !</span
                                    >
                                    <span v-if="!$v.LastName.maxLength"
                                        >Le prenom doit au plus avoir
                                        {{
                                            $v.LastName.$params.maxLength.max
                                        }}
                                        lettres !</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputEmail"
                                >Email <span class="required">*</span></label
                            >
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
                            <div class="valid-feedback">
                                L'email est valide !
                            </div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.Email.required"
                                    >L'email est requis !</span
                                >
                                <span v-if="!$v.Email.isUnique"
                                    >L'email est correct !</span
                                >
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputAddress"
                                    >Adresse
                                    <span class="required">*</span></label
                                >
                                <input
                                    type="text"
                                    id="inputAddress"
                                    placeholder="6 Avenue de la République"
                                    class="form-control"
                                    v-model.trim="$v.Address.$model"
                                    :class="{
                                        'is-invalid': $v.Address.$error,
                                        'is-valid': !$v.Address.$invalid,
                                    }"
                                />
                                <div class="valid-feedback">
                                    L'adresse est valide !
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.Address.required"
                                        >L'adresse est requis !</span
                                    >
                                    <span v-if="!$v.Address.minLength"
                                        >L'adresse doit avoir au moins
                                        {{
                                            $v.Address.$params.minLength.min
                                        }}
                                        lettres !</span
                                    >
                                    <span v-if="!$v.Address.maxLength"
                                        >L'adresse doit au plus avoir
                                        {{
                                            $v.Address.$params.maxLength.max
                                        }}
                                        lettres !</span
                                    >
                                </div>
                            </div>
                            <div class="form-group col-md-6 complement">
                                <label for="inputAddressC"
                                    >Complément adresse</label
                                >
                                <input
                                    v-model="AddressC"
                                    type="text"
                                    class="form-control"
                                    id="inputAddressC"
                                    placeholder="Etage, Appartement, chez..."
                                />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity"
                                    >Ville
                                    <span class="required">*</span></label
                                >
                                <input
                                    type="text"
                                    id="inputCity"
                                    placeholder="Votre ville"
                                    class="form-control"
                                    v-model.trim="$v.City.$model"
                                    :class="{
                                        'is-invalid': $v.City.$error,
                                        'is-valid': !$v.City.$invalid,
                                    }"
                                />
                                <div class="valid-feedback">
                                    La ville est valide !
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.City.required"
                                        >La ville est requis !</span
                                    >
                                    <span v-if="!$v.City.minLength"
                                        >L'adresse doit avoir au moins
                                        {{
                                            $v.City.$params.minLength.min
                                        }}
                                        lettres !</span
                                    >
                                    <span v-if="!$v.City.maxLength"
                                        >La ville doit au plus avoir
                                        {{
                                            $v.City.$params.maxLength.max
                                        }}
                                        lettres !</span
                                    >
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputZip"
                                    >Code postal
                                    <span class="required">*</span></label
                                >
                                <input
                                    type="text"
                                    id="inputZip"
                                    placeholder="Votre code postal"
                                    class="form-control"
                                    v-model.trim="$v.Zip.$model"
                                    :class="{
                                        'is-invalid': $v.Zip.$error,
                                        'is-valid': !$v.Zip.$invalid,
                                    }"
                                />
                                <div class="valid-feedback">
                                    Le code postal est valide !
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.Zip.required"
                                        >Le code postal est requis !</span
                                    >
                                    <span v-if="!$v.Zip.minLength"
                                        >Le code postal doit avoir au moins
                                        {{
                                            $v.Zip.$params.minLength.min
                                        }}
                                        lettres !</span
                                    >
                                    <span v-if="!$v.Zip.numeric"
                                        >Le code postal n'est pas valide !</span
                                    >
                                    <span v-if="!$v.Zip.maxLength"
                                        >Le code postal doit au plus avoir
                                        {{
                                            $v.Zip.$params.maxLength.max
                                        }}
                                        lettres !</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="selectFilms"
                                    >Film <span class="required">*</span></label
                                >
                                <select
                                    v-model.trim="$v.Film.$model"
                                    :class="{
                                        'is-invalid': $v.Film.$error,
                                        'is-valid': !$v.Film.$invalid,
                                    }"
                                    id="selectFilms"
                                    class="form-control"
                                >
                                    <option
                                        v-for="(film, index) in Films"
                                        v-bind:key="index"
                                        >{{ film.Titre }}</option
                                    >
                                </select>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.Film.required"
                                        >Le film est requis !</span
                                    >
                                </div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="selectSeance"
                                    >Séance
                                    <span class="required">*</span></label
                                >
                                <select
                                    v-model.trim="$v.Seance.$model"
                                    :class="{
                                        'is-invalid': $v.Seance.$error,
                                        'is-valid': !$v.Seance.$invalid,
                                    }"
                                    id="selectSeance"
                                    class="form-control"
                                >
                                    <option
                                        v-for="(seance, index) in Seances"
                                        v-bind:key="index"
                                        >{{ seance }}</option
                                    >
                                </select>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.Film.required"
                                        >La séance est requis !</span
                                    >
                                </div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="selectDate"
                                    >Date <span class="required">*</span></label
                                >
                                <input
                                    v-model.trim="$v.date.$model"
                                    :class="{
                                        'is-invalid': $v.date.$error,
                                        'is-valid': !$v.date.$invalid,
                                    }"
                                    type="date"
                                    class="form-control"
                                    name="selectDate"
                                    id="selectDate"
                                />
                                <div class="invalid-feedback">
                                    <span v-if="!$v.Film.required"
                                        >La date est requis !</span
                                    >
                                </div>
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
                            Réserver
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "@/components/Slider/Slider.vue";
import {
    required,
    email,
    numeric,
    minLength,
    maxLength,
} from "vuelidate/lib/validators";

export default {
    name: "ReservForm",
    components: {
        Slider,
    },
    data() {
        return {
            date: "",
            FirstName: "",
            LastName: "",
            Email: "",
            Address: "",
            AddressC: "",
            City: "",
            Zip: "",
            Film: "",
            Seance: "",
            message: "",
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
            Seances: [
                "9h10",
                "11h10",
                "13h10",
                "15h10",
                "17h10",
                "19h10",
                "21h10",
                "23h10",
                "01h10",
                "03h10",
                "05h10",
            ],
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
        Address: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(60),
        },
        City: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(60),
        },
        Zip: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(5),
            numeric,
        },
        Film: {
            required,
        },
        Seance: {
            required,
        },
        date: {
            required,
        },
    },
    methods: {
        submit() {
            // console.log('submit!')
            this.$v.$touch();
            if (this.$v.$invalid) {
                swal({
                    title: "Echec",
                    text: "Remplissez les champs recquis",
                    icon: "error",
                    button: "Fermer",
                });
            } else {
                swal({
                    title: "Réservation effectuée avec succes",
                    text: "Vous receverez un mail de confirmation",
                    icon: "success",
                    button: "Fermer",
                });
            }
            this.date = "";
            this.FirstName = "";
            this.LastName = "";
            this.Email = "";
            this.Address = "";
            this.AddressC = "";
            this.City = "";
            this.Zip = "";
            this.Film = "";
            this.Seance = "";
            this.message = "";
        },
    },
};
</script>

<style src="./ReservForm.css" scoped></style>
