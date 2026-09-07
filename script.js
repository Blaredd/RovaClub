document.querySelectorAll("[data-chart]").forEach(chart=>{
  const values=chart.dataset.chart.split(",").map(Number);
  const min=Math.min(...values), range=Math.max(...values)-min || 1;
  const points=values.map((value,index)=>`${3+index/(values.length-1)*134},${35-(value-min)/range*30}`).join(" ");
  const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("viewBox","0 0 140 40");
  svg.setAttribute("role","img");
  svg.setAttribute("aria-label",chart.dataset.label);
  const line=document.createElementNS(svg.namespaceURI,"polyline");
  line.setAttribute("points",points);
  line.setAttribute("fill","none");
  line.setAttribute("stroke","currentColor");
  line.setAttribute("stroke-width","1.8");
  line.setAttribute("stroke-linecap","round");
  line.setAttribute("stroke-linejoin","round");
  svg.append(line);
  chart.append(svg);
});
document.querySelectorAll(".tabs button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
}));
