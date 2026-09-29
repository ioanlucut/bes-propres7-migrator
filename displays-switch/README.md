# Display switch

A one-click macOS app for the presentation desk. Songs run in ProPresenter, which drives the outputs as separate extended displays, while some presentations run in PowerPoint, which needs them mirrored. Rearranging three displays in System Settings between two parts of a service is slow and easy to get wrong; [`bes-display-switch.scpt`](bes-display-switch.scpt) does it with one dialog.

The dialog asks `Alege configurația monitoarelor:` ("choose the display layout") and offers two buttons:

| Button                                   | Layout applied with [`displayplacer`](https://github.com/jakehilborn/displayplacer)                                          |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Pro Presenter - Extend Display & Stage` | Operator screen 2560×1440 in the middle, one output at 1920×1080 on its left and one at 1344×768 on its right, all extended. |
| `PowerPoint - Mirror Display & Stage`    | Operator screen 2560×1440, with both outputs mirrored as one 1344×768 display on its right.                                  |

Any error from `displayplacer` is shown in a dialog instead of failing silently.

## Adapt it to your displays

The display IDs, resolutions and positions are specific to the BES desk.

1. Install the tool: `brew install displayplacer`. The script calls it at `/opt/homebrew/bin/displayplacer`, the Homebrew path on Apple silicon.
2. Arrange the displays by hand for the first layout, run `displayplacer list`, and copy the command it prints at the end. Repeat for the second layout.
3. Paste the two commands into `BES_DEFAULT_PROPRESENTER_CONFIG_COMMAND` and `BES_POWERPOINT_CONFIG_COMMAND`, keeping the `BES_DISPLAYPLACER_PATH & " …"` form. Joining two IDs with `+`, as in `id:A+B`, mirrors those displays.

## Install as an app

1. Open `bes-display-switch.scpt` in Script Editor.
2. Choose File → Export, set the file format to **Application**, and save it where the operators will find it, for example the Dock.
3. Run the app and pick a layout. macOS may ask for permission the first time; allow it.
