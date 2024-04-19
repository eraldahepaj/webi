document.getElementById("seePhotos").addEventListener("click", function(event) {
    event.preventDefault(); // Ndalo zbatimin e parazgjedhur të href
    document.getElementById("hiddenPhotos").style.display = "block"; // Shfaq div-in e fotove të fshehura
    document.getElementById("mainPhoto").style.display = "none"; // Fsheh div-in e fotografisë kryesore
  });
  
  document.getElementById("backToMain").addEventListener("click", function(event) {
    event.preventDefault(); // Ndalo zbatimin e parazgjedhur të href
    document.getElementById("hiddenPhotos").style.display = "none"; // Fsheh div-in e fotove të fshehura
    document.getElementById("mainPhoto").style.display = "block"; // Shfaq div-in e fotografisë kryesore
  });
  
  // Shtimi i një funksioni për tu kthyer në faqen kryesore
  function returnToMainPage() {
    window.location.href = "pagee2.html"; // Ndrysho "index.html" me emrin e faqes kryesore nëse është ndryshe
  }
  
  // Lidh butonin "Back to Main" me funksionin për tu kthyer në faqen kryesore
  document.getElementById("backToMain").addEventListener("click", returnToMainPage);