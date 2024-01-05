<script>
  import { AppShell } from "@skeletonlabs/skeleton";
</script>

<AppShell slotSidebarLeft="w-0 lg:w-max">
  <svelte:fragment slot="header">
    <slot name="header" />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <slot name="sidebarLeft" />
  </svelte:fragment>
  <main class="w-full h-full p-4 flex flex-col items-center justify-center">
    <slot />
  </main>
</AppShell>