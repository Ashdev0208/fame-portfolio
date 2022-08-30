window.addEventListener("DOMContentLoaded", () => {
  //elements
  const img = document.querySelector(".bg img"),
    openModal = document.querySelectorAll("ion-icon"),
    links = document.querySelector(".link-container"),
    tabs = document.querySelectorAll(".tabs li"),
    tabText = document.querySelectorAll(".tab-text"),
    cardContent = document.querySelector(".card-content");
  // img move
  window.addEventListener("mousemove", (e) => {
    img.style.left = `-${e.pageX / 30}px`;
    img.style.top = `-${e.pageY / 30}px`;
  });
  // modal
  openModal.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("menu")) {
        links.classList.add("active");
      } else {
        links.classList.remove("active");
      }
    });
  });
  window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".link-container")) {
      links.classList.remove("active");
    }
  });
  // tab in text

  let text = [
    `Hey! My name is Shuxrat . my surname Abdusalomov. I’m video creater. I make about people,
  their characters, their names. I currently live in Payarik district, Samarkand region of Uzbekistan.. <br><br> Mart 21, 2003. For orders, please contact me at fame.editor2003@gmail.com. I am currently studying. I am an 8th grade student of school 69.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    `At ultrices mi tempus imperdiet nulla malesuada. Enim praesent elementum facilisis leo vel fringilla est. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt.<br><br>Condimentum vitae sapien pellentesque habitant morbi tristique. Laoreet id donec ultrices tincidunt arcu non. Interdum velit euismod in pellentesque massa. `,
  ];
  for (i = 0; i < tabs.length; i++) {
    tabText[i].innerHTML = text[i];
  }
  tabs.forEach((item, index) => {
    item.addEventListener("click", () => {
      tabText.forEach((tabtext) => {
        tabtext.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabText[index].classList.add("active");
      tabs[index].classList.add("active");
    });
  });
  // dynamic cards
  let src = ["cardimg0.jpg", "cardimg1.jpg", "cardimg2.jpg"],
    subtitle = [" create basic picture", "fame or logan", "cartoon picture"],
    title = [`cyber a life`, "logan", `window text`];
  class Card {
    constructor(src, subtitle, title) {
      this.src = src;
      this.subtitle = subtitle;
      this.title = title;
    }
    render() {
      let element = document.createElement("div");
      element.classList.add("card");
      element.innerHTML = `
       <div class="card-img"><img src="img/${this.src}" alt="img"></div>
       <div class="txt-size title-text txt-c">${this.subtitle}</div>
       <div class="small-title link txt-c"><a href="#">${this.title}</a></div>
       <div class="title-text txt-size txt-c" style="color: #fff;">by abdusalomov shuxrat</div>
     `;
      cardContent.append(element);
    }
  }
  for (let i = 0; i < 3; i++) {
    let card = new Card(src[i], subtitle[i], title[i]).render();
  }
  //   slider
  let slideText = [
      `“Hello everyone, the video made for my names turned out very well”`,
      `“the picture that fame made for me is really cool and makes superman's face look so much like mine.”`,
      `“Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eveniet sequi maiores laborum quibusdam ullam, error quam ipsam qui quos!”`,
    ],
    names = [
      `abdulayev Jahon`,
      `sobirov Voxid`,      
      `komilova sevinch`,
    ],
    urls = [`img/avatar.png`, `img/avatar (1).png`, `img/avatar (2).png`];
  const contentElement = document.querySelector(
      ".testimonials .col-6.pl5 .row"
    ),
    arrows = document.querySelectorAll(".arrow span");
  for (i = 0; i < 3; i++) {
    let createSlider = document.createElement("div");
    createSlider.innerHTML = `
      <div class="tab-text" style="opacity: 1;position: relative;margin-bottom: 20px;">${slideText[i]}</div>
      <div class="subject row ai-c">
        <div class="person">
          <div class="title-text txt-size">${names[i]}</div>
          <div class="date txt-size">2022 3-september</div>
        </div>
        <div class="avatar"><img src="${urls[i]}" alt=""></div>
      </div>
      `;
    createSlider.classList.add("content");
    contentElement.append(createSlider);
  }
  let j = 0,
    interval = setInterval(() => {
      j++;
      if (j >= 3) {
        j = 0;
      }
      contentElement.style.marginLeft = `-${j * 99}%`;
    }, 6000);
  arrows.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("arrow-right")) {
        clearInterval(interval);
        j--;
        if (j >= 3) {
          j = 0;
        } else if (j == -1) {
          j = 2;
        }

        contentElement.style.marginLeft = `-${j * 99}%`;
        interval = setInterval(() => {
          j++;
          if (j >= 3) {
            j = 0;
          }
          contentElement.style.marginLeft = `-${j * 99}%`;
        }, 6000);
      } else {
        clearInterval(interval);
        j++;
        if (j >= 3) {
          j = 0;
        }
        contentElement.style.marginLeft = `-${j * 99}%`;
        interval = setInterval(() => {
          j++;
          if (j >= 3) {
            j = 0;
          }
          contentElement.style.marginLeft = `-${j * 99}%`;
        }, 6000);
      }
    });
  });
});
