import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10ac84',
  cinzaClaro: '#a3a3a3'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color:${cores.preta};
  padding-top: 40px;
  color:${cores.branca}
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width:${breakpoints.desktop}){
    max-width: 80%;
}


}

`
