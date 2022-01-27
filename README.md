<img src="docs/toggl-track-logo.svg" alt="Track Extension" width="400" height="auto">

# Toggl Track browser extension integrations

## 📣 Toggl Button is now the Toggl Track browser extension!
We not only renamed the extension, but we also made several changes to Track Extension's codebase to build a better foundation for the future and make it easier to contribute new integrations.

For more information, please check this [blogpost](https://toggl.com/blog/purposeful-open-source).

---

This is the repo for the browser extension's integrations.

Start and stop the timer from the web tools you use daily. Get the time-tracking
out of the way and focus on real work.

## Table of Contents
- [How to use](#how-to-use)
  - [Installing the extension](#installing-the-extension)
  - [Using the extension](#using-the-extension)
- [Add custom domains](#add-custom-domains)
- [Supported services](#supported-services)
- [Create new integrations](#create-new-integrations)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## How to use

### Installing the extension

__Chrome__
https://chrome.google.com/webstore/detail/toggl-button/oejgccbfbmkkpaidnkphaiaecficdnfn

__Firefox__
https://addons.mozilla.org/en-US/firefox/addon/toggl-button-time-tracker/

### Using the extension

1. Log in to your [Toggl Track](https://track.toggl.com/) account from the extension popup.
2. Enable services that you want to use the browser extension with under Settings > Integrations.
3. Navigate to your [service](#supported-services) and start your Toggl timer there.

Or start entry from the extension icon menu.

3. To edit the running time entry:
  - Edit entry details from the post start popup that is shown right after you click the "Start timer" button.
  - Edit entry details from the extension icon menu by clicking the running time entry name.

4. To stop the current running timer:
  - Press the button again.
  - Stop the entry from the extension icon menu.
  - Start another time entry inside your account.

### Editing Shortcut Extension
1. Right click on extension icon in chrome.

![](./docs/shortcut-1-settings.PNG)

2. Selection Options

3. Click Integrations in left menu

![](./docs/shortcut-3-integrations.PNG)

4. Scroll down to "Custom Integrations". If first time to enable, check "Enable development mode" and scroll back up to "Integrations" and click edit next to "Shortcut". If it's already enabled, click on "edit" next to "Shortcut" in the list of custom integrations

![Enable Custom Integrations](./docs/shortcut-4-custom-integrations-enable-dev.PNG)

![Edit Integration](./docs/shortcut-4-integrations-edit.PNG)

![Custom Integration Already Active. Edit custom integration](./docs/shortcut-4-custom-integrations-edit.PNG)

5. Paste in code from [shortcut.js](./src/content/shortcut.js) from toggle-button repo

![](./docs/shortcut-5-paste-code.PNG)

6. Click Save Integration

![](./docs/shortcut-6-save-integration.PNG)

7. Click “General” in left menu

![](./docs/shortcut-7-general.PNG)

8. Make sure Enable automatic tagging is checked

![](./docs/shortcut-8-tags-enable.PNG)

9. Go try new toggle button

Follow the "Editing built-in integration" instructions in the [contributing section](#contributing). When editing the integration, copy the contents of the `src/content/shortcut.js` file into the edit dialog.

## Supported services

For a list of supported services please refer to [integrations](docs/INTEGRATIONS.md)

## Add custom domains

If one of the supported services that you use is hosted on a custom domain (e.g. https://yourcompany.github.com) you can define the custom domains in Settings > Integrations.

## Create new integrations

Do you want to create a new custom integration, and maybe share it with the rest of the world? Check the [contributing section](#contributing) for more information.

## Changelog

A list of all the changes and added features can be found at http://toggl.github.io/toggl-button.

## Contributing

Want to contribute? Great! Read up our guide for [contributing](docs/CONTRIBUTING.md).
It explains in detail how to create, edit, debug and publish a new integration to the Toggl Track browser extension.

## License
The Toggl Track browser extension extension is [Apache License 2.0](LICENSE)
