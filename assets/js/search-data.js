// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-소개",
    title: "소개",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-프로젝트",
          title: "프로젝트",
          description: "반영관의 프로젝트 — 유네스코 세계기록유산 등재, 희생자 신원 파악, 미국 문서보관소 연구, jeju43.info 디지털 생태계.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-논문",
          title: "논문",
          description: "반영관의 학술 논문 — 기억 연구, 제주 4.3 희생자 신원 파악, 집단 기억, 인권 기록.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-발표-및-출연",
          title: "발표 및 출연",
          description: "반영관의 학술 발표 및 미디어 출연 — 제주 4.3, 기억 연구, 인권 연구.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/appearance/";
          },
        },{id: "nav-이력",
          title: "이력",
          description: "반영관 이력서 (박사, 일리노이대학교) — 기억 연구, 미디어 연구 학자이자 제주 4·3 평화재단 인권 연구자.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-221st-unesco-executive-board-meeting-decided-the-inscription-of-revealing-truth-jeju-4-3-archives-as-a-memory-of-the-world-unesco-more-detail-about-this-project",
          title: 'The 221st UNESCO Executive Board meeting decided the inscription of “Revealing Truth: Jeju...',
          description: "",
          section: "News",},{id: "news-appeared-in-local-tv-s-discussion-program-special-report-connecting-the-issues-as-jeju-4-3-goes-global-what-challenges-lie-ahead-aired-april-17-2025-시사기획-이슈잇다-세계화-앞-4-3-앞으로의-과제는-250417-youtube",
          title: 'Appeared in local TV’s discussion program “Special Report “Connecting the Issues-As Jeju 4.3...',
          description: "",
          section: "News",},{id: "news-academic-presentation-mediating-a-silenced-past-the-case-of-the-jeju-4-3-incident-investigation-report-iamcr-singapre-2025-ntu-singapore-july-2025-was-made",
          title: 'Academic Presentation “Mediating a Silenced Past: The Case of the Jeju 4·3 Incident...',
          description: "",
          section: "News",},{id: "news-begin-participatory-english-translation-project-of-jeju-4-3-investigation-report-제주4-3사건-진상조사보고서-영문-번역-프로젝트-jeju-4-3-incident-truth-investigation-report-english-translation-project-250417-github-project-page",
          title: 'Begin participatory English Translation project of “Jeju 4.3 Investigation Report” [제주4·3사건 진상조사보고서 영문...',
          description: "",
          section: "News",},{id: "news-launched-news-jeju43-info-a-dedicated-news-platform-covering-ongoing-developments-related-to-the-jeju-4-3-incident-including-truth-seeking-efforts-policy-updates-and-memorial-activities",
          title: 'Launched news.jeju43.info, a dedicated news platform covering ongoing developments related to the Jeju...',
          description: "",
          section: "News",},{id: "news-launched-archive-jeju43-info-an-open-digital-archive-providing-access-to-historical-documents-testimonies-and-records-related-to-the-jeju-4-3-incident",
          title: 'Launched archive.jeju43.info, an open digital archive providing access to historical documents, testimonies, and...',
          description: "",
          section: "News",},{id: "projects-제주-4-3",
          title: '제주 4·3',
          description: "진실과 기억의 기초 — 제주 4·3 사건에 관한 반영관의 연구 활동 개요로, 유네스코 등재, 유해 신원 확인, 아카이브 연구를 포함합니다.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_jeju43/";
            },},{id: "projects-아카이브-연구",
          title: '아카이브 연구',
          description: "제주 4·3 사건에 대한 미국의 관여를 입증하기 위해 NARA에서 기밀해제된 미국 문서 38,000건을 수집 및 분석.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/archival_research/";
            },},{id: "projects-유해-발굴과-신원-확인",
          title: '유해 발굴과 신원 확인',
          description: "제주 4·3 학살 피해자의 비밀 매장지 발굴 및 DNA 기반 신원 확인 관리 — 존엄성과 신원을 복원하는 추도 실천.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/excavation/";
            },},{id: "projects-jeju43-info",
          title: 'jeju43.info',
          description: "제주 4·3 기억을 위한 개방형 디지털 생태계 — 뉴스, 아카이브, 위키, 그리고 역사를 지구적 청중과 연결하는 게이트웨이 사이트.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jeju43info/";
            },},{id: "projects-유네스코-세계기록유산",
          title: '유네스코 세계기록유산',
          description: "반영관이 주도한 제주 4·3 아카이브의 유네스코 세계기록유산 목록 등재 과정(2019–2025).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/unesco_memory_jeju43/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
