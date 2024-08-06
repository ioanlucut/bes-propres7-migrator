# Display Configuration Toggle Script

This AppleScript allows you to toggle between two different display configurations on macOS. It is designed to be used
with the `displayplacer` command-line tool.

## Prerequisites

- **`displayplacer`**: Ensure you have `displayplacer` installed. You can install it via Homebrew with the following
  command:

  ```bash
  brew install displayplacer
  ```

## Script Overview

### The script provides two display configurations:

    1. Initial Configuration (example):
    • Display 1: id:37D8832A-2D66-02CA-B9F7-8F30A301B230 at 2056x1329 resolution, 120Hz, 8-bit color depth, enabled, scaling on, origin at (0,0).
    • Display 2: id:9261071D-C9FC-4476-9F8D-BC7B52CF4071 at 2560x1440 resolution, 60Hz, 8-bit color depth, enabled, scaling on, origin at (2056,0).
    2. Alternate Configuration (example):
    • Display 1: id:9261071D-C9FC-4476-9F8D-BC7B52CF4071 at 2880x1620 resolution, 60Hz, 8-bit color depth, enabled, scaling on, origin at (0,0).

### Using the Script

    1. Open Script Editor:
    • Open the Script Editor application on macOS.
    2. Paste the Script:
    • Copy and paste the provided AppleScript code into Script Editor.
    3. Save the Script as an Application:
    • Go to File -> Export.
    • Set File Format to Application.
    • Choose a name (e.g., “Display Config Toggle”) and location for your app, then click Save.
    4. Grant Necessary Permissions:
    • Open System Preferences -> Security & Privacy -> Privacy tab.
    • Select Full Disk Access or Automation, then add your new app if it’s not listed.
    5. Run the Application:
    • Double-click the app to run it. You will see a dialog prompting you to choose between the “Initial” and “Alternate” configurations.
