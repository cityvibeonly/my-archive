/* ============================================================
   ARCHIVE — design tokens
   bg-primary   #121212  잉크 블랙
   bg-secondary #1C1B19  카드 배경 (따뜻한 다크브라운 톤)
   text-primary #EDE7DA  본 색(뼈색/바랜 종이)
   text-muted   #8C887E  보조 텍스트
   accent       #C9A227  낡은 놋쇠/경고테이프 옐로우
   accent-deep  #7A1F1F  선택/강조용 딥레드
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root {
  --bg-primary: #121212;
  --bg-secondary: #1c1b19;
  --bg-card: #201f1c;
  --text-primary: #ede7da;
  --text-muted: #8c887e;
  --accent: #c9a227;
  --accent-deep: #7a1f1f;
  --border: #3a3733;
  --font-serif: 'Noto Serif KR', serif;
  --font-sans: 'Noto Sans KR', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  -webkit-tap-highlight-color: transparent;
}

body {
  min-height: 100vh;
  min-height: 100dvh;
}

a { color: inherit; text-decoration: none; }

/* ---------------- INTRO PAGE ---------------- */

.intro-wrap {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100dvh;
  padding: 48px 28px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.intro-mark {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.18em;
  color: var(--accent);
  margin-bottom: 28px;
}

.intro-title {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 28px;
  line-height: 1.4;
  margin: 0 0 36px;
  position: relative;
  display: inline-block;
}

/* 시그니처 요소: 로드 시 짧게 화면이 튀는 듯한 글리치 플리커
   -> 소개글 1번 문단("화면이 튀어 잠깐 오류가 나듯")을 그대로 형상화 */
.intro-title.glitch {
  animation: glitchFlicker 900ms steps(2, end) 1;
}
.intro-title.glitch::before,
.intro-title.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 0;
  width: 100%;
  opacity: 0;
}
.intro-title.glitch::before {
  color: #7fd6c9;
  animation: glitchLayer1 900ms steps(2, end) 1;
}
.intro-title.glitch::after {
  color: var(--accent-deep);
  animation: glitchLayer2 900ms steps(2, end) 1;
}
@keyframes glitchFlicker {
  0% { opacity: 0; transform: translate(0,0); }
  10% { opacity: 1; transform: translate(-2px,1px); }
  20% { transform: translate(2px,-1px); }
  30% { transform: translate(-1px,0); }
  100% { opacity: 1; transform: translate(0,0); }
}
@keyframes glitchLayer1 {
  0% { opacity: 0; }
  15% { opacity: .7; transform: translate(3px,-1px); }
  30% { opacity: 0; }
  100% { opacity: 0; }
}
@keyframes glitchLayer2 {
  0% { opacity: 0; }
  22% { opacity: .6; transform: translate(-3px,1px); }
  38% { opacity: 0; }
  100% { opacity: 0; }
}

.intro-body p {
  font-family: var(--font-serif);
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-primary);
  margin: 0 0 22px;
}
.intro-body .num {
  font-family: var(--font-mono);
  color: var(--accent);
  margin-right: 6px;
}

.intro-cta {
  margin-top: 40px;
  width: 100%;
  padding: 18px 20px;
  background: var(--accent);
  color: #17140c;
  border: none;
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.intro-cta:active { transform: translateY(1px); }

/* ---------------- ARCHIVE PAGE (list/grid/map) ---------------- */

.archive-header {
  position: sticky;
  top: 0;
  z-index: 5;
  background: linear-gradient(var(--bg-primary) 70%, transparent);
  padding: 18px 20px 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.archive-header span.count {
  color: var(--accent);
}

.view { display: none; padding-bottom: 120px; }
.view.active { display: block; }

/* grid view: 3열 정방형 썸네일 */
#view-grid {
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  padding: 0 2px;
}
#view-grid.active { display: grid; }
.grid-item {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--bg-secondary);
}
.grid-item img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9);
}
.grid-item .grid-label {
  position: absolute;
  left: 6px; bottom: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,.8);
}

/* list view */
#view-list.active { display: block; }
.list-item {
  display: flex;
  gap: 14px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}
.list-thumb {
  width: 64px; height: 64px;
  flex-shrink: 0;
  object-fit: cover;
  background: var(--bg-secondary);
}
.list-info { min-width: 0; }
.list-title {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-addr {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* map view */
#view-map.active { display: block; }
#map-canvas {
  width: 100%;
  height: calc(100dvh - 60px);
}
.leaflet-popup-content-wrapper {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: 2px;
}
.leaflet-popup-tip { background: var(--bg-secondary); }
.popup-title { font-family: var(--font-serif); font-weight: 700; font-size: 14px; margin-bottom: 4px; }
.popup-link { font-family: var(--font-mono); font-size: 11px; color: var(--accent); }

/* ---------------- 하단 우측 뷰 전환 버튼(카드처럼 부채꼴로 겹침) ---------------- */

.view-switch {
  position: fixed;
  right: 18px;
  bottom: 22px;
  z-index: 20;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
}

.view-switch button {
  width: 52px;
  height: 52px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-muted);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(0,0,0,.45);
  margin-left: -14px;
  transition: transform .15s ease;
}
.view-switch button:first-child { margin-left: 0; }
.view-switch button svg { width: 20px; height: 20px; }

.view-switch button:nth-child(1) { transform: rotate(3deg) translateY(2px); }
.view-switch button:nth-child(2) { transform: rotate(-2deg) translateY(4px); }
.view-switch button:nth-child(3) { transform: rotate(2deg) translateY(6px); }

.view-switch button.active {
  background: var(--accent);
  color: #17140c;
  border-color: var(--accent);
  transform: translateY(3px) scale(0.97) !important;
  box-shadow: inset 0 2px 4px rgba(0,0,0,.35);
  z-index: 5;
}

/* ---------------- POST DETAIL PAGE ---------------- */

.post-wrap { max-width: 560px; margin: 0 auto; padding-bottom: 60px; }

.post-back {
  position: sticky;
  top: 0;
  z-index: 5;
  padding: 14px 20px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  background: linear-gradient(var(--bg-primary) 70%, transparent);
}

.post-hero { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }

.post-meta { padding: 20px 20px 0; }
.post-title {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px;
  line-height: 1.4;
}
.post-stamp {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  border-left: 2px solid var(--accent);
  padding-left: 10px;
  line-height: 1.8;
  margin-bottom: 22px;
}
.post-stamp b { color: var(--text-primary); font-weight: 500; }

.post-body { padding: 4px 20px; }
.post-body p {
  font-family: var(--font-serif);
  font-size: 16px;
  line-height: 1.95;
  color: var(--text-primary);
  margin: 0 0 22px;
}
.post-body img {
  width: 100%;
  display: block;
  margin: 6px 0 26px;
}

.post-map-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .1em;
  color: var(--text-muted);
  padding: 0 20px 8px;
}
#post-map { width: 100%; height: 260px; margin: 0 0 40px; filter: grayscale(0.15); }
