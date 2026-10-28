(function () {
  const storageKey = 'site-language';
  const defaultLanguage = 'en';
  const chineseIntro = '<p>2025 年 2 月，我加入北京航空航天大学，作为助理教授与 SMAT 实验室的胡春明教授和黎立教授开展合作。我于 2024 年 12 月获得蒙纳士大学博士学位。2021 年至 2024 年期间，我在蒙纳士大学 HumaniSE 实验室（由 John Grundy 教授负责）和 SMAT 实验室（由黎立教授负责）学习和研究，先后接受了 <a href="https://lilicoding.github.io/">黎立教授</a>、<a href="https://sites.google.com/site/johncgrundy/">John Grundy 教授</a>、<a href="https://chunyang-chen.github.io/">陈春阳教授</a> 和 <a href="https://research.monash.edu/en/persons/xiao-chen">陈骁博士</a> 的指导。在加入蒙纳士大学之前，我于 2017 年至 2021 年期间与 <a href="https://faculty.uestc.edu.cn/yipengliu/zh_CN/index.htm">刘翼鹏教授</a> 和 <a href="https://www.avc2-lab.net/~eczhu/">朱策教授</a> 在电子科技大学开展研究合作。</p><p>我的研究兴趣包括 SE4AI、AI4SE、移动软件工程、人工智能安全、程序分析和计算机视觉，重点关注端侧人工智能的安全性与效率。我们的研究成果（例如 ArkAnalyzer、HapTest 和 HapRay）已经应用于 OpenHarmony 产品和一些主流商业应用。如果您对我的研究感兴趣，欢迎与我联系。</p>';
  const newsTranslations = {
    'Oct 10, 2026': '获得 2026 年开源鸿蒙先锋课题奖！',
    'Aug 29, 2026': '受邀在华为上海发表演讲：Performance analysis for openHarmony apps: from rule-based methods to autonomous agents！',
    'Jul 26, 2026': '论文 "Security of Cross-Platform and Cross-Language Software Technologies: A Systematic Review" 被 ACM TOSEM 接收。祝贺 Yutong、Jiatong 和团队！',
    'Jul 10, 2026': '论文 "Perceptual Alignment Reveals Vulnerability in Unlearned Diffusion Models" 被 ACM Multimedia 接收。祝贺 Jing 和团队！',
    'Jun 28, 2026': '两篇论文被 ISSTA\'26 接收。祝贺 Zhihao 和团队！',
    'May 14, 2026': '获得北航—华为联合实验室项目资助！感谢产业合作伙伴和华为公司。',
    'May 08, 2026': '论文 "HapCiD: Detecting API-related Compatibility Issues in OpenHarmony Apps" 被 Internetware\'26 接收！祝贺 Daihang 和团队！',
    'Apr 17, 2026': '论文 "Privacy Protection Against Personalized Text-to-Image Synthesis via Cross-image Consistency Constraints" 被 ICMR2026 接收！祝贺 Guanyu 和团队！',
    'Mar 09, 2026': '论文 "Effective Fine-tuning for Low-resource Languages: A Case Study of Cangjie" 被 Empirical Software Engineering (EMSE) 接收！祝贺 Zhihao、Zhaofeng 和团队！',
    'Jan 08, 2026': '论文 "HapFlow: The Taint Analysis Framework for OpenHarmony Apps" 被 ACM TOSEM 接收！祝贺 Haonan 和团队！',
    'Dec 22, 2025': '论文 "Phantom Rendering Detection: Identifying and Analyzing unnecessary UI computations" 被 FSE Research Track 接收！祝贺 Zhihao 和团队！',
    'Dec 09, 2025': '论文 "HapCheck: DSL-Based Static Bug Detection Framework for OpenHarmony" 被 ICSE SEIP Track 接收！祝贺 Xitong 和团队！',
    'Nov 01, 2025': '获得华为资助！感谢产业合作伙伴和华为公司。',
    'Sep 12, 2025': '两篇论文被 ASE\'25 Industry Track 接收！祝贺 Farong、Yizhuo 和团队！',
    'Aug 27, 2025': '获得 2025 年 NSFC 基金资助！',
    'Aug 21, 2025': '论文 "UICOMPASS: UI Map Guided Mobile Task Automation via Adaptive Action Generation" 被 EMNLP Main 接收！祝贺 Yuanzhang 和团队！',
    'Jun 20, 2025': '一篇论文被 ICSE\'26 Research Track 接收！祝贺 Zhihao 和团队！',
    'Jun 06, 2025': '获得 2025 年 CCF—华为胡杨林基金资助！',
    'Mar 26, 2025': '两篇论文被 FSE\'25 Industry Track 接收！祝贺 Farong、Zhihao 和团队！'
  };

  function ensurePreviewMarkup() {
    const header = document.querySelector('.post-header');
    if (header && !header.querySelector('[data-language-switch]')) {
      const switcher = document.createElement('div');
      switcher.className = 'language-switcher';
      switcher.setAttribute('role', 'group');
      switcher.setAttribute('aria-label', 'Language selector');
      switcher.innerHTML = '<span class="language-switcher-label" data-language-label="en">Language</span><button type="button" class="language-option" data-language-switch="en" aria-pressed="true">EN</button><span class="language-divider" aria-hidden="true">/</span><button type="button" class="language-option" data-language-switch="zh" aria-pressed="false">中文</button>';
      header.appendChild(switcher);
    }

    const intro = document.querySelector('.about-main .about-intro');
    if (intro && !intro.dataset.languageBlock) {
      intro.classList.add('language-block');
      intro.dataset.languageBlock = 'en';
      const chinese = document.createElement('div');
      chinese.className = 'about-intro language-block';
      chinese.dataset.languageBlock = 'zh';
      chinese.innerHTML = chineseIntro;
      intro.parentNode.insertBefore(chinese, intro.nextSibling);
    }

    const moreInfo = document.querySelector('.about-main .more-info');
    if (moreInfo && !moreInfo.dataset.languageBlock) {
      moreInfo.classList.add('language-block');
      moreInfo.dataset.languageBlock = 'en';
      const chinese = document.createElement('div');
      chinese.className = 'more-info language-block';
      chinese.dataset.languageBlock = 'zh';
      chinese.innerHTML = '<p>邮箱：zhoumingyi [AT] buaa [DOT] edu [DOT] cn</p>';
      moreInfo.parentNode.insertBefore(chinese, moreInfo.nextSibling);
    }

    const newsHeading = document.querySelector('.about-sidebar .about-section h2 a');
    if (newsHeading && !newsHeading.querySelector('[data-language-text]')) {
      const text = newsHeading.textContent.trim();
      newsHeading.textContent = '';
      const label = document.createElement('span');
      label.dataset.languageText = '';
      label.dataset.en = text;
      label.dataset.zh = '新闻';
      label.textContent = text;
      newsHeading.appendChild(label);
    }

    const contactNote = document.querySelector('.contact-note');
    if (contactNote && !contactNote.dataset.languageBlock) {
      contactNote.classList.add('language-block');
      contactNote.dataset.languageBlock = 'en';
      const chinese = document.createElement('div');
      chinese.className = 'contact-note language-block';
      chinese.dataset.languageBlock = 'zh';
      chinese.textContent = '欢迎通过上述方式与我联系。';
      contactNote.parentNode.insertBefore(chinese, contactNote.nextSibling);
    }

    if (!document.getElementById('language-switcher-preview-style')) {
      const style = document.createElement('style');
      style.id = 'language-switcher-preview-style';
      style.textContent = '.language-switcher{align-items:center;display:flex;gap:.35rem;justify-content:flex-end;margin-top:.75rem;font-size:.85rem}.language-switcher-label,.language-divider{color:var(--global-text-color-light)}.language-switcher-label{margin-right:.15rem}.language-option{background:transparent;border:1px solid transparent;border-radius:.35rem;color:var(--global-text-color-light);cursor:pointer;font-size:.8rem;line-height:1.4;padding:.15rem .35rem}.language-option:hover,.language-option:focus,.language-option.active{border-color:var(--global-theme-color);color:var(--global-theme-color);outline:none}.language-block[data-language-block="zh"]{display:none}html[data-language="zh"] .language-block[data-language-block="en"]{display:none}html[data-language="zh"] .language-block[data-language-block="zh"]{display:block}';
      document.head.appendChild(style);
    }
  }

  function setNewsLanguage(language) {
    document.querySelectorAll('.news table tr').forEach(function (row) {
      const dateCell = row.querySelector('th');
      const contentCell = row.querySelector('td');
      if (!dateCell || !contentCell) return;

      if (!contentCell.dataset.englishHtml) {
        contentCell.dataset.englishHtml = contentCell.innerHTML;
      }
      const date = dateCell.textContent.trim();
      const translation = newsTranslations[date];
      if (language !== 'zh' || !translation) {
        contentCell.innerHTML = contentCell.dataset.englishHtml;
        return;
      }

      contentCell.textContent = translation + ' ';
      const englishImages = document.createRange().createContextualFragment(contentCell.dataset.englishHtml).querySelectorAll('img');
      englishImages.forEach(function (image) {
        contentCell.appendChild(image.cloneNode(true));
      });
    });
  }

  function applyLanguage(language) {
    const selected = language === 'zh' ? 'zh' : defaultLanguage;
    document.documentElement.dataset.language = selected;
    document.documentElement.lang = selected === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-language-switch]').forEach(function (button) {
      const active = button.dataset.languageSwitch === selected;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    document.querySelectorAll('[data-language-text]').forEach(function (element) {
      element.textContent = selected === 'zh' ? element.dataset.zh : element.dataset.en;
    });
    document.querySelectorAll('[data-language-label]').forEach(function (element) {
      element.textContent = selected === 'zh' ? '语言' : 'Language';
    });
    setNewsLanguage(selected);
    try {
      window.localStorage.setItem(storageKey, selected);
    } catch (error) {
      // Continue without persistence when storage is unavailable.
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    ensurePreviewMarkup();
    document.querySelectorAll('[data-language-switch]').forEach(function (button) {
      button.addEventListener('click', function () {
        applyLanguage(button.dataset.languageSwitch);
      });
    });

    let storedLanguage = defaultLanguage;
    try {
      storedLanguage = window.localStorage.getItem(storageKey) || defaultLanguage;
    } catch (error) {
      // Continue with the default language when storage is unavailable.
    }
    applyLanguage(storedLanguage);
  });
})();
