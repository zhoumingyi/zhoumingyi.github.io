---
title: 'DynaMO: Protecting Mobile DL Models through Coupling Obfuscated DL Operators (Just Accepted)'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Mingyi Zhou
  - Xiang Gao
  - Xiao Chen
  - Chunyang Chen
  - John Grundy
  - Li Li

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2024-10-27T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2024-08-07T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 39th IEEE/ACM International Conference on Automated Software Engineering, Research Track*
publication_short: In *ASE'24*

abstract: Deploying deep learning (DL) models on mobile applications (Apps) has become ever-more popular. However, existing studies show attackers can easily reverse-engineer mobile DL models in Apps to steal intellectual property or generate effective attacks. A recent approach, Model Obfuscation, has been proposed to defend against such reverse engineering by obfuscating DL model representations, such as weights and computational graphs, without affecting model performance. These existing model obfuscation methods use static methods to obfuscate the model representation, or they use half-dynamic methods but require users to restore the model information through additional input arguments. However, these static methods or half-dynamic methods cannot provide enough protection for on-device DL models. Attackers can use dynamic analysis to mine the sensitive information in the inference codes as the correct model information and intermediate results must be recovered at runtime for static and half-dynamic obfuscation methods. We assess the vulnerability of the existing obfuscation strategies using an instrumentation method and tool, DLModelExplorer, that dynamically extracts correct sensitive model information (i.e., weights, computational graph) at runtime. Experiments show it achieves very high attack performance (e.g., 98.76% of weights extraction rate and 99.89% of obfuscating operator classification rate). To defend against such attacks based on dynamic instrumentation, we propose DynaMO, a Dynamic Model Obfuscation strategy similar to Homomorphic Encryption. The obfuscation and recovery process can only be done through simple linear transformation for the weights of randomly coupled eligible operators, which is a fully dynamic obfuscation strategy. Experiments show that our proposed strategy can dramatically improve model security compared with the existing obfuscation strategies, with only negligible overheads for model inference.

# Summary. An optional shortened abstract.
summary: A dynamic obfuscation method to defend against the DL reverse engineering through dynamic instrumentation.

tags: [On-device Security]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: ''
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'DynaMO'
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
