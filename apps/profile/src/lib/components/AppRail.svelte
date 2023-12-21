<script>
  import { AppRail } from "@skeletonlabs/skeleton";
</script>

<AppRail>
	<svelte:fragment slot="lead">
		<slot name="lead" />
	</svelte:fragment>
	<!-- --- -->
	<slot />
	<!-- --- -->
	<svelte:fragment slot="trail">
		<slot name="trail" />
	</svelte:fragment>
</AppRail>
