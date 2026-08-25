// 作品資料（可自行擴充）
const works = [
  {
    title: "Vtuber新衣裝精華",
    type: "game clip",
    video: "https://youtu.be/fYsgIFCZYG8?si=Tf6-l9Zfl_q0XzLZ"
  },
  {
    title: "明新科大企業訂單式教學精華",
    type: "education",
    video: "https://youtu.be/dkUi44ap3rc"
  },
  {
    title: "芎林113花啦嗶啵踩街",
    type: "VLOG",
    video: "https://youtu.be/aSjO7ZXCDo8"
  },
  {
    // 信託有愛徵影活動
    title: "信託有愛徵影活動",
    type: "short film",
    video: "https://youtu.be/1-jj6QtlC6s"
  },
  {
    // 專題紀錄片
    title: "太魯閣生態紀錄片",
    type: "documentary",
    video: "https://youtu.be/KmQ8KaXMz1k"
  },
  {
    title: "綠島生態紀錄片",
    type: "documentary",
    video: "https://youtu.be/trn-TVT_S2g"
  },
  {
    // 茉茉
    title: "Vtuber遊戲精華",
    type: "game clip",
    video: "https://youtu.be/oImiKDPyX-I?si=lelfddHaaE6UI4uj"
  },
  {
    // 鳥鳥
    title: "【鳥鳥】遊戲精華",
    type: "game clip",
    video: "https://youtu.be/NSIlAAM77fU?si=QP7rwTI72_aqc9F4"
  },
  {
    title: "【小薰】遊戲精華",
    type: "game clip",
    video: "https://youtu.be/tenM8oQgjws?si=dssyfsIyK5H0C9L_"
  },
  {
    title: "【小薰】遊戲精華",
    type: "game clip",
    video: "https://youtu.be/S-ERW0v1V3o?si=CUDxJ2NtcsauvYM-"
  },
  {
    title: "【小薰】遊戲精華",
    type: "game clip",
    video: "https://www.youtube.com/watch?v=KK8jmO-_7Wk"
  },
  {
    title: "【小薰】遊戲精華",
    type: "game clip",
    video: "https://www.youtube.com/watch?v=X0opK-UPz_M"
  },
  {
    // 鳥鳥
    title: "【鳥鳥】遊戲精華",
    type: "game clip",
    video: "https://www.youtube.com/watch?v=9WfLA5YfGQU"
  },
  {
    // JBwhite
    title: "【JBwhite】遊戲精華",
    type: "game clip",
    video: "https://youtu.be/3ulbOsmoN2Y"
  },
  {
    // JBwhite
    title: "【JBwhite】遊戲精華",
    type: "game clip",
    video: "https://youtu.be/jGydqjonqHQ"
  },
  {
    // JBwhite
    title: "【JBwhite】遊戲精華",
    type: "game clip",
    video: "https://youtu.be/Fw4QBGg5KdY"
  },
  {
    title: "PV",
    type: "PV",
    video: "https://www.youtube.com/watch?v=mcYxWT44KXk"
  },
  {
    title: "【小薰】緋紅之心 工商",
    type: "ad",
    video: "https://youtu.be/mBV0bVURXYU?si=r6FgZyJ8EEXfe2Cb"
  },
  {
    title: "【小薰】SurfShark 工商",
    type: "ad",
    video: "https://youtu.be/aGefWu5xptg?si=-Ffgdpz2lHyfS16I"
  },
  {
    title: "【小薰】工商",
    type: "ad",
    video: "https://www.youtube.com/watch?v=DBtyK4-nEA4"
  },
  {
    title: "【小薰】工商",
    type: "ad",
    video: "https://youtu.be/J7VZype94NM?si=W2ctSuiuskobzxLy"
  },
  {
    title: "【小薰】遊戲教學/說書",
    type: "game tutorial",
    video: "https://youtu.be/1ha60NATVUw?si=IkZJCBf73jcrxIVb"
  },
  {
    title: "【小薰】遊戲教學/說書",
    type: "game tutorial",
    video: "https://youtu.be/1oM8SEM0Pog?si=09Lf5K3h9mmk8SCv"
  },
  {
    title: "【小薰】日常",
    type: "daily",
    video: "https://youtu.be/uvOvOteMv_0?si=NeLJBNhzzrDzLjCC"
  },
  {
    title: "【小薰】日常",
    type: "daily",
    video: "https://youtu.be/MHfAz1EPZZ4?si=11CGfv2XTKINJ2-B"
  },
  {
    title: "【小薰】日常",
    type: "daily",
    video: "https://youtu.be/cAGsGPFqJHU?si=aHdGmnktCmgHkPDF"
  },
  {
    title: "【小薰】日常",
    type: "daily",
    video: "https://youtu.be/_M2psR1h96A?si=-s6k--H6jIKFXdN1"
  },
  {
    title: "【小薰】日常",
    type: "daily",
    video: "https://youtu.be/eJC9GhnIYUI?si=mQXy0ew4QWPsjVxt"
  },
  {
    title: "【小薰】VLOG",
    type: "VLOG",
    video: "https://youtu.be/lgTRdQt9St4?si=TlOq4ObqJjZrwpJb"
  },
  //
  {
    title: "【小薰】VLOG",
    type: "VLOG",
    video: "https://www.youtube.com/watch?v=PgZMgh9h-BE"
  },
  {
    title: "【小薰】VLOG",
    type: "VLOG",
    video: "https://www.youtube.com/watch?v=Wi11SPpYlgo"
  },
  // 2026 加班台環島企劃 
  {
    title: "【小薰】2026 加班台環島企劃",
    type: "shorts",
    video: "https://youtube.com/shorts/ea92NvlMLPs?si=0sSmS65f72_hRSVy"
  },
  {
    title: "【小薰】2026 加班台環島企劃",
    type: "shorts",
    video: "https://youtube.com/shorts/VLcXHIPyauM?si=EDuJTdSm2xnoEpsZ"
  },
  {
    title: "【小薰】2026 加班台環島企劃",
    type: "shorts",
    video: "https://youtube.com/shorts/8eFvm6aG_n0?si=f2U0r1Zt6ceUFrR4"
  },
  {
    title: "【小薰】2026 加班台環島企劃",
    type: "shorts",
    video: "https://youtube.com/shorts/GX3JRORr8Qc?si=M4bCcjHZ_3bUJkW1"
  },
  // ---
  {
    title: "【小薰】2026 加班台環島企劃",
    type: "shorts",
    video: "https://youtube.com/shorts/CWJNs4RQeuA?si=-gB8VQZ423B89qok"
  },
  {
    title: "【小薰】2026 加班台環島企劃",
    type: "shorts",
    video: "https://youtube.com/shorts/Bgw7Pl920fI?si=t5ZSdUZXDagMp23Q"
  },
  {
    title: "【小薰】遊戲冷知識",
    type: "shorts",
    video: "https://www.youtube.com/shorts/7FflMgthsSo"
  },
  {
    title: "【小薰】日常",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=iyAL3j9F2B4"
  },
  {
    title: "【小薰】VLOG",
    type: "shorts",
    video: "https://youtube.com/shorts/mL9wyiPDpts"
  },
  {
    title: "【小薰】日常",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=vEIBt6b1zlo"
  },
  {
    title: "【小薰】VLOG",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=Nrzfs8fkpkM"
  },
  {
    //茉茉
    title: "VTuber",
    type: "shorts",
    video: "https://youtube.com/shorts/dhOUNMoysvw?feature=share"
  },
  {
    //茉茉
    title: "VTuber",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=87j0_bLR8Uc"
  },
  {
    //茉茉
    title: "VTuber",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=K0btja-xNAk"
  },
  {
    //茉茉
    title: "VTuber",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=ZJy6sdwU7nE"
  },
  {
    //茉茉
    title: "VTuber",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=YN2ejvDgBDE"
  },
  {
    title: "Annin Miru 杏仁ミル 實況精華",
    type: "fan art",
    video: "https://youtu.be/SmZvl_R8fHI"
  },
  {
    title: "Annin Miru 杏仁ミル 實況精華",
    type: "fan art",
    video: "https://youtu.be/cfStM6di-eo"
  },
];
window.works = works;


// 動態產生作品縮圖
function renderWorks(filter = "all") {
  const grid = document.querySelector('.works-grid');

  // 定義一個產生單一作品 HTML 的輔助函數，確保兩次渲染的結構完全一樣
  function createWorkElement(w) {
    const div = document.createElement('div');
    div.className = 'work';
    div.setAttribute('data-video', w.video);

    // 取得 YouTube ID
    let ytId = '';
    try {
      const url = new URL(w.video);
      if (url.hostname.includes('youtu.be')) {
        ytId = url.pathname.slice(1, 12);
      } else if (url.hostname.includes('youtube.com')) {
        if (url.pathname.includes('/shorts/')) {
          ytId = url.pathname.split('/shorts/')[1].slice(0, 11);
        } else {
          ytId = url.searchParams.get('v');
        }
      }
    } catch { }

    let thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : 'public/images/default-thumb.jpg';

    // 根據不同的分類給予不同的 #標籤說明
    let tags = "";
    if (w.type === "game clip") tags = "#長影音 #遊戲精華 #節奏掌控";
    else if (w.type === "shorts") tags = "#短影音 #網感快剪";
    else if (w.type === "documentary") tags = "#長影音 #生態紀錄片";
    else if (w.type === "ad") tags = "#工商 #企劃腳本";
    else if (w.type === "VLOG") tags = "#VLOG #生活紀錄";
    else tags = "#影片剪輯";

    // 戰績 Badge 判斷與分類
    let badgeHtml = "";
    let badgeClass = "";
    let badgeText = "";

    if (w.title.includes("環島")) {
      // 爆發力企劃 (粉紅)
      badgeClass = "badge-pink";
      badgeText = "16天產出 41支短片";
    } 
    else if (w.type === "education" || w.title.includes("政府") || w.title.includes("教育")|| w.title.includes("芎林")) {
      // 公家/教育機關背書 (金色)
      badgeClass = "badge-gold";
      badgeText = "官方指定合作";
    } 
    else if (w.type === "ad" || w.title.includes("工商")) {
      // 品牌合作 (紫色)
      badgeClass = "badge-purple";
      badgeText = "品牌工商企劃";
    } 
    else if (w.type === "documentary") {
      // 紀錄片 (綠色)
      badgeClass = "badge-green";
      badgeText = "深度專題紀錄";
    } 
    else if (w.type === "PV" || w.type === "short film") {
      // 微電影與 PV (藍色)
      badgeClass = "badge-blue";
      badgeText = "高質感影像製作";
    } 
    else if (w.type === "game clip") {
      // 遊戲精華 (橘色)
      badgeClass = "badge-orange";
      badgeText = "高留存節奏剪輯";
    } 
    else if (w.type === "game tutorial") {
      // 教學與說書 (紅色)
      badgeClass = "badge-red";
      badgeText = "高流量系列";
    } 
    else if (w.type === "VLOG") {
      // VLOG (湖水綠)
      badgeClass = "badge-teal";
      badgeText = "生活風格紀錄";
    }
    else if (w.type === "daily") {
      // 日常 (質感灰)
      badgeClass = "badge-gray";
      badgeText = "輕鬆日常剪輯";
    }
    else if (w.type === "fan art") {
      // 二創 (青綠色)
      badgeClass = "badge-cyan";
      badgeText = "創意社群二創";
    }

    // 只有在有賦予文字時，才生成 Badge HTML
    if (badgeText !== "") {
      badgeHtml = `<span class="badge ${badgeClass}">${badgeText}</span>`;
    }

    // 組裝 HTML 結構
    div.innerHTML = `
      <img src="${thumbUrl}" alt="${w.title}">
      ${badgeHtml}
      <div class="overlay">
          <h3>${w.title}</h3>
          <p>${tags}</p>
      </div>
    `;
    return div;
  }

  // 先讓舊內容做向右伸展淡出動畫
  if (grid.children.length > 0) {
    grid.classList.add('works-transition-out');
    setTimeout(() => {
      grid.innerHTML = '';
      works.filter(w => filter === "all" || w.type === filter)
        .forEach(w => {
          grid.appendChild(createWorkElement(w));
        });
      addWorkEvents();
      // 新內容向右伸展淡入動畫
      grid.classList.remove('works-transition-out');
      grid.classList.add('works-transition-in');
      setTimeout(() => {
        grid.classList.remove('works-transition-in');
      }, 500);
    }, 400);
    return;
  }

  // 首次渲染直接顯示
  grid.innerHTML = '';
  works.filter(w => filter === "all" || w.type === filter)
    .forEach(w => {
      grid.appendChild(createWorkElement(w));
    });
  addWorkEvents();
}

// 作品 hover 動畫與點擊燈箱
function addWorkEvents() {
  document.querySelectorAll('.works-grid .work').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { scale: 1.05, filter: 'brightness(1.2)', duration: 0.3 });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { scale: 1, filter: 'none', duration: 0.3 });
    });
    item.addEventListener('click', () => {
      const videoSrc = item.getAttribute('data-video');
      const lightbox = document.getElementById('lightbox');
      const content = lightbox.querySelector('.lightbox-content');
      const container = lightbox.querySelector('.video-container');
      // 取得 YouTube 影片 ID
      const ytMatch = videoSrc.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([\w-]+)/);
      // 判斷是否短影音
      let isShorts = false;
      const worksArr = Array.from(document.querySelectorAll('.works-grid .work'));
      const idx = worksArr.indexOf(item);
      if (window.works && window.works[idx] && window.works[idx].type === 'shorts') {
        isShorts = true;
      }
      // 設定 lightbox 尺寸 class
      container.classList.remove('vertical-video', 'horizontal-video');
      if (isShorts) {
        container.classList.add('vertical-video');
      } else {
        container.classList.add('horizontal-video');
      }
      if (ytMatch) {
        const ytId = ytMatch[1];
        container.innerHTML = `<iframe width="${isShorts ? 768 : 1366}" height="${isShorts ? 1366 : 768}" src="https://www.youtube.com/embed/${ytId}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
      } else {
        container.innerHTML = '影片連結格式錯誤';
      }
      lightbox.classList.remove('hidden');
      gsap.fromTo(lightbox, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(content, { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' });
    });
  });
}

// 濾鏡按鈕互動
if (document.querySelectorAll('.filters button').length) {
  // 確保"全部"按鈕預設被選中
  const allButton = document.querySelector('.filters button[data-filter="all"]');
  if (allButton) {
    allButton.classList.add('active');
  }

  document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWorks(btn.getAttribute('data-filter'));
    });
  });
}

// 燈箱關閉
if (document.querySelector('.lightbox .close')) {
  const lightbox = document.getElementById('lightbox');
  const content = lightbox.querySelector('.lightbox-content');
  const closeLightbox = () => {
    gsap.to(content, {
      scale: 0.7,
      opacity: 0,
      duration: 0.5,
      ease: 'back.in(1.7)',
      onComplete: () => {
        gsap.to(lightbox, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            lightbox.classList.add('hidden');
            lightbox.querySelector('.video-container').innerHTML = '';
            gsap.set(content, { clearProps: 'scale,opacity' });
            gsap.set(lightbox, { clearProps: 'opacity' });
          }
        });
      }
    });
  };
  document.querySelector('.lightbox .close').addEventListener('click', closeLightbox);
  // 點擊遮罩區域關閉
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  // 按 ESC 關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) closeLightbox();
  });
}

// 首頁電影級進場與打字機動畫
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  const introSection = document.querySelector('.intro.section-page');
  const typewriter = document.querySelector('.typewriter');

  if (introSection && window.gsap) {
    // 1. GSAP 錯落漸顯進場 (頭像先出 -> 標題浮現 -> 按鈕浮現)
    const tl = gsap.timeline();
    tl.fromTo('.intro .avatar', { y: 40, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 })
      .fromTo('.intro h1', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
      .fromTo('.home-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6');
  }

  // 2. 打字機質感優化 (配合進場節奏，只打一次並留著游標閃爍)
  if (typewriter) {
    const text = typewriter.textContent;
    typewriter.textContent = '';
    typewriter.classList.add('typing-cursor'); // 加上閃爍游標
    let i = 0;
    
    function typing() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 90); // 稍微放慢打字速度，更有從容的自信感
      } else {
        // 打字結束後，5秒後將游標隱藏，讓畫面完全乾淨
        setTimeout(() => {
          typewriter.classList.remove('typing-cursor');
        }, 5000);
      }
    }
    
    // 等待 GSAP 大標題進場差不多後 (約 1.2秒)，再開始打字
    setTimeout(typing, 1200);
  }
});

// 初始渲染
if (document.querySelector('.works-grid')) {
  renderWorks();
}

// 首頁按鈕點擊進入作品集
// 首頁按鈕點擊進入作品集
const homeBtn = document.querySelector('.home-btn');
if (homeBtn) {
  homeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // 為了防止使用者狂點，點擊後先暫時禁用按鈕
    this.style.pointerEvents = 'none';
    
    // 1. 移除首頁狀態，讓背後的粒子特效提早一拍開始浮現
    document.body.classList.remove('show-intro');

    // 2. 首頁元素：用 GSAP 讓元素錯落向上淡出
    if (window.gsap) {
      gsap.to(['.intro .avatar', '.intro h1', '.typewriter', '.home-btn'], {
        y: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1, // 每個元素間隔 0.1 秒離開
        ease: 'power2.in'
      });
      gsap.to('.intro-bg-thumb img', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut'
      });

      // 3. 過場黑幕：改用 GSAP 絲滑拉下
      const transition = document.getElementById('page-transition');
      setTimeout(() => {
        gsap.to(transition, {
          y: 0, 
          duration: 0.6, 
          ease: "power2.inOut",
          onComplete: () => {
            
            // 4. 黑幕蓋滿時，在背後偷偷切換頁面
            document.querySelectorAll('.section-page').forEach(page => {
              page.style.display = 'none';
            });
            document.querySelector('.portfolio.section-page').style.display = 'block';
            document.querySelector('.main-nav').style.display = 'flex';
            
            // 確保導覽列的「作品」按鈕呈現高亮
            document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
            const portfolioTab = document.querySelector('.main-nav a[data-section="portfolio"]');
            if (portfolioTab) portfolioTab.classList.add('active');
            
            // 滾動回最上方
            window.scrollTo(0, 0);
            
            // 5. 黑幕絲滑拉起，正式進入作品集
            gsap.to(transition, {
              y: '-100%', 
              duration: 0.6, 
              ease: "power2.inOut",
              onComplete: () => {
                homeBtn.style.pointerEvents = 'auto'; 
                gsap.set(['.intro .avatar', '.intro h1', '.typewriter', '.home-btn'], { clearProps: 'all' });
              }
            });
            
            // 6. 補上失去的進場特效：作品集專屬的「錯落浮現動畫」
            // 讓標題、按鈕、作品網格，在黑幕拉開時有層次地向上升起
            gsap.fromTo('.portfolio h2', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 });
            gsap.fromTo('.filters', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.works-grid', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 });
          }
        });
      }, 500); // 配合首頁元素退場的時間，提早一點點拉下黑幕
    }
  });
}

// LOGO點擊回首頁（遮罩轉場，首頁跟遮罩一起進場）
const logoLink = document.querySelector('.logo-link');
if (logoLink) {
  logoLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.add('show-intro'); 
    document.body.classList.remove('site-entered'); 
    
    // 【新增】回到首頁時，清除所有導覽列按鈕的高亮狀態
    document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));

    const transition = document.getElementById('page-transition');
    
    // 1. 黑幕絲滑拉下
    gsap.to(transition, {
      y: 0, duration: 0.6, ease: "power2.inOut", onComplete: () => {
        
        // 2. 隱藏所有內部區塊，準備顯示首頁
        document.querySelectorAll('.section-page').forEach(page => {
          page.style.display = 'none';
        });
        const intro = document.querySelector('header.intro.section-page');
        const nav = document.querySelector('.main-nav');
        nav.style.display = 'none'; // 隱藏導覽列
        
        // 3. 確保畫面回到最上方
        window.scrollTo(0, 0);

        // 4. 【關鍵修復】清除首頁所有元素的隱藏狀態 (包含剛才漏掉的背景圖 .intro-bg-thumb img)
        if (window.gsap) {
          gsap.set(['.intro .avatar', '.intro h1', '.typewriter', '.home-btn', '.intro-bg-thumb img'], { clearProps: 'all' });
        }

        // 5. 黑幕拉起，並讓首頁元素再次帥氣浮現
        gsap.to(transition, {
          y: '-100%', duration: 0.6, ease: "power2.inOut",
          onStart: () => {
            intro.style.display = 'flex';
            
            // 重新播放首頁的漸次進場動畫
            if (window.gsap) {
              const tl = gsap.timeline();
              tl.fromTo('.intro .avatar', { y: 40, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 })
                .fromTo('.intro h1', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
                .fromTo('.home-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6');
            }
          }
        });
      }
    });
  });
}

// 偽多頁式切換：導覽列切換時只顯示對應區塊（所有按鈕都只用遮罩動畫）
if (document.querySelectorAll('.main-nav a').length) {
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      // 排除 logo-link
      if (this.classList.contains('logo-link')) return;
      const section = this.getAttribute('data-section');
      if (section) {
        
        // 【關鍵修復】點擊導覽列時，更新按鈕的高亮 (active) 狀態
        document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        // 移除 body.show-about 控制，統一用 display 控制顯示
        if (section !== 'intro') {
          document.body.classList.remove('show-intro'); // <== 補上這行，確保在其他頁面時都會顯示粒子
          e.preventDefault();
          const transition = document.getElementById('page-transition');
          gsap.to(transition, {
            y: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
              window.scrollTo({ top: 0, behavior: 'auto' }); // 加入這行重置滾動條
              document.querySelectorAll('.section-page').forEach(page => {
                if (page.getAttribute('data-section') === section) {
                  // about 區塊用 flex，其他用 block
                  if (section === 'about') {
                    page.style.display = 'flex';
                    // 重新綁定 about-more-btn 互動
                    const moreBtn = document.querySelector('.about-more-btn');
                    const qaBox = document.querySelector('.about-qa');
                    if (moreBtn && qaBox) {
                      moreBtn.onclick = null;
                      moreBtn.addEventListener('click', function () {
                        if (qaBox.style.display === 'none' || qaBox.style.display === '') {
                          qaBox.style.display = 'block';
                          setTimeout(() => { qaBox.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 200);
                          moreBtn.textContent = '收合';
                        } else {
                          qaBox.style.display = 'none';
                          moreBtn.textContent = '更多關於我';
                        }
                      });
                    }
                  } else {
                    page.style.display = 'block';
                  }
                } else {
                  page.style.display = 'none';
                }
              });
              // nav 顯示/隱藏
              const nav = document.querySelector('.main-nav');
              if (nav) {
                nav.offsetHeight;
                nav.style.display = 'flex';
              }
              // 進入作品集時預設高亮「全部」
              if (section === 'portfolio') {
                document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
                const allButton = document.querySelector('.filters button[data-filter="all"]');
                if (allButton) allButton.classList.add('active');
              }
              renderWorks();
              const grid = document.querySelector('.works-grid');
              if (grid) grid.offsetHeight;
              window.dispatchEvent(new Event('resize'));
              setTimeout(() => {
                gsap.to(transition, { y: '-100%', duration: 0.5, ease: "power2.out" });
                // 粒子設定切換
                particlesJS.load('particles-js', 'public/particles.json', function () { });
              }, 400);
            }
          });
        } else {
          // intro（首頁）
          e.preventDefault();
          document.querySelectorAll('.section-page').forEach(page => {
            if (page.getAttribute('data-section') === section) {
              page.style.display = 'flex';
            } else {
              page.style.display = 'none';
            }
          });
          const nav = document.querySelector('.main-nav');
          nav.style.display = 'none';
        }
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('particles-js')) {
    particlesJS.load('particles-js', 'public/particles.json', function () {
      // 粒子特效載入完成
    });
  }
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function (e) {
      const isActive = this.classList.contains('show-desc');
      // 關閉所有
      document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('show-desc'));
      // 只在原本沒開啟時才開啟
      if (!isActive) {
        this.classList.add('show-desc');
      }
      e.stopPropagation();
    });
  });
  document.body.addEventListener('click', function () {
    document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('show-desc'));
  });
  // 新增：按下 ESC 關閉 skill-desc-text
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('show-desc'));
    }
  });
  // 報價按鈕互動
  const quoteBtn = document.querySelector('.quote-btn');
  const cliboEmbed = document.querySelector('.clibo-embed');
  if (quoteBtn && cliboEmbed) {
    quoteBtn.addEventListener('click', function () {
      const isShow = cliboEmbed.classList.contains('show');
      if (!isShow) {
        cliboEmbed.classList.add('show');
        setTimeout(() => {
          cliboEmbed.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      } else {
        cliboEmbed.classList.remove('show');
      }
    });
  }
  // Clibo 報價 iframe 載入完成時移除 skeleton loading
  const cliboIframe = document.querySelector('.clibo-iframe');
  if (cliboIframe && cliboEmbed) {
    cliboIframe.addEventListener('load', function () {
      cliboEmbed.classList.add('loaded');
    });
  }

  // 2. 技能條動畫
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const percent = bar.getAttribute('data-percent') || '80';
    const fill = bar.querySelector('.bar-fill');
    setTimeout(() => {
      fill.style.width = percent + '%';
    }, 600);
  });

  // 3. 更多關於我 Q&A 展開（主動綁定，確保任何情況都能互動）
  const moreBtn = document.querySelector('.about-more-btn');
  const qaBox = document.querySelector('.about-qa');
  if (moreBtn && qaBox) {
    moreBtn.onclick = null;
    moreBtn.addEventListener('click', function () {
      if (qaBox.style.display === 'none' || qaBox.style.display === '') {
        qaBox.style.display = 'block';
        setTimeout(() => { qaBox.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 200);
        moreBtn.textContent = '收合';
      } else {
        qaBox.style.display = 'none';
        moreBtn.textContent = '更多關於我';
      }
    });
  }

  // 4. 頭像點擊抖動+座右銘
  const avatar = document.getElementById('about-avatar');
  const quoteCard = document.getElementById('about-quote-card');
  const quote = document.getElementById('about-quote');
  const quotes = [
    '剪輯，是讓故事發光的魔法。',
    '得到良好的反饋，是持續創作的動力',
    '用畫面說故事，讓觀眾感動。',
    '創作，是與世界對話的方式。',
    '讓每個瞬間都值得被記錄。',
    '剪輯，是節奏與情感的藝術。'
  ];
  let isAvatarAnimating = false;
  if (avatar && quote && quoteCard) {
    avatar.addEventListener('click', function () {
      if (isAvatarAnimating) return;
      isAvatarAnimating = true;

      // 暫停 hover 效果
      avatar.classList.add('no-hover');

      avatar.classList.remove('active');
      void avatar.offsetWidth; // 觸發 reflow
      avatar.classList.add('active');
      const q = quotes[Math.floor(Math.random() * quotes.length)];
      quote.textContent = q;
      quoteCard.style.display = 'block';
      quoteCard.classList.add('show-quote-anim');

      // 點擊時隱藏 tooltip
      const tooltip = document.querySelector('.avatar-tooltip');
      if (tooltip) tooltip.style.display = 'none';

      // 在手機版時自動滾動到座右銘位置
      if (window.innerWidth <= 700) {
        setTimeout(() => {
          quoteCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 300);
      }

      setTimeout(() => {
        quoteCard.classList.remove('show-quote-anim');
        quoteCard.style.display = 'none';

        // 等待動畫完全結束後再恢復 hover 效果
        setTimeout(() => {
          avatar.classList.remove('no-hover');
          isAvatarAnimating = false;
        }, 300);
      }, 3200);
    });

    avatar.addEventListener('animationend', function () {
      avatar.classList.remove('active');
    });
  }

  // 頭像 hover 顯示說明
  const avatarWrap = document.querySelector('.avatar-hover-wrap');
  if (avatarWrap) {
    const tooltip = avatarWrap.querySelector('.avatar-tooltip');
    const avatarImg = avatarWrap.querySelector('.about-avatar');
    if (tooltip && avatarImg) {
      avatarImg.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
      });
      avatarImg.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
      // 也支援鍵盤 focus
      avatarImg.addEventListener('focus', () => {
        tooltip.style.display = 'block';
      });
      avatarImg.addEventListener('blur', () => {
        tooltip.style.display = 'none';
      });
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1);
  if (hash && hash !== 'intro') {
    const targetBtn = document.querySelector(`.main-nav a[data-section="${hash}"]`);
    if (targetBtn) targetBtn.click();
  }
});