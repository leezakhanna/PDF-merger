const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergepdf = async (pdfPaths) => {
  for (const pdfPath of pdfPaths) {
    await merger.add(pdfPath);
  }

  await merger.save('public/merged.pdf');
};
module.exports={mergepdf};