/*
  ==========================================================
  포스트 데이터 (하드코딩) — 이 파일 하나만 수정하면
  archive.html(목록)과 post.html(상세) 양쪽에 전부 반영됩니다.

  새 포스트 추가법: 아래 배열 맨 끝에 콤마(,)를 찍고
  { ... } 객체를 하나 더 추가하면 됩니다.

  이미지는 이 파일과 같은 위치 기준 상대경로로 넣으세요.
  예) 저장소에 images/004-main.jpg 를 올렸다면
      mainImage: "images/004-main.jpg"
  ==========================================================
*/
const POSTS = [
  {
    id: "001",
    title: "옥상 위에 놓인 세탁기",
    mainImage: "https://picsum.photos/seed/archive001/800/600",
    address: "서울특별시 종로구 자하문로 10길",
    lat: 37.5826, lng: 126.9701,
    body: [
      { type: "text", content: "3층짜리 상가 건물 옥상, 난간도 없는 자리에 드럼세탁기 한 대가 놓여 있었다. 전선은 허공에서 끊겨 있었고, 문은 열린 채로 비를 받고 있었다." },
      { type: "image", src: "https://picsum.photos/seed/archive001b/900/600" },
      { type: "text", content: "누가 왜 저기에 세탁기를 올려두었는지는 알 수 없다. 다만 이 도시는 설명되지 않는 사물을 아무렇지 않게 통과시킨다는 것만은 분명했다." }
    ]
  },
  {
    id: "002",
    title: "반지하 창문의 화분들",
    mainImage: "https://picsum.photos/seed/archive002/800/600",
    address: "서울특별시 마포구 성지길",
    lat: 37.5519, lng: 126.9376,
    body: [
      { type: "text", content: "지상에서 삼십 센티미터쯤 아래, 화분 여섯 개가 나란히 창턱에 줄지어 있었다. 해가 들지 않는 방향인데도 잎은 이상하리만치 진한 초록이었다." },
      { type: "image", src: "https://picsum.photos/seed/archive002b/900/600" },
      { type: "text", content: "지나가던 사람들은 대부분 눈높이보다 낮은 이 풍경을 보지 못하고 지나쳤다. 보려면 몸을 숙여야 하는 것들이 있다." }
    ]
  },
  {
    id: "003",
    title: "공사장 가벽에 붙은 전단지",
    mainImage: "https://picsum.photos/seed/archive003/800/600",
    address: "서울특별시 영등포구 문래동",
    lat: 37.5177, lng: 126.8946,
    body: [
      { type: "text", content: "철거 예정 표지판 바로 옆에 코팅도 안 된 전단지가 붙어 있었다. 잃어버린 고양이를 찾는다는 내용이었고, 연락처 아래에는 손글씨로 '아직 여기 있을지도 모릅니다'라고 적혀 있었다." },
      { type: "image", src: "https://picsum.photos/seed/archive003b/900/600" },
      { type: "text", content: "가벽은 곧 철거될 것이고 전단지도 함께 사라질 것이다. 그 사실이 이 문장을 여기에 옮겨 적어야 할 이유가 됐다." }
    ]
  }
];
