(function () {
  var banner = document.getElementById("cookie-banner");
  if (!banner) return;

  function show() {
    banner.classList.add("is-visible");
  }

  function hide() {
    banner.classList.remove("is-visible");
  }

  banner.querySelectorAll("[data-cookie-action]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      try {
        localStorage.setItem("cookie-consent", btn.dataset.cookieAction);
      } catch (e) {}
      hide();
    });
  });

  try {
    if (!localStorage.getItem("cookie-consent")) {
      requestAnimationFrame(show);
    }
  } catch (e) {
    requestAnimationFrame(show);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var doc = document.documentElement;
      var atEnd = window.innerHeight + window.scrollY >= doc.scrollHeight - 120;
      if (atEnd) show();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
})();