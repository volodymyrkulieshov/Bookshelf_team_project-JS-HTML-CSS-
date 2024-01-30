(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const p="data:image/png;base64,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",R="/Bookshelf_team_project/assets/amazon2x-4f53fde0.png",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAmCAYAAABH/4KQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVqSURBVHgB7VddiBxFEP56dnZ3Fu88T5DjzAnhCEoSMAZ/4sMZDhPIg8E/DIKo4EtE8MEn0RfJU0AUNb4IUQiiPuQiiKjBEIwJRPxJjImQRIxoQi6ul3h3Se5vf6a7rO7tmZuZm9mdC/cipJaip2urqquqq7q6getwbSDyMtLO8u2y6A8JiFscoKQov6wjQEqhSaC/C8XCEfFs43QeuY4L0EflO6ihdvPnGiwd/Cmc5gbxHM62Y2prXP390soi6HsI0dOiUIYIId8mxPiavireV9o6c8L+sQCcVBVEWoMoEvaC2DDFM4MC899RzKK35Su6aO7eti3bq6w/hL+z9LijxKdJnzvFKPk/JRaKzvV3U2Cz93z9qzRdTobBjmqKB3UAA0RizEKkzJEx16MrxUO8XiHNOBfpIAQVBqFSUsHtBgY3Q7hdPPFBV84Co9+wRMLPZeshugd52RJotgpcPArMVBeok4QBG5AgmG2N00wFzjsvmabi3lcg7noJKN8YY8bYz1D7ngaungO6BuBs/AAYWB/nqV8B/fQ66NcdOqnD/0hBe1mwhsnoetnb6jtOK4FbKJY/ArHutZhhIfTdDbFxl0l05+HPY4aFUO6BeGA7xOATiOplmQIy0jhzW01FiYjMDbehHYhb7wf1rARuXtmWD15fK+8CkOY79dRwMlQIkmxZ1ENCZ+i9szMP6a2M6LVB27JlCzoZJywTkVUyj+gMwu3IYqo0qpezrL+/H3v27FnAm9RGIZP2KrqteSJHOboEWd3ReQa4bRcy0bIVnnfhxRons/Vm5pwp6rDd5OmbWIRxEWSoVqu5cs4w9fVxRSnHRi8oiDyRy8kT1elnyyzYVptz7F9vrAhEjoLIVTRB67KrLDrnOHK8rc2EUnSGXMYhd0GkbuvY2Jhpy/FzLqKwxq1o9BjowvHEwtFEb4Iu/gY69yMwd3meHusOwjQsfZSkQXa1Siduui7YCyegvnwVVP2FFfstoncTnHVb4Wx4OYyCOvAW6If3QLVJBIesWLYWzmPvpkROmIJYvXo1Jc+6pHGhlJRCuYFVWt9J7plHPuQ/fMRuZbNXoL59gz8LZiG1bzvU4bctiwj56PxxyB1DQKUntv36ENZpdPDgQR0K1c44unTpUkujomn9MgkXuPpvmg8hqANvAsuHQMdH+I6Rej2D2Yq5qZg8P3zqOo00pnDHgT0g7UlTin+ibSbWciK0kC4V6I9DHDw3RkdCNklXSpy1OSc6GqdBezExI75OKk8mc9JIkIMsh5J6AvrFGfmdzrmMOC8AE96hT+YO8UX4DCJX66VGzuvzaz9umPcDnxKdt5WZxMDAAFWnpmj/X/4LnHt+vpfVIlHS1c9+rz1jg6F0tXY0TjN5nmfEn9w7d/qdY43hpsR5pGxr7AxU+VFKnNx1sv7oU19cPjM1NSVXrFhB2/iNmIS0xqZputy8rq6uyvT0tFcul0s7hrzBe/rLa7qK6HNARWWeNPO+KXsKOObXSg1lup5qzUk0Zn0aPzzWOPrifv0qgm5BNcZZO0ok+kVW1y2wN+74+Lg3OTnp8byE1rHjsKGo1+v2HgVh5wgUB3MehR3DBS2f9sJnx+uu6zb0ODo6WkdK88s6kDAxMYFarUa9vb1mtMJKSqkqlYr0fV97KjVoekDToL+FELJYLJqR5TXZZzqz+Dpi9QYD0+ubNm1qnjp1KrXDZt9X7CvMRizA4KUkuru7jULOGRNFnhsZnocLMc3Mg9FGV7cYuWrVqibntxwZGVHsQJ5rRaaBRcYSb3WZR89iJfFd4SpPHSPfZTaqNDw87PKpkPkkvBZwrEJtbHQ0yNXmRHii6CRklsyg6/C/hP8AkF4lLFa7L4cAAAAASUVORK5CYII=",I="data:image/png;base64,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",d=document.querySelector(".modal-about");let a={};const c="storage-data";function M(e){e.preventDefault(),d.classList.remove("is-hidden"),document.getElementById("myModal").style.display="block",document.body.style.overflow="hidden",d.innerHTML="";const o=this.getAttribute("data-book-id");w(o)}function g(){const e=JSON.parse(localStorage.getItem(c))||[],o=a.id;return e.find(i=>i.id===o)}async function w(e){try{const o=await L(e);return S(o),o}catch(o){throw o}}async function L(e){try{const t=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json();return a={book_image:t.book_image,title:t.title,author:t.author,marketAmazon:t.buy_links[0].url,marketAppleBooks:t.buy_links[1].url,list_name:t.list_name,id:t._id,description:t.description},t}catch(o){throw console.error("Error",o),o}}function S(e){const{book_image:o,title:t,author:i,description:n}=e,s=e.buy_links[0].url,l=e.buy_links[1].url,v=` 
    <button type="button" class="about-close">
      <svg class="about-svg">
        <use href="../img/sprit.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-book" id="my-modal-book">
    <div class="modal" id="bookModal">
      <img src="${o}" alt="Book Cover" class="about-img">
      <div class="modal-text">
        <h2 id="modalTitle" class="title-about-book-modal">${t}</h2>
        <p class="author-about-book-modal">${i}</p>
        <p class="text-about-book-modal">${n}</p>
        <div id="platformLinks">
          <ul class="shop-modal-list">
            <li class="shop-modal-item">
              <a href="${s}" target="_blank">
                 <img class="amazon" width="62" height="19" srcset="${p} 1x,${R} 2x"
                  src="${p}"
                  alt="Amazon"/>
              </a>
            </li>
            <li class="shop-modal-item">
              <a href="${l}" target="_blank">
                <img class="apple" width="33" height="32" srcset="${y} 1x,${I} 2x"
                  src="${y}"
                  alt="appleBookPng"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    <div id="aboutBtns" class="all-btns-modal">
    <button type="button" id="ad" class="modal-ad">
      Add book to shopping list
    </button>
    <div class="remove">
      <button type="button" id="removeBtn" class="modal-ad remove">
        Delete from shopping list
      </button>
      <p id="removeP" class="about-paragraf remove">Сongratulations! You have added the book to the shopping list. To delete, press the
        button “Remove from the shopping
        list”.
      </p>
      `;d.innerHTML=v;const r=document.getElementById("ad"),A=document.getElementById("removeBtn"),f=document.getElementById("removeP"),B=document.querySelector(".about-close");g()?(r.style.display="none",A.style.display="block",f.style.display="block"):(r.style.display="block",A.style.display="none"),r.addEventListener("click",U),A.addEventListener("click",F),B.addEventListener("click",E)}function E(){document.getElementById("myModal").style.display="none",d.classList.remove("is-hidden"),document.body.style.overflow="auto"}function U(){const e=JSON.parse(localStorage.getItem(c))||[],o=document.getElementById("removeP"),t=document.getElementById("ad"),i=document.getElementById("removeBtn");e.push(a),localStorage.setItem(c,JSON.stringify(e)),o.style.display="block",t.style.display="none",i.style.display="block",g()}function F(){const e=document.getElementById("removeP"),o=document.getElementById("ad"),t=document.getElementById("removeBtn");e.style.display="none",o.style.display="block",t.style.display="none";const i=a.id;let n=JSON.parse(localStorage.getItem(c))||[];const s=n.findIndex(l=>l.id===i);s!==-1&&(n.splice(s,1),localStorage.setItem(c,JSON.stringify(n))),g()}const C=document.querySelector(":root"),k=document.querySelector("#themeSwitch");k.addEventListener("change",O);function O(){C.classList.toggle("dark-theme",k.checked)}const u=document.querySelector(".header-modal"),P=document.querySelector(".modal-open-btn"),h=document.querySelector("body"),b=document.querySelector(".open-icon");P.addEventListener("click",K);function K(e){if(u.classList.contains("hidden-modal")){u.classList.remove("hidden-modal"),h.classList.add("stop-scrolling"),b.innerHTML='<use href="/DreamTeam/assets/sprit-13701404.svg#icon-x"/>';return}else u.classList.add("hidden-modal"),h.classList.remove("stop-scrolling"),b.innerHTML='<use href="/DreamTeam/assets/sprit-13701404.svg#icon-burger"/>'}const x=location.pathname,J=document.querySelector(".js-home-link"),m=document.querySelector(".js-shopping-link");x==="/DreamTeam/shoping-list.html"?(m.classList.add("current"),m.style.paddingBottom="7px",m.style.paddingTop="7px"):J.classList.add("current");const Z=document.querySelector(".nav-btn");Z.addEventListener("click",q);function q(){const e=document.querySelector(".fonds"),o=e.querySelector("li").offsetHeight,t=document.querySelector(".icon-down"),i=document.querySelector(".icon-up");if(e.scrollTop+e.clientHeight>=e.scrollHeight)for(;e.scrollTop!==0;)e.scrollTop-=o;else e.scrollTop+=2*o;e.scrollTop+e.clientHeight<e.scrollHeight?(t.classList.remove("is-hidden"),i.classList.add("is-hidden")):(t.classList.add("is-hidden"),i.classList.remove("is-hidden"))}export{M as o};
//# sourceMappingURL=support-slider-51258124.js.map