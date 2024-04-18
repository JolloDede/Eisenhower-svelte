<script lang="ts">
	export let showModal = false;

	let dialog: HTMLDialogElement; // HtmlElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- Fix that the dialog actually is able to close when you click on something different -->
<!-- <dialog 
    bind:this={dialog} 
    on:close={() => (showModal = false)} 
    on:click|self{() => (dialog.close())}
> -->
<dialog 
    bind:this={dialog} 
    on:close={() => (showModal = false)} 
>
 <slot />
</dialog>
