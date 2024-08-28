<template>
    <v-layout class="rounded rounded-md">
      <!-- Navigation Drawer with menu -->
      <v-navigation-drawer v-model="drawer" theme="dark" class="bg-deep-purple" :clipped="true" app permanent>
        <v-list density="compact" class="mt-14" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="Transfert" value="transfert"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="Historique" value="historique"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="Points de retrait" value="point de retrait"></v-list-item>
        </v-list>
  
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Deconnexion
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
  
  
  
  
      <!-- App Bar with the burger menu icon -->
      <v-app-bar :order="order" color="grey-lighten-2" title="Application bar" flat>
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
        </template>
        <template  v-slot:append>
          <v-btn icon="mdi-heart" class="red--text"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
          <v-icon icon="$vuetify"></v-icon>
          <div class="d-flex justify-space-around">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn color="primary" width="" v-bind="props">
                  Asma
                </v-btn>
              </template>
              <v-list >
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
      </v-app-bar>
  
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
      items: [
        { title: 'Voire profile' },
        { title: 'Déconnexion' },
      ],
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
  </style>