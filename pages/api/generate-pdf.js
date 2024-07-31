import html_to_pdf from 'html-pdf-node';

export default async (req, res) => {
  // Assuming the HTML content is sent in the request body
  const { htmlContent } = req.body;

  const options = { format: 'A4' };
  const file = { content: htmlContent };

  try {
    const pdfBuffer = await html_to_pdf.generatePdf(file, options);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="document.pdf"');
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
};
