window.onscroll = function() {
    let scrollTopBtn = document.getElementById("scroll-to-top");
  
    // Se o usuário rolar mais de 100px, exibe a setinha
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  };