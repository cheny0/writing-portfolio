---
title: Writing samples
slug: /
sidebar_position: 0
sidebar_label: Overview
description: Developer documentation samples — procedures, tutorials, and references for distributed-systems products.
---

Each sample below is a document I researched, structured, and wrote end to end.
Every one of them is published; each sample links to the live version.

## Procedures

Task-based documents that get a reader from a starting state to a verified
result.

### Logos Core — building and running modules

| Sample | Audience | What it covers |
| --- | --- | --- |
| [Build and run a Logos core module](./procedures/build-and-run-a-logos-core-module.md) | C++ developers | Scaffolding, building, packaging, and testing a non-UI business logic module |
| [Install and load a module in the Logos Basecamp app](./procedures/install-and-load-a-module-in-the-logos-basecamp-app.md) | Basecamp users | Installing an `.lgx` package from the catalogue and loading it from the Modules view |

### Logos Execution Zone — moving tokens

| Sample | Audience | What it covers |
| --- | --- | --- |
| [Transfer native tokens on the Logos Execution Zone](./procedures/transfer-native-tokens-on-the-logos-execution-zone.md) | LEZ users | Sending native tokens between public and private accounts with the wallet CLI |
| [Create and transfer custom tokens on the Logos Execution Zone](./procedures/create-and-transfer-custom-tokens-on-the-logos-execution-zone.md) | LEZ users | Defining a custom token with the LEZ token program and transferring it |

### User docs — Status help centre

Help-centre articles for people using the app rather than building on it.
Imported from the Status help set, reviewed by `jorge-campo`.

| Sample | Type | What it covers |
| --- | --- | --- |
| [How to run a Status Community: your quick start guide](./procedures/user-docs/how-to-run-a-status-community.mdx) | Orientation | Setting up channels, controlling membership, and using tokens to manage permissions |
| [About voting to change the community visibility](./procedures/user-docs/about-voting-to-change-the-community-visibility.mdx) | Concept | How SNT holders vote to feature a community or change its visibility, and what each step costs |
| [Sync your profile across devices](./procedures/user-docs/sync-your-profile-across-devices.mdx) | Procedure | Pairing a new device on mobile and desktop, and turning syncing off |

## How I work

- **Evidence first.** Source repositories, PRs, and RFCs before prose. Every
  claim traces back to something I read, ran, or was told by an engineer.
- **Templates as specs.** Each document type has an authoritative template that
  fixes the section order and what belongs in each one, so readers can navigate
  a document type they've seen before.
- **Tested commands.** Code blocks are run, not paraphrased.

See [About](/about) for background and contact details.
