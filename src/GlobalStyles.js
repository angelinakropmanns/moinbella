import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
 
* {
   box-sizing: border-box;
}
 
#root {
   display: grid;
   grid-template-rows: 48px auto 48px;
   height: 100vh;
}

header {
   grid-row: 1/2;
}

main {
   grid-row: 2/3;
   overflow: scroll;
   margin: 12px auto 12px auto;
   height: 100%;
}
 
body {
       color: #414756;
       background-color: #AED6DC;
       margin: 0;
       font-family: Malayalam Sangam MN;
       height: 100vh;
       text-align: center;
       align-items: center;
   }

footer {
   grid-row: 3/4;
   font-size: 14px;
   height: 48px;
   position: bottom;
}
`
