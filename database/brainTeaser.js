const questions_BT = [
    {
        num: 1,
        question: "Who is considered the \"father of modern computers\"? ",
        answer: "Alan Turing"
    },
    {
        num: 2,
        question: "What was the first computer virus?  ",
        answer: "The Creeper Program",
    },
    {
        num: 3,
        question: "Who is credited with creating the World Wide Web (WWW) and developing the first web browser?",
        answer: "Tim Berners-Lee",
    },
    {
        num: 4,
        question: "What is the official mascot of College of Information Technology?",
        answer: "Falcon",
    },
    {
        num: 5,
        question: "Who is our current dean in our college?",
        answer: "Elmer Torres Haro"
    },
    {
        num: 6,
        question: "Who is the Saint of this building",
        answer: "Saint Ezekiel Moreno"
    },
    {
        num: 7,
        question: "Complete the acronym RICHNEST. ",
        answer: "Research Incubation Hub for Novel Solutions and Collaboration and Explorative Technologies"
    },
    {
        num: 8,
        question: "Name three popular operating systems for personal computers. ",
        answer: "Microsoft Windows, macOS and Linux"
    },
    {
        num: 9,
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        num: 10,
        question: `<p>JavaScript:<br>
            let a = 2;<br>
            const b = 3;<br>
            b = 4;<br>
            console.log(a + b);</p>`,
        answer: "Error"
    },
    {
        num: 11,
        question: `
            <p>JavaScript:<br>
            let a = 2;<br>
            const b = 3;<br>
            console.log("a" + "b");</p>`,
        answer: "ab"
    },
    {
        num: 12,
        question:`
            <p>JavaScript:<br>
            let a = "2";<br>
            const b = "3";<br>
            console.log(a+b);</p>
        `,
        answer: "23"
    },
    {
        num: 13,
        question: "Which high-level programming language, developed by IBM, made its debut in 1957?",
        answer: "FORTRAN."
    },
    {
        num: 14,
        question: "What was the name of the world's first fully functional, programmable computer completed by Konrad Zuse in 1941?",
        answer: "Konrad Zuse "
    },
    {
        num: 15,
        question: "Who formulated Moore's Law in 1965, predicting the doubling of transistors on integrated circuits?",
        answer: "Gordon Moore"
    },
    {
        num: 16,
        question: "What precursor to the modern internet was created in 1969?",
        answer: "ARPANET"
    },
    {
        num: 17,
        question: "In 1973, what protocol was described in the first paper by Vint Cerf and Bob Kahn, becoming fundamental for the internet?",
        answer: "Transmission Control Protocol (TCP)"
    },
    {
        num: 18,
        question: "What system introduced in 1983 simplified the management of internet addresses?",
        answer: "Domain Name System (DNS)"
    },
    {
        num: 19,
        question: "Which version of Microsoft's operating system introduced a graphical user interface in 1985?",
        answer: "Microsoft Windows 1.0"
    },
    {
        num: 20,
        question: "Who invented the World Wide Web while working at CERN in 1989?",
        answer: "Tim Berners-Lee"
    },
    {
        num: 21,
        question: "What was the name of the first widely-used web browser, released in 1993?",
        answer: "Mosaic"
    },
    {
        num: 22,
        question: "Apple redefined the smartphone industry with the launch of which product in 2007?",
        answer: "iPhone"
    },
    {
        num: 23,
        question: "In 2010, a popular social media platform for photo-sharing was launched. What is its name?",
        answer: "Instagram"
    },
    {
        num: 24,
        question: "Who is known for inventing the mechanical calculator known as the \"Pascaline\" in the 17th century?",
        answer: "Blaise Pascal"
    },
    {
        num: 25,
        question: "What groundbreaking invention did John Presper Eckert and John Mauchly create in 1945?",
        answer: "ENIAC (Electronic Numerical Integrator and Computer)"
    },
    {
        num: 26,
        question: "Who coined the term \"bug\" when referring to computer glitches?",
        answer: "Grace Hopper"
    },
    {
        num: 27,
        question: "What is the name of the first email program, created in the early 1970s?",
        answer: "SNDMSG"
    },
    {
        num: 28,
        question: "Who is known for developing the concept of Ethernet, a widely used networking technology?",
        answer: "Robert Metcalfe"
    },
    {
        num: 29,
        question: "What was the name of the computer chess program that defeated reigning world chess champion Garry Kasparov in 1997?",
        answer: "Deep Blue"
    },
    {
        num: 30,
        question: "When was the first public demonstration of a graphical web browser conducted, marking the beginning of the World Wide Web's popularity?",
        answer: "December 25, 1990"
    },
    {
        num: 31,
        question: "Who is considered the father of artificial intelligence (AI)?",
        answer: "John McCarthy"
    },
    {
        num: 32,
        question: "Which programming language, developed in the 1960s, introduced the concept of \"time-sharing\"?",
        answer: "BASIC (Beginner's All-purpose Symbolic Instruction Code)"
    },
    {
        num: 33,
        question: "What is the significance of the \"Doom\" video game in the history of computer graphics?",
        answer: "\"Doom,\" released in 1993, is a groundbreaking video game that significantly advanced computer graphics and gaming. " +
            "It pioneered the first-person shooter genre, introduced 3D rendering techniques and real-time texture mapping, and popularized " +
            "network multiplayer and user-generated content."
    },
    {
        num: 34,
        question: "Which company introduced the iPod, revolutionizing the portable music player industry?",
        answer: "Apple Inc."
    },
    {
        num: 35,
        question: "What is the name of the open-source operating system created by Linus Torvalds in the early 1990s?",
        answer: "Linux"
    },
    {
        num: 36,
        question: "When was the first text message sent, leading to the widespread use of SMS communication?",
        answer: "December 3, 1992"
    },
    {
        num: 37,
        question: "What is the origin of the term \"bug\" in the context of computer programming?",
        answer: "The term \"bug\" in the context of computer programming originated from a moth found in a computer relay by Grace Hopper in 1947."
    },
    {
        num: 38,
        question: "Who developed the concept of object-oriented programming (OOP)?",
        answer: "Alan Kay"
    },
    {
        num: 39,
        question: "When was the concept of a \"bug bounty\" program first introduced?",
        answer: "The concept of a \"bug bounty\" program was first introduced in 1983 by Hunter & Ready, " +
            "a consulting firm. They offered monetary rewards to individuals who found and reported " +
            "software bugs in their products."
    },
    {
        num: 40,
        question: "Which company introduced the first commercially successful portable computer, the Osborne 1?",
        answer: "Osborne Computer Corporation"
    },
    {
        num: 41,
        question: "When did the first commercial mobile phone call take place, ushering in the era of mobile communication?",
        answer: "April 3, 1973"
    },
    {
        num: 42,
        question: "What is the origin of the \"@\" symbol in email addresses?",
        answer: "The origin of the \"@\" symbol in email addresses dates back to the 1970s. Ray Tomlinson, the inventor " +
            "of email, chose the \"@\" symbol to separate the user's name from the host computer's name in email addresses. "
    },
    {
        num: 43,
        question: "What is the significance of the \"Dot-com bubble\" in the late 1990s and early 2000s?",
        answer: "The \"Dot-com bubble,\" which occurred in the late 1990s and early 2000s, refers to a period of " +
            "speculative investment in internet-related companies (dot-coms) characterized by inflated stock prices, excessive optimism, and unrealistic expectations."
    }
]

