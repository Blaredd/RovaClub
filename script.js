const toast=document.getElementById("toast");
document.querySelectorAll("[data-demo]").forEach(el=>el.addEventListener("click",()=>{
  toast.classList.add("show");
  clearTimeout(window.__rt);
  window.__rt=setTimeout(()=>toast.classList.remove("show"),2200);
}));
document.querySelectorAll(".tabs button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
}));