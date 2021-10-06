const contentTypeToUrlMap = new Map([["mmm", { path: "/article/2", id: 2 }]]);

export default function handler(req, res) {
  if (req.query.secret !== "SADHGURU") {
    return res.status(401).json({
      error: "INVALID_SECRET",
      message: "Please provide a valid secret",
    });
  }

  if (!req.query.contentType) {
    return res.status(400).json({
      error: "EMPTY_QUERY_PARAMETER",
      message: "Please provide a query parameter 'contentType'",
    });
  }
  const url = contentTypeToUrlMap.get(req.query.contentType);

  console.log("Url to fetch is", url);

  if (!url) {
    return res.status(401).json({ message: "Invalid content type" });
  }

  res.setPreviewData(
    { id: url.id },
    {
      maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
    }
  );

  res.redirect(url.path);

  //res.json({ message: "Preview mode is enabled" });
}
