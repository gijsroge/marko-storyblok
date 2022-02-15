import { Router } from "express";
import storyblokService from "./pages/catch";

export default Router().get("/:language/*", storyblokService);
