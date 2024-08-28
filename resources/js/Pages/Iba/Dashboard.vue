<template>
  <v-layout class="rounded rounded-md">
    <!-- Navigation Drawer with menu -->
    <v-navigation-drawer v-model="drawer" color="primary light-3" width="300" :clipped="true" app>
      <v-list dense>
        <!-- Simple Menu Items -->
        <v-list-item color="primary" link>
          <v-list-item-title>Utilisateur</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>Transfert</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>Point retrait</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>Configuration</v-list-item-title>
        </v-list-item>

        <!-- Bottom Section: Profile and Logout -->
         
        <template v-slot:append>
        <v-divider></v-divider>
        <v-list-item class="profile-item">
          <!-- Avatar -->
          <!-- <v-avatar size="32px">
            <img src="https://via.placeholder.com/150" alt="Photo de Profil">
          </v-avatar> -->
          <!-- Espacement entre l'avatar et le switch -->
          <!-- <v-spacer></v-spacer> -->
          <v-switch class="custom-switch" label="Déconnexion"></v-switch>
        </v-list-item>
      </template>
      </v-list>
    </v-navigation-drawer>




    <!-- App Bar with the burger menu icon -->
    <v-app-bar :order="order" color="grey-lighten-2" title="Application bar"  flat>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
      </template>
      <template v-slot:append>
        <v-btn icon="mdi-heart" class="custom-heart"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
        
      </template>
</v-app-bar>
    <!-- <v-app-bar :elevation="1" olor="grey-lighten-2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon color="primary" @click="toggleMenu"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Application Bar</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar> -->

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      Bienvenue sur DSPAY
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    order: 0,
    drawer: true,
  }),
  methods: {
    toggleMenu() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style scoped>
.profile-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  /* align-items: center; */

  /* Assurer un alignement cohérent des éléments enfants */
  padding: 16px;
  /* Ajouter du padding si nécessaire pour espacer le contenu du bord du tiroir */
}

.profile-item v-avatar {
  margin-right: 0px;
  /* Espace entre l'avatar et le switch */
}

.custom-heart {
  color: red; /* Change la couleur de l'icône */
}

</style>