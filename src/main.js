import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = e.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({ title: "Warning", message: "Please enter a search term!" });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    hideLoader();
    iziToast.error({ title: "Error", message: "Something went wrong!" });
    console.error(error);
  }
});
