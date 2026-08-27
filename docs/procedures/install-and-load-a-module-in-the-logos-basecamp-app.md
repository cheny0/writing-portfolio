---
title: Install and load a module in the Logos Basecamp app
sidebar_position: 2
description: >-
  A sectioned procedure for app users: installing an .lgx module package from the Logos catalog and loading it from the Basecamp Modules view.
tags: [procedure, logos]
---

:::info Sample

Written for [Logos](https://logos.co/). Published at [docs.logos.co/basecamp/install-and-load-a-module-in-logos-basecamp](https://docs.logos.co/basecamp/install-and-load-a-module-in-logos-basecamp).

:::

#### Get a Logos Module onto your machine and run it from the Basecamp Modules view.

Logos Modules are background services that Basecamp runs in isolated `logos_host` subprocesses to provide features like peer-to-peer networking, storage, or wallets. This procedure walks you through installing a module package into Basecamp and loading it from the Modules view, so the module is available to any UI App that depends on it. Run it once per module you want available on a fresh Basecamp install — for example, to add `waku_module` before loading a chat UI App.

You can install a module two ways:

- **Online catalog (covered in this procedure)** — The Package Manager UI fetches an `.lgx` package from the Logos catalog. Choose this when the module is published in the catalog.
- **Local `.lgx` file** — In the **Modules** view, click **Install LGX Package** and pick the file. Choose this for modules you built yourself or received out of band. The load and verify steps are identical.

Before you start, make sure you have:

- Logos Basecamp installed and running. Prebuilt Linux AppImage and macOS DMG binaries are available from the [latest release](https://github.com/logos-co/logos-basecamp/releases/latest).
- Internet access (only required for the online catalog install).
- An `.lgx` file whose archive contains a variant matching your platform — `linux-x86_64`, `linux-aarch64`, `darwin-x86_64`, or `darwin-arm64` — if you install from a local file.

## What to expect

- You can install a module from the online catalog or from a local `.lgx` file.
- You can start the module from the **Logos Modules** tab, and Basecamp loads its declared dependencies automatically.
- You can confirm the module is running by reading its status, CPU, and memory in the same tab.

## Step 1: Install the module package

The Package Manager UI is a UI App that Basecamp auto-loads at startup, so it is available as soon as the app window appears.

1. In the sidebar, click the **package_manager_ui** icon.
1. In the Package Manager UI tab, browse or search the catalog and locate the module you want.
1. On the module entry, click **Download / Install**.

   - Basecamp fetches the `.lgx` from GitHub Releases, extracts the platform variant that matches your machine, and copies the files into your user modules directory.
   - The **Modules** view refreshes automatically when the install finishes. No restart is needed.

## Step 2: Load the module

1. In the sidebar, click the **Modules** icon at the bottom.
1. Select the **Logos Modules** tab.
1. Locate the module in the list. Its **Status** column shows *Not loaded*.
1. Click **Load** next to the module.

## Step 3: Verify the module is running

1. In the **Logos Modules** tab, confirm the module's **Status** column now shows *Loaded*.
1. Watch the **CPU** and **Memory** columns. Values refresh every two seconds while the module's host process is alive.
1. To stop the module, click **Unload**. The host process exits and the status returns to *Not loaded*.

   - Modules loaded earlier as dependencies are not unloaded automatically — they may still be in use by other modules or UI Apps.

## Troubleshooting installing and loading modules

### Why doesn't my installed module appear in the Modules view?

The `.lgx` file probably does not contain a variant for your platform, or it was copied to a directory Basecamp does not scan. Confirm the archive includes a variant matching your platform (`linux-x86_64`, `linux-aarch64`, `darwin-x86_64`, or `darwin-arm64`), then reinstall using **Install LGX Package** in the **Modules** view so the package manager copies the files to the correct user modules directory.
