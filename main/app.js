let root = out({
  select: "#root"
},
{
  stylesheet: {
    id: "#root",
    margin: "1em",
    border: "solid #242424 1px",
    radius: "12px"
  }
});

let header = out({
  select: "#root",
  elem: "h1",
  id: "header",
  text: "Hi I'm Yerenzter!"
},
{
  stylesheet: {
    id: "#header",
    size: "64px"
  }
});

let divider1 = out({
  select: "#root",
  elem: "hr"
});

let bio_list = out({
  select: "#root",
  elem: "ul",
  id: "bio-list"
});

let bio_list_data = ["RENZTER ARIZALA's Property", "Qubonic QA&S", "Master web developer"];

for(r=0; r<bio_list_data.length; r++) {
  let bl_data_list = out({
    select: "#bio-list",
    elem: "li",
    text: bio_list_data[r]
  });
}

let intro = out({
  select: "#root",
  elem: "p",
  text: "Hi, I'm Yerenzter the software developer and founder of Qubonic Arts & Software, AYCQ. formerly known as Gladiolus Interactive Lab. A young Filipino student, mentor & casual coder and a student from CCS-BSIT of University of Antique."
});

let hobbies = out({
  select: "#root",
  elem: "h3",
  text: "Hobbies"
});

let hobby_list = ["Coding", "Chat with my Dear", "Playing chess & video games", "Reading books & magazines", "Watching", "Trekking", "Graphic designing", "Riding motocycle", "Taking picture", "Eating", "Sleeping"];

let hobby_list_name= out({
  select:"#root",
  elem: "ul",
  id: "hobby"
});

for(r=0; r<hobby_list.length; r++) {
  let hobby_list_data = out({
  select: "#hobby",
  elem: "li",
  text: hobby_list[r]
});
}

let social_links = out({
  select: "#root",
  elem: "h3",
  text: "Social Links"
});

let social_links_name_list = ["Yerenzter", "Yandex Mail", "GitHub", "Facebook", "Instagram", "YouTube", "Itch", "Soundcloud", "VK"];

let social_links_list = ["https://yerenzter.github.io", "mailto:yerenzter@yandex.com", "https://github.com/Yerenzter", "https://facebook.com/yerenzter", "https://instagram.com/yer2003.umi10", "https://youtube.com/channel/UCZPtBbdCU-mha5BMWZrdK9A", "https://yer2003.itch.io", "https://soundcloud.com/yer2003", "https://vk.com/yerenzter"];

let social_links_name = out({
  select: "#root",
  elem: "ul",
  id: "social"
});

for(r=0; r<social_links_name_list.length; r++) {
  let social_links_ao = out({
    select: "#social",
    elem: "li",
    id: "link"+r
});
  let social_links_ai = out({
    select: "#link"+r,
    elem: "a",
    href: social_links_list[r],
    text: social_links_name_list[r]
  });
}

let footer = out({
  select: "#root",
  elem: "h6",
  text: "This website implements with Flanx Quikker a JavaScript library which you can write HTML element s and styling using CSS rules using with object properties"
});