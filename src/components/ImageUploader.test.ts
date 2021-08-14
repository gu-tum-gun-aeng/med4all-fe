import { render, fireEvent, cleanup } from "@testing-library/svelte";
import ImageUploader from "./ImageUploader.svelte";

describe("<ImageUploader/>", () => {
  afterEach(() => cleanup());
  const mockFile = new File(["(*-*)"], "some-image.png", { type: "image/png" });
  it.skip("should get correct image name when upload image", async () => {
    const { getByText } = render(ImageUploader, {
      props: {
        labelText: "uploadImage",
        accept: ".png",
      },
    });
    const uploadImageButton = getByText("uploadImage");
    await fireEvent.click(uploadImageButton);
  });
});
