// Doc A
let section1 = document.getElementById('link1');
let section2 = document.getElementById('link2');
let section3 = document.getElementById('link3');
let section4 = document.getElementById('link4');

let textAreaHeading = document.getElementById('texttitle');
let textAreaBody = document.getElementById('paragraph');
// Doc B
let sectionB1 = document.getElementById('link5');
let sectionB2 = document.getElementById('link6');
let sectionB3 = document.getElementById('link7');
let sectionB4 = document.getElementById('link8');

let textAreaHeadingB = document.getElementById('texttitle2');
let textAreaBodyB = document.getElementById('paragraph2');





const Doc1 = {
    sub_title1_I: 'Introduction',
    paragraph1_I: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi. Sed vel purus vel nisi fermentum consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat aliquam quis tenetur voluptatum voluptas doloremque laborum voluptatibus ullam eos dolores, molestias nihil obcaecati perferendis asperiores hic, ipsa quasi autem nostrum, harum id optio fugit impedit placeat? Odit repellendus voluptatibus fugit rerum vel saepe dolorem hic animi debitis quos culpa alias recusandae qui sit laboriosam nostrum exercitationem natus dicta in, nisi a quasi, laborum doloremque. Quisquam laboriosam nisi voluptate corporis perferendis beatae eius autem laudantium, repellendus tempore quidem sunt sed adipisci facilis dolores sapiente dolorem? Mollitia laborum commodi ipsam laboriosam distinctio earum ex provident incidunt quisquam voluptas, minus iusto nisi. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.',
    sub_title2_T: 'Tools',
    paragraph2_T: `Phasellus auctor, arcu non consectetur condimentum, dui sapien consectetur ipsum, vel consectetur libero purus vel enim. Proin ultricies, ipsum vel eleifend malesuada, mauris velit semper erat, vitae convallis felis velit vel neque. Sed pulvinar, ipsum vel tristique fermentum, mauris metus pellentesque arcu, id consectetur ligula ligula vel diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat aliquam quis tenetur voluptatum voluptas doloremque laborum voluptatibus ullam eos dolores, molestias nihil obcaecati perferendis asperiores hic, ipsa quasi autem nostrum, harum id optio fugit impedit placeat? Odit repellendus voluptatibus fugit rerum vel saepe dolorem hic animi debitis quos culpa alias recusandae qui sit laboriosam nostrum exercitationem natus dicta in, nisi a quasi, laborum doloremque. Quisquam laboriosam nisi voluptate corporis perferendis beatae eius autem laudantium, repellendus tempore quidem sunt sed adipisci facilis dolores sapiente dolorem? Mollitia laborum commodi ipsam laboriosam distinctio earum ex provident incidunt quisquam voluptas, minus iusto nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida. Sed vel purus vel nisi fermentum consectetur:

    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    - Sed at neque vel velit consectetur gravida.-Pellentesque habitant morbi tristique.

    - Sed at neque vel velit consectetur gravida

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.`,
    sub_title3_M: 'Methods',
    paragraph3_M: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat aliquam quis tenetur voluptatum voluptas doloremque laborum voluptatibus ullam eos dolores, molestias nihil obcaecati perferendis asperiores hic, ipsa quasi autem nostrum, harum id optio fugit impedit placeat? Odit repellendus voluptatibus fugit rerum vel saepe dolorem hic animi debitis quos culpa alias recusandae qui sit laboriosam nostrum exercitationem natus dicta in, nisi a quasi, laborum doloremque. Quisquam laboriosam nisi voluptate corporis perferendis beatae eius autem laudantium, repellendus tempore quidem sunt sed adipisci facilis dolores sapiente dolorem? Mollitia laborum commodi ipsam laboriosam distinctio earum ex provident incidunt quisquam voluptas, minus iusto nisi. Sed vel purus vel nisi fermentum consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida..

    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    - Sed at neque

    - velit consectetur gravida.-Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi. Sed vel purus vel nisi fermentum consectetur

    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.`,
    sub_title4_C: 'Conclusion',
    paragraph4_C: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi. Sed vel purus vel nisi fermentum consectetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat aliquam quis tenetur voluptatum voluptas doloremque laborum voluptatibus ullam eos dolores, molestias nihil obcaecati perferendis asperiores hic, ipsa quasi autem nostrum, harum id optio fugit impedit placeat? Odit repellendus voluptatibus fugit rerum vel saepe dolorem hic animi debitis quos culpa alias recusandae qui sit laboriosam nostrum exercitationem natus dicta in, nisi a quasi, laborum doloremque. Quisquam laboriosam nisi voluptate corporis perferendis beatae eius autem laudantium, repellendus tempore quidem sunt sed adipisci facilis dolores sapiente dolorem? Mollitia laborum commodi ipsam laboriosam distinctio earum ex provident incidunt quisquam voluptas, minus iusto nisi. Sed vel purus vel nisi fermentum consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.. Sed vel purus vel nisiLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.`
}
const Doc2 = {
    sub_title1_I: 'Introduction',
    paragraph1_I: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi. Sed vel purus vel nisi fermentum consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat aliquam quis tenetur voluptatum voluptas doloremque laborum voluptatibus ullam eos dolores, molestias nihil obcaecati perferendis asperiores hic, ipsa quasi autem nostrum, harum id optio fugit impedit placeat? Odit repellendus voluptatibus fugit rerum vel saepe dolorem hic animi debitis quos culpa alias recusandae qui sit laboriosam nostrum exercitationem natus dicta in, nisi a quasi, laborum doloremque. Quisquam laboriosam nisi voluptate corporis perferendis beatae eius autem laudantium, repellendus tempore quidem sunt sed adipisci facilis dolores sapiente dolorem? Mollitia laborum commodi ipsam laboriosam distinctio earum ex provident incidunt quisquam voluptas, minus iusto nisi. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.',
    sub_title2_T: 'Tips & Tricks',
    paragraph2_T: `Phasellus auctor, arcu non consectetur condimentum, dui sapien consectetur ipsum, vel consectetur libero purus vel enim. Proin ultricies, ipsum vel eleifend malesuada, mauris velit semper erat, vitae convallis felis velit vel neque. Sed pulvinar, ipsum vel tristique fermentum, mauris metus pellentesque arcu, id consectetur ligula ligula vel diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat aliquam quis tenetur voluptatum voluptas doloremque laborum voluptatibus ullam eos dolores, molestias nihil obcaecati perferendis asperiores hic, ipsa quasi autem nostrum, harum id optio fugit impedit placeat? Odit repellendus voluptatibus fugit rerum vel saepe dolorem hic animi debitis quos culpa alias recusandae qui sit laboriosam nostrum exercitationem natus dicta in, nisi a quasi, laborum doloremque. Quisquam laboriosam nisi voluptate corporis perferendis beatae eius autem laudantium, repellendus tempore quidem sunt sed adipisci facilis dolores sapiente dolorem? Mollitia laborum commodi ipsam laboriosam distinctio earum ex provident incidunt quisquam voluptas, minus iusto nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida. Sed vel purus vel nisi fermentum consectetur:

    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    - Sed at neque vel velit consectetur gravida.-Pellentesque habitant morbi tristique.

    - Sed at neque vel velit consectetur gravida

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.`,
    sub_title3_S: 'Shortcuts',
    paragraph3_S: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat aliquam quis tenetur voluptatum voluptas doloremque laborum voluptatibus ullam eos dolores, molestias nihil obcaecati perferendis asperiores hic, ipsa quasi autem nostrum, harum id optio fugit impedit placeat? Odit repellendus voluptatibus fugit rerum vel saepe dolorem hic animi debitis quos culpa alias recusandae qui sit laboriosam nostrum exercitationem natus dicta in, nisi a quasi, laborum doloremque. Quisquam laboriosam nisi voluptate corporis perferendis beatae eius autem laudantium, repellendus tempore quidem sunt sed adipisci facilis dolores sapiente dolorem? Mollitia laborum commodi ipsam laboriosam distinctio earum ex provident incidunt quisquam voluptas, minus iusto nisi. Sed vel purus vel nisi fermentum consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida..

    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    - Sed at neque

    - velit consectetur gravida.-Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi. Sed vel purus vel nisi fermentum consectetur

    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.`,
    sub_title4_C: 'Conclusion',
    paragraph4_C: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at lobortis velit, vel condimentum lectus. Nulla facilisi. Sed vel purus vel nisi fermentum consectetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat aliquam quis tenetur voluptatum voluptas doloremque laborum voluptatibus ullam eos dolores, molestias nihil obcaecati perferendis asperiores hic, ipsa quasi autem nostrum, harum id optio fugit impedit placeat? Odit repellendus voluptatibus fugit rerum vel saepe dolorem hic animi debitis quos culpa alias recusandae qui sit laboriosam nostrum exercitationem natus dicta in, nisi a quasi, laborum doloremque. Quisquam laboriosam nisi voluptate corporis perferendis beatae eius autem laudantium, repellendus tempore quidem sunt sed adipisci facilis dolores sapiente dolorem? Mollitia laborum commodi ipsam laboriosam distinctio earum ex provident incidunt quisquam voluptas, minus iusto nisi. Sed vel purus vel nisi fermentum consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.. Sed vel purus vel nisiLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque vel velit consectetur gravida.`
}

textAreaBody.style.whiteSpace = 'pre-line',
textAreaBodyB.style.whiteSpace = 'pre-line';


section1.onclick = () =>{
    textAreaHeading.textContent = Doc1.sub_title1_I;
    textAreaBody.textContent = Doc1.paragraph1_I;
    section1.style.borderBottom = 'solid 2px lightseagreen',
    section1.style.color = 'lightseagreen',
    section2.style.borderBottom = '1px solid gray',
    section2.style.color = 'rgb(82, 82, 82)',
    section3.style.borderBottom = '1px solid gray',
    section3.style.color = 'rgb(82, 82, 82)',
    section4.style.borderBottom = '1px solid gray',
    section4.style.color = 'rgb(82, 82, 82)';

};
section2.onclick = () =>{
    textAreaHeading.textContent = Doc1.sub_title2_T;
    textAreaBody.textContent = Doc1.paragraph2_T;
    section2.style.borderBottom = 'solid 2px lightseagreen',
    section2.style.color = 'lightseagreen',
    section1.style.borderBottom = '1px solid gray',
    section1.style.color = 'rgb(82, 82, 82)',
    section3.style.borderBottom = '1px solid gray',
    section3.style.color = 'rgb(82, 82, 82)',
    section4.style.borderBottom = '1px solid gray',
    section4.style.color = 'rgb(82, 82, 82)';
};
section3.onclick = () =>{
    textAreaHeading.textContent = Doc1.sub_title3_M;
    textAreaBody.textContent = Doc1.paragraph3_M;
    section3.style.borderBottom = 'solid 2px lightseagreen',
    section3.style.color = 'lightseagreen',
    section2.style.borderBottom = '1px solid gray',
    section2.style.color = 'rgb(82, 82, 82)',
    section1.style.borderBottom = '1px solid gray',
    section1.style.color = 'rgb(82, 82, 82)',
    section4.style.borderBottom = '1px solid gray',
    section4.style.color = 'rgb(82, 82, 82)';
};
section4.onclick = () =>{
    textAreaHeading.textContent = Doc1.sub_title4_C;
    textAreaBody.textContent = Doc1.paragraph4_C;
    section4.style.borderBottom = 'solid 2px lightseagreen',
    section4.style.color = 'lightseagreen',
    section2.style.borderBottom = '1px solid gray',
    section2.style.color = 'rgb(82, 82, 82)',
    section3.style.borderBottom = '1px solid gray',
    section3.style.color = 'rgb(82, 82, 82)',
    section1.style.borderBottom = '1px solid gray',
    section1.style.color = 'rgb(82, 82, 82)';

}

sectionB1.onclick = () =>{
    textAreaHeadingB.textContent = Doc2.sub_title1_I;
    textAreaBodyB.textContent = Doc2.paragraph1_I;
    sectionB1.style.borderBottom = 'solid 2px lightseagreen',
    sectionB1.style.color = 'lightseagreen',
    sectionB2.style.borderBottom = '1px solid gray',
    sectionB2.style.color = 'rgb(82, 82, 82)',
    sectionB3.style.borderBottom = '1px solid gray',
    sectionB3.style.color = 'rgb(82, 82, 82)',
    sectionB4.style.borderBottom = '1px solid gray',
    sectionB4.style.color = 'rgb(82, 82, 82)';

};
sectionB2.onclick = () =>{
    textAreaHeadingB.textContent = Doc2.sub_title2_T;
    textAreaBodyB.textContent = Doc2.paragraph2_T;
    sectionB2.style.borderBottom = 'solid 2px lightseagreen',
    sectionB2.style.color = 'lightseagreen',
    sectionB1.style.borderBottom = '1px solid gray',
    sectionB1.style.color = 'rgb(82, 82, 82)',
    sectionB3.style.borderBottom = '1px solid gray',
    sectionB3.style.color = 'rgb(82, 82, 82)',
    sectionB4.style.borderBottom = '1px solid gray',
    sectionB4.style.color = 'rgb(82, 82, 82)';
};
sectionB3.onclick = () =>{
    textAreaHeadingB.textContent = Doc2.sub_title3_S;
    textAreaBodyB.textContent = Doc2.paragraph3_S;
    sectionB3.style.borderBottom = 'solid 2px lightseagreen',
    sectionB3.style.color = 'lightseagreen',
    sectionB2.style.borderBottom = '1px solid gray',
    sectionB2.style.color = 'rgb(82, 82, 82)',
    sectionB1.style.borderBottom = '1px solid gray',
    sectionB1.style.color = 'rgb(82, 82, 82)',
    sectionB4.style.borderBottom = '1px solid gray',
    sectionB4.style.color = 'rgb(82, 82, 82)';
};
sectionB4.onclick = () =>{
    textAreaHeadingB.textContent = Doc2.sub_title4_C;
    textAreaBodyB.textContent = Doc2.paragraph4_C;
    sectionB4.style.borderBottom = 'solid 2px lightseagreen',
    sectionB4.style.color = 'lightseagreen',
    sectionB2.style.borderBottom = '1px solid gray',
    sectionB2.style.color = 'rgb(82, 82, 82)',
    sectionB3.style.borderBottom = '1px solid gray',
    sectionB3.style.color = 'rgb(82, 82, 82)',
    sectionB1.style.borderBottom = '1px solid gray',
    sectionB1.style.color = 'rgb(82, 82, 82)';

}