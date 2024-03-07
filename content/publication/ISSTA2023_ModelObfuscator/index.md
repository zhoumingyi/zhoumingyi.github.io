---
title: 'ModelObfuscator: Obfuscating Model Information to Protect Deployed ML-Based Systems'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Mingyi Zhou
  - XiangGao
  - Jing Wu
  - John Grundy
  - Xiao Chen
  - Chunyang Chen
  - Li Li

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2023-07-13T00:00:00Z'
doi: 'https://doi.org/10.1145/3597926.3598113'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-03-02T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 32nd ACM SIGSOFT International Symposium on Software Testing and Analysis 2023*
publication_short: In *ISSTA'23*

abstract: More and more edge devices and mobile apps are leveraging deep learning (DL) capabilities. Deploying such models on devices – referred to as on-device models – rather than as remote cloud-hosted services, has gained popularity because it avoids transmitting user’s data off of the device and achieves high response time. However, on-device models can be easily attacked, as they can be accessed by unpacking corresponding apps and the model is fully exposed to attackers. Recent studies show that attackers can easily generate white-box-like attacks for an on-device model or even inverse its training data. To protect on-device models from white-box attacks, we propose a novel technique called model obfuscation. Specifically, model obfuscation hides and obfuscates the key information – structure, parameters and attributes – of models by renaming, parameter encapsulation, neural structure obfuscation obfuscation, shortcut injection, and extra layer injection. We have developed a prototype tool ModelObfuscator to automatically obfuscate on-device TFLite models. Our experiments show that this proposed approach can dramatically improve model security by significantly increasing the difficulty of parsing models’ inner information, without increasing the latency of DL models. Our proposed on-device model obfuscation has the potential to be a fundamental technique for on-device model deployment. Our prototype tool is publicly available at https://github.com/zhoumingyi/ModelObfuscator.

# Summary. An optional shortened abstract.
summary: A novel approach that can significantly increase the difficulty of understanding the model information for human and automatic tools. It will not affect the model performance and only introduce small overheads.

tags: [Model Obfuscation]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://github.com/zhoumingyi/ModelObfuscator'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'ModelObfuscator'
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
