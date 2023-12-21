<script lang="ts">
  import { AppRailTile } from "@skeletonlabs/skeleton";

  export let title: string;
  export let value: number;
  export let group: number|undefined = undefined;
</script>

<AppRailTile bind:group name={title} {value} {title}>
  <svelte:fragment slot="lead">
    <slot name="lead" />
  </svelte:fragment>
  <span>{title}</span>
</AppRailTile>