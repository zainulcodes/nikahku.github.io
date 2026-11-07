(() => {
  "use strict";

  const opening = document.getElementById("opening");
  const openButton = document.getElementById("openInvitation");
  const invitation = document.getElementById("invitation");
  const hint = document.getElementById("tapHint");
  const backToTop = document.getElementById("backToTop");

  if (!opening || !openButton || !invitation) return;

  let hasOpened = false;

  openButton.addEventListener("click", () => {
    if (hasOpened) return;
    hasOpened = true;

    openButton.disabled = true;
    openButton.innerHTML = '<span>Membuka Undangan</span><i class="bi bi-stars ms-2" aria-hidden="true"></i>';
    hint.textContent = "Dengan hangat, undangan kami persembahkan untuk Anda.";

    opening.classList.add("is-opening");

    // Allow the envelope animation to play before revealing the invitation page.
    window.setTimeout(() => {
      opening.classList.add("is-open");
      invitation.setAttribute("aria-hidden", "false");
      invitation.classList.add("is-visible");
      window.setTimeout(() => {
        opening.hidden = true;
        invitation.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 850);
    }, 1250);
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
