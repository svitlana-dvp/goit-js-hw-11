/* empty css                      */import{a as d,S as f,i as a}from"./assets/vendor-BAQQTdrx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="YOUR_API_KEY";async function y(s){return(await d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let h=new f(".gallery a");function g(s){const o=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function w(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search term!"});return}L(),w();try{const r=await y(o);if(c(),r.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r.hits)}catch(r){c(),a.error({title:"Error",message:"Something went wrong!"}),console.error(r)}});
//# sourceMappingURL=index.js.map
