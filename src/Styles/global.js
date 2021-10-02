import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --whiteCity: #dfe6e9;
        --white: #f5f5f5;
        --EletromagneticColor:#2f3640;
  
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: url("https://besthqwallpapers.com/Temp/2-10-2021/black-low-poly-background-4k-triangles-patterns-low-poly-textures-geometric-shapes-besthqwallpapers.com-2560x1440.jpg");
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;
        letter-spacing:1.5px;
    }
    
    body, input, button {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1rem;
        color: var(--whiteCity);
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`