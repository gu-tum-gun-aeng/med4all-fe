<script lang="ts">
  import { TextInput, Tag } from "carbon-components-svelte";

  export let labelText: string = "";
  export let placeholder: string = "";
  export let tags: string[] = [];

  let input = "";

  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      tags = [...tags, input];
      input = "";
    }
  };

  const handleChange = (event) => {
    console.log("change", event.target.value);
    input = event.target.value;
  };

  const handleCloseTag = (tagInput: string) => {
    tags = tags.filter((tag) => tag !== tagInput);
  };
</script>

<div>
  <TextInput
    {labelText}
    {placeholder}
    on:keydown={handleKeydown}
    on:change={handleChange}
    bind:value={input}
  />
  <div>
    {#each tags as tag}
      <Tag filter on:close={() => handleCloseTag(tag)}>{tag}</Tag>
    {/each}
  </div>
</div>

<style scoped>
</style>
