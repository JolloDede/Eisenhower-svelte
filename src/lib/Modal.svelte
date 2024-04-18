<script lang="ts">
	export let showModal = false;
    export let close = true;

	let dialog: HTMLDialogElement; // HtmlElement

	$: if (dialog && showModal) dialog.showModal();
    $: if (close) dialog.close();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self|stopPropagation={() => dialog.close()}
	class="rounded-lg"
>
	<slot />
</dialog>
