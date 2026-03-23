import{a as u,S as d,i as p}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(t){return u.get("https://pixabay.com/api/",{params:{key:"55038104-4ff7c993e1add1fdeb38abc54",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits).catch(o=>{console.log(o)})}const l=document.querySelector(".gallery");function m(t){l.insertAdjacentHTML("beforeend",t.map(y).join("")),new d(".gallery a",{captionsData:"alt",captionDelay:250})}function y(t){return` <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <ul> 
        <li>
        <p>likes</p>
        <p>${t.likes}</p>
         </li>

         <li>
         <p>views</p>
          <p>${t.views}</p>
         </li>

                  <li>
         <p>comments</p>
          <p>${t.comments}</p>
         </li>

                  <li>
         <p>downloads</p>
          <p>${t.downloads}</p>
         </li>


         </ul>
      </li>`}const c=document.querySelector(".loader");function g(){l.innerHTML=""}function h(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const s=document.querySelector(".form");s.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(s).get("search-text");i.trim()&&(g(),h(),f(i).then(a=>{a.length===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(a),s.reset()}).catch(a=>{}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
