function n(n,t,e,a){Object.defineProperty(n,t,{get:e,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},o=t.parcelRequire9acc;null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in a){var t=a[n];delete a[n];var o={id:n,exports:{}};return e[n]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,t){a[n]=t},t.parcelRequire9acc=o),o.register("7PhYn",(function(t,e){var a,o;n(t.exports,"register",(()=>o),(n=>o=n)),n(t.exports,"resolve",(()=>a),(n=>a=n));var i={};o=function(n){for(var t=Object.keys(n),e=0;e<t.length;e++)i[t[e]]=n[t[e]]},a=function(n){var t=i[n];if(null==t)throw new Error("Could not resolve bundle with id "+n);return t}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.da0b442a.js","jS596":"ganaste.659a09e8.png","bNcb0":"perdiste.54529481.png","4A37U":"tiedGame.942fa99c.svg","3RRaM":"piedra-hand.60203d08.png","4sQym":"papel-hand.9f7b03c8.png","N7Fz7":"tijera-hand.cad77ea3.png"}'));const i={data:{esteJuego:{miMovimiento:"none",movimientoCompu:"none"},historial:{usuarioGana:0,compuGana:0}},listeners:[],init(){const n=JSON.parse(localStorage.getItem("games-data"));n&&this.setState(n)},getState(){return this.data},setState(n){this.data=n,localStorage.setItem("games-data",JSON.stringify(this.data));for(const n of this.listeners)n()},setMove(n,t){const e=this.getState();e.esteJuego[t]=n,console.log(i),this.setState(e)},getCurrentGame(){return this.getState().esteJuego},restartGame(){const n=this.getState();n.esteJuego.jugadaUsuario="",n.esteJuego.jugadaCompu="",this.setState(n)},tenerResultado(n,t){const e=["piedra"===n&&"tijera"===t,"papel"===n&&"piedra"===t,"tijera"===n&&"papel"===t].includes(!0),a=["piedra"===t&&"tijera"===n,"papel"===t&&"piedra"===n,"tijera"===t&&"papel"===n].includes(!0);let o;return o=e?"usuarioGana":a?"compuGana":"empate",o},cambiarHistorial(n){const t=this.getState();"usuarioGana"===n?t.historial.usuarioGana+=1:"compuGana"===n&&(t.historial.compuGana+=1),this.setState(t)}};function r(n){const t=document.createElement("div");t.innerHTML='\n        <text-comp variant="title">\n            Piedra Papel ó Tijera\n        </text-comp>\n        <div class="button">\n            <button-comp variant="button"> Empezar </button-comp>\n        </div>\n        <div class="img__container">\n            <hand-comp hand="tijera"></hand-comp>\n            <hand-comp hand="piedra"></hand-comp>\n            <hand-comp hand="papel"></hand-comp>\n        </div>\n    ';return t.querySelector(".button").addEventListener("click",(()=>{n.goTo("/dwf-m5-desafio/instrucciones")})),t}function s(n){const t=document.createElement("div"),e=document.createElement("style");e.innerHTML="\n        .instrucciones__container {\n            display: flex;\n            align-items: center;\n            flex-direction: column;\n            justify-content: center;\n            margin: 100px auto 80px;\n        }\n        .body {\n            margin: 30px 0;\n        }\n    ",t.innerHTML='\n    <div class="instrucciones__container">\n        <text-comp variant="body">\n            Presioná jugar\n            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n        </text-comp>\n        <div class="button">\n            <button-comp variant="button"> ¡Jugar! </button-comp>\n        </div>\n        <div class="img__container">\n            <hand-comp hand="tijera"></hand-comp>\n            <hand-comp hand="piedra"></hand-comp>\n            <hand-comp hand="papel"></hand-comp>\n        </div>\n    </div>\n    ',t.appendChild(e);return t.querySelector(".button").addEventListener("click",(()=>{n.goTo("/dwf-m5-desafio/jugar/")})),t}function d(n){const t=document.createElement("div");t.setAttribute("class","game-countdown"),t.innerHTML='\n        <div class="circle">\n            <h2 class="countdown-timer"> 3 </h2>\n        </div>\n        <div class="hands-container-countdown">\n            <hand-comp hand="tijera"></hand-comp>\n            <hand-comp hand="piedra"></hand-comp>\n            <hand-comp hand="papel"></hand-comp>\n        </div>\n    ';const e=t.querySelectorAll("hand-comp");e.forEach((n=>{n.addEventListener("handClick",(n=>{const t=n.detail.handMove;i.setMove(t,"jugadaUsuario"),e.forEach((n=>{const e=n.shadowRoot.querySelector(".hand");n.getAttribute("hand")!==t?(e.classList.add("inactive-hand"),e.classList.remove("active-hand")):n.getAttribute("hand")===t&&(e.classList.add("active-hand"),e.classList.remove("inactive-hand"))}))}))})),i.setMove(function(){const n=["piedra","papel","tijera"];return n[Math.floor(Math.random()*n.length)]}(),"jugadaCompu");const a=t.querySelector(".countdown-timer");setInterval((()=>{const e=i.getCurrentGame();t.classList.add("game-hands-show"),t.innerHTML=`\n        <hand-comp hand=${e.jugadaCompu} class="computer-hand" height="215px" width="90px"></hand-comp>\n        <hand-comp hand=${e.jugadaUsuario} class="user-hand" height="215px" width="90px"></hand-comp>\n        `,setTimeout((()=>{n.goTo("/dwf-m5-desafio/resultado")}),4e3),a.textContent=3..toString()}),1e3);return t}o.register("7lGPI",(function(n,t){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("jS596")})),o.register("kVZsc",(function(t,e){var a;n(t.exports,"getBundleURL",(()=>a),(n=>a=n));var o={};function i(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(n){var t=o[n];return t||(t=function(){try{throw new Error}catch(t){var n=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return i(n[2])}return"/"}(),o[n]=t),t}})),o.register("a7Mv2",(function(n,t){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("bNcb0")})),o.register("cPoZg",(function(n,t){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("4A37U")}));const c={usuarioGana:o("7lGPI"),compuGana:o("a7Mv2"),empate:o("cPoZg")};function p(n){const t=document.createElement("div");t.setAttribute("class","result");const e=i.getCurrentGame(),a=i.tenerResultado(e.jugadaUsuario,e.jugadaCompu);i.cambiarHistorial(a);const o=i.getState().historial;i.restartGame(),t.innerHTML=`\n    <div class="image-container"> \n        <img src=${c[a]} class="result-image" />\n    </div>\n    <div class="score-container">\n        <h2 class="score-container__title"> Puntaje </h2>\n        <article class="score-container__data">\n            <h3 class="score-container__user-data score"> \n                Vos: ${o.usuarioGana}\n            </h3>\n            <h3 class="score-container__computer-data score">\n                Máquina: ${o.compuGana}\n            </h3>\n        </article>\n    </div>\n    <div class="button result-button">\n        <button-comp variant="button result-button">Volver a jugar</button-comp>\n    </div>\n    `;return t.querySelector("button-comp").addEventListener("click",(()=>{n.goTo("/dwf-m5-desafio/instrucciones")})),t}o.register("hFdY6",(function(n,t){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("3RRaM")})),o.register("czegl",(function(n,t){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("4sQym")})),o.register("lXzvl",(function(n,t){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("N7Fz7")}));const u={piedra:o("hFdY6"),papel:o("czegl"),tijera:o("lXzvl")};!function(){i.init(),customElements.define("text-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),e=document.createElement("style"),a=document.createElement("div");e.innerHTML="\n            .title {\n                width: 300px;\n                color: #009048;\n                font-size: 80px;\n                font-weight: bold; \n                margin: 80px 0px 0px 40px;\n            }\n            @media(min-width: 800px) {\n                .title {\n                    width: 400px;\n                    font-size: 95px;\n                    margin: 50px 20px 40px 90px;\n                }\n            }\n            .body {\n                color: #000;\n                width: 317px;\n                height: 240px;\n                margin: 30px 0;\n                font-size: 40px;\n                text-align: center;\n            }\n            ",a.className=n,a.textContent=this.textContent,t.appendChild(a),t.appendChild(e)}}),customElements.define("button-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),e=document.createElement("style"),a=document.createElement("div");a.innerHTML="\n            <button></button>\n            ",e.innerHTML="\n                .button {\n                    display: flex;\n                    overflow: auto;\n                    color: #D8FCFC;\n                    font-size: 45px;\n                    margin: 80px 20px;\n                    padding: 18px 90px;\n                    align-items: center;\n                    border-radius: 10px;\n                    justify-content: center;\n                    background-color: #006CFC;\n                    border: 10px solid #001997;\n                    font-family: 'Odibee Sans', cursive;\n                }\n                @media(min-width: 810px) {\n                    .button {\n                        width: 312px;\n                        overflow: auto;\n                        margin: 0px 0px 50px 0;\n                    } \n                }\n                @media(max-width: 800px) {\n                    .button {\n                        overflow: auto;\n                        margin: 39px 20px;\n                    } \n                }\n                @media(max-width: 800px) {\n                    .result-button {\n                        font-size: 32px;\n                        overflow: auto;\n                        margin: 39px 20px;\n                    } \n                }\n            ",a.className=n,a.textContent=this.textContent,t.appendChild(a),t.appendChild(e)}}),customElements.define("hand-comp",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}addListeners(){this.shadow.querySelector(".hand"),this.addEventListener("click",(()=>{const n=new CustomEvent("handClick",{detail:{handMove:this.getAttribute("hand")}});this.dispatchEvent(n)}))}render(){const n=this.getAttribute("hand")||"rock",t=this.getAttribute("height")||"175px",e=this.getAttribute("width")||"70px",a=document.createElement("img");a.setAttribute("src",u[n]),a.setAttribute("class","hand");const o=document.createElement("style");o.innerHTML=`\n        @media(min-width: 700px) {\n            .piedra {\n                width: 80px;\n                height: 160px;\n            }\n            .papel {\n                width: 90px;\n                height: 160px;\n            }\n            .tijera {\n                width: 70px;\n                height: 160px;\n            }\n        }\n        .hand {\n            margin: 0 25px;\n            height: ${t};\n            width: ${e};\n            transform: translateY(30px);\n            transition: all 0.3s ease-in-out;\n            cursor: pointer;\n        }\n        .active-hand {\n            transform: translateY(5px);\n            transition: all 0.3s ease-in-out;\n        }\n        .inactive-hand {\n            opacity: 45%;\n            transition: all 0.3s ease-in-out;\n        }\n        `,this.shadow.appendChild(o),this.shadow.appendChild(a),this.addListeners()}});!function(n){const t=[{path:/\/dwf-m5-desafio\/welcome/,component:r},{path:/\/dwf-m5-desafio\/instrucciones/,component:s},{path:/\/dwf-m5-desafio\/jugar/,component:d},{path:/\/dwf-m5-desafio\/resultado/,component:p}];function e(n){history.pushState({},"",n),a(n)}function a(a){for(const o of t)if(o.path.test(a)){const t=o.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(t)}}location.host.includes("github.io"),e("/dwf-m5-desafio/welcome"),window.onpopstate=function(){a(location.pathname)}}(document.getElementById("root"))}();
//# sourceMappingURL=index.da0b442a.js.map
