document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("post-list-container");
  if (!container || typeof postsData === "undefined") return;

  // 日付順（新しい順）にソート
  const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // HTMLの組み立て
  const html = sortedPosts.map(post => {
    // 画面表示用に「2026-07-20」を「2026.07.20」に変換
    const displayDate = post.date.replace(/-/g, ".");
    
    return `
      <a href="${post.url}" class="post-item-card">
        <div class="post-item-meta">
          <span class="post-date">${displayDate}</span>
        </div>
        <h2 class="post-item-title">${post.title}</h2>
        <p class="post-item-summary">${post.summary}</p>
      </a>
    `;
  }).join("");

  container.innerHTML = html;
});