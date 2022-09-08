import {createTheme} from "@nextui-org/react";

const theme = createTheme({
   type: "dark",
   theme:{
      colors:{
         white: '#ffffff',
         dark: '#0e0e0e',
         // background colors (light)
         background: "$dark",
         backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
         foreground: "$black",
         backgroundContrast: "$white",
         //semantic colors (light)
         blue50: '#EDF5FF',
         // ...
         blu_900: '#00254D',
         // ...
         // brand colors
         primary100: "#FCD2CD",
         primary200: "#F99E9C",
         primary300: "#EE6872",
         primary400: "#DD425C",
         primary500: "#C70D3F",
         primary: "#AB0944",
         primary700: "#8F0645",
         primary800: "#730442",
         primary900: "#5F023F",
         success100: "#D6F9D1",
         success200: "#A8F4A6",
         success300: "#74DF7C",
         success400: "#4CC060",
         success: "#1E963E",
         success600: "#15813C",
         success700: "#0F6C39",
         success800: "#095734",
         success900: "#054831",
         info100: "#D0E8FD",
         info200: "#A1CFFC",
         info300: "#71AFF8",
         info400: "#4E92F1",
         info500: "#2c09b0",
         secondary: "#104FC7",
         info: "#104FC7",
         info700: "#0B3AA7",
         info800: "#072986",
         info900: "#041C6F",
         warning100: "#FCEFCA",
         warning200: "#F9DB97",
         warning300: "#EDBD61",
         warning400: "#DC9D39",
         warning: "#C67203",
         warning600: "#AA5A02",
         warning700: "#8E4501",
         warning800: "#723200",
         warning900: "#5F2500",
         danger100: "#FACDD1",
         danger200: "#F59DAE",
         danger300: "#E1688C",
         danger400: "#C44175",
         danger: "#9E1157",
         danger600: "#870C56",
         danger700: "#710851",
         danger800: "#5B054A",
         danger900: "#4B0344"
      },
      breakpoints:{
         xs: '390px',
         sm: '450px',
         md: '600px',
         lg: '1400px',
         xl: '1920px'
      },
      
   }
})
export default theme;