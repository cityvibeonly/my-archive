/* ==========================================================
   ARCHIVE — 뷰 렌더링 & 전환 로직
   posts.js 의 POSTS 배열을 읽어 grid / list / map 세 가지 형태로 그림
   ========================================================== */

function qs(sel, root) { return (root || document).querySelector(sel); }
function qsa(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

// ---------- 아카이브 목록 페이지 ----------
function initArchive() {
  const gridEl = qs("#view-grid");
  const listEl = qs("#view-list");
  const mapButtons = qsa(".view-switch button");

  // GRID
  gridEl.innerHTML = POSTS.map(function (p) {
    return (
      '<a class="grid-item" href="post.html?id=' + p.id + '">' +
      '<img src="' + p.mainImage + '" alt="' + p.title + '" loading="lazy">' +
      '<span class="grid-label">' + p.id + '</span>' +
      "</a>"
    );
  }).join("");

  // LIST
  listEl.innerHTML = POSTS.map(function (p) {
    return (
      '<a class="list-item" href="post.html?id=' + p.id + '">' +
      '<img class="list-thumb" src="' + p.mainImage + '" alt="' + p.title + '" loading="lazy">' +
      '<div class="list-info">' +
      '<p class="list-title">' + p.title + "</p>" +
      '<p class="list-addr">' + p.address + "</p>" +
      "</div></a>"
    );
  }).join("");

  // VIEW SWITCH
  mapButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.getAttribute("data-view");
      mapButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      qsa(".view").forEach(function (v) { v.classList.remove("active"); });
      qs("#view-" + target).classList.add("active");

      if (target === "map" && !window._mapInitialized) {
        initArchiveMap();
      }
    });
  });
}

let archiveMapInstance = null;
function initArchiveMap() {
  archiveMapInstance = L.map("map-canvas", { zoomControl: true }).setView(
    [POSTS[0].lat, POSTS[0].lng],
    12
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
  }).addTo(archiveMapInstance);

  const bounds = [];
  POSTS.forEach(function (p) {
    const marker = L.marker([p.lat, p.lng]).addTo(archiveMapInstance);
    marker.bindPopup(
      '<div class="popup-title">' + p.title + "</div>" +
      '<a class="popup-link" href="post.html?id=' + p.id + '">포스트 보기 →</a>'
    );
    bounds.push([p.lat, p.lng]);
  });

  if (bounds.length > 1) {
    archiveMapInstance.fitBounds(bounds, { padding: [40, 40] });
  }
  window._mapInitialized = true;

  // map 탭이 보일 때 사이즈 재계산 (display:none 상태에서 초기화되면 타일이 깨짐)
  setTimeout(function () { archiveMapInstance.invalidateSize(); }, 150);
}

// ---------- 포스트 상세 페이지 ----------
function initPost() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = POSTS.find(function (p) { return p.id === id; }) || POSTS[0];

  qs("#post-hero").src = post.mainImage;
  qs("#post-hero").alt = post.title;
  qs("#post-title").textContent = post.title;
  qs("#post-address").textContent = post.address;
  qs("#post-coords").textContent = post.lat.toFixed(4) + ", " + post.lng.toFixed(4);

  const bodyEl = qs("#post-body");
  bodyEl.innerHTML = post.body.map(function (block) {
    if (block.type === "text") {
      return "<p>" + block.content + "</p>";
    }
    if (block.type === "image") {
      return '<img src="' + block.src + '" alt="' + post.title + '" loading="lazy">';
    }
    return "";
  }).join("");

  const map = L.map("post-map", { zoomControl: false, dragging: true }).setView(
    [post.lat, post.lng],
    15
  );
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
  }).addTo(map);
  L.marker([post.lat, post.lng]).addTo(map);
  setTimeout(function () { map.invalidateSize(); }, 150);
}
