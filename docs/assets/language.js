// Keep the reader in the same section when changing languages.
function syncLanguageLinks() {
  for (const link of document.querySelectorAll('.langs a')) {
    link.hash = window.location.hash;
  }
}

syncLanguageLinks();
window.addEventListener('hashchange', syncLanguageLinks);
