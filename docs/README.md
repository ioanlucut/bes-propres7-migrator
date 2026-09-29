# Documentation

Each page answers one kind of question. Start from what you are trying to do.

| I want to…                                                   | Read                                                                                                  | Kind        |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ----------- |
| See what the project does and try it                         | [README](../README.md)                                                                                | Tutorial    |
| Write or fix a song file                                     | [Song format](song-format.md)                                                                         | Reference   |
| Change the church-specific settings                          | [Configuration](configuration.md)                                                                     | Reference   |
| Understand how a deploy decides what ships                   | [Architecture](architecture.md)                                                                       | Explanation |
| Understand what a `.pro` file contains                       | [ProPresenter format](propresenter-format.md)                                                         | Explanation |
| Set up remote deploys to Google Drive                        | [Google Drive setup](google-drive-setup.md)                                                           | How-to      |
| Set up the presentation Mac                                  | [Presentation Mac sync](../client-sync-macos/README.md)                                               | How-to      |
| Switch the desk displays between ProPresenter and PowerPoint | [Display switch](../displays-switch/README.md)                                                        | How-to      |
| Update the schema after a ProPresenter release               | [Regenerating the schema](propresenter-format.md#regenerating-the-schema-after-a-propresenter-update) | How-to      |

## Keeping the docs true

Documentation that nobody checks drifts from the code; the previous README had a broken clone URL and a song example that no longer parsed. These pages are checked instead of trusted:

- [`src/documentation.spec.ts`](../src/documentation.spec.ts) parses every song example in the Markdown with the real parser, checks each row of the section-code tables against `getMatchingGroup`, and resolves every relative link and `#anchor` in the repository's Markdown files. It runs with `npm test`.
- The [link check](../.github/workflows/links.yml) verifies external URLs on every pull request and once a week, so a moved page is caught even when nothing in the repository changed.
- [`overview.gif`](assets/overview.gif) is rendered by [`render_overview_gif.py`](assets/src/render_overview_gif.py) rather than recorded, so it can be regenerated when the pipeline changes.

When you change behavior, update the one page that owns the fact and link to it from elsewhere, rather than repeating it.
