document.addEventListener("DOMContentLoaded", () => {
  // ヘッダーの読み込み
  const headerElem = document.getElementById("header-include");
  if (headerElem) {
    fetch("header.html")
      .then(response => response.text())
      .then(data => { headerElem.innerHTML = data; })
      .catch(err => console.error("Header loading error:", err));
  }

  // フッターの読み込み
  const footerElem = document.getElementById("footer-include");
  if (footerElem) {
    fetch("footer.html")
      .then(response => response.text())
      .then(data => { footerElem.innerHTML = data; })
      .catch(err => console.error("Footer loading error:", err));
  }
});