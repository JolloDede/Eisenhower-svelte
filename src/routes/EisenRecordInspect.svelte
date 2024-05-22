<script lang="ts">
	import Modal from '$lib/Modal.svelte';

	export let record: EisenRecord;
	export let show: boolean;
	export let handleEditClick: Function;

	$: localDate = new Date(record.endDateStr).toLocaleString();
</script>

<Modal bind:show>
	<div class="grid space-y-4 m-4 bg-white">
		<div class="flex py-2 text-center">
			<div class="flex flex-grow">
				<p class="font-light pr-1">#{record.id}</p>
				<h1 class="font-semibold">{record.title}</h1>
			</div>
			<button
				class="border rounded-md py-1 px-2 mr-2 hover:bg-gray-200"
				on:click={() => handleEditClick(record)}>Edit</button
			>
			<button class="text-center text-2xl font-bold hover:bg-gray-200 rounded-md">...</button>
		</div>
		<div class="border rounded-lg">
			<p class="p-2">{record.description}</p>
		</div>
		<p>Wichtigkeit: {record.importance}</p>
		<p>Benötigte Zeit: {record.requiredTime}</p>
		<p>Datum: {localDate}</p>
	</div>
</Modal>
