---
title: 'Decision-based Universal Adversarial Attack'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Jing Wu
  - Mingyi Zhou
  - Shuaicheng Liu
  - Yipeng Liu
  - Ce Zhu

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2020-09-15T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2020-09-15T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article']

# Publication name and optional abbreviated publication name.
publication: "Pre-Print"
publication_short: "Pre-Print"

abstract: A single perturbation can pose the most natural images to be misclassified by classifiers. In black-box setting, current universal adversarial attack methods utilize substitute models to generate the perturbation, then apply the perturbation to the attacked model. However, this transfer often produces inferior results. In this study, we directly work in the black-box setting to generate the universal adversarial perturbation. Besides, we aim to design an adversary generating a single perturbation having texture like stripes based on orthogonal matrix, as the top convolutional layers are sensitive to stripes. To this end, we propose an efficient Decision-based Universal Attack (DUAttack). With few data, the proposed adversary computes the perturbation based solely on the final inferred labels, but good transferability has been realized not only across models but also span different vision tasks. The effectiveness of DUAttack is validated through comparisons with other state-of-the-art attacks. The efficiency of DUAttack is also demonstrated on real world settings including the Microsoft Azure. In addition, several representative defense methods are struggling with DUAttack, indicating the practicability of the proposed method1.


# Summary. An optional shortened abstract.
# summary: A DL-based system that can diagnose the Parkinson’s disease through sub-regional classification and combination.

tags: [DAttack]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://github.com/JingWu321/DUAttack'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'DAttack'
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
