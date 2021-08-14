<script>
  export let group;
  export let value;
  export let selected = false;
  export let light = false;
  export let disabled = false;
  export let title = "title";
  export let tabindex = "0";
  export let iconDescription = "Tile checkmark";
  export let id = "ccs-" + Math.random().toString(36);
  export let name = "";
  export let ref = null;
  import { createEventDispatcher } from "svelte";
  import CheckmarkFilled16 from "carbon-icons-svelte/lib/CheckmarkFilled16/CheckmarkFilled16.svelte";
  const dispatch = createEventDispatcher();
  $: if (!disabled) dispatch(selected ? "select" : "deselect", id);
</script>

<input
  bind:this={ref}
  bind:group
  type="checkbox"
  tabindex="-1"
  class:bx--tile-input={true}
  checked={selected}
  {id}
  {value}
  {name}
  {title}
  {disabled}
/>
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<label
  for={id}
  tabindex={disabled ? undefined : tabindex}
  class:bx--tile={true}
  class:bx--tile--selectable={true}
  class:bx--tile--is-selected={selected}
  class:bx--tile--light={light}
  class:bx--tile--disabled={disabled}
  {...$$restProps}
  on:click
  on:click|preventDefault={() => {
    if (disabled) return;
    selected = !selected;
    if (group.some((val) => val === value)) {
      group = group.filter((val) => val !== value);
      return;
    }
    group = [...group, value];
  }}
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keydown
  on:keydown={(e) => {
    if (disabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      selected = !selected;
      if (group.some((val) => val === value)) {
        group = group.filter((val) => val !== value);
        return;
      }
      group = [...group, value];
    }
  }}
>
  <span class:bx--tile__checkmark={true}>
    <CheckmarkFilled16 aria-label={iconDescription} title={iconDescription} />
  </span>
  <span class:bx--tile-content={true}>
    <slot />
  </span>
</label>
