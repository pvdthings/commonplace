<script lang="ts">
  import { AppBar } from '@skeletonlabs/skeleton';

  export let title: string;
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
  <svelte:fragment slot="lead">
    &nbsp;
  </svelte:fragment>
  <strong>{title}</strong>
  <svelte:fragment slot="trail">
    <slot name="trail" />
  </svelte:fragment>
</AppBar>
