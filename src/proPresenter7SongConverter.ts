import { randomUUID } from 'crypto';
import {
  ApplicationInfo,
  ApplicationInfo_Application,
  ApplicationInfo_Platform,
  CollectionElementType,
  Color,
  UUID,
} from '../proto/basicTypes';
import {
  Presentation,
  Presentation_Arrangement,
  Presentation_CCLI,
  Presentation_CueGroup,
} from '../proto/presentation';
import { Cue } from '../proto/cue';
import {
  Action,
  Action_ActionType,
  Action_ContentDestination,
  Action_MacroType,
  Action_SlideType,
} from '../proto/action';
import { PresentationSlide } from '../proto/presentationSlide';
import { Slide, Slide_Element } from '../proto/slide';
import {
  Graphics_Element,
  Graphics_Element_FlipMode,
  Graphics_Fill,
  Graphics_Path,
  Graphics_Path_BezierPoint,
  Graphics_Path_Shape,
  Graphics_Path_Shape_Type,
  Graphics_Point,
  Graphics_Rect,
  Graphics_Size,
  Graphics_Text,
  Graphics_Text_Attributes,
  Graphics_Text_Attributes_Alignment,
  Graphics_Text_Attributes_Capitalization,
  Graphics_Text_Attributes_CustomAttribute,
  Graphics_Text_Attributes_Font,
  Graphics_Text_Attributes_Paragraph,
  Graphics_Text_ScaleBehavior,
  Graphics_Text_Transform,
  Graphics_Text_VerticalAlignment,
} from '../proto/graphicsData';
import { Group } from '../proto/groups';
import { Song, SongSection, Verse } from './types';
import { convertToRtf } from './txtToRtfConverter';

export type Config = {
  arrangementName: string;
  ccliSettings: Presentation_CCLI;
  fontConfig: Graphics_Text_Attributes_Font;
  graphicSize: Graphics_Size;
  presentationCategory: string;
  refMacroId: string;
  refMacroName: string;
};

const INTRO_SLIDE_NAME = 'Slide config';
const INTRO_SLIDE_LABEL = 'Blank';

const WHITE_COLOR = {
  red: 1,
  green: 1,
  blue: 1,
  alpha: 1,
} as Color;

const ENCODING = 'utf8';

const CUE_GROUP_COLOR = Color.create({
  green: 0.467,
  blue: 0.8,
  alpha: 1,
});

const APPLICATION_INFO = ApplicationInfo.create({
  application: ApplicationInfo_Application.APPLICATION_PROPRESENTER,
  platform: ApplicationInfo_Platform.PLATFORM_MACOS,
  applicationVersion: undefined,
  platformVersion: undefined,
});

const TRANSPARENT_COLOR = Color.create({
  alpha: 0,
});

const FULL_SIZE_PATH_OBJECT = Graphics_Path.create({
  shape: Graphics_Path_Shape.create({
    type: Graphics_Path_Shape_Type.TYPE_RECTANGLE,
  }),
  closed: true,
  points: [
    Graphics_Path_BezierPoint.create({
      point: Graphics_Point.create({}),
    }),
    Graphics_Path_BezierPoint.create({
      point: Graphics_Point.create({ x: 1 }),
      q0: Graphics_Point.create({ x: 1 }),
      q1: Graphics_Point.create({ x: 1 }),
    }),
    Graphics_Path_BezierPoint.create({
      point: Graphics_Point.create({ x: 1, y: 1 }),
      q0: Graphics_Point.create({ x: 1, y: 1 }),
      q1: Graphics_Point.create({ x: 1, y: 1 }),
    }),
    Graphics_Path_BezierPoint.create({
      point: Graphics_Point.create({ y: 1 }),
      q0: Graphics_Point.create({ y: 1 }),
      q1: Graphics_Point.create({ y: 1 }),
    }),
  ],
});

const createTextFromSection = (verse: string, config: Config) =>
  Graphics_Text.create({
    attributes: Graphics_Text_Attributes.create({
      font: Graphics_Text_Attributes_Font.create(config.fontConfig),
      customAttributes: [
        Graphics_Text_Attributes_CustomAttribute.create({
          originalFontSize: config.fontConfig.size,
          capitalization:
            Graphics_Text_Attributes_Capitalization.CAPITALIZATION_ALL_CAPS,
        }),
      ],
      capitalization:
        Graphics_Text_Attributes_Capitalization.CAPITALIZATION_ALL_CAPS,
      textSolidFill: Color.create(WHITE_COLOR),
      backgroundColor: Color.create(WHITE_COLOR),
      kerning: 1,
      paragraphStyle: Graphics_Text_Attributes_Paragraph.create({
        alignment: Graphics_Text_Attributes_Alignment.ALIGNMENT_CENTER,
        lineHeightMultiple: 1,
        lineSpacing: 1.2,
        paragraphSpacing: 4.2,
        defaultTabInterval: 36,
      }),
    }),
    scaleBehavior: Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_DOWN,
    transform: Graphics_Text_Transform.TRANSFORM_NONE,
    verticalAlignment:
      Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_MIDDLE,
    rtfData: Buffer.from(convertToRtf(verse), ENCODING),
  });

const createEmptySmartIntroCue = (config: Config) => {
  const cueUUID = UUID.create({
    string: randomUUID(),
  });

  const slideElement = Slide_Element.create({
    element: Graphics_Element.create({
      uuid: UUID.create({
        string: randomUUID(),
      }),
      fill: Graphics_Fill.create({
        color: Color.create(TRANSPARENT_COLOR),
      }),
      name: INTRO_SLIDE_NAME,
      flipMode: Graphics_Element_FlipMode.FLIP_MODE_BOTH,
      bounds: Graphics_Rect.create({
        origin: Graphics_Point.create({
          x: 1,
          y: 1,
        }),
        size: Graphics_Size.create(config.graphicSize),
      }),
      opacity: 1,
      text: createTextFromSection('', config),
      path: FULL_SIZE_PATH_OBJECT,
    }),
  });

  const slide = Action_SlideType.create({
    presentation: PresentationSlide.create({
      baseSlide: Slide.create({
        uuid: UUID.create({
          string: randomUUID(),
        }),
        drawsBackgroundColor: false,
        size: Graphics_Size.create(config.graphicSize),
        elements: [slideElement],
      }),
    }),
  });

  const presentationAction = Action.create({
    uuid: UUID.create({
      string: randomUUID(),
    }),
    isEnabled: true,
    slide,
    type: Action_ActionType.ACTION_TYPE_PRESENTATION_SLIDE,
  });

  const groupUUID = UUID.create({
    string: randomUUID(),
  });

  const macroAction = Action.create({
    name: config.refMacroName,
    uuid: UUID.create({
      string: randomUUID(),
    }),
    isEnabled: true,
    slide,
    type: Action_ActionType.ACTION_TYPE_MACRO,
    macro: Action_MacroType.create({
      identification: CollectionElementType.create({
        parameterName: config.refMacroName,
        parameterUuid: UUID.create({
          string: config.refMacroId,
        }),
      }),
    }),
  });

  const cue = Cue.create({
    uuid: cueUUID,
    isEnabled: true,
    actions: [presentationAction, macroAction],
  });

  const cueGroup = Presentation_CueGroup.create({
    group: Group.create({
      uuid: groupUUID,
      name: INTRO_SLIDE_LABEL,
      color: CUE_GROUP_COLOR,
    }),
    cueIdentifiers: [cueUUID],
  });

  return { cue, cueGroup };
};

const processVerse = (
  { content, sectionLabel }: Verse,
  { title }: Song,
  config: Config,
) => {
  const cueUUID = UUID.create({
    string: randomUUID(),
  });

  const slideElement = Slide_Element.create({
    element: Graphics_Element.create({
      uuid: UUID.create({
        string: randomUUID(),
      }),
      fill: Graphics_Fill.create({
        color: TRANSPARENT_COLOR,
      }),
      name: sectionLabel,
      bounds: Graphics_Rect.create({
        origin: Graphics_Point.create({
          x: 0,
          y: 0,
        }),
        size: Graphics_Size.create(config.graphicSize),
      }),
      opacity: 1,
      text: createTextFromSection(content, config),
      path: FULL_SIZE_PATH_OBJECT,
    }),
  });

  const slide = Action_SlideType.create({
    presentation: PresentationSlide.create({
      baseSlide: Slide.create({
        uuid: UUID.create({
          string: randomUUID(),
        }),
        drawsBackgroundColor: false,
        size: Graphics_Size.create(config.graphicSize),
        elements: [slideElement],
      }),
    }),
  });

  const action = Action.create({
    uuid: UUID.create({
      string: randomUUID(),
    }),
    isEnabled: true,
    slide,
    type: Action_ActionType.ACTION_TYPE_PRESENTATION_SLIDE,
  });

  const groupUUID = UUID.create({
    string: randomUUID(),
  });

  const cue = Cue.create({
    uuid: cueUUID,
    isEnabled: true,
    actions: [action],
  });

  const cueGroup = Presentation_CueGroup.create({
    group: Group.create({
      uuid: groupUUID,
      name: sectionLabel,
      color: CUE_GROUP_COLOR,
    }),
    cueIdentifiers: [cueUUID],
  });

  return { cue, cueGroup };
};

export const convertSongToProPresenter7 = (
  song: Song,
  config: Config,
): Presentation => {
  const { verses, title, sequence } = song;

  const presentationUUId = UUID.create({
    string: randomUUID(),
  });

  const songConfigHashMap = {} as Record<
    string,
    {
      cue: Cue;
      cueGroup: Presentation_CueGroup;
    }
  >;

  const slidesConfig = verses.map((verse) => {
    const { cue, cueGroup } = processVerse(verse, song, config);

    songConfigHashMap[verse.section] = { cue, cueGroup };

    return { cue, cueGroup };
  });

  const arrangementUUID = UUID.create({
    string: randomUUID(),
  });

  const { cue: introConfigCue, cueGroup: introConfigCueGroup } =
    createEmptySmartIntroCue(config);

  const arrangements = [
    Presentation_Arrangement.create({
      uuid: arrangementUUID,
      name: config.arrangementName,
      groupIdentifiers: [
        introConfigCueGroup?.group?.uuid as UUID,
        ...sequence.map(
          (section) =>
            songConfigHashMap[section]?.cueGroup?.group?.uuid as UUID,
        ),
      ],
    }),
  ];

  return Presentation.create({
    category: config.presentationCategory,
    contentDestination: Action_ContentDestination.CONTENT_DESTINATION_GLOBAL,
    ccli: Presentation_CCLI.create({
      ...config.ccliSettings,
      songTitle: title,
    }),
    applicationInfo: APPLICATION_INFO,
    uuid: presentationUUId,
    name: title,
    cues: [introConfigCue, ...slidesConfig.map(({ cue }) => cue)],
    cueGroups: [
      introConfigCueGroup,
      ...slidesConfig.map(({ cueGroup }) => cueGroup),
    ],
    arrangements,
    selectedArrangement: arrangementUUID,
  });
};
