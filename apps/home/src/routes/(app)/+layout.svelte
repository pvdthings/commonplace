<script lang="ts">
  import { AppBar, AppRail, AppRailTile, AppShell } from '$lib/components';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar title="Home">
      <svelte:fragment slot="trail">
        <form method="POST" action="/?/logout">
          <button class="btn btn-sm variant-filled-tertiary">Log out</button>
        </form>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <AppRailTile group={0} title="Home" value={0}>
        <svelte:fragment slot="lead">
          (icon)
        </svelte:fragment>
      </AppRailTile>
    </AppRail>
  </svelte:fragment>
  <slot />
</AppShell>