import { randomUUID } from 'crypto';
import fs from 'fs';
import {
  ApplicationInfo,
  ApplicationInfo_Application,
  ApplicationInfo_Platform,
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
  Action_Label,
  Action_SlideType,
} from '../proto/action';
import { PresentationSlide } from '../proto/presentationSlide';
import { Slide, Slide_Element } from '../proto/slide';
import {
  Graphics_Element,
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
  Graphics_Text_Attributes_Capitalization,
  Graphics_Text_Attributes_CustomAttribute,
  Graphics_Text_Attributes_CustomAttribute_Capitalization,
  Graphics_Text_Attributes_Font,
  Graphics_Text_Attributes_Paragraph,
  Graphics_Text_Attributes_Paragraph_Alignment,
  Graphics_Text_ScaleBehavior,
  Graphics_Text_Transform,
  Graphics_Text_VerticalAlignment,
} from '../proto/graphicsData';
import { Group } from '../proto/groups';
import { Song, Verse } from './types';

const DEFAULT_BES_ARRANGEMENT = 'BES arrangement';
const OUT_DIR = './pp7-songs';

const FONT_CONFIG = {
  name: 'OpenSans-Regular',
  size: 70,
  family: 'Open Sans',
};

const TEXT_FILL_CONFIG = {
  red: 1,
  green: 1,
  blue: 1,
  alpha: 1,
};

const ENCODING = 'utf8';

const encodeVerseContentToUnicodeRTFFormat = (verseContent: string) =>
  verseContent
    // For some reason, if it's at the end of the word, we need to inject a new space char
    .replaceAll('Â ', '\\uc0\\u194  ')
    .replaceAll('â ', '\\uc0\\u226  ')
    .replaceAll('Ă ', '\\uc0\\u258  ')
    .replaceAll('ă ', '\\uc0\\u259  ')
    .replaceAll('Î ', '\\uc0\\u206  ')
    .replaceAll('î ', '\\uc0\\u238  ')
    .replaceAll('ș ', '\\uc0\\u537  ')
    .replaceAll('Ș ', '\\uc0\\u536  ')
    .replaceAll('ț ', '\\uc0\\u539  ')
    .replaceAll('Ț ', '\\uc0\\u538  ')
    .replaceAll('” ', '\\uc0\\u8221  ')
    .replaceAll('„ ', '\\uc0\\u8222  ')
    .replaceAll('’ ', '\\uc0\\u8217  ')
    // Remaining chars
    .replaceAll('Â', '\\uc0\\u194')
    .replaceAll('â', '\\uc0\\u226')
    .replaceAll('Ă', '\\uc0\\u258')
    .replaceAll('ă', '\\uc0\\u259')
    .replaceAll('Î', '\\uc0\\u206')
    .replaceAll('î', '\\uc0\\u238')
    .replaceAll('ș', '\\uc0\\u537')
    .replaceAll('Ș', '\\uc0\\u536')
    .replaceAll('ț', '\\uc0\\u539')
    .replaceAll('Ț', '\\uc0\\u538')
    .replaceAll('”', '\\uc0\\u8221')
    .replaceAll('„', '\\uc0\\u8222')
    .replaceAll('’', '\\uc0\\u8217');

const convertToRtf = (multiLineVerseContent: string) => {
  return (
    '{\\rtf1\\ansi\\ansicpg1252\\cocoartf2639\n\\cocoatextscaling0\\cocoaplatform0{\\fonttbl\\f0\\fnil\\fcharset0 OpenSans-Regular;}\n{\\colortbl;\\red255\\green255\\blue255;\\red255\\green255\\blue255;}\n{\\*\\expandedcolortbl;;\\cssrgb\\c100000\\c100000\\c100000;}\n\\deftab720\n\\pard\\lang1048\\qc\\partightenfactor0\n\n\\f0\\fs140 \\cf2' +
    multiLineVerseContent.replace(/\n/g, '\\\n') +
    '}'
  );
};

const createTextFromSection = (verse: string) =>
  Graphics_Text.create({
    attributes: Graphics_Text_Attributes.create({
      font: Graphics_Text_Attributes_Font.create(FONT_CONFIG),
      customAttributes: [
        Graphics_Text_Attributes_CustomAttribute.create({
          capitalization:
            Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_ALL_CAPS,
        }),
      ],
      capitalization:
        Graphics_Text_Attributes_Capitalization.CAPITALIZATION_ALL_CAPS,
      textSolidFill: Color.create(TEXT_FILL_CONFIG),
      paragraphStyle: Graphics_Text_Attributes_Paragraph.create({
        alignment:
          Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_CENTER,
        lineHeightMultiple: 1.2,
        defaultTabInterval: 36,
      }),
    }),
    scaleBehavior: Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_DOWN,
    transform: Graphics_Text_Transform.TRANSFORM_NONE,
    isSuperscriptStandardized: true,
    verticalAlignment:
      Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_MIDDLE,
    rtfData: Buffer.from(
      convertToRtf(encodeVerseContentToUnicodeRTFFormat(verse)),
      ENCODING,
    ),
  });

const APPLICATION_INFO = {
  application: ApplicationInfo_Application.APPLICATION_PROPRESENTER,
  platform: ApplicationInfo_Platform.PLATFORM_MACOS,
  applicationVersion: undefined,
  platformVersion: undefined,
};

const GRAPHIC_SIZE = {
  width: 1920,
  height: 1080,
};

const processVerse = ({ content, sectionLabel }: Verse, { title }: Song) => {
  const cueUUID = UUID.create({
    string: randomUUID(),
  });

  const slideElement = Slide_Element.create({
    element: Graphics_Element.create({
      uuid: UUID.create({
        string: randomUUID(),
      }),
      fill: Graphics_Fill.create({
        color: Color.create({
          alpha: 0,
        }),
      }),
      name: `Slide: ${sectionLabel}`,
      bounds: Graphics_Rect.create({
        origin: Graphics_Point.create({
          x: 0,
          y: 0,
        }),
        size: Graphics_Size.create(GRAPHIC_SIZE),
      }),
      opacity: 1,
      text: createTextFromSection(content),
      path: Graphics_Path.create({
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
      }),
    }),
  });

  const slide = Action_SlideType.create({
    presentation: PresentationSlide.create({
      baseSlide: Slide.create({
        uuid: UUID.create({
          string: randomUUID(),
        }),
        drawsBackgroundColor: true,
        size: Graphics_Size.create(GRAPHIC_SIZE),
        elements: [slideElement],
      }),
    }),
  });

  const action = Action.create({
    uuid: UUID.create({
      string: randomUUID(),
    }),
    isEnabled: true,
    label: Action_Label.create({
      text: `Action: ${sectionLabel}`,
      color: Color.create({
        red: 0.8,
        green: 0.1,
        blue: 0.4,
        alpha: 1,
      }),
    }),
    slide: slide,
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
      name: `Group: ${sectionLabel}`,
      color: Color.create({
        green: 0.467,
        blue: 0.8,
        alpha: 1,
      }),
    }),
    cueIdentifiers: [cueUUID],
  });

  return { cue, cueGroup };
};

export const processSongAndPersistToFile = (song: Song) => {
  const { verses, title } = song;

  const applicationInfo = ApplicationInfo.create(APPLICATION_INFO);

  const presentationUUId = UUID.create({
    string: randomUUID(),
  });

  const slidesConfig = verses.map((verse) => processVerse(verse, song));

  const arrangementUUID = UUID.create({
    string: randomUUID(),
  });

  const arrangements = [
    Presentation_Arrangement.create({
      uuid: arrangementUUID,
      name: DEFAULT_BES_ARRANGEMENT,
      groupIdentifiers: slidesConfig.map(
        ({ cueGroup }) => cueGroup?.group?.uuid as UUID,
      ),
    }),
  ];

  const presentation = Presentation.create({
    ccli: Presentation_CCLI.create({
      publisher: 'Biserica Emanuel Sibiu',
      author: 'Ioan Lucuț, Diana Manta',
      songTitle: title,
      copyrightYear: 2023,
      album: 'Biserica Emanuel Sibiu 2023',
      songNumber: 0,
    }),
    applicationInfo,
    uuid: presentationUUId,
    name: `BES ~ ${title}`,
    cues: slidesConfig.map(({ cue }) => cue),
    cueGroups: slidesConfig.map(({ cueGroup }) => cueGroup),
    arrangements,
    selectedArrangement: arrangementUUID,
  });

  fs.writeFileSync(
    `${OUT_DIR}/${title} ~ BES PP7 2023.pro`,
    Buffer.from(Presentation.encode(presentation).finish()),
  );
};
