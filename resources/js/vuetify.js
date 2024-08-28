// resources/js/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import colors from 'vuetify/util/colors'
import '@mdi/font/css/materialdesignicons.css'; 
import { BLUE_THEME, AQUA_THEME, PURPLE_THEME, GREEN_THEME, CYAN_THEME, ORANGE_THEME } from '@/theme/LightTheme';
import { DARK_BLUE_THEME, DARK_AQUA_THEME, DARK_ORANGE_THEME,  DARK_PURPLE_THEME, DARK_GREEN_THEME, DARK_CYAN_THEME} from '@/theme/DarkTheme';

export default createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi', // Utilisez 'mdi' pour les icônes Material Design
      },
    theme: {
        themes: {
            BLUE_THEME,
            AQUA_THEME,
            PURPLE_THEME,
            GREEN_THEME,
            CYAN_THEME,
            ORANGE_THEME,
            DARK_BLUE_THEME,
            DARK_AQUA_THEME,
            DARK_ORANGE_THEME,
            DARK_PURPLE_THEME,
            DARK_GREEN_THEME,
            DARK_CYAN_THEME,
          light: {
            dark: false,
            colors: {
              primary1: colors.red.darken1, // #E53935
              secondary1: colors.red.lighten4, // #FFCDD2
              primary: '#1976D2', // Couleur principale (bleu)
              secondary: '#424242', // Couleur secondaire (gris foncé)
              accent: '#82B1FF', // Couleur d'accent (bleu clair)
              error: '#FF5252', // Couleur d'erreur (rouge)
              info: '#2196F3', // Couleur d'information (bleu)
              success: '#4CAF50', // Couleur de succès (vert)
              warning: '#FFC107', // Couleur d'avertissement (jaune)
              drawer: '#000000', // Couleur personnalisée pour le drawer (noir)
              blanche: '#ffff',
            }
          },
        },
      },
})
