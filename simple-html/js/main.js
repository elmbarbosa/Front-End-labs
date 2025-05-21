document.querySelectorAll("a").forEach((a) => {
  const link = a.href;

  if (link.startsWith("http")) {
    a.addEventListener("click", (e) => {
      if (!confirm("Você será redirecionado para uma página externa. Deseja continuar?")) {
        e.preventDefault();
      }
    });
  }
});
