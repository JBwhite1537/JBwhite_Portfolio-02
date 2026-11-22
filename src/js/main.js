// =========================================================================
// 作品資料來源設定：
// 1. 若未來想用 Google 試算表當免寫程式後台：
//    在 Google 試算表建立欄位：title, category, video, badge, badgeColor, tags, featured
//    點選「檔案 → 共用 → 發佈到網路 → 選 CSV」，把網址貼進下方引號內即可！
//    以後改試算表，網站不用重新部署就會即時更新。
// 2. 若留空，會自動讀取 public/works.json（純資料檔，直接改 JSON 即可更新）。
// =========================================================================
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiFORqCMp3lArGZHenKVMSzmw_3hMd54XdjJR-5u-jyptXEf8LukxZUj47jQ6UAX3QYGWIgwJC1p65/pub?output=csv";

const FALLBACK_WORKS = [{"title": "【小薰】這是免費的嗎？｜2026 環島企劃", "category": "shorts", "badge": "環島企劃流量擔當", "badgeColor": "rec", "tags": "#短影音 #網感快剪", "featured": true, "video": "https://www.youtube.com/shorts/8eFvm6aG_n0"}, {"title": "【VTuber白銀茉茉】新衣裝精華", "category": "gaming", "badge": "VTuber 精選精華", "badgeColor": "rec", "tags": "#VTuber #遊戲精華 #節奏掌控", "featured": true, "video": "https://youtu.be/fYsgIFCZYG8?si=Tf6-l9Zfl_q0XzLZ"}, {"title": "【小薰】SurfShark 工商", "category": "commercial", "badge": "品牌工商企劃", "badgeColor": "gold", "tags": "#工商 #腳本企劃", "featured": true, "video": "https://youtu.be/aGefWu5xptg?si=-Ffgdpz2lHyfS16I"}, {"title": "【小薰】麥塊共用血量！剪輯師死我也會死", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#遊戲精華 #節奏掌控", "featured": true, "video": "https://youtu.be/S-ERW0v1V3o?si=CUDxJ2NtcsauvYM-"}, {"title": "【小薰】2025 加班台 PV", "category": "commercial", "badge": "高質感影像製作", "badgeColor": "cyan", "tags": "#PV #情緒鋪陳", "featured": true, "video": "https://www.youtube.com/watch?v=mcYxWT44KXk"}, {"title": "明新科大企業訂單式教學精華", "category": "vlog", "badge": "官方指定合作", "badgeColor": "gold", "tags": "#教育合作 #活動紀錄", "featured": true, "video": "https://youtu.be/dkUi44ap3rc"}, {"title": "【VTuber白銀茉茉】PEAK 遊戲精華", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#VTuber #遊戲精華", "featured": false, "video": "https://youtu.be/oImiKDPyX-I?si=lelfddHaaE6UI4uj"}, {"title": "【鳥鳥】熱風競技場開箱精華｜PTCG", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#PTCG #遊戲精華", "featured": false, "video": "https://youtu.be/NSIlAAM77fU?si=QP7rwTI72_aqc9F4"}, {"title": "【小薰】我要小優？不，你要水蓮｜寶可夢大師EX", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#長影音 #遊戲精華", "featured": false, "video": "https://youtu.be/tenM8oQgjws?si=dssyfsIyK5H0C9L_"}, {"title": "【小薰】獻祭觀眾生命抽週年珠貝｜寶可夢大師EX", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#長影音 #遊戲精華", "featured": false, "video": "https://youtu.be/hWbcUfx75Y4?si=PV2CH19o1yEbkYUk"}, {"title": "【小薰】稀有卡直接被觀眾 NTR｜PTCG Pocket", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#PTCG #遊戲精華", "featured": false, "video": "https://youtu.be/fmAI5NDf_kE?si=eynEPfLrlR374faG"}, {"title": "【小薰】抽不到密勒頓怒喊退坑｜寶可夢大師EX", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#長影音 #遊戲精華", "featured": false, "video": "https://www.youtube.com/watch?v=KK8jmO-_7Wk"}, {"title": "【小薰】故勒頓又是保底大崩潰｜寶可夢大師EX", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#長影音 #遊戲精華", "featured": false, "video": "https://www.youtube.com/watch?v=X0opK-UPz_M"}, {"title": "【鳥鳥】太晶慶典 ex 剛入坑就歐氣爆棚｜PTCG", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#PTCG #遊戲精華", "featured": false, "video": "https://www.youtube.com/watch?v=9WfLA5YfGQU"}, {"title": "【JBwhite】個人遊戲精華 #1", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#遊戲精華 #節奏掌控", "featured": false, "video": "https://youtu.be/3ulbOsmoN2Y"}, {"title": "【JBwhite】個人遊戲精華 #2", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#遊戲精華 #節奏掌控", "featured": false, "video": "https://youtu.be/jGydqjonqHQ"}, {"title": "【JBwhite】個人遊戲精華 #3", "category": "gaming", "badge": "高留存節奏剪輯", "badgeColor": "cyan", "tags": "#遊戲精華 #節奏掌控", "featured": false, "video": "https://youtu.be/Fw4QBGg5KdY"}, {"title": "【小薰】遊戲教學 / 說書 #1", "category": "gaming", "badge": "高流量系列", "badgeColor": "rec", "tags": "#遊戲教學 #說書剪輯", "featured": false, "video": "https://youtu.be/1ha60NATVUw?si=IkZJCBf73jcrxIVb"}, {"title": "【小薰】遊戲教學 / 說書 #2", "category": "gaming", "badge": "高流量系列", "badgeColor": "rec", "tags": "#遊戲教學 #說書剪輯", "featured": false, "video": "https://youtu.be/1oM8SEM0Pog?si=09Lf5K3h9mmk8SCv"}, {"title": "Annin Miru 杏仁ミル 實況精華 #1", "category": "gaming", "badge": "創意社群二創", "badgeColor": "cyan", "tags": "#VTuber #社群二創", "featured": false, "video": "https://youtu.be/SmZvl_R8fHI"}, {"title": "Annin Miru 杏仁ミル 實況精華 #2", "category": "gaming", "badge": "創意社群二創", "badgeColor": "cyan", "tags": "#VTuber #社群二創", "featured": false, "video": "https://youtu.be/cfStM6di-eo"}, {"title": "【小薰】緋紅之心 工商", "category": "commercial", "badge": "品牌工商企劃", "badgeColor": "gold", "tags": "#工商 #企劃腳本", "featured": false, "video": "https://youtu.be/mBV0bVURXYU?si=r6FgZyJ8EEXfe2Cb"}, {"title": "【小薰】未頌者之歌 工商", "category": "commercial", "badge": "品牌工商企劃", "badgeColor": "gold", "tags": "#工商 #企劃腳本", "featured": false, "video": "https://www.youtube.com/watch?v=DBtyK4-nEA4"}, {"title": "【小薰】女神異聞錄 工商", "category": "commercial", "badge": "品牌工商企劃", "badgeColor": "gold", "tags": "#工商 #企劃腳本", "featured": false, "video": "https://youtu.be/J7VZype94NM?si=W2ctSuiuskobzxLy"}, {"title": "【小薰】跟阿啾超荒唐做任務｜2026 環島企劃", "category": "shorts", "badge": "節奏與視覺擔當", "badgeColor": "rec", "tags": "#短影音 #網感快剪", "featured": false, "video": "https://youtube.com/shorts/AA5LrthTwjs?si=0SLhKRc0bMR69WCO"}, {"title": "【小薰】一輩子乒乓球｜2026 環島企劃", "category": "shorts", "badge": "環島企劃最有趣的一支", "badgeColor": "rec", "tags": "#短影音 #網感快剪", "featured": false, "video": "https://youtube.com/shorts/GSXm3VIHM8s?si=vyUE1uyzPM-_WLTJ"}, {"title": "【小薰】Xpark 海豹也太可愛｜2026 環島企劃", "category": "shorts", "badge": "節奏及 Hook", "badgeColor": "rec", "tags": "#短影音 #Hook編排", "featured": false, "video": "https://youtube.com/shorts/VLcXHIPyauM?si=eABKu1XIHJ5zzECm"}, {"title": "【小薰】PTCG 不考慮取消色違卡嗎？", "category": "shorts", "badge": "高節奏迷因", "badgeColor": "cyan", "tags": "#短影音 #迷因精華", "featured": false, "video": "https://youtube.com/shorts/zz91sRLu-1I?si=1DnwuoRxueotcx5n"}, {"title": "【小薰】罵歸罵，DeNA 的狗還是要當", "category": "shorts", "badge": "社群話題", "badgeColor": "cyan", "tags": "#短影音 #遊戲話題", "featured": false, "video": "https://youtube.com/shorts/MBWLsq7zUzs?si=DEhUHqbQ9qJi5o56"}, {"title": "【小薰】為什麼要在合池放這個啦！", "category": "shorts", "badge": "情緒鋪陳爆發", "badgeColor": "cyan", "tags": "#短影音 #節奏快剪", "featured": false, "video": "https://youtube.com/shorts/8K2sI4g7UmY?si=XHrKTobiImPmI8S_"}, {"title": "【小薰】爆肌蚊的設計由來｜迷因精華", "category": "shorts", "badge": "實況迷因", "badgeColor": "cyan", "tags": "#短影音 #迷因精華", "featured": false, "video": "https://youtube.com/shorts/6quoaJrWN8c?si=y8LiV6zNX-1zbGPh"}, {"title": "【小薰】新楓之谷真的很好玩", "category": "shorts", "badge": "話題遊戲", "badgeColor": "cyan", "tags": "#短影音 #網感快剪", "featured": false, "video": "https://youtube.com/shorts/I8VMeDhysds?si=BEcKiY304tBeRMLy"}, {"title": "【小薰】這就是 NS2 卡帶的味道嗎？", "category": "shorts", "badge": "高互動話題", "badgeColor": "cyan", "tags": "#短影音 #社群話題", "featured": false, "video": "https://youtube.com/shorts/p2-hSWemuYI?si=pj1DN1NVJrjYaAYg"}, {"title": "【小薰】寶可夢第一位被配音的角色！", "category": "shorts", "badge": "遊戲冷知識", "badgeColor": "cyan", "tags": "#短影音 #知識快剪", "featured": false, "video": "https://www.youtube.com/shorts/7FflMgthsSo"}, {"title": "【小薰】原來台灣跟香港差這麼多…", "category": "shorts", "badge": "高互動話題", "badgeColor": "cyan", "tags": "#短影音 #生活話題", "featured": false, "video": "https://www.youtube.com/watch?v=iyAL3j9F2B4"}, {"title": "【小薰】西門町隨便走走挖到寶｜VLOG", "category": "shorts", "badge": "短影音 VLOG", "badgeColor": "cyan", "tags": "#短影音 #VLOG", "featured": false, "video": "https://youtube.com/shorts/mL9wyiPDpts"}, {"title": "【小薰】學長帶我台中一日遊 EP.1｜VLOG", "category": "shorts", "badge": "短影音 VLOG", "badgeColor": "cyan", "tags": "#短影音 #VLOG", "featured": false, "video": "https://www.youtube.com/watch?v=Nrzfs8fkpkM"}, {"title": "【VTuber白銀茉茉】短影音精華 #1", "category": "shorts", "badge": "VTuber 短影音", "badgeColor": "cyan", "tags": "#VTuber #短影音", "featured": false, "video": "https://youtube.com/shorts/dhOUNMoysvw?feature=share"}, {"title": "【VTuber白銀茉茉】短影音精華 #2", "category": "shorts", "badge": "VTuber 短影音", "badgeColor": "cyan", "tags": "#VTuber #短影音", "featured": false, "video": "https://www.youtube.com/watch?v=87j0_bLR8Uc"}, {"title": "【VTuber白銀茉茉】短影音精華 #3", "category": "shorts", "badge": "VTuber 短影音", "badgeColor": "cyan", "tags": "#VTuber #短影音", "featured": false, "video": "https://www.youtube.com/watch?v=K0btja-xNAk"}, {"title": "【VTuber白銀茉茉】短影音精華 #4", "category": "shorts", "badge": "VTuber 短影音", "badgeColor": "cyan", "tags": "#VTuber #短影音", "featured": false, "video": "https://www.youtube.com/watch?v=ZJy6sdwU7nE"}, {"title": "【VTuber白銀茉茉】短影音精華 #5", "category": "shorts", "badge": "VTuber 短影音", "badgeColor": "cyan", "tags": "#VTuber #短影音", "featured": false, "video": "https://www.youtube.com/watch?v=YN2ejvDgBDE"}, {"title": "芎林113花啦嗶啵踩街", "category": "vlog", "badge": "官方指定合作", "badgeColor": "gold", "tags": "#VLOG #活動紀錄", "featured": false, "video": "https://youtu.be/aSjO7ZXCDo8"}, {"title": "信託有愛徵影活動", "category": "vlog", "badge": "高質感微電影", "badgeColor": "cyan", "tags": "#微電影 #敘事剪輯", "featured": false, "video": "https://youtu.be/1-jj6QtlC6s"}, {"title": "太魯閣生態紀錄片", "category": "vlog", "badge": "深度專題紀錄", "badgeColor": "muted", "tags": "#長影音 #生態紀錄片", "featured": false, "video": "https://youtu.be/KmQ8KaXMz1k"}, {"title": "綠島生態紀錄片", "category": "vlog", "badge": "深度專題紀錄", "badgeColor": "muted", "tags": "#長影音 #生態紀錄片", "featured": false, "video": "https://youtu.be/trn-TVT_S2g"}, {"title": "【小薰】從健身房到斯巴達障礙賽｜VLOG", "category": "vlog", "badge": "生活風格紀錄", "badgeColor": "muted", "tags": "#VLOG #生活紀錄", "featured": false, "video": "https://youtu.be/lgTRdQt9St4?si=TlOq4ObqJjZrwpJb"}, {"title": "【小薰】帶著皮卡丘參加寶可夢路跑｜VLOG", "category": "vlog", "badge": "生活風格紀錄", "badgeColor": "muted", "tags": "#VLOG #生活紀錄", "featured": false, "video": "https://www.youtube.com/watch?v=PgZMgh9h-BE"}, {"title": "【小薰】直飛香港找觀眾吃飯 EP.1｜VLOG", "category": "vlog", "badge": "生活風格紀錄", "badgeColor": "muted", "tags": "#VLOG #旅遊紀錄", "featured": false, "video": "https://www.youtube.com/watch?v=Wi11SPpYlgo"}, {"title": "【小薰】寶可夢路跑大師組物資開箱", "category": "vlog", "badge": "輕鬆日常剪輯", "badgeColor": "muted", "tags": "#開箱 #日常", "featured": false, "video": "https://youtu.be/uvOvOteMv_0?si=NeLJBNhzzrDzLjCC"}, {"title": "【小薰】觀眾生日禮物大開箱", "category": "vlog", "badge": "輕鬆日常剪輯", "badgeColor": "muted", "tags": "#開箱 #日常", "featured": false, "video": "https://youtu.be/MHfAz1EPZZ4?si=11CGfv2XTKINJ2-B"}, {"title": "【小薰】焦慮症後的兩年，謝謝你們", "category": "vlog", "badge": "敘事訪談", "badgeColor": "muted", "tags": "#日常 #情緒敘事", "featured": false, "video": "https://youtu.be/cAGsGPFqJHU?si=aHdGmnktCmgHkPDF"}, {"title": "【小薰】冰結+威士忌！岡山椅子王的誕生", "category": "vlog", "badge": "輕鬆日常剪輯", "badgeColor": "muted", "tags": "#日常 #娛樂精華", "featured": false, "video": "https://youtu.be/_M2psR1h96A?si=-s6k--H6jIKFXdN1"}, {"title": "【小薰】岡山 Motel 總統套房開箱｜加班台精華", "category": "vlog", "badge": "輕鬆日常剪輯", "badgeColor": "muted", "tags": "#日常 #開箱", "featured": false, "video": "https://youtu.be/eJC9GhnIYUI?si=mQXy0ew4QWPsjVxt"}];

let works = FALLBACK_WORKS;
window.works = works;

function extractYouTubeId(videoUrl) {
  try {
    const url = new URL(videoUrl);
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.slice(1, 12);
    }
    if (url.hostname.includes('youtube.com')) {
      if (url.pathname.includes('/shorts/')) {
        return url.pathname.split('/shorts/')[1].slice(0, 11);
      }
      return url.searchParams.get('v') || '';
    }
  } catch {
    return '';
  }
  return '';
}

// 簡易 CSV 解析（供 Google Sheets 發佈的 CSV 使用）
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  return lines.slice(1).map(line => {
    const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
    const obj = {};
    headers.forEach((h, idx) => {
      const raw = (values[idx] || '').trim().replace(/^"|"$/g, '').replace(/""/g, '"');
      obj[h] = h === 'featured' ? raw.toLowerCase() === 'true' : raw;
    });
    return obj;
  }).filter(item => item.title && item.video);
}

async function loadWorksData() {
  try {
    if (GOOGLE_SHEET_CSV_URL) {
      const res = await fetch(GOOGLE_SHEET_CSV_URL);
      if (res.ok) {
        const parsed = parseCSV(await res.text());
        if (parsed.length) {
          works = parsed;
          window.works = works;
          return;
        }
      }
    }
    const res = await fetch('public/works.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length) {
        works = data;
        window.works = works;
      }
    }
  } catch {
    // 本地直接雙擊開啟 HTML 時自動使用內建資料
  }
}

function createWorkElement(w) {
  const div = document.createElement('div');
  div.className = 'work';
  div.setAttribute('data-video', w.video);
  div.setAttribute('data-category', w.category || 'gaming');

  const ytId = extractYouTubeId(w.video);
  const thumbUrl = ytId
    ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
    : 'public/images/JBwhite_thumbnail.png';

  const badgeColorMap = {
    rec: 'badge-rec',
    gold: 'badge-gold',
    cyan: 'badge-cyan',
    muted: 'badge-muted'
  };
  const badgeClass = badgeColorMap[w.badgeColor] || 'badge-cyan';
  const badgeHtml = w.badge ? `<span class="badge ${badgeClass}">${w.badge}</span>` : '';
  const tags = w.tags || '#影片剪輯';

  div.innerHTML = `
    <div class="work-thumb-wrap">
      <img src="${thumbUrl}" alt="${w.title}" loading="lazy">
      ${badgeHtml}
      <div class="work-play-hint" aria-hidden="true">
        <span class="work-play-circle">▶</span>
      </div>
    </div>
    <div class="work-info">
      <h3>${w.title}</h3>
      <p>${tags}</p>
    </div>
  `;
  return div;
}

function renderFeatured() {
  const featuredGrid = document.querySelector('.featured-grid');
  if (!featuredGrid) return;
  const featuredItems = works.filter(w => w.featured);
  featuredGrid.innerHTML = '';
  featuredItems.forEach(w => featuredGrid.appendChild(createWorkElement(w)));
  bindWorkClicks(featuredGrid);
}

function renderWorks(filter = "all") {
  const grid = document.querySelector('.works-grid');
  if (!grid) return;

  const populate = () => {
    grid.innerHTML = '';
    works
      .filter(w => filter === "all" || w.category === filter)
      .forEach(w => grid.appendChild(createWorkElement(w)));
    bindWorkClicks(grid);
  };

  if (grid.children.length > 0) {
    grid.classList.add('works-transition-out');
    setTimeout(() => {
      populate();
      grid.classList.remove('works-transition-out');
      grid.classList.add('works-transition-in');
      setTimeout(() => {
        grid.classList.remove('works-transition-in');
      }, 500);
    }, 400);
    return;
  }

  populate();
}

function bindWorkClicks(scopeEl) {
  scopeEl.querySelectorAll('.work').forEach(item => {
    item.addEventListener('click', () => {
      const videoSrc = item.getAttribute('data-video');
      const isShorts = item.getAttribute('data-category') === 'shorts' || videoSrc.includes('/shorts/');
      const lightbox = document.getElementById('lightbox');
      const content = lightbox.querySelector('.lightbox-content');
      const container = lightbox.querySelector('.video-container');
      const ytId = extractYouTubeId(videoSrc);

      container.classList.remove('vertical-video', 'horizontal-video');
      container.classList.add(isShorts ? 'vertical-video' : 'horizontal-video');

      if (ytId) {
        container.innerHTML = `<iframe width="${isShorts ? 768 : 1366}" height="${isShorts ? 1366 : 768}" src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      } else {
        container.innerHTML = '影片連結格式錯誤';
      }

      lightbox.classList.remove('hidden');
      if (window.gsap) {
        gsap.fromTo(lightbox, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(content, { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' });
      }
    });
  });
}

// 濾鏡按鈕互動
if (document.querySelectorAll('.filters button').length) {
  const allButton = document.querySelector('.filters button[data-filter="all"]');
  if (allButton) allButton.classList.add('active');

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
    if (!window.gsap) {
      lightbox.classList.add('hidden');
      lightbox.querySelector('.video-container').innerHTML = '';
      return;
    }
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
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) closeLightbox();
  });
}

// 首頁按鈕點擊進入作品集（轉場速度維持原本設定）
const homeBtn = document.querySelector('.home-btn');
if (homeBtn) {
  homeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.style.pointerEvents = 'none';
    document.body.classList.remove('show-intro');

    if (window.gsap) {
      gsap.to(['.intro .rec-indicator', '.intro .avatar', '.intro h1', '.typewriter', '.home-btn'], {
        y: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.in'
      });
      gsap.to('.intro-bg-thumb img', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut'
      });

      const transition = document.getElementById('page-transition');
      setTimeout(() => {
        gsap.to(transition, {
          y: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            document.querySelectorAll('.section-page').forEach(page => {
              page.style.display = 'none';
            });
            document.querySelector('.portfolio.section-page').style.display = 'block';
            document.querySelector('.main-nav').style.display = 'flex';

            document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
            const portfolioTab = document.querySelector('.main-nav a[data-section="portfolio"]');
            if (portfolioTab) portfolioTab.classList.add('active');

            window.scrollTo(0, 0);

            gsap.to(transition, {
              y: '-100%',
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: () => {
                homeBtn.style.pointerEvents = 'auto';
                gsap.set(['.intro .rec-indicator', '.intro .avatar', '.intro h1', '.typewriter', '.home-btn'], { clearProps: 'all' });
              }
            });

            gsap.fromTo('.featured-block', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 });
            gsap.fromTo('.filters', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.works-grid', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 });
          }
        });
      }, 500);
    }
  });
}

// LOGO 點擊回首頁（轉場速度維持原本設定）
const logoLink = document.querySelector('.logo-link');
if (logoLink) {
  logoLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.remove('has-direct-hash');
    document.body.classList.add('show-intro');
    history.replaceState(null, '', window.location.pathname);
    document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));

    const transition = document.getElementById('page-transition');
    gsap.to(transition, {
      y: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        document.querySelectorAll('.section-page').forEach(page => {
          page.style.display = 'none';
        });
        const intro = document.querySelector('header.intro.section-page');
        const nav = document.querySelector('.main-nav');
        nav.style.display = 'none';
        window.scrollTo(0, 0);

        if (window.gsap) {
          gsap.set(['.intro .rec-indicator', '.intro .avatar', '.intro h1', '.typewriter', '.home-btn', '.intro-bg-thumb img'], { clearProps: 'all' });
        }

        gsap.to(transition, {
          y: '-100%',
          duration: 0.6,
          ease: "power2.inOut",
          onStart: () => {
            intro.style.display = 'flex';
            if (window.gsap) {
              const tl = gsap.timeline();
              tl.fromTo('.intro .avatar', { y: 36, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out', delay: 0.15 })
                .fromTo('.intro h1', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, '-=0.65')
                .fromTo('.intro .rec-indicator', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.55')
                .fromTo('.home-btn', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, '-=0.45');
            }
          }
        });
      }
    });
  });
}

// 導覽列切換區塊（轉場速度維持原本設定）
if (document.querySelectorAll('.main-nav a').length) {
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.classList.contains('logo-link')) return;
      const section = this.getAttribute('data-section');
      if (!section) return;

      document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');

      if (section !== 'intro') {
        document.body.classList.remove('show-intro', 'has-direct-hash');
        e.preventDefault();
        const transition = document.getElementById('page-transition');
        gsap.to(transition, {
          y: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            window.scrollTo({ top: 0, behavior: 'auto' });
            document.querySelectorAll('.section-page').forEach(page => {
              if (page.getAttribute('data-section') === section) {
                page.style.display = section === 'about' ? 'flex' : 'block';
              } else {
                page.style.display = 'none';
              }
            });

            const nav = document.querySelector('.main-nav');
            if (nav) {
              nav.offsetHeight;
              nav.style.display = 'flex';
            }

            if (section === 'portfolio') {
              document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
              const allButton = document.querySelector('.filters button[data-filter="all"]');
              if (allButton) allButton.classList.add('active');
              renderFeatured();
              renderWorks('all');
            }

            window.dispatchEvent(new Event('resize'));
            setTimeout(() => {
              gsap.to(transition, { y: '-100%', duration: 0.5, ease: "power2.out" });
            }, 400);
          }
        });
      }
    });
  });
}

// DOM 初始化
window.addEventListener('DOMContentLoaded', async function () {
  const validSections = ['portfolio', 'skills', 'brands', 'about', 'contact'];
  let returnSection = '';
  try {
    returnSection = sessionStorage.getItem('jbwhite_return_section') || '';
    if (returnSection) sessionStorage.removeItem('jbwhite_return_section');
  } catch {}
  const isDirectSection = validSections.includes(returnSection);

  // 若是從線上履歷點「返回作品集」，直接顯示對應分頁並將黑幕絲滑拉起（重整頁面則一律回首頁）
  if (isDirectSection) {
    document.body.classList.remove('show-intro');
    document.querySelectorAll('.section-page').forEach(page => {
      if (page.getAttribute('data-section') === returnSection) {
        page.style.display = returnSection === 'about' ? 'flex' : 'block';
      } else {
        page.style.display = 'none';
      }
    });
    const nav = document.querySelector('.main-nav');
    if (nav) nav.style.display = 'flex';
    document.querySelectorAll('.main-nav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('data-section') === returnSection);
    });
    window.scrollTo(0, 0);

    const transition = document.getElementById('page-transition');
    if (transition && window.gsap) {
      gsap.set(transition, { y: 0 });
      document.body.classList.remove('return-curtain-active');
      requestAnimationFrame(() => {
        gsap.to(transition, {
          y: '-100%',
          duration: 0.55,
          ease: 'power2.inOut',
          onComplete: () => {
            document.body.classList.remove('has-direct-hash');
          }
        });
      });
    } else {
      document.body.classList.remove('return-curtain-active', 'has-direct-hash');
    }
  }

  const introSection = document.querySelector('.intro.section-page');
  const typewriter = document.querySelector('.typewriter');

  // 立即啟動首頁進場動畫與打字機（不等 Google 試算表抓完，完全消除閃現完整資訊）
  if (!isDirectSection && introSection) {
    if (typewriter) {
      const text = typewriter.textContent;
      typewriter.textContent = '';
      typewriter.style.opacity = '1';
      typewriter.classList.add('typing-cursor');
      let i = 0;

      function typing() {
        if (i < text.length) {
          typewriter.textContent += text.charAt(i);
          i++;
          setTimeout(typing, 90);
        } else {
          setTimeout(() => {
            typewriter.classList.remove('typing-cursor');
          }, 5000);
        }
      }
      setTimeout(typing, 900);
    }

    if (window.gsap) {
      const tl = gsap.timeline({
        onStart: () => { document.body.classList.add('intro-animated'); }
      });
      tl.fromTo('.intro .avatar', { y: 36, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out', delay: 0.1 })
        .fromTo('.intro h1', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, '-=0.65')
        .fromTo('.intro .rec-indicator', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.55')
        .fromTo('.home-btn', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, '-=0.45');
    } else {
      document.body.classList.add('intro-animated');
    }
  } else {
    document.body.classList.add('intro-animated');
  }

  // 在背景非同步載入 Google 試算表作品資料，不阻塞首頁動畫
  loadWorksData().then(() => {
    renderFeatured();
    renderWorks('all');
  });

  // 聚光燈暗色刻度網格互動背景
  const gridCanvas = document.getElementById('spotlight-grid-canvas');
  if (gridCanvas) {
    const ctx = gridCanvas.getContext('2d');
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: width * 0.5, y: height * 0.4, tx: width * 0.5, ty: height * 0.4, active: false };
    let tickCount = 0;

    function resizeGrid() {
      width = window.innerWidth;
      height = window.innerHeight;
      gridCanvas.width = Math.round(width * dpr);
      gridCanvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('resize', resizeGrid);
    window.addEventListener('pointermove', (e) => {
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
      pointer.active = true;
    }, { passive: true });
    window.addEventListener('pointerleave', () => {
      pointer.active = false;
    });

    function renderSpotlightGrid() {
      if (!document.hidden && !document.body.classList.contains('show-intro')) {
        tickCount += 1;
        if (!pointer.active && !reducedMotion) {
          pointer.tx = width * (0.5 + Math.sin(tickCount * 0.008) * 0.22);
          pointer.ty = height * (0.42 + Math.cos(tickCount * 0.006) * 0.16);
        }
        pointer.x += (pointer.tx - pointer.x) * 0.1;
        pointer.y += (pointer.ty - pointer.y) * 0.1;

        ctx.clearRect(0, 0, width, height);

        const step = 42;
        const glowRadius = 260;
        const glow = ctx.createRadialGradient(pointer.x, pointer.y, 12, pointer.x, pointer.y, glowRadius);
        glow.addColorStop(0, 'rgba(56, 189, 248, 0.18)');
        glow.addColorStop(0.5, 'rgba(56, 189, 248, 0.05)');
        glow.addColorStop(1, 'rgba(14, 16, 20, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);

        ctx.lineWidth = 1;
        for (let x = 0; x <= width; x += step) {
          const dx = Math.abs(x - pointer.x);
          const alpha = dx < 220 ? 0.045 + (1 - dx / 220) * 0.12 : 0.04;
          ctx.strokeStyle = `rgba(148, 163, 184, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y <= height; y += step) {
          const dy = Math.abs(y - pointer.y);
          const alpha = dy < 220 ? 0.045 + (1 - dy / 220) * 0.12 : 0.04;
          ctx.strokeStyle = `rgba(148, 163, 184, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        const startX = Math.max(0, Math.floor((pointer.x - 190) / step) * step);
        const endX = Math.min(width, Math.ceil((pointer.x + 190) / step) * step);
        const startY = Math.max(0, Math.floor((pointer.y - 190) / step) * step);
        const endY = Math.min(height, Math.ceil((pointer.y + 190) / step) * step);

        for (let x = startX; x <= endX; x += step) {
          for (let y = startY; y <= endY; y += step) {
            const dist = Math.hypot(x - pointer.x, y - pointer.y);
            if (dist < 180) {
              const intensity = 1 - dist / 180;
              ctx.fillStyle = `rgba(56, 189, 248, ${(intensity * 0.78).toFixed(3)})`;
              ctx.beginPath();
              ctx.arc(x, y, 1.3 + intensity * 1.4, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
      requestAnimationFrame(renderSpotlightGrid);
    }

    resizeGrid();
    renderSpotlightGrid();
  }

  // 技能圖示點擊大圖預覽
  const previewBox = document.getElementById('img-preview-lightbox');
  if (previewBox) {
    const previewImg = previewBox.querySelector('img');
    document.querySelectorAll('.skill-icon').forEach(img => {
      img.addEventListener('click', function (e) {
        previewImg.src = this.src;
        previewBox.classList.remove('hidden');
        requestAnimationFrame(() => previewBox.classList.add('show'));
        e.stopPropagation();
      });
    });
    const closePreview = () => {
      previewBox.classList.remove('show');
      setTimeout(() => previewBox.classList.add('hidden'), 350);
    };
    previewBox.addEventListener('click', closePreview);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && previewBox.classList.contains('show')) closePreview();
    });
  }

  // 關於我頭像 hover tooltip
  const avatarWrap = document.querySelector('.avatar-hover-wrap');
  if (avatarWrap) {
    const tooltip = avatarWrap.querySelector('.avatar-tooltip');
    const avatarImg = avatarWrap.querySelector('.about-avatar');
    if (tooltip && avatarImg) {
      avatarImg.addEventListener('mouseenter', () => { tooltip.style.display = 'block'; });
      avatarImg.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
      avatarImg.addEventListener('focus', () => { tooltip.style.display = 'block'; });
      avatarImg.addEventListener('blur', () => { tooltip.style.display = 'none'; });
    }
  }

  // Discord ID 一鍵複製
  const copyDiscordBtn = document.getElementById('copy-discord-btn');
  const copyDiscordStatus = document.getElementById('copy-discord-status');
  if (copyDiscordBtn && copyDiscordStatus) {
    copyDiscordBtn.addEventListener('click', async () => {
      const discordId = copyDiscordBtn.getAttribute('data-discord') || 'jbwhite1537';
      try {
        await navigator.clipboard.writeText(discordId);
        copyDiscordStatus.textContent = `已複製 Discord ID：${discordId}，歡迎直接私訊！`;
      } catch {
        copyDiscordStatus.textContent = `請手動複製 Discord ID：${discordId}`;
      }
      setTimeout(() => {
        copyDiscordStatus.textContent = '';
      }, 3500);
    });
  }

  // 聯絡表單送出
  const form = document.getElementById("my-form");
  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const status = document.getElementById("my-form-status");
      const data = new FormData(event.target);
      try {
        const response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          status.textContent = "感謝您的留言！我們已收到您的訊息。";
          form.reset();
          setTimeout(() => { status.textContent = ""; }, 3500);
        } else {
          const resData = await response.json();
          if (Object.hasOwn(resData, 'errors')) {
            status.textContent = resData.errors.map(err => err.message).join(", ");
          } else {
            status.textContent = "送出失敗，請稍後再試。";
          }
        }
      } catch {
        status.textContent = "送出失敗，請稍後再試。";
      }
    });
  }


  // 線上履歷連結平滑黑幕過場
  document.querySelectorAll('a.resume-link').forEach(link => {
    link.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      const href = this.getAttribute('href');
      const transition = document.getElementById('page-transition');
      if (transition && window.gsap) {
        gsap.to(transition, {
          y: 0,
          duration: 0.45,
          ease: 'power2.inOut',
          onComplete: () => { window.location.href = href; }
        });
      } else {
        window.location.href = href;
      }
    });
  });


});
