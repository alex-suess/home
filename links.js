const links = [
    // Organisation & Communication
    {
      category: "Organisation & Communication",
      items: [
        { title: "Deskbird", url: "https://app.deskbird.com/", description: "Deskbird - Desk Booking System", icon: "./img/favicon-deskbird.ico"},
        { title: "Personio", url: "https://dgtls.app.personio.com/", description: "Personio - HR System"},
        { title: "Timetree Kalender", url: "https://timetreeapp.com", description: "Timetree Kalender"},
      ],
      subcategories: [
        {
            name: "Jira",
            items: [
                { title: "Meine Tickets", url: "https://dgtls.atlassian.net/jira/for-you", description: "Mir zugewiesene Jira tickets", icon: "./img/favicon-valantic.ico"},
                { title: "Sprint Review", url: "https://dgtls.atlassian.net/jira/software/c/projects/DEFV21/boards/758?quickFilter=2039&quickFilter=2038&quickFilter=2035&quickFilter=2037", description: "Tempo Sprint Review Board", icon: "./img/favicon-valantic.ico"},
                { title: "Valantic Learning Hub", url: "https://hcm55.sapsf.eu/saml2/Login?company=valanticgm", description: "Valantic Learning Hub", icon: "./img/favicon-valantic.ico"},
                { title: "HR Board", url: "https://dgtls.atlassian.net/jira/software/c/projects/DGTLSHRDEV/issues?jql=project%20%3D%20%22DGTLSHRDEV%22%20ORDER%20BY%20created%20DESC", description: "HR Board - DGTLSHRDEV", icon: "./img/favicon-valantic.ico"},
            ]
        },
        {
            name: "Confluence",
            items: [
                { title: "Confluence Home", url: "https://dgtls.atlassian.net/wiki/home", description: "Confluence Home", icon: "./img/favicon-valantic.ico"},
                { title: "Mein Space", url: "https://dgtls.atlassian.net/wiki/spaces/~712020577778bf0fce4e0aab5d980d98be4e60/overview", description: "Mein privater Space", icon: "./img/favicon-valantic.ico"},
                { title: "CL Development", url: "https://dgtls.atlassian.net/wiki/spaces/CLD/overview", description: "Chapter Lead Development Space", icon: "./img/favicon-valantic.ico"},
                { title: "HR for Leads", url: "https://dgtls.atlassian.net/wiki/spaces/HFL/overview?homepageId=1748992108", description: "HR for Leads Space", icon: "./img/favicon-valantic.ico"},
            ]
        },
        {
          name: "Tempo",
          items: [
            { title: "DB Timesheet", url: "https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/teams/team/62/timesheet?columns=TOTAL_TIME_COLUMN&dateDisplayType=days&excludeInternalIssues=false&from=2024-12-01&groupBy=worker&includeRejectedRecords=false&includeSubtasks=false&periodType=CURRENT_PERIOD&showUsersWithZeroHours=true&subPeriodType=MONTH&teamId=62&to=2024-12-31&viewType=TIMESHEET", description: "DB Timesheet aktueller Monat", icon: "./img/favicon-valantic.ico"},
            { title: "Daily Board", url: "https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/planner?from=2026-01-05&to=2026-01-11&periodType=CURRENT_WEEK&viewType=weeks", description: "Daily Board aktueller Woche", icon: "./img/favicon-valantic.ico"},
            { title: "Timesheet", url: "https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/my-work/week?type=LIST", description: "Mein Timesheet der aktuellen Woche", icon: "./img/favicon-valantic.ico"},
            { title: "Planning Board", url: "https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/planner?from=2026-01-05&to=2026-01-11&periodType=CURRENT_WEEK&viewType=weeks&roleId=5&roleId=21", description: "Planning Board aktueller Sprint", icon: "./img/favicon-valantic.ico"},
          ]
        }
      ]
    },
    // Development
    {
      category: "Development",
      items: [
          { title: "Bitbucket creatingweb", url: "https://bitbucket.org/creatingweb", description: "creatingweb - Bitbucket repos" },
          { title: "Bitbucket creating_web", url: "https://bitbucket.org/creating_web", description: "creating_web - Bitbucket repos" },
          { title: "Gitlab", url: "https://gitlab.com", description: "Gitlab repos" },
          { title: "GitHub", url: "https://github.com", description: "GitHub repos" },
          { title: "elest.io", url: "https://dash.elest.io/", description: "elest.io" },
      ]
    },
    // Tools
    {
        category: "Tools",
        items: [
          { title: "ChatGPT", url: "https://chat.openai.com", description: "AI assistant" },
          { title: "Vally", url: "https://vally.valantic.ai/", description: "Vally - AI assistant", icon: "./img/favicon-vally.png"},
          { title: "Figma", url: "https://figma.com", description: "Design tool" },
          { title: "Miro", url: "https://miro.com/app/dashboard/", description: "Miro - Whiteboard" },
          { title: "JSON Formatter", url: "https://jsonformatter.org", description: "Format JSON" },
          { title: "Regex101", url: "https://regex101.com", description: "Regex Tester" },
          { title: "Regex Generator", url: "https://regexr.com", description: "Regex Generator" },
          { title: "Browserstack", url: "https://www.browserstack.com", description: "Browserstack - Test your website in different browsers" },
          { title: "draw.io", url: "https://app.diagrams.net/", description: "draw.io - Draw diagrams" },
          { title: "Heroicons", url: "https://heroicons.dev/", description: "Heroicons - Icon Library" },
          { title: "Unsplash", url: "https://unsplash.com/", description: "Unsplash - Free images" },
        ]
    },
    // Funke Medien Gruppe
    {
        category: "Funke Medien Gruppe",
        items: [
            { title: "Confluence intern", url: "https://dgtls.atlassian.net/wiki/spaces/FMG/overview", description: "Confluence intern"},
            { title: "Confluence extern", url: "https://dgtls-ext-funke.atlassian.net/wiki/spaces/FMG/overview", description: "Confluence extern"},
            { title: "API Dokumentation", url: "https://10.101.8.117/api/documentation", description: "Funke Medien Gruppe API Dokumentation"},
        ],
        subcategories: [
            {
                name: "Production",
                items: [
                    { title: "Hoerzu Frontend", url: "https://hoerzu.de", description: "Hoerzu Prod Frontend"},
                    { title: "Hoerzu Frontend (No CDN)", url: "https://redaktion.hoerzu.de", description: "Hoerzu Prod Frontend (No CDN)", icon: "./img/favicon-hoerzu.png"},
                    { title: "Hoerzu Backend", url: "https://redaktion.hoerzu.de/admin/login", description: "Hoerzu Prod Admin Backend", icon: "./img/favicon-pimcore.png"},
                    { title: "TVD Frontend", url: "https://www.tvdigital.de/", description: "TVD Prod Frontend"},
                    { title: "TVD Frontend (No CDN)", url: "https://redaktion.tvdigital.de/", description: "TVD Prod Frontend (No CDN)", icon: "./img/favicon-tvdigital.png"},
                ]
            },
            {
                name: "Staging",
                items: [
                    { title: "Hoerzu Frontend", url: "https://hzdevpimcore11.dcmdev.de/", description: "Hoerzu Staging Frontend", icon: "./img/favicon-hoerzu.png"},
                    { title: "Hoerzu Backend", url: "https://redaktion.hoerzu.de/admin/login", description: "Hoerzu Staging Admin Backend", icon: "./img/favicon-pimcore.png"},
                    { title: "TVD Frontend", url: "https://devredaktion11.tvdigital.de/", description: "TVD Staging Frontend", icon: "./img/favicon-tvdigital.png"},
                ]
            }, 
            {
                name: "Development",
                items: [
                    { title: "Hoerzu Frontend", url: "https://hoerzu-update.dgtls", description: "Hoerzu Development Frontend", icon: "./img/favicon-hoerzu.png"},
                    { title: "Hoerzu Backend", url: "https://hoerzu-update.dgtls/admin/login", description: "Hoerzu Development Admin Backend", icon: "./img/favicon-pimcore.png"},
                    { title: "TVD Frontend", url: " https://tvdigital.dgtls", description: "TVD Development Frontend", icon: "./img/favicon-tvdigital.png"}
                ]
            }
        ]
    },
    // Die Bayrische
    {
        category: "Die Bayrische",
        items: [
            { title: "Confluence intern", url: "https://dgtls.atlassian.net/wiki/spaces/DBAY/overview", description: "Confluence intern"},
            { title: "API Dokumentation", url: "https://10.101.8.117/api/documentation", description: "Die Bayrische API Dokumentation"},
        ],
        subcategories: [
            {
                name: "Production",
                items: [
                    { title: "Kestra", url: "https://kestra-prod-u602.vm.elestio.app/ui/dashboard", description: "Kestra Production Dashboard"}
                ]
            },
            {
                name: "Staging",
                items: [
                    { title: "Stage Dashboard", url: "https://baytrack.eu.auth0.com/u/login?state=hKFo2SBtY1JEal9nN1pzVTVzSzMtVkVjXzVQX1AwNEFTQ2hRVqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIExhR1pLVzBjcmZ3Nmt0VTF5RV9VNDZ6bVVuSVpzeHozo2NpZNkgdGhyd2c2UFNwWmRYU0Y1Sm9sc1ZoUk0yNDV2VkxBTk8/", description: "Stage Dashboard"},
                ]
            },
        ]
    },
    // Schönklinik
    {
        category: "Schönklinik",
        items: [
        ],
    },
    // WTS
    {
        category: "WTS",
        items: [
            { title: "Confluence intern", url: "https://dgtls.atlassian.net/wiki/spaces/wtsfas/overview", description: "Confluence intern"},
        ],
        subcategories: [
            {
                name: "Production",
                items: [
                ]
            },
            {
                name: "Staging",
                items: [
                ]
            },
            {
                name: "Test",
                items: [
                ]
            },
            {
                name: "Development",
                items: [
                ]
            }
        ]
    },
    // Caritas
    {
        category: "Caritas",
        items: [
        ],
        subcategories: [
            {
                name: "Production",
                items: [
                ]
            },
        ]
    },
    // Fun
    {
    category: "Fun",
    items: [
        { title: "Ligainsider", url: "https://ligainsider.de", description: "Ligainsider" },
        { title: "DnD beyond", url: "https://dndbeyond.com", description: "DnD Beyond" },
        { title: "Roll20", url: "https://roll20.net", description: "Roll20" },
    ],
    subcategories: [
            {
                name: "Streaming",
                items: [
                    { title: "Netflix", url: "https://netflix.com", description: "Netflix" },
                    { title: "Amazon Prime", url: "https://amazon.de/prime", description: "Amazon Prime" },
                    { title: "Dropout", url: "https://dropout.tv", description: "Dropout" },
                    { title: "ARD Mediathek", url: "https://www.ardmediathek.de", description: "ARD Mediathek" },
                    { title: "ZDF Mediathek", url: "https://www.zdf.de/mediathek", description: "ZDF Mediathek" }
                ]
            },
            {
                name: "Social",
                items: [
                    { title: "Twitter / X", url: "https://x.com", description: "Microblogging" },
                    { title: "LinkedIn", url: "https://linkedin.com", description: "Professional network" },
                    { title: "Reddit", url: "https://reddit.com", description: "Communities" },
                    { title: "YouTube", url: "https://youtube.com", description: "Videos" },
                    { title: "tm.de", url: "https://tm.de", description: "Transfermarkt Fußball News" },
                    { title: "BFV", url: "https://bfv.de", description: "BfV.de Fussball Verband" },
                ]
            },
            {
                category: "News & Reading",
                items: [
                  { title: "Hacker News", url: "https://news.ycombinator.com", description: "Tech news" },
                  { title: "TechCrunch", url: "https://techcrunch.com", description: "Startup news" },
                  { title: "The Verge", url: "https://theverge.com", description: "Tech & culture" },
                  { title: "Medium", url: "https://medium.com", description: "Articles" }
                ]
            },
            {
                name: "Shopping",
                items: [
                    { title: "Amazon", url: "https://amazon.de", description: "Amazon" },
                    { title: "Ebay", url: "https://ebay.de", description: "Ebay" },
                    { title: "My Dealz", url: "https://my-dealz.de", description: "My Dealz" },
                    { title: "Payback", url: "https://www.payback.de", description: "Payback" },
                    { title: "Bring Einkaufsliste", url: "https://web.getbringbring.com", description: "Bring Einkaufsliste" },
                ]
            }
        ]
    },
    // Banking
    {
        category: "Banking / Finanzen",
        items: [
            { title: "Sparkasse Online", url: "https://www.spk-ts.de/de/home.html", description: "Sparkasse Online banking" },
            { title: "Trade Republic", url: "https://trade.de", description: "Trade Republic" },
            { title: "Finanzen.net", url: "https://finanzen.net", description: "Finanzen.net" },
            { title: "ING Diba", url: "https://www.ing-diba.de", description: "ING Diba" },
            { title: "VR Bank", url: "https://www.vb-rb.de", description: "VR Bank online banking" },
            { title: "PayPal", url: "https://www.paypal.com", description: "PayPal" },
            { title: "Bank Norwegian", url: "https://www.banknorwegian.de", description: "Bank Norwegian" },
        ]
    },
    // Hobby
    {
        category: "Hobby",
        items: [],
        subcategories: [
            {
                name: "3D Printing",
                items: [
                    { title: "Multiboard", url: "https://beta.multiboard.io/", description: "Multiboard Parts library" },
                    { title: "Thingyverse", url: "https://thingyverse.com", description: "Thingyverse" },
                    { title: "Makerworld", url: "https://makerworld.com", description: "Makerworld" },
                    { title: "Thangs", url: "https://thangs.com", description: "Thangs" },
                ]
            },
            {
                name: "Homelab",
                items: [
                    { title: "Homeassistant local", url: "http://homeassistant.local:8123", description: "Homeassistant local" },
                    { title: "Homeassistant remote", url: "https://home.familie-suess.com", description: "Homeassistant remote" },
                    { title: "Proxmox", url: "http://server.dahoam:8006", description: "Proxmox Dashboard" },
                    { title: "Nextcloud", url: "http://cloud.dahoam", description: "Nextcloud Dashboard" },
                    { title: "Immich", url: "http://fotos.dahoam", description: "Immich Foto Gallery" },
                    { title: "Booklore", url: "http://books.dahoam", description: "Booklore Library" },
                    { title: "Jellyfin", url: "http://media.dahoam", description: "Jellyfin Media Library" },
                    { title: "Homeassistant Docs", url: "https://www.home-assistant.io", description: "Homeassistant Documentation" },
                    { title: "Homeassistant Forum", url: "https://community.home-assistant.io", description: "Homeassistant Forum" },
                    { title: "Homeassistant Blog", url: "https://blog.home-assistant.io", description: "Homeassistant Blog" },
                    { title: "Homeassistant GitHub", url: "https://github.com/home-assistant", description: "Homeassistant GitHub" },
                ]
            }
        ]
    }
  ];