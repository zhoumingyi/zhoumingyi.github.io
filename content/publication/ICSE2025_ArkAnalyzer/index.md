---
title: 'ArkAnalyzer: The Static Analysis Framework for OpenHarmony Apps'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Haonan Chen
  - Daihang Chen
  - Yizhuo Yang
  - Lingyun Xu
  - Liang Gao
  - admin
  - Chunming Hu
  - Li Li

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2024-12-17T00:00:00Z'
doi: 'https://doi.org/10.1145/3597503.3639144'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-12-17T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 46th IEEE/ACM International Conference on Software Engineering 2025, Software Engineering in Practice Track*
# publication_short: In Proceedings of the 46th IEEE/ACM International Conference on Software Engineering 2024, Research Track **(ICSE'24, acceptance rate 22.3%)**
publication_short: In Proceedings of the 46th IEEE/ACM International Conference on Software Engineering 2025, SEIP Track **[ICSE-SEIP'24]**

abstract: ArkTS is a new programming language dedicated to developing apps for the emerging OpenHarmony mobile operating system. Like other programming languages (e.g., Type-scripts) constantly suffering from performance-related code smells or vulnerabilities, the ArkTS programming language will likely encounter the same problems. The solution given by our research community is to invent static analyzers, which are often implemented on top of a common static analysis framework, to detect and subsequently repair those issues automatically. Unfortunately, such an essential framework is not available for the OpenHarmony community yet. Existing program analysis
methods have several problems when handling the ArtTS code. To bridge the gap, we design and implement a framework named ArkAnalyzer and make it publicly available as an open-source project. Our ArkAnalyzer addresses the aforementioned problems and has already integrated a number of fundamental static analysis functions (e.g., control-flow graph constructions, call graph constructions, etc.) that are ready to be reused by developers to implement OpenHarmony app analyzers focusing on statically resolving dedicated issues such as performance bug detection, privacy leaks detection, compatibility issues detection, etc. Experiment results show that our ArkAnalyzer
achieves both high analyzing efficiency and high effectiveness. In addition, we open-sourced the dataset that has numerous real-world ArkTS Apps.

# Summary. An optional shortened abstract.
summary: A novel approach that can reverse engineer the compiled TFLite model. Our study shows current studies underestimate the risks of on-device DL models.

tags: [On-device Security]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://github.com/zhoumingyi/REOM'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'REOM'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->


<!-- ---
title: 'ArkAnalyzer: The Static Analysis Framework for OpenHarmony Apps'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Haonan Chen
  - Daihang Chen
  - Yizhuo Yang
  - Lingyun Xu
  - Liang Gao
  - admin
  - Chunming Hu
  - Li Li

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2024-12-17T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2025-12-17T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 46th IEEE/ACM International Conference on Software Engineering 2025, Software Engineering in Proctice Track*
# publication_short: In Proceedings of the 46th IEEE/ACM International Conference on Software Engineering 2024, Research Track **(ICSE'24, acceptance rate 22.3%)**
publication_short: In Proceedings of the 46th IEEE/ACM International Conference on Software Engineering 2025, SEIP **[ICSE SEIP'25]**

abstract: rkTS is a new programming language dedicated to developing apps for the emerging OpenHarmony mobile operating system. Like other programming languages (e.g., Type-scripts) constantly suffering from performance-related code smells or vulnerabilities, the ArkTS programming language will likely encounter the same problems. The solution given by our research community is to invent static analyzers, which are often implemented on top of a common static analysis framework, to detect and subsequently repair those issues automatically. Unfortunately, such an essential framework is not available for the OpenHarmony community yet. Existing program analysis
methods have several problems when handling the ArtTS code. To bridge the gap, we design and implement a framework named ArkAnalyzer and make it publicly available as an open-source project. Our ArkAnalyzer addresses the aforementioned problems and has already integrated a number of fundamental static analysis functions (e.g., control-flow graph constructions, call graph constructions, etc.) that are ready to be reused by developers to implement OpenHarmony app analyzers focusing on statically resolving dedicated issues such as performance bug detection, privacy leaks detection, compatibility issues detection, etc. Experiment results show that our ArkAnalyzer
achieves both high analyzing efficiency and high effectiveness. In addition, we open-sourced the dataset that has numerous real-world ArkTS Apps.

# Summary. An optional shortened abstract.
summary: A static analysis framework for OpenHarmony Apps.

tags: [OpenHarmony Analyzer]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://gitee.com/openharmony-sig/arkanalyzer'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'ArkAnalyzer'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
--- -->

