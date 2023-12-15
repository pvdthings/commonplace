<script lang="ts">
  import '../app.pcss';
  import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar gridColumns="grid-cols-1" slotDefault="place-self-center" slotTrail="place-content-end">
      <!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
      <strong>Title</strong>
      <!-- <svelte:fragment slot="trail">(actions)</svelte:fragment> -->
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
