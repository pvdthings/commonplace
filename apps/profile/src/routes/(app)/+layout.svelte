<script lang="ts">
  import AppBar from '$lib/components/AppBar.svelte';
  import AppShell from '$lib/components/AppShell.svelte';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar title="Profile">
      <svelte:fragment slot="trail">
        <form method="POST" action="/?/logout">
          <button class="btn btn-sm variant-filled-tertiary">Log out</button>
        </form>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>