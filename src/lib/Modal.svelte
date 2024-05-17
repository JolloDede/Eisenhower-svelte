<script lang="ts">
	export let show: boolean;

	function close() {
		show = false;
	}

	function handleEscDown(e: any) {
		if (show && e.key == 'Escape') {
			close();
		}
	}
</script>

{#if show}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="absolute w-full h-full top-0 left-0" on:click|self={close} on:keydown={handleEscDown}>
		<div class="flex m-auto w-fit bg-white items-center justify-center border rounded-lg">
			<slot />
		</div>
	</div>
{/if}
<svelte:window on:keydown={handleEscDown} />
