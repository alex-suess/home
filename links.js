const links = [
    {
      category: "Organisation & Communication",
      items: [
        { title: "Deskbird", url: "https://app.deskbird.com/", description: "Deskbird - Desk Booking System", icon: "./img/favicon-deskbird.ico"},
        { title: "Personio", url: "https://dgtls.personio.com/", description: "Personio - HR System"},
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
                { title: "My Space", url: "https://dgtls.atlassian.net/wiki/spaces/~712020577778bf0fce4e0aab5d980d98be4e60/overview", description: "My Space", icon: "./img/favicon-valantic.ico"},
                { title: "CL Development", url: "https://dgtls.atlassian.net/wiki/spaces/CLD/overview", description: "Chapter Lead Development Space", icon: "./img/favicon-valantic.ico"},
                { title: "HR for Leads", url: "https://dgtls.atlassian.net/wiki/spaces/HFL/overview?homepageId=1748992108", description: "HR for Leads Space", icon: "./img/favicon-valantic.ico"},
            ]
        },
        {
          name: "Tempo",
          items: [
            { title: "DB Timesheet", url: "https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/teams/team/62/timesheet?columns=TOTAL_TIME_COLUMN&dateDisplayType=days&excludeInternalIssues=false&from=2024-12-01&groupBy=worker&includeRejectedRecords=false&includeSubtasks=false&periodType=CURRENT_PERIOD&showUsersWithZeroHours=true&subPeriodType=MONTH&teamId=62&to=2024-12-31&viewType=TIMESHEET", description: "DB Timesheet aktueller Monat", icon: "./img/favicon-valantic.ico"},
            { title: "Daily Board", url: "https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/planner?from=2026-01-05&to=2026-01-11&periodType=CURRENT_WEEK&viewType=weeks", description: "Daily Board aktueller Woche", icon: "./img/favicon-valantic.ico"},
            { title: "Timesheet", url: "https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/my-work/week?type=LIST", description: "My Timesheet aktueller Woche", icon: "./img/favicon-valantic.ico"},
            { title: "Planning Board", url: "https://dgtls.atlassian.net/plugins/servlet/ac/io.tempo.jira/tempo-app#!/planner?from=2026-01-05&to=2026-01-11&periodType=CURRENT_WEEK&viewType=weeks&roleId=5&roleId=21", description: "Planning Board aktueller Sprint", icon: "./img/favicon-valantic.ico"},
          ]
        }
      ]
    },
    {
      category: "Development",
      items: [
          { title: "Bitbucket creatingweb", url: "https://bitbucket.org/creatingweb", description: "creatingweb - Bitbucket repos" },
          { title: "Bitbucket creating_web", url: "https://bitbucket.org/creating_web", description: "creating_web - Bitbucket repos" },
          { title: "Gitlab", url: "https://gitlab.com", description: "Gitlab repos" },
          { title: "GitHub", url: "https://github.com", description: "GitHub repos" },
      ]
    },
    {
        category: "Tools",
        items: [
          { title: "ChatGPT", url: "https://chat.openai.com", description: "AI assistant" },
          { title: "Vally", url: "https://vally.valantic.ai/", description: "Vally - AI assistant", icon: "./img/favicon-vally.png"},
          { title: "Figma", url: "https://figma.com", description: "Design tool" },
          { title: "Miro", url: "https://miro.com/app/dashboard/", description: "Miro - Whiteboard" },
          { title: "JSON Formatter", url: "https://jsonformatter.org", description: "Format JSON" }
        ]
    },
    {
      category: "Social",
      items: [
        { title: "Twitter / X", url: "https://x.com", description: "Microblogging" },
        { title: "LinkedIn", url: "https://linkedin.com", description: "Professional network" },
        { title: "Reddit", url: "https://reddit.com", description: "Communities" },
        { title: "YouTube", url: "https://youtube.com", description: "Videos" }
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
        category: "Funke Medien Gruppe",
        subcategories: [
            {
                name: "Production",
                items: [
                    { title: "Hoerzu Frontend", url: "https://hoerzu.de", description: "Hoerzu Prod Frontend"},
                    { title: "Hoerzu Frontend (No CDN)", url: "https://redaktion.hoerzu.de", description: "Hoerzu Prod Frontend (No CDN)"},
                    { title: "Hoerzu Backend", url: "https://redaktion.hoerzu.de/admin/login", description: "Hoerzu Prod Admin Backend", icon: "./img/favicon-pimcore.png"},
                    { title: "TVD Frontend", url: "https://www.tvdigital.de/", description: "TVD Prod Frontend"},
                    { title: "TVD Frontend (No CDN)", url: "https://redaktion.tvdigital.de/", description: "TVD Prod Frontend (No CDN)"},
                ]
            },
            {
                name: "Staging",
                items: [
                    { title: "Hoerzu Frontend", url: "https://hzdevpimcore11.dcmdev.de/", description: "Hoerzu Staging Frontend"},
                    { title: "Hoerzu Backend", url: "https://redaktion.hoerzu.de/admin/login", description: "Hoerzu Staging Admin Backend", icon: "./img/favicon-pimcore.png"},
                    { title: "TVD Frontend", url: "https://devredaktion11.tvdigital.de/", description: "TVD Staging Frontend"},
                ]
            }, 
            {
                name: "Development",
                items: [
                    { title: "Hoerzu Frontend", url: "https://hoerzu-update.dgtls", description: "Hoerzu Development Frontend"},
                    { title: "Hoerzu Backend", url: "https://hoerzu-update.dgtls/admin/login", description: "Hoerzu Development Admin Backend", icon: "./img/favicon-pimcore.png"},
                    { title: "TVD Frontend", url: " https://tvdigital.dgtls", description: "TVD Development Frontend"}
                ]
            }
        ]
    }
  ];