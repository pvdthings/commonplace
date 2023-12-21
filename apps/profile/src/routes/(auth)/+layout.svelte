<script>
  import AppShell from "$lib/components/AppShell.svelte";
</script>

<AppShell>
  <div class="card p-8 w-full md:w-max">
    <slot />
  </div>
</AppShell>