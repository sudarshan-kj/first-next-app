export default function handler(req, res) {
  res.clearPreviewData();
  res.redirect("/article/1");
}
