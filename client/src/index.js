import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {register} from './serviceWorkerRegistration';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {NextUIProvider, createTheme} from "@nextui-org/react";
// const token = localStorage.getItem('token');
const client = new ApolloClient({
   //uri: "https://backend-mufac3i3ra-uc.a.run.app/graphql",
   uri:"http://localhost:8080/graphql",
   cache: new InMemoryCache(),
   headers:{
      authorization: localStorage.getItem('token')!==null?`Bearer ${localStorage.getItem('token')}`:''
   },
});
// import {ThemeProvider} from "@mui/material";
// import theme from "./Components/theme";
// import {NextUIProvider, createTheme} from "@nextui-org/react";
const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        breakpoints: {
            xs: '390px',
            sm: '600px',
            md: '900px',
            lg: '1200px',
            xl: '1920px'
        },
        colors: {
            black: "#212121",
            text: "#e3e3e3",
            gradient: 'linear-gradient(112deg, $blue100 -25%, $red500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#ff4ecd'

            // ...  more colors
        },
        space: {},
        fonts: {}
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <NextUIProvider disableBaseline={false} theme={darkTheme}>
       <ApolloProvider client={client}>
          <BrowserRouter>
             <App />
          </BrowserRouter>
       </ApolloProvider>
       </NextUIProvider>
);
register();
reportWebVitals();
