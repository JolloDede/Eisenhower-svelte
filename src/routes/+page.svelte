<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import NewItemButton from '$lib/NewItemButton.svelte';
	import NewEisenRecordForm from './NewEisenRecordForm.svelte';

	let showModal = false;

	function showFormular() {
		showModal = true;
	}
</script>

<div class="m-auto w-4/5">
	<div class="">
		<h1>Einsenhower</h1>
		<div class="flex mt-4">
			<div class="flex items-center"><p class="-rotate-90">Wichtigkeit</p></div>
			<div class="flex-grow">
				<div class="grid grid-cols-2 w-full">
					<div class="border min-h-40"><NewItemButton on:click={showFormular} /></div>
					<div class="border min-h-40"><NewItemButton on:click={showFormular} /></div>
					<div class="border min-h-40"><NewItemButton on:click={showFormular} /></div>
					<div class="border min-h-40"><NewItemButton on:click={showFormular} /></div>
				</div>
				<p class="text-center">Dringlichkeit</p>
			</div>
		</div>
	</div>
	<Modal bind:showModal>
		<NewEisenRecordForm />
	</Modal>
</div>
