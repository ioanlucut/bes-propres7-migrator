-- Global Constants
property BES_DISPLAYPLACER_PATH : "/opt/homebrew/bin/displayplacer"
property BES_DEFAULT_PROPRESENTER_CONFIG_COMMAND : BES_DISPLAYPLACER_PATH & " 'id:4F494B73-B908-4053-8314-E259F924A0AA res:2560x1440 hz:60 color_depth:8 enabled:true scaling:on origin:(0,0) degree:0' 'id:98D31832-E235-4AAD-B122-81E6BC856D87 res:1920x1080 hz:60 color_depth:8 enabled:true scaling:off origin:(-1920,0) degree:0' 'id:8873492D-99CD-44AF-A7D0-F9C3F33212B8 res:1344x768 hz:60 color_depth:8 enabled:true scaling:off origin:(2560,0) degree:0'"
property BES_POWERPOINT_CONFIG_COMMAND : BES_DISPLAYPLACER_PATH & " 'id:4F494B73-B908-4053-8314-E259F924A0AA res:2560x1440 hz:60 color_depth:8 enabled:true scaling:on origin:(0,0) degree:0' 'id:8873492D-99CD-44AF-A7D0-F9C3F33212B8+98D31832-E235-4AAD-B122-81E6BC856D87 res:1344x768 hz:60 color_depth:8 enabled:true scaling:off origin:(2560,0) degree:0'"

property BES_ERROR_SETTING_INITIAL_CONFIG_MESSAGE : "Eroare: "
property BES_ERROR_SETTING_ALTERNATE_CONFIG_MESSAGE : "Eroare: "
property BES_ERROR_IN_USER_CHOICE_DIALOG_MESSAGE : "Eroare: "
property BES_CHOOSE_DISPLAY_CONFIG_MESSAGE : "Alege configurația monitoarelor:"
property BES_PRO_PRESENTER_CFG_BUTTON : "Pro Presenter - Extend Display & Stage"
property BES_POWER_POINT_CFG_BUTTON : "PowerPoint - Mirror Display & Stage"
property BES_OK_BUTTON : "OK"

-- Function to set the initial configuration (Pro Presenter Display + Stage)
on defaultProPresenterConfig()
  try
    do shell script BES_DEFAULT_PROPRESENTER_CONFIG_COMMAND
  on error errMsg number errNum
    display dialog BES_ERROR_SETTING_INITIAL_CONFIG_MESSAGE & errMsg & " (Error number: " & errNum & ")" buttons {BES_OK_BUTTON} default button BES_OK_BUTTON
  end try
end defaultProPresenterConfig

-- Function to set the alternate configuration
on setPowerPointConfig()
  try
    do shell script BES_POWERPOINT_CONFIG_COMMAND
  on error errMsg number errNum
    display dialog BES_ERROR_SETTING_ALTERNATE_CONFIG_MESSAGE & errMsg & " (Error number: " & errNum & ")" buttons {BES_OK_BUTTON} default button BES_OK_BUTTON
  end try
end setPowerPointConfig

-- Prompt user for configuration choice
try
  set userChoice to display dialog BES_CHOOSE_DISPLAY_CONFIG_MESSAGE buttons {BES_PRO_PRESENTER_CFG_BUTTON, BES_POWER_POINT_CFG_BUTTON} default button BES_PRO_PRESENTER_CFG_BUTTON

  if button returned of userChoice is BES_PRO_PRESENTER_CFG_BUTTON then
    defaultProPresenterConfig()
  else if button returned of userChoice is BES_POWER_POINT_CFG_BUTTON then
    setPowerPointConfig()
  end if
on error errMsg number errNum
  display dialog BES_ERROR_IN_USER_CHOICE_DIALOG_MESSAGE & errMsg & " (Error number: " & errNum & ")" buttons {BES_OK_BUTTON} default button BES_OK_BUTTON
end try
