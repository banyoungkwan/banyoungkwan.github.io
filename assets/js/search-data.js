// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Projects by Youngkwan Ban — UNESCO Memory of the World inscription, victim identification, U.S. archival research, and the jeju43.info digital ecosystem.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Academic publications by Youngkwan Ban on memory studies, Jeju 4.3 victim identification, collective memory, and human rights documentation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-appearance",
          title: "appearance",
          description: "Academic presentations and media appearances by Youngkwan Ban on Jeju 4.3, memory studies, and human rights research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/appearance/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV of Youngkwan Ban (PhD, University of Illinois) — memory studies scholar and human rights researcher at the Jeju 4.3 Peace Foundation.",
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
          section: "News",},{id: "projects-jeju-4-3",
          title: 'Jeju 4.3',
          description: "A Foundation of Truth and Memory — overview of Youngkwan Ban&#39;s work on the Jeju 4.3 Incident, including UNESCO inscription, victim identification, and archival research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_jeju43/";
            },},{id: "projects-archival-research",
          title: 'Archival Research',
          description: "Collecting and analyzing 38,000 declassified U.S. documents at NARA to establish evidence of American involvement in the Jeju 4.3 Incident.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/archival_research/";
            },},{id: "projects-identification-of-victims",
          title: 'Identification of Victims',
          description: "Managing the excavation of clandestine graves and DNA-based identification of Jeju 4.3 massacre victims — a memorial practice restoring dignity and identity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/excavation/";
            },},{id: "projects-jeju43-info",
          title: 'jeju43.info',
          description: "An open digital ecosystem for Jeju 4·3 memory — news, archive, wiki, and gateway site connecting the history to a global audience.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jeju43info/";
            },},{id: "projects-unesco-memory-of-the-world",
          title: 'UNESCO Memory of the World',
          description: "How Youngkwan Ban led the inscription of the Jeju 4.3 Archives on the UNESCO Memory of the World Register (2019–2025).",
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
