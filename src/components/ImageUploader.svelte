<script lang="ts">
    import { Button, FileUploaderItem } from "carbon-components-svelte";

    export let labelText: string = "";
    export let accept: string = "";

    let fileUploadingStatus: "complete" | "edit" | "uploading" = "complete"
    let fileUploadRef: HTMLInputElement = null;

    let uploadedImage

    let files: File[];
    $: files = [];

    const handleUpload = () => {
        fileUploadingStatus = "uploading"
        files = Array.from(fileUploadRef.files)
        const [image] = files
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            uploadedImage = e.target.result
        };
        fileUploadingStatus = "complete"
    }
</script>

<div class="image-uploader-container">
    <Button on:click={() => fileUploadRef.click()}>
        {labelText}
    </Button>
    <input
        class="image-uploader-input"
        type="file"
        accept={accept}
        on:change={handleUpload}
        bind:this={fileUploadRef}
    />
    <div>
        {#each files as file}
            <FileUploaderItem bind:name={file.name} bind:status={fileUploadingStatus}/>
            <img width={320} height={300} class="preview-image" src="{uploadedImage}" alt="d" />
        {/each}
    </div>
</div>

<style scoped>
    .image-uploader-container {
        display: flex;
        flex-direction: column;
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