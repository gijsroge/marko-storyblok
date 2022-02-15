import Storyblok from "@/storyblok/client";
import template from "./template.marko";

export default async (req, res) => {
  const language = req.params["language"] || "nl-be";
  const slug = req.params["0"] || "index";

  try {
    const page = await Storyblok.getStory(`${language}/${slug}`, {
      version: "draft",
    });

    res.marko(template, {
      headers: page.headers,
      meta: page.data.story.content.meta,
      story: page.data.story,
      page,
    });
  } catch (err) {
    res.status(err.response.status).send(err.response.statusText);
  }
};
