import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    // iconfont
    @font-face {
      font-family: "iconfont";
      src: url('iconfont.eot?t=1574033063916'); /* IE9 */
      src: url('iconfont.eot?t=1574033063916#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQ8AAsAAAAACHwAAAPuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEGINuATYCJAMUCwwABCAFhG0HSRt7B8gekiQlAgccJICCBACKgFrWetL+/tyHrILKwabgXr16nVEgzFsUKITCeCiPzMLk8sib/j3rFav0jKzULIwkXah4aVNPmrXuvmgUB7sJEDD785fTu9oY2Hz2Lcexpu1NHVWA0QQKaG9fRAOkADHnhrGLyzhPQDXNB+ckJQsH9jJtWkB4QcvFwD5mlEtYQatpctZm4S0o2viaexHwxn1/+Ccge6KSaHOvbpNlIO5nyMt8Xpu1DdzYGBD1ZweziYQVQCa8zHW+wPPDK3iq9D2+A0DViuLPvefZLzxe5lutyNIVqav+h0eSRYHQ0LL7wAHSZzsnMhGJn9mIzC8PROR3vvhcLimgohfvAf8RdfIeUZDF4aEu9vbjgrEja/FDJmA04hyc4Fi+idrNJBlNaTPliw6b+f6g8d1D3HhzpMhiiTXBQeeNuMVCiE6bk644zN3G64jmWAYj1wNwRCUoLpk9CVk4pkh8QDAVqKF+rFMuc9pFonZ69Shi51rwvE4w9QSH8zQ1/Vz0IZPJGDVixEEjMiXjvNncHrjDYsmdYswzdhDXTIKp4cGEN2m5TV43/zlYXHwPM8Rze3fu7OXGtWpPxR3i//3LP1SauOxPh1xrrfVrQMTeF9RVF/9Mu9rsY1vg5Z0VX3ogb+zyCekFV6tBek9+WJ9j9kBPvKEUNH3S+GRyA/O/5FbNRIVvAm+4fyY4SqVe80i6BgdZJcdmZUwuwU2Q0DEW/p8YA3sqDOPYHAp1niQ9sFyQGRfxtELEXhg78s8410+uk8C1d7E9e+8dwHTcRg/9ok2396g9o1KJpaUY26KY6vRnsRcpHUGFCi2q0OBeQUp8g2/0nj0HjMQKre0ImbIweRQIA9A1pQ28UAC61nQ0cdHXaQ5v9F/wGZef05dVDo76Zi/I4MePH2vcsm4bH6Rn4FWq1Ba9c1HNqixLNFPJYqUpFF3FRsQoSk0Vb9o74n4/7nEgtActK4IQ9ZiCpDWDZ+oKFB070GjtQ7UsdXPHKAZPyL1Y0g0gGLIFogEfIBlyCc/Ue1BMeAeNoXhQXYfhe3bMRSOJDBSzUIZK6lFaqtNShoVFvNwCKK9Wi5moxGWTkDHQPtRf6JeMpUItZPpYYKiRB7AshVKMToOmgMugWq1D9YxOCaWsUMGy+ggMo/IeJJTqNABxjAGJsSAZlEQ9FE1KR4uyG7OQ1OsLQHLV1MSYEkJJkAQxDOjeUf6E/GrgqUptLcK5DDaoIReAxaLwJApDRwOVAu2QWg/roPT5o5QgKZaQokVQLwKG6lF1lcLx1Zpr3AWVdkgJMaSQQwmN/EpPa+2osztCARluvNhBI5ZraYqGDAAAAA==') format('woff2'),
      url('iconfont.woff?t=1574033063916') format('woff'),
      url('iconfont.ttf?t=1574033063916') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('iconfont.svg?t=1574033063916#iconfont') format('svg'); /* iOS 4.1- */
    }
    
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .iconspin:before {
      content: "\\e851";
    }
    
    .iconfeather:before {
      content: "\\e728";
    }
    
    .iconAa:before {
      content: "\\e636";
    }
    
    .iconmagnifier:before {
      content: "\\e64d";
    }
`;

