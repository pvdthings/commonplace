<script>
  import { AppShell } from "@skeletonlabs/skeleton";
</script>

<AppShell>
  <svelte:fragment slot="header">
    <slot name="header" />
  </svelte:fragment>
  <main class="w-full h-full p-4 flex flex-col items-center justify-center">
    <slot />
  </main>
</AppShell>