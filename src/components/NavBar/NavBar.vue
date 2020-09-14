<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <router-link class="nav-link" to="/"
                ><img class="logo" src="@/assets/logo.png" alt="logo"
            /></router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                class="collapse navbar-collapse ml-auto mt-2 mt-lg-0"
                id="navbarSupportedContent"
            >
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to="/"
                            exact
                            data-toggle="tab"
                            >Accueil
                            <span class="sr-only">(current)</span></router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to="/programme"
                            data-toggle="tab"
                            >Programme</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to="/reservation"
                            data-toggle="tab"
                            >Réservation</router-link
                        >
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/actualite"
                            >Actualité</router-link
                        >
                    </li> -->
                    <li class="nav-item mr-lg-5">
                        <router-link
                            class="nav-link"
                            to="/contact"
                            data-toggle="tab"
                            >Contact</router-link
                        >
                    </li>
                </ul>
                <form class="form-inline my-2 d-lg-none">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Rechercher un film"
                        aria-label="Search"
                    />
                    <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Rechercher
                    </button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style src="./NavBar.css" scoped></style>
