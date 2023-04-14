import fs from 'fs';
import path from 'path';

const RTF_TEMPLATE = 'rtf_mac_version_template.rtf';
const RTFS_DIR = 'rtfs';
const RTF_CONTENT_TEMPLATE = '$REPLACE_ME$';

let rtfTemplate: string;

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

export const convertToRtf = (multiLineVerseContent: string) => {
  if (!rtfTemplate) {
    rtfTemplate = fs
      .readFileSync(path.join(__dirname, '..', RTFS_DIR, RTF_TEMPLATE))
      .toString();
  }
  const normalizedContent = encodeVerseContentToUnicodeRTFFormat(
    multiLineVerseContent,
  ).replace(/\n/g, '\\\n');

  return rtfTemplate.replaceAll(RTF_CONTENT_TEMPLATE, normalizedContent);
};
