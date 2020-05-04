import {createGlobalStyle} from 'styled-components/macro'
 
export default createGlobalStyle`
 
* {
   box-sizing: border-box;
}
 
#root {
   display: grid;
   grid-template-rows: 48px auto;
   height: 100vh;
}

main {
   overflow: scroll;
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
   font-size: 14px;
}
`
