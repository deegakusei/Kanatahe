document.addEventListener("DOMContentLoaded", () => {
  // 現在のURLに "/posts/" が含まれている場合は、1つ上の階層("../")を見に行く
  const isInSubDir = window.location.pathname.includes("/posts/");
  const basePath = isInSubDir ? "../" : "";

  // ヘッダーの読み込み
  const headerElem = document.getElementById("header-include");
  if (headerElem) {
    fetch(basePath + "header.html")
      .then(response => {
        if (!response.ok) throw new Error("Header file not found");
        return response.text();
      })
      .then(data => { headerElem.innerHTML = data; })
      .catch(err => console.error("Header loading error:", err));
  }

  // フッターの読み込み
  const footerElem = document.getElementById("footer-include");
  if (footerElem) {
    fetch(basePath + "footer.html")
      .then(response => {
        if (!response.ok) throw new Error("Footer file not found");
        return responsetext();
      })
      .then(data => { footerElem.innerHTML = data; })
      .catch(err => console.error("Footer loading error:", err));
  }
});