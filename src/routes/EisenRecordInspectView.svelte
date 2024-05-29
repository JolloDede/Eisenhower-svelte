<script lang="ts">
	import EllipseIcon from '$lib/EllipseIcon.svelte';
	import Modal from '$lib/Modal.svelte';
	import { todoRecords } from '../store';

	export let record: EisenRecord;
	export let handleEditClick: Function;
    export let formClose: Function;

	let showOptions = false;

	function handleOptionCLick() {
		// Ellipse Click
		showOptions = true;
	}

	function handleDeleteClick() {
        todoRecords.set($todoRecords.filter(rec => rec.id != record.id));
        formClose();
    }
</script>

<div class="p-4 space-y-4">
	<div class="flex py-2 text-center">
		<div class="flex flex-grow">
			<p class="font-light pr-1">#{record.id}</p>
			<h1 class="font-semibold">{record.title}</h1>
		</div>
		<button
			class="border rounded-md py-1 px-2 mr-2 hover:bg-gray-200"
			on:click={() => handleEditClick()}>Edit</button
		>
		<div>
			<Modal bind:show={showOptions}>
				<div class="bg-white p-2">
					<ul class="flex flex-col w-20">
						<li><p class="text-left">Items</p></li>
						<li>
							<button
								class="text-left w-full p-1 text-red-500 rounded hover:bg-gray-300"
								on:click={handleDeleteClick}>Delete</button
							>
						</li>
					</ul>
				</div>
			</Modal>
			<button class="p-1 hover:bg-gray-200 rounded-md" on:click={handleOptionCLick}
				><EllipseIcon /></button
			>
		</div>
	</div>
	<div class="border rounded-lg">
		<p class="p-2">{record.description}</p>
	</div>
	<div class="p-4 space-y-4">
		<p>Wichtigkeit: {record.importance}</p>
		<p>Benötigte Zeit: {record.requiredTime}</p>
		<p>Datum: {record.endDate.toLocaleDateString()}</p>
	</div>
</div>
