document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('lastModified');
  if (el) el.textContent = new Date().toLocaleDateString();
});