import fs from 'fs';
import { convertToRtf } from './txtToRtfConverter';

describe('txtToRtfConverter', () => {
  it('should convert to expected `rtf` correctly', () => {
    const rtfContent = convertToRtf(`Row 1-1
Row 1-2 !(),-./1234567890:;?ABCDEFGHIJKLMNOPRSTUVWXZY[\\]abcdefghijklmnopqrstuvwxyzÎâîăÂȘșĂȚț’‘”„
Row 1-2 !(),-./1234567890:;?ABCDEFGHIJKLMNOPRSTUVWXZY[\\]abcdefghijklmnopqrstuvwxyzÎâîăÂȘșĂȚț’‘”„
Row 1-3`);

    expect(rtfContent).toMatchSnapshot();

    fs.writeFileSync('./txtToRtfConverterGeneratedRtf.rtf', rtfContent);
  });

  it('should convert to expected `rtf` correctly for edge cases', () => {
    const rtfContent = convertToRtf(`space-not-expected-before Îtext
space-not-expected-before âtext
space-not-expected-before îtext
space-not-expected-before ătext
space-not-expected-before Âtext
space-not-expected-before Ștext
space-not-expected-before ștext
space-not-expected-before Ătext
space-not-expected-before Țtext
space-not-expected-before țtext
space-not-expected-before -text
space-not-expected-before ’text
space-not-expected-before ‘text
space-not-expected-before ”text
space-not-expected-before „text

textÎ single-space-expected-after-this
textâ single-space-expected-after-this
textî single-space-expected-after-this
textă single-space-expected-after-this
textÂ single-space-expected-after-this
textȘ single-space-expected-after-this
textș single-space-expected-after-this
textĂ single-space-expected-after-this
textȚ single-space-expected-after-this
textț single-space-expected-after-this
text- single-space-expected-after-this
text’ single-space-expected-after-this
text‘ single-space-expected-after-this
text” single-space-expected-after-this
text„ single-space-expected-after-this

end-of-line-works-without-extra-space-textÎ
end-of-line-works-without-extra-space-textâ
end-of-line-works-without-extra-space-textî
end-of-line-works-without-extra-space-textă
end-of-line-works-without-extra-space-textÂ
end-of-line-works-without-extra-space-textȘ
end-of-line-works-without-extra-space-textș
end-of-line-works-without-extra-space-textĂ
end-of-line-works-without-extra-space-textȚ
end-of-line-works-without-extra-space-textț
end-of-line-works-without-extra-space-text-
end-of-line-works-without-extra-space-text’
end-of-line-works-without-extra-space-text‘
end-of-line-works-without-extra-space-text”
end-of-line-works-without-extra-space-text„`);

    expect(rtfContent).toMatchSnapshot();

    fs.writeFileSync('./txtToRtfConverterGeneratedRtf_II.rtf', rtfContent);
  });
});
