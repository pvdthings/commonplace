<script lang="ts">
  import { AppBar } from '@skeletonlabs/skeleton';

  export let title: string;
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
  <svelte:fragment slot="lead">
    <slot name="lead">
      &nbsp;
    </slot>
  </svelte:fragment>
  <strong>{title}</strong>
  <svelte:fragment slot="trail">
    <slot name="trail">
      &nbsp;
    </slot>
  </svelte:fragment>
</AppBar>
