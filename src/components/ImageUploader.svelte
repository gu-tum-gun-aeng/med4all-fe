<script lang="ts">
  import { Button, FileUploaderItem } from "carbon-components-svelte";

  export let labelTitle = "";
  export let labelDescription = "";
  export let buttonLabel = "";
  export let accept = "";
  export let uploadCallback;

  let fileUploadingStatus: "complete" | "edit" | "uploading" = "complete";
  let fileUploadRef: HTMLInputElement = null;

  let uploadedImage;

  let files: File[];
  $: files = [];

  const handleUpload = async () => {
    fileUploadingStatus = "uploading";
    files = Array.from(fileUploadRef.files);
    const [image] = files;
    await uploadCallback(image);

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      uploadedImage = e.target.result;
    };
    fileUploadingStatus = "complete";
  };
</script>

<div class="image-uploader-container">
  <h1>{labelTitle}</h1>
  <p>{labelDescription}</p>
  <Button on:click={() => fileUploadRef.click()}>
    {buttonLabel}
  </Button>
  <input
    class="image-uploader-input"
    type="file"
    {accept}
    on:change={handleUpload}
    bind:this={fileUploadRef}
  />
  <div>
    {#each files as file}
      <FileUploaderItem
        bind:name={file.name}
        bind:status={fileUploadingStatus}
      />
      <img
        width={320}
        height={300}
        class="preview-image"
        src={uploadedImage}
        alt="d"
      />
    {/each}
  </div>
</div>

<style scoped>
  .image-uploader-container {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: "IBM Plex Sans Thai";
    font-size: 18px;
    padding-bottom: 10px;
    font-weight: 600;
  }
  p {
    font-family: "IBM Plex Sans Thai";
    font-size: 14px;
    padding-bottom: 10px;
  }

  .image-uploader-input {
    display: none;
  }

  .preview-image {
    object-fit: cover;
    width: 320px;
    height: 300px;
  }
</style>
