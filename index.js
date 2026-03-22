import{a as c}from"./assets/vendor-BjL0PQaM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(r){return c.get("https://pixabay.com/api/",{params:{key:"55038104-4ff7c993e1add1fdeb38abc54",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits).catch(o=>{console.log(o)})}const l=document.querySelector(".gallery");function d(r){l.insertAdjacentHTML("beforeend",r.map(f).join(""))}function f(r){return` <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>

        <ul> 
        <li>
        <p>likes</p>
        <p>${r.likes}</p>
         </li>

         <li>
         <p>views</p>
          <p>${r.views}</p>
         </li>

                  <li>
         <p>comments</p>
          <p>${r.comments}</p>
         </li>

                  <li>
         <p>downloads</p>
          <p>${r.downloads}</p>
         </li>


         </ul>
      </li>`}function p(){l.innerHTML=""}function m(){loader.classList.add("hidden")}const s=document.querySelector(".form");s.addEventListener("submit",r=>{r.preventDefault();const i=new FormData(s).get("search-text");i.trim()&&(p(),u(i).then(n=>{d(n),s.reset()}).catch(n=>{console.error("Error fetching images:",n)}))});m();
//# sourceMappingURL=index.js.map
