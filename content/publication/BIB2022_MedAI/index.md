---
title: 'Deep learning based diagnosis of Parkinson’s Disease using diffusion magnetic resonance imaging'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Hengling Zhao
  - Chih‐Chien Tsai
  - Mingyi Zhou
  - Yipeng Liu
  - Yao‐Liang Chen
  - Fan Huang
  - Yu‐Chun Lin
  - Jiun‐Jie Wang

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2022-01-07T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2022-01-07T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-journal']

# Publication name and optional abbreviated publication name.
publication: In *Brain Imaging and Behavior (2022)*
publication_short: In *Brain Imaging and Behavior*

abstract: The diagnostic performance of a combined architecture on Parkinson’s disease using diffusion tensor imaging was evaluated. A convolutional neural network was trained from multiple parcellated brain regions. A greedy algorithm was proposed to combine the models from individual regions into a complex one. Total 305 Parkinson’s disease patients (aged 59.9±9.7 years old) and 227 healthy control subjects (aged 61.0±7.4 years old) were enrolled from 3 retrospective studies. The participants were divided into training with ten-fold cross-validation (N = 432) and an independent blind dataset (N = 100). Diffusion-weighted images were acquired from a 3T scanner. Fractional anisot- ropy and mean diffusivity were calculated and was subsequently parcellated into 90 cerebral regions of interest based on the Automatic Anatomic Labeling template. A convolutional neural network was implemented which contained three convolutional blocks and a fully connected layer. Each convolutional block consisted of a convolutional layer, activation layer, and pooling layer. This model was trained for each individual region. A greedy algorithm was implemented to combine multiple regions as the final prediction. The greedy algorithm predicted the area under curve of 94.1±3.2% from the combination of fractional anisotropy from 22 regions. The model performance analysis showed that the combination of 9 regions is equivalent. The best area under curve was 74.7±5.4% from the right postcentral gyrus. The current study proposed an architecture of convolutional neural network and a greedy algorithm to combine from multiple regions. With diffusion tensor imaging, the algorithm showed the potential to distinguish patients with Parkinson’s disease from normal control with satisfactory performance.

# Summary. An optional shortened abstract.
summary: A DL-based system that can diagnose the Parkinson’s disease through sub-regional classification and combination.

tags: [DL for Parkinson’s Disease]

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
  caption: 'DL-DTI'
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
