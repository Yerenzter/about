let alString = ["RENZTER ARIZALA PROPERTY!", "Qubonic A & S Developer", "Master web developer"];

let hString = ["Coding", "Chat w/ my dear", "Playing chess & video games", "Reading books & magazines", "Watching", "Trekking", "Graphic Designing", "Riding motorcycle", "Taking picture", "Eating", "Sleeping"];

let slnString = ["Yerenzter", "Yandex Mail", "Facebook", "Instagram", "YouTube", "Itch", "Soundcloud", "VK"];

let sllString = ["https://www.yerenzter.tk", "mailto:yerenzter@yandex.com", "https://facebook.com/yerenzter", "https://instagram.com/yer2003.umi10", "https://youtube.com/@yerenzter", "https://yer2003.itch.io", "https://soundcloud.com/yer2003", "https://vk com/yerenzter"];

let titleHead0 = {
    html: {
        elem: "h1",
        text: "About Me!"
    }
};

let aboutList = {
    html: {
        elem: "ul",
        id: "about-list"
    }
};

let renderAboutList = () => {
    loop(0, alString.length, () => {
        out({
            html: {
                select: "about-list",
                elem: "li",
                text: alString[r]
            }
        });
    });
};

let biograph = {
    html: {
        elem: "p",
        text: "Hi, I'm Yerenzter the software developer and founder of Qubonic Arts & Software, AYCQ. formerly known as Gladiolus Interactive Lab. A young Filipino student, mentor & casual coder and a student from CCS-BSIT of University of Antique."
    }
};

let titleHead1 = {
    html: {
        elem: "h2",
        text: "Hobbies"
    }
};

let hobbyList = {
    html: {
        elem: "ul",
        id: "hobby-list"
    }
};

let renderHobbyList = () => {
    loop(0, hString.length, ()=> {
        out({
            html: {
                select: "hobby-list",
                elem: "li",
                text: hString[r]
            }
        });
    });
};

let titleHead2 = {
    html: {
        elem: "h1",
        text: "Social Links"
    }
};

let socialLinkList = {
    html: {
        elem: "ul",
        id: "social-link-list"
    }
};

let renderSocialLinkList = () => {
    loop(0, slnString.length, () => {
        out({
            html: {
                select: "social-link-list",
                elem: "li",
                id: `social-link${r}`
            }
        });

        out({
            html: {
                select: `social-link${r}`,
                elem: "a",
                text: slnString[r],
                href: sllString[r]
            }
        });
    });
};

render([titleHead0,
    aboutList,
    biograph,
    titleHead1,
    hobbyList,
    titleHead2,
    socialLinkList], root);

renderAboutList(); renderAboutList();
renderHobbyList();
renderSocialLinkList();
