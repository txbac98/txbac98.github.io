const toast = (msg) => {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1400);
};

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copyEmailBtn").addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText("txbac196@gmail.com");
    toast("Copied: txbac196@gmail.com");
  }catch(e){
    toast("Copy failed (browser blocked).");
  }
});
