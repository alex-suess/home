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
                { title: "Confluence", url: "https://dgtls.atlassian.net/wiki/home", description: "Documentation", icon: "./img/favicon-valantic.ico"},
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
    }
  ];