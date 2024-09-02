<template>
    <v-layout class="d-flex flex-column min-h-100vh">
      <!-- Navigation Drawer with menu -->
      <v-navigation-drawer
        v-model="drawer"
        :clipped="true"
        app
        :permanent="!isMobile"
        temporary
        class="drawer shadow-drawer"
      >
        <template v-slot:prepend>
          <div class="pl-6">
            <v-list>
              <v-list-item class="logo">
                <v-list-item-content class="logo-content">
                  <v-icon left class="icone ver1">mdi-firebase</v-icon>
                  <v-list-item-title prepend-icon="mdi-cash-refund" class="text">DSPAY</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </template>
  
        <v-list density="compact" class="mt-14" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard">
            <template v-slot:prepend><v-icon class="icon-draw">mdi-view-dashboard</v-icon></template>
          </v-list-item>
          <v-list-item prepend-icon="mdi-cash-refund" title="Transfert" value="transfert">
            <template v-slot:prepend><v-icon class="icon-draw">mdi-cash-refund</v-icon></template>
          </v-list-item>
          <v-list-item prepend-icon="mdi-cash-multiple" title="Historique" value="historique">
            <template v-slot:prepend><v-icon class="icon-draw">mdi-cash-multiple</v-icon></template>
          </v-list-item>
          <v-list-item prepend-icon="mdi-archive-marker-outline" title="Points de retrait" value="point de retrait">
            <template v-slot:prepend><v-icon class="icon-draw">mdi-archive-marker-outline</v-icon></template>
          </v-list-item>
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
      <v-app-bar :order="order" color="white" flat>
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
        </template>
        <template v-slot:append>
          <v-btn icon="mdi-magnify" class="icon-red"></v-btn>
          <div class="d-flex justify-space-around">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props" subtitle="Vuetify">
                  Asma BALDE
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
      </v-app-bar>
  
      <!-- Main Content Area -->
      <v-main class="d-flex flex-column flex-grow-1 align-center justify-center main-bg">
        Bienvenue sur DSPAY
         
         <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
  <template v-slot:item.1>
    <v-card title="Step One" flat>...</v-card>
  </template>

  <template v-slot:item.2>
    <v-card title="Step Two" flat>...</v-card>
  </template>

  <template v-slot:item.3>
    <v-card title="Step Three" flat>...</v-card>
  </template>
</v-stepper>
          
      </v-main>
    </v-layout>
  </template>
  
  <script>
  export default {
    data: () => ({
      order: 0,
      drawer: true,
      items: [
        { title: 'Voir profil' },
        { title: 'Déconnexion' },
      ],
      isMobile: false, // Suivre la taille de l'écran
    }),
    //fin
    methods: {
      toggleMenu() {
        this.drawer = !this.drawer;
      },
      checkMobileView() {
        this.isMobile = window.innerWidth < 1264; // Détecter les tablettes et plus petites tailles
      }
    },
    mounted() {
      this.checkMobileView();
      window.addEventListener('resize', this.checkMobileView);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkMobileView);
    }
  };
  </script>
  
  <style scoped>
  .min-h-100vh {
    min-height: 100vh;
  }
  
  .logo-content {
    display: flex;
    flex-direction: row;
    padding-left: 0px;
    color: #28ad82;
  }
  
  .logo-content .icone {
    margin-right: 18px;
    font-size: 30px;
    color: #28ad82;
  }
  
  .logo-content .text {
    font-weight: 900;
    letter-spacing: 1px;
  }
  
  .drawer {
    background-color: white;
    overflow-y: auto; /* Pour activer la barre de défilement verticale */
    max-height: 100vh; /* Assurer que le contenu ne dépasse pas la hauteur de la fenêtre */
  }
  
  .shadow-drawer {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre légère à droite */
  }
  
  .icon-draw {
    color: #28ad82;
  }
  
  .main-bg {
    background-color: #e9edfa;
  }
  </style>
  
