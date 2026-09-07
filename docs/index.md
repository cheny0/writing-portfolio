---
title: Writing samples
slug: /
sidebar_position: 0
sidebar_label: Overview
description: Developer documentation samples — procedures, tutorials, and references for distributed-systems products.
---

Each sample below is a document I researched, structured, and wrote end to end.
Every one of them is published; each sample links to the live version.

## Browse by type

The samples below are grouped by product. To read across products by what kind
of document each one is:

| | | |
| --- | --- | --- |
| [Procedure](./tags/type/procedure) — 8 | [Reference](./tags/type/reference) — 1 | [Concept](./tags/type/concept) — 2 |
| [Quickstart](./tags/type/quick-start) — 1 | [All tags](./tags) | |

## Dev docs

Documentation for developers building on a product. All four are procedures:
task-based documents that get a reader from a starting state to a verified
result.

### Logos Core — building and running modules

| Sample | Audience | What it covers |
| --- | --- | --- |
| [Build and run a Logos core module](./dev-docs/build-and-run-a-logos-core-module.md) | C++ developers | Scaffolding, building, packaging, and testing a non-UI business logic module |
| [Install and load a module in the Logos Basecamp app](./dev-docs/install-and-load-a-module-in-the-logos-basecamp-app.md) | Basecamp users | Installing an `.lgx` package from the catalogue and loading it from the Modules view |

### Logos Execution Zone — moving tokens

| Sample | Audience | What it covers |
| --- | --- | --- |
| [Transfer native tokens on the Logos Execution Zone](./dev-docs/transfer-native-tokens-on-the-logos-execution-zone.md) | LEZ users | Sending native tokens between public and private accounts with the wallet CLI |
| [Create and transfer custom tokens on the Logos Execution Zone](./dev-docs/create-and-transfer-custom-tokens-on-the-logos-execution-zone.md) | LEZ users | Defining a custom token with the LEZ token program and transferring it |

## User docs

Help-centre articles for people using a product rather than building on it.

### Status

Reviewed by `jorge-campo`.

| Sample | Type | What it covers |
| --- | --- | --- |
| [How to run a Status Community: your quick start guide](./user-docs/status/how-to-run-a-status-community.mdx) | Quickstart | Setting up channels, controlling membership, and using tokens to manage permissions |
| [About voting to change the community visibility](./user-docs/status/about-voting-to-change-the-community-visibility.mdx) | Concept | How SNT holders vote to feature a community or change its visibility, and what each step costs |
| [Vote to make a community private or public](./user-docs/status/vote-to-make-a-community-private-or-public.mdx) | Procedure | Connecting a wallet, then initiating, casting, verifying, and finalising a visibility vote |
| [Sync your profile across devices](./user-docs/status/sync-your-profile-across-devices.mdx) | Procedure | Pairing a new device on mobile and desktop, and turning syncing off |

### Keycard

Keycard Shell is a hardware wallet and air-gapped transaction signer.

| Sample | Type | What it covers |
| --- | --- | --- |
| [Set up your Keycard with Keycard Shell](./user-docs/keycard/set-up-your-keycard-with-keycard-shell.mdx) | Procedure | Setting a PIN and duress PIN, then loading a key pair onto the card |
| [Get to know your Keycard Shell](./user-docs/keycard/get-to-know-your-keycard-shell.mdx) | Quickstart | The controls on the device, its keypad, and the on-screen keyboard |
| [Update Keycard Shell in air gapped mode](./user-docs/keycard/update-keycard-shell-in-air-gapped-mode.mdx) | Procedure | Updating firmware with no data connection, using an SD card |
| [Understand the SLIP39 wallet backup standard](./user-docs/keycard/understand-the-slip-39-wallet-backup-standard.mdx) | Concept | Share-based backups: how a recovery phrase splits into shares, and what thresholds mean |
