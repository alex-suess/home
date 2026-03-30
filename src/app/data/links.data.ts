import { Category } from '../models/link.model';

export const LINKS_DATA: Category[] = [
  // Organisation & Communication
  {
    category: 'Organisation & Communication',
    items: [
      { title: 'Deskbird', url: 'https://app.deskbird.com/', description: 'Deskbird - Desk Booking System', icon: './img/favicon-deskbird.ico' },
      { title: 'Personio', url: 'https://dgtls.app.personio.com/', description: 'Personio - HR System' },
      { title: 'Timetree Kalender', url: 'https://timetreeapp.com', description: 'Timetree Kalender' },
    ],
    subcategories: [
      {
        name: 'Jira',
        items: [
          { title: 'Meine Tickets', url: 'https://dgtls.atlassian.net/jira/for-you', description: 'Mir zugewiesene Jira tickets', icon: './img/favicon-valantic.ico' },
          { title: 'Sprint Review', url: 'https://dgtls.atlassian.net/jira/software/c/projects/DEFV21/boards/758?quickFilter=2039&quickFilter=2038&quickFilter=2035&quickFilter=2037', description: 'Tempo Sprint Review Board', icon: './img/favicon-valantic.ico' },
          { title: 'Valantic Learning Hub', url: 'https://hcm55.sapsf.eu/saml2/Login?company=valanticgm', description: 'Valantic Learning Hub', icon: './img/favicon-valantic.ico' },
          { title: 'HR Board', url: 'https://dgtls.atlassian.net/jira/software/c/projects/DGTLSHRDEV/issues?jql=project%20%3D%20%22DGTLSHRDEV%22%20ORDER%20BY%20created%20DESC', description: 'HR Board - DGTLSHRDEV', icon: './img/favicon-valantic.ico' },
        ]
      },
      {
        name: 'Confluence',
        items: [
          { title: 'Confluence Home', url: 'https://dgtls.atlassian.net/wiki/home', description: 'Confluence Home', icon: './img/favicon-valantic.ico' },
          { title: 'Mein Space', url: 'https://dgtls.atlassian.net/wiki/spaces/~712020577778bf0fce4e0aab5d980d98be4e60/overview', description: 'Mein privater Confluence Space', icon: './img/favicon-valantic.ico' },
          { title: 'CL Development', url: 'https://dgtls.atlassian.net/wiki/spaces/CLD/overview', description: 'Chapter Lead Development Confluence Space', icon: './img/favicon-valantic.ico' },
          { title: 'HR for Leads', url: 'https://dgtls.atlassian.net/wiki/spaces/HFL/overview?homepageId=1748992108', description: 'HR for Leads Confluence Space', icon: './img/favicon-valantic.ico' },
        ]
      },
      {
        name: 'Tempo',
        items: [
          { title: 'DB Timesheet', url: 'https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/teams/team/62/timesheet?columns=TOTAL_TIME_COLUMN&dateDisplayType=days&excludeInternalIssues=false&from=2024-12-01&groupBy=worker&includeRejectedRecords=false&includeSubtasks=false&periodType=CURRENT_PERIOD&showUsersWithZeroHours=true&subPeriodType=MONTH&teamId=62&to=2024-12-31&viewType=TIMESHEET', description: 'DB Timesheet aktueller Monat', icon: './img/favicon-valantic.ico' },
          { title: 'Daily Board', url: 'https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/planner?periodType=CURRENT_WEEK&viewType=weeks&roleId=5&roleId=21&teamId=62', description: 'Daily Board Databees aktuelle Woche', icon: './img/favicon-valantic.ico' },
          { title: 'Timesheet', url: 'https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/my-work/week?type=LIST', description: 'Mein Timesheet der aktuellen Woche', icon: './img/favicon-valantic.ico' },
          { title: 'Planning Board', url: 'https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/planner?periodType=CURRENT_WEEK&viewType=weeks&roleId=5&roleId=21&teamId=62', description: 'Planning Board Databees aktueller Sprint', icon: './img/favicon-valantic.ico' },
        ]
      }
    ]
  },
  // Development
  {
    category: 'Development',
    items: [
      { title: 'Bitbucket creatingweb', url: 'https://bitbucket.org/creatingweb', description: 'creatingweb - Bitbucket repos' },
      { title: 'Bitbucket creating_web', url: 'https://bitbucket.org/creating_web', description: 'creating_web - Bitbucket repos' },
      { title: 'Gitlab', url: 'https://gitlab.com', description: 'Gitlab repos' },
      { title: 'GitHub', url: 'https://github.com', description: 'GitHub repos' },
      { title: 'elest.io', url: 'https://dash.elest.io/', description: 'elest.io' },
    ]
  },
  // Tools
  {
    category: 'Tools',
    items: [
      { title: 'Google Maps', url: 'https://maps.google.com', description: 'Google Maps' },
      { title: 'Mapy.cz', url: 'https://mapy.cz', description: 'Mapy.cz - Czech map' },
    ],
    subcategories: [
      {
        name: 'AI',
        items: [
          { title: 'ChatGPT', url: 'https://chat.openai.com', description: 'AI assistant' },
          { title: 'Vally', url: 'https://vally.valantic.ai/', description: 'Vally - AI assistant', icon: './img/favicon-vally.png' },
        ]
      },
      {
        name: 'Design & Diagrams',
        items: [
          { title: 'Figma', url: 'https://figma.com', description: 'Design tool' },
          { title: 'Miro', url: 'https://miro.com/app/dashboard/', description: 'Miro - Whiteboard' },
          { title: 'draw.io', url: 'https://app.diagrams.net/', description: 'draw.io - Draw diagrams' },
          { title: 'Dribbble', url: 'https://dribbble.com', description: 'Dribbble - Design Inspiration' },
        ]
      },
      {
        name: 'Dev Tools',
        items: [
          { title: 'JSON Formatter', url: 'https://jsonformatter.org', description: 'Format JSON' },
          { title: 'Regex101', url: 'https://regex101.com', description: 'Regex Tester' },
          { title: 'Regex Generator', url: 'https://regexr.com', description: 'Regex Generator' },
          { title: 'Browserstack', url: 'https://www.browserstack.com', description: 'Browserstack - Test your website in different browsers' },
          { title: 'Can I Use', url: 'https://caniuse.com', description: 'Can I Use - Browser compatibility tables' },
        ]
      },
      {
        name: 'Playgrounds',
        items: [
          { title: 'CodePen', url: 'https://codepen.io', description: 'CodePen - Frontend Playground' },
          { title: 'PHP Sandbox', url: 'https://phpsandbox.io', description: 'PHP Sandbox - PHP playground' },
          { title: 'JSFiddle', url: 'https://jsfiddle.net', description: 'JSFiddle - JavaScript playground' },
        ]
      },
      {
        name: 'Accessibility',
        items: [
          { title: 'Contrast Checker', url: 'https://webaim.org/resources/contrastchecker', description: 'WebAIM Contrast Checker - WCAG contrast' },
          { title: 'A11y Project', url: 'https://a11yproject.com', description: 'A11y Project - Accessibility resources' },
          { title: 'Who Can Use', url: 'https://whocanuse.com', description: 'Who Can Use - Color contrast checker' },
          { title: 'Color Oracle', url: 'https://colororacle.org', description: 'Color Oracle - Color blindness simulator' },
        ]
      },
      {
        name: 'Learning & Documentation',
        items: [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'MDN Web Docs - Web documentation' },
          { title: 'CSS-Tricks', url: 'https://css-tricks.com', description: 'CSS-Tricks - CSS tips and tutorials' },
          { title: 'SymfonyCasts', url: 'https://symfonycasts.com', description: 'SymfonyCasts - PHP & Symfony Tutorials' },
          { title: 'Pimcore Docs', url: 'https://docs.pimcore.com/platform/Pimcore/', description: 'Pimcore - Platform Documentation' },
          { title: 'Laracasts', url: 'https://laracasts.com', description: 'Laracasts - Laravel & PHP tutorials' },
          { title: 'FreeCodeCamp', url: 'https://freecodecamp.org', description: 'FreeCodeCamp - Learn to code' },
          { title: 'W3Schools', url: 'https://w3schools.com', description: 'W3Schools - Web development tutorials' },
          { title: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Stack Overflow - Developer Q&A' },
        ]
      },
      {
        name: 'Icons & Assets',
        items: [
          { title: 'Heroicons', url: 'https://heroicons.dev/', description: 'Heroicons - Icon Library' },
          { title: 'Font Awesome', url: 'https://fontawesome.com/icons', description: 'Font Awesome - Icon Library' },
          { title: 'Lucide Icons', url: 'https://lucide.dev', description: 'Lucide Icons - Icon library' },
          { title: 'Tabler Icons', url: 'https://tabler.io/icons', description: 'Tabler Icons - Icon library' },
          { title: 'Unsplash', url: 'https://unsplash.com/', description: 'Unsplash - Free images' },
          { title: 'Pexels', url: 'https://pexels.com', description: 'Pexels - Free stock photos & videos' },
          { title: 'Icons8', url: 'https://icons8.com', description: 'Icons8 - Icons, photos & illustrations' },
          { title: 'unDraw', url: 'https://undraw.co', description: 'unDraw - Open-source illustrations' },
        ]
      }
    ]
  },
  // Funke Medien Gruppe
  {
    category: 'Funke Medien Gruppe',
    items: [
      { title: 'Confluence intern', url: 'https://dgtls.atlassian.net/wiki/spaces/FMG/overview', description: 'Confluence intern' },
      { title: 'Confluence extern', url: 'https://dgtls-ext-funke.atlassian.net/wiki/spaces/FMG/overview', description: 'Confluence extern' },
      { title: 'API Dokumentation', url: 'https://10.101.8.117/api/documentation', description: 'Funke Medien Gruppe API Dokumentation' },
    ],
    subcategories: [
      {
        name: 'Production',
        items: [
          { title: 'Hoerzu Frontend', url: 'https://hoerzu.de', description: 'Hoerzu Prod Frontend' },
          { title: 'Hoerzu Frontend (No CDN)', url: 'https://redaktion.hoerzu.de', description: 'Hoerzu Prod Frontend (No CDN)', icon: './img/favicon-hoerzu.png' },
          { title: 'Hoerzu Backend', url: 'https://redaktion.hoerzu.de/admin/login', description: 'Hoerzu Prod Admin Backend', icon: './img/favicon-pimcore.png' },
          { title: 'TVD Frontend', url: 'https://www.tvdigital.de/', description: 'TVD Prod Frontend' },
          { title: 'TVD Frontend (No CDN)', url: 'https://redaktion.tvdigital.de/', description: 'TVD Prod Frontend (No CDN)', icon: './img/favicon-tvdigital.png' },
        ]
      },
      {
        name: 'Staging',
        items: [
          { title: 'Hoerzu Frontend', url: 'https://hzdevpimcore11.dcmdev.de/', description: 'Hoerzu Staging Frontend', icon: './img/favicon-hoerzu.png' },
          { title: 'Hoerzu Backend', url: 'https://redaktion.hoerzu.de/admin/login', description: 'Hoerzu Staging Admin Backend', icon: './img/favicon-pimcore.png' },
          { title: 'TVD Frontend', url: 'https://devredaktion11.tvdigital.de/', description: 'TVD Staging Frontend', icon: './img/favicon-tvdigital.png' },
        ]
      },
      {
        name: 'Development',
        items: [
          { title: 'Hoerzu Frontend', url: 'https://hoerzu-update.dgtls', description: 'Hoerzu Development Frontend', icon: './img/favicon-hoerzu.png' },
          { title: 'Hoerzu Backend', url: 'https://hoerzu-update.dgtls/admin/login', description: 'Hoerzu Development Admin Backend', icon: './img/favicon-pimcore.png' },
          { title: 'TVD Frontend', url: 'https://tvdigital.dgtls', description: 'TVD Development Frontend', icon: './img/favicon-tvdigital.png' },
        ]
      }
    ]
  },
  // Die Bayrische
  {
    category: 'Die Bayrische',
    items: [
      { title: 'Confluence intern', url: 'https://dgtls.atlassian.net/wiki/spaces/DBAY/overview', description: 'Confluence intern' },
      { title: 'API Dokumentation', url: 'https://10.101.8.117/api/documentation', description: 'Die Bayrische API Dokumentation' },
    ],
    subcategories: [
      {
        name: 'Production',
        items: [
          { title: 'Kestra', url: 'https://kestra-prod-u602.vm.elestio.app/ui/dashboard', description: 'Kestra Production Dashboard' },
        ]
      },
      {
        name: 'Staging',
        items: [
          { title: 'Stage Dashboard', url: 'https://baytrack.eu.auth0.com/u/login?state=hKFo2SBtY1JEal9nN1pzVTVzSzMtVkVjXzVQX1AwNEFTQ2hRVqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIExhR1pLVzBjcmZ3Nmt0VTF5RV9VNDZ6bVVuSVpzeHozo2NpZNkgdGhyd2c2UFNwWmRYU0Y1Sm9sc1ZoUk0yNDV2VkxBTk8/', description: 'Stage Dashboard' },
        ]
      },
    ]
  },
  // Schönklinik
  {
    category: 'Schönklinik',
    items: [ 
      { title: 'Schönklinik Gitlab', url: 'https://gitlab.sk-ad.de', description: 'Schönklinik Gitlab' },
    ],
  },
  // WTS
  {
    category: 'WTS',
    items: [
      { title: 'Confluence intern', url: 'https://dgtls.atlassian.net/wiki/spaces/wtsfas/overview', description: 'Confluence intern' },
    ],
    subcategories: [
      {
        name: 'Production',
        items: [
          { title: 'WTS Production Frontend', url: 'https://wts.com', description: 'WTS Production Frontend' },
          { title: 'WTS Production Backend', url: 'https://wts.com/admin', description: 'WTS Production Backend' },
        ]
      },
      {
        name: 'Stage',
        items: [
          { title: 'WTS Stage Frontend', url: 'https://stage.wts.com', description: 'WTS Stage Frontend' },
          { title: 'WTS Stage Backend', url: 'https://stage.wts.com/admin', description: 'WTS Stage Backend' },
        ]
      },
      {
        name: 'Test',
        items: [
          { title: 'WTS Test Frontend', url: 'https://test.wts.com', description: 'WTS Test Frontend' },
          { title: 'WTS Test Backend', url: 'https://test.wts.com/admin', description: 'WTS Test Backend' },
        ]
      },
      {
        name: 'Development',
        items: []
      }
    ]
  },
  // Kontron
  {
    category: 'Kontron',
    items: [],
    subcategories: [
      {
        name: 'Production',
        items: [
          { title: 'Production Pimcore Backend', url: 'https://kontron.com/admin', description: 'Kontron Production Pimcore Backend' },
          { title: 'Production Pimcore Frontend', url: 'https://kontron.com', description: 'Kontron Production Pimcore Frontend' },
        ]
      },
      {
        name: 'Stage (old)',
        items: [
          { title: 'Stage Pimcore Backend', url: 'https://stage2.kontron.com/admin', description: 'Old Kontron Stage Pimcore Backend' },
          { title: 'Stage Pimcore Frontend', url: 'https://stage2.kontron.com', description: 'Old Kontron Stage Pimcore Frontend' },
        ]
      },
      {
        name: 'Stage (new)',
        items: [
          { title: 'Stage Pimcore Backend', url: 'https://stage3.kontron.com/admin', description: 'New Kontron Stage Pimcore Backend' },
        ]
      }
    ]
  },
  // Allianz Social Media Campus
  {
    category: 'Allianz Social Media Campus',
    items: [
      { title: 'Ticket Board', url: 'https://dgtls.atlassian.net/jira/software/c/projects/AZSOMECAMP/boards/4453', description: 'Ticket Board intern AZSOMECAMP' },
      { title: 'MVP Confluence', url: '', description: '' }
    ],
    subcategories: [
      {
        name: 'Production',
        items: []
      },
      {
        name: 'Stage',
        items: []
      },
      {
        name: 'Test',
        items: [
           { title: 'Test Frontend', url: 'https://inno-dev.allianz.de/somecamp/#/', description: 'Test Allianz Social Media Campus Frontend' },
        ]
      },
    ]
  },
  // Caritas
  {
    category: 'Caritas',
    items: [],
    subcategories: [
      {
        name: 'Production',
        items: []
      },
    ]
  },
  // Fun
  {
    category: 'Fun',
    items: [
      { title: 'Ligainsider', url: 'https://ligainsider.de', description: 'Ligainsider' },
      { title: 'DnD beyond', url: 'https://dndbeyond.com', description: 'DnD Beyond' },
      { title: 'Roll20', url: 'https://roll20.net', description: 'Roll20' },
    ],
    subcategories: [
      {
        name: 'Streaming',
        items: [
          { title: 'Netflix', url: 'https://netflix.com', description: 'Netflix' },
          { title: 'Amazon Prime', url: 'https://amazon.de/prime', description: 'Amazon Prime' },
          { title: 'Dropout', url: 'https://dropout.tv', description: 'Dropout' },
          { title: 'ARD Mediathek', url: 'https://www.ardmediathek.de', description: 'ARD Mediathek' },
          { title: 'ZDF Mediathek', url: 'https://www.zdf.de/mediathek', description: 'ZDF Mediathek' },
          { title: 'Spotify', url: 'https://open.spotify.com', description: 'Spotify - Music Streaming' },
        ]
      },
      {
        name: 'Social',
        items: [
          { title: 'Twitter / X', url: 'https://x.com', description: 'Microblogging' },
          { title: 'LinkedIn', url: 'https://linkedin.com', description: 'Professional network' },
          { title: 'Reddit', url: 'https://reddit.com', description: 'Communities' },
          { title: 'YouTube', url: 'https://youtube.com', description: 'Videos' },
          { title: 'tm.de', url: 'https://tm.de', description: 'Transfermarkt Fußball News' },
          { title: 'BFV', url: 'https://bfv.de', description: 'BfV.de Fussball Verband' },
          { title: 'Instagram', url: 'https://instagram.com', description: 'Instagram' },
          { title: 'Discord', url: 'https://discord.com', description: 'Discord' },
          { title: 'Bluesky', url: 'https://bsky.app', description: 'Bluesky' },
        ]
      },
      {
        name: 'News & Reading',
        items: [
          { title: 'Hacker News', url: 'https://news.ycombinator.com', description: 'Tech news' },
          { title: 'TechCrunch', url: 'https://techcrunch.com', description: 'Startup news' },
          { title: 'The Verge', url: 'https://theverge.com', description: 'Tech & culture' },
          { title: 'Medium', url: 'https://medium.com', description: 'Articles' },
          { title: 'daily.dev', url: 'https://app.daily.dev', description: 'daily.dev News overview' },
        ]
      },  
      {
        name: 'Shopping',
        items: [
          { title: 'Amazon', url: 'https://amazon.de', description: 'Amazon' },
          { title: 'Ebay', url: 'https://ebay.de', description: 'Ebay' },
          { title: 'My Dealz', url: 'https://my-dealz.de', description: 'My Dealz' },
          { title: 'Payback', url: 'https://www.payback.de', description: 'Payback' },
          { title: 'Bring Einkaufsliste', url: 'https://web.getbringbring.com', description: 'Bring Einkaufsliste' },
          { title: 'Idealo', url: 'https://idealo.de', description: 'Idealo - Price comparison' },
          { title: 'Alternate', url: 'https://alternate.de', description: 'Alternate - Electronics' },
          { title: 'Galaxus', url: 'https://galaxus.de', description: 'Galaxus - Online Shop' },
        ]
      }
    ]
  },
  // Banking / Finanzen
  {
    category: 'Banking / Finanzen',
    items: [
      { title: 'Sparkasse Online', url: 'https://www.spk-ts.de/de/home.html', description: 'Sparkasse Online banking' },
      { title: 'Trade Republic', url: 'https://trade.de', description: 'Trade Republic' },
      { title: 'Finanzen.net', url: 'https://finanzen.net', description: 'Finanzen.net' },
      { title: 'ING Diba', url: 'https://www.ing-diba.de', description: 'ING Diba' },
      { title: 'VR Bank', url: 'https://www.vb-rb.de', description: 'VR Bank online banking' },
      { title: 'PayPal', url: 'https://www.paypal.com', description: 'PayPal' },
      { title: 'Bank Norwegian', url: 'https://www.banknorwegian.de', description: 'Bank Norwegian' },
    ]
  },
  // Hobby
  {
    category: 'Hobby',
    items: [],
    subcategories: [
      {
        name: '3D Printing',
        items: [
          { title: 'Multiboard', url: 'https://beta.multiboard.io/', description: 'Multiboard Parts library' },
          { title: 'Thingyverse', url: 'https://thingyverse.com', description: 'Thingyverse' },
          { title: 'Makerworld', url: 'https://makerworld.com', description: 'Makerworld' },
          { title: 'Thangs', url: 'https://thangs.com', description: 'Thangs' },
        ]
      },
      {
        name: 'Homelab',
        items: [
          { title: 'Homeassistant local', url: 'http://homeassistant.local:8123', description: 'Homeassistant local' },
          { title: 'Homeassistant remote', url: 'https://home.familie-suess.com', description: 'Homeassistant remote' },
          { title: 'Proxmox', url: 'http://server.dahoam:8006', description: 'Proxmox Dashboard' },
          { title: 'Nextcloud', url: 'http://cloud.dahoam', description: 'Nextcloud Dashboard' },
          { title: 'Immich', url: 'http://fotos.dahoam', description: 'Immich Foto Gallery' },
          { title: 'Booklore', url: 'http://books.dahoam', description: 'Booklore Library' },
          { title: 'Jellyfin', url: 'http://media.dahoam', description: 'Jellyfin Media Library' },
          { title: 'Homeassistant Docs', url: 'https://www.home-assistant.io', description: 'Homeassistant Documentation' },
          { title: 'Homeassistant Forum', url: 'https://community.home-assistant.io', description: 'Homeassistant Forum' },
          { title: 'Homeassistant Blog', url: 'https://blog.home-assistant.io', description: 'Homeassistant Blog' },
          { title: 'Homeassistant GitHub', url: 'https://github.com/home-assistant', description: 'Homeassistant GitHub' },
        ]
      }
    ]
  }
];
