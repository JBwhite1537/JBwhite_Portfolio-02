// 作品資料（可自行擴充）
const works = [
  {
    title: "遊戲精華",
    type: "game clip",
    video: "https://www.youtube.com/watch?v=KK8jmO-_7Wk"
  },
  {
    title: "遊戲精華",
    type: "game clip",
    video: "https://www.youtube.com/watch?v=X0opK-UPz_M"
  },
  {
    // 鳥鳥
    title: "遊戲精華",
    type: "game clip",
    video: "https://www.youtube.com/watch?v=9WfLA5YfGQU"
  },
  {
    // JBwhite
    title: "遊戲精華",
    type: "game clip",
    video: "https://youtu.be/3ulbOsmoN2Y"
  },
  {
    // JBwhite
    title: "遊戲精華",
    type: "game clip",
    video: "https://youtu.be/jGydqjonqHQ"
  },
  {
    // JBwhite
    title: "遊戲精華",
    type: "game clip",
    video: "https://youtu.be/Fw4QBGg5KdY"
  },
  {
    // JBwhite
    title: "遊戲精華",
    type: "game clip",
    video: "https://youtu.be/e1un30SaLiI?si=0kyaYUyApmXr73FT"
  },
  {
    title: "PV",
    type: "PV",
    video: "https://www.youtube.com/watch?v=mcYxWT44KXk"
  },
  {
    title: "SurfShark 工商",
    type: "ad",
    video: "https://youtu.be/aGefWu5xptg?si=-Ffgdpz2lHyfS16I"
  },
  {
    title: "工商",
    type: "ad",
    video: "https://www.youtube.com/watch?v=DBtyK4-nEA4"
  },
  {
    title: "工商",
    type: "ad",
    video: "https://youtu.be/J7VZype94NM?si=W2ctSuiuskobzxLy"
  },
  {
    title: "遊戲教學/說書",
    type: "game tutorial",
    video: "https://youtu.be/1ha60NATVUw?si=IkZJCBf73jcrxIVb"
  },
  {
    title: "遊戲教學/說書",
    type: "game tutorial",
    video: "https://youtu.be/1oM8SEM0Pog?si=09Lf5K3h9mmk8SCv"
  },
  {
    title: "日常",
    type: "daily",
    video: "https://youtu.be/cAGsGPFqJHU?si=aHdGmnktCmgHkPDF"
  },
  {
    title: "日常",
    type: "daily",
    video: "https://youtu.be/_M2psR1h96A?si=-s6k--H6jIKFXdN1"
  },
  {
    title: "日常",
    type: "daily",
    video: "https://youtu.be/eJC9GhnIYUI?si=mQXy0ew4QWPsjVxt"
  },
  {
    title: "VLOG",
    type: "VLOG",
    video: "https://youtu.be/lgTRdQt9St4?si=TlOq4ObqJjZrwpJb"
  },
  {
    title: "VLOG",
    type: "VLOG",
    video: "https://www.youtube.com/watch?v=PgZMgh9h-BE"
  },
  {
    title: "VLOG",
    type: "VLOG",
    video: "https://www.youtube.com/watch?v=Wi11SPpYlgo"
  },
  {
    title: "短影音",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=iyAL3j9F2B4"
  },
  {
    title: "短影音",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=vEIBt6b1zlo"
  },
  {
    title: "短影音",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=Nrzfs8fkpkM"
  },
  {
    //茉茉
    title: "短影音",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=87j0_bLR8Uc"
  },
  {
    //茉茉
    title: "短影音",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=K0btja-xNAk"
  },
  {
    //茉茉
    title: "短影音",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=ZJy6sdwU7nE"
  },
  {
    //茉茉
    title: "短影音",
    type: "shorts",
    video: "https://www.youtube.com/watch?v=YN2ejvDgBDE"
  },
  {
    title: "二創剪輯",
    type: "fan art",
    video: "https://youtu.be/SmZvl_R8fHI"
  },
  {
    title: "二創剪輯",
    type: "fan art",
    video: "https://youtu.be/cfStM6di-eo"
  },
];
window.works = works;


// 動態產生作品縮圖
function renderWorks(filter = "all") {
  const grid = document.querySelector('.works-grid');
  // 先讓舊內容做向右伸展淡出動畫
  if (grid.children.length > 0) {
    grid.classList.add('works-transition-out');
    setTimeout(() => {
      grid.innerHTML = '';
      works.filter(w => filter === "all" || w.type === filter)
        .forEach(w => {
          const div = document.createElement('div');
          div.className = 'work';
          div.setAttribute('data-video', w.video);
          // 取得 YouTube ID（用 URL 物件解析，支援各種參數格式）
          let ytId = '';
          try {
            const url = new URL(w.video);
            if (url.hostname.includes('youtu.be')) {
              ytId = url.pathname.slice(1, 12);
            } else if (url.hostname.includes('youtube.com')) {
              ytId = url.searchParams.get('v');
            }
          } catch {}
          let thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : 'public/images/default-thumb.jpg';
          div.innerHTML = `
            <img src="${thumbUrl}" alt="${w.title}">
            <div class="work-title">${w.title}</div>
          `;
          grid.appendChild(div);
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
      const div = document.createElement('div');
      div.className = 'work';
      div.setAttribute('data-video', w.video);
      // 取得 YouTube ID（用 URL 物件解析，支援各種參數格式）
      let ytId = '';
      try {
        const url = new URL(w.video);
        if (url.hostname.includes('youtu.be')) {
          ytId = url.pathname.slice(1, 12);
        } else if (url.hostname.includes('youtube.com')) {
          ytId = url.searchParams.get('v');
        }
      } catch {}
      let thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : 'public/images/default-thumb.jpg';
      div.innerHTML = `
        <img src="${thumbUrl}" alt="${w.title}">
        <div class="work-title">${w.title}</div>
      `;
      grid.appendChild(div);
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
      const ytMatch = videoSrc.match(/(?:youtube\.com.*[?&]v=|youtu\.be\/)([\w-]+)/);
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

// 進場動畫
if (window.ScrollReveal) {
  ScrollReveal().reveal('.intro', { delay: 200, duration: 1200, origin: 'top', distance: '60px' });
  ScrollReveal().reveal('.portfolio', { delay: 400, duration: 1200, origin: 'bottom', distance: '60px' });
  ScrollReveal().reveal('.skills', { delay: 600, duration: 1200, origin: 'left', distance: '60px' });
  ScrollReveal().reveal('.contact', { delay: 800, duration: 1200, origin: 'right', distance: '60px' });
  ScrollReveal().reveal('.brands', { delay: 1000, duration: 1200, origin: 'bottom', distance: '60px' });
}

// 打字機動畫
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
  const text = typewriter.textContent;
  typewriter.textContent = '';
  let i = 0;
  function typing() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 60);
    } else {
      setTimeout(() => {
        typewriter.textContent = '';
        i = 0;
        typing();
      }, 1500); // 幾豪秒後重播
    }
  }
  typing();
}

// 初始渲染
if (document.querySelector('.works-grid')) {
  renderWorks();
}

// 首頁按鈕點擊進入作品集（glitch轉場+淡入）
const homeBtn = document.querySelector('.home-btn');
if (homeBtn) {
  homeBtn.addEventListener('click', function() {
    const intro = document.querySelector('header.intro.section-page');
    intro.classList.add('glitch-transition');
    setTimeout(() => {
      intro.classList.remove('glitch-transition');
      intro.style.display = 'none';
      // 顯示作品集並淡入
      const portfolio = document.querySelector('.portfolio.section-page');
      portfolio.style.opacity = '0';
      portfolio.style.display = 'block';
      setTimeout(() => {
        portfolio.style.transition = 'opacity 0.5s cubic-bezier(.77,0,.18,1)';
        portfolio.style.opacity = '1';
      }, 10);
      renderWorks();
      const grid = document.querySelector('.works-grid');
      if (grid) grid.offsetHeight;
      window.dispatchEvent(new Event('resize'));
      // nav 顯示
      const nav = document.querySelector('.main-nav');
      if (nav) {
        nav.offsetHeight;
        nav.style.display = 'flex';
      }
    }, 700); // 0.7s動畫
  });
}

// LOGO點擊回首頁（遮罩轉場，首頁跟遮罩一起進場）
const logoLink = document.querySelector('.logo-link');
if (logoLink) {
  logoLink.addEventListener('click', function(e) {
    e.preventDefault();
    const transition = document.getElementById('page-transition');
    gsap.to(transition, { y: 0, duration: 0.5, ease: "power2.in", onComplete: () => {
      // 一律先全部隱藏
      document.querySelectorAll('.section-page').forEach(page => {
        page.style.display = 'none';
      });
      const intro = document.querySelector('header.intro.section-page');
      const nav = document.querySelector('.main-nav');
      nav.style.display = 'none';
      gsap.to(transition, { y: '-100%', duration: 0.5, ease: "power2.out",
        onStart: () => {
          intro.style.opacity = 1;
          intro.style.display = 'flex';
        }
      });
    }});
  });
}

// 偽多頁式切換：導覽列切換時只顯示對應區塊（所有按鈕都只用遮罩動畫）
if (document.querySelectorAll('.main-nav a').length) {
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      // 排除 logo-link
      if (this.classList.contains('logo-link')) return;
      const section = this.getAttribute('data-section');
      if (section) {
        // 移除 body.show-about 控制，統一用 display 控制顯示
        if (section !== 'intro') {
          e.preventDefault();
          const transition = document.getElementById('page-transition');
          gsap.to(transition, { y: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
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
                    moreBtn.addEventListener('click', function() {
                      if (qaBox.style.display === 'none' || qaBox.style.display === '') {
                        qaBox.style.display = 'block';
                        setTimeout(() => { qaBox.scrollIntoView({behavior:'smooth', block:'center'}); }, 200);
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
            renderWorks();
            const grid = document.querySelector('.works-grid');
            if (grid) grid.offsetHeight;
            window.dispatchEvent(new Event('resize'));
            setTimeout(() => {
              gsap.to(transition, { y: '-100%', duration: 0.5, ease: "power2.out" });
              // 粒子設定切換
              particlesJS.load('particles-js', 'public/particles.json', function(){});
            }, 400);
          }});
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

window.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('particles-js')) {
    particlesJS.load('particles-js', 'public/particles.json', function() {
      // 粒子特效載入完成
    });
  }
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function(e) {
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
  document.body.addEventListener('click', function() {
    document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('show-desc'));
  });
  // 新增：按下 ESC 關閉 skill-desc-text
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('show-desc'));
    }
  });
  // 報價按鈕互動
  const quoteBtn = document.querySelector('.quote-btn');
  const cliboEmbed = document.querySelector('.clibo-embed');
  if (quoteBtn && cliboEmbed) {
    quoteBtn.addEventListener('click', function() {
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
    cliboIframe.addEventListener('load', function() {
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
    moreBtn.addEventListener('click', function() {
      if (qaBox.style.display === 'none' || qaBox.style.display === '') {
        qaBox.style.display = 'block';
        setTimeout(() => { qaBox.scrollIntoView({behavior:'smooth', block:'center'}); }, 200);
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
    avatar.addEventListener('click', function() {
      if (isAvatarAnimating) return;
      isAvatarAnimating = true;
      
      // 暫停 hover 效果
      avatar.classList.add('no-hover');
      
      avatar.classList.remove('active');
      void avatar.offsetWidth; // 觸發 reflow
      avatar.classList.add('active');
      const q = quotes[Math.floor(Math.random()*quotes.length)];
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
    
    avatar.addEventListener('animationend', function() {
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