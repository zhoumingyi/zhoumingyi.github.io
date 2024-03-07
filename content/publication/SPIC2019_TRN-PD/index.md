---
title: 'Tensor rank learning in CP decomposition via convolutional neural network'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Mingyi Zhou
  - Yipeng Liu
  - Zhen Long
  - Longxi Chen
  - Ce Zhu

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2019-04-01T00:00:00Z'
doi: 'https://doi.org/10.1016/j.image.2018.03.017'

# Schedule page publish date (NOT publication's date).
publishDate: '2019-04-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article-journal']

# Publication name and optional abbreviated publication name.
publication: In *Signal Processing':' Image Communication (2022)*
publication_short: ""

abstract: TTensor factorization is a useful technique for capturing the high-order interactions in data analysis. One assumption of tensor decompositions is that a predefined rank should be known in advance. However, the tensor rank prediction is an NP-hard problem. The CANDECOMP/PARAFAC (CP) decomposition is a typical one. In this paper, we propose two methods based on convolutional neural network (CNN) to estimate CP tensor rank from noisy measurements. One applies CNN to the CP rank estimation directly. The other one adds a pre-decomposition for feature acquisition, which inputs rank-one components to CNN. Experimental results on synthetic and real-world datasets show the proposed methods outperforms state-of-the-art methods in terms of rank estimation accuracy.

# Summary. An optional shortened abstract.
# summary: A DL-based system that can diagnose the Parkinson’s disease through sub-regional classification and combination.

tags: [DL for Rank Estimation]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
# url_code: 'https://github.com/JingWu321/DCS-2'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'TRN-PD'
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
