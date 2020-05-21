import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
 
* {
   box-sizing: border-box;
   font-family: Malayalam Sangam MN;
}
 
#root {
   display: grid;
   grid-template-rows: 48px auto 48px;
   height: 100vh;
}

header {
   grid-row: 1/2;
   height: 48px;
   z-index: 1;
}

main {
   grid-row: 2/3;
   overflow: scroll;
   margin: 12px 4px 12px 4px;
   height: 100%;
}
 
body {
       color: var(--secondary);
       background: var(--background);
       margin: 0;
       height: 100vh;
       text-align: center;
       align-items: center;
   }

footer {
   grid-row: 3/4;
   font-size: 14px;
   position: bottom;
   height: 48px;
   z-index: 1;
}

:root {
   --background: #aed6dc;
   --primary: #ff9a8d;
   --secondary: #414756;
   --tertiary: #c1e1e6;
   --quaternary: #d8f7fc;
}
`
