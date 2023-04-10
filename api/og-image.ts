const { createRequestHandler } = require("@vercel/node");

const handler = async (req, res) => {
  const title = req.query.title || "Default Title";
  const imageUrl = `https://og-image.vercel.app/${encodeURIComponent(
    title
  )}.png`;

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.redirect(imageUrl);
};

module.exports = createRequestHandler({ handler });
