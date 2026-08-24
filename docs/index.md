---
title: Writing samples
slug: /
sidebar_position: 0
sidebar_label: Overview
description: Developer documentation samples — procedures, tutorials, and references for distributed-systems products.
---

Each sample below is a document I researched, structured, and wrote end to end.
Where the document is published in a public repo, the sample links to it.

## Procedures

Task-based documents that get a reader from a starting state to a verified
result. Both samples use a sectioned layout: numbered `Step N` blocks, each with
its own verification.

| Sample | Audience | What it covers |
| --- | --- | --- |
| [Wrap a C library as a Logos core module](./procedures/wrap-a-c-library-as-a-logos-core-module.md) | C++ developers building Logos modules | Linking a C shared library into a Qt plugin and re-exposing its functions through the meta-object system |
| [Install and load a module in the Logos Basecamp app](./procedures/install-and-load-a-module-in-the-logos-basecamp-app.md) | Basecamp users installing modules | Installing an `.lgx` package from the catalog and loading it from the Modules view |

## How I work

- **Evidence first.** Source repositories, PRs, and RFCs before prose. Every
  claim traces back to something I read, ran, or was told by an engineer.
- **Templates as specs.** Each document type has an authoritative template that
  fixes the section order and what belongs in each one, so readers can navigate
  a document type they've seen before.
- **Tested commands.** Code blocks are run, not paraphrased.

See [About](/about) for background and contact details.
