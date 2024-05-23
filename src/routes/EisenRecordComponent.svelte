<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import {  newRecordIndex, todoRecords } from '../store';

	export let record: EisenRecord;
    export let show: boolean;

	let editing = false;

	function handleEditClick() {
		editing = true;
	}

	function dateInputChange(e: any) {
		dateStr = e.target.value || record.endDate.toJSON().slice(0,10);
		// record.endDate = new Date(e.target.value) || record.endDate;
	}

	function saveRecord() {
		if (record.id == 0) {
			record.id = newRecordIndex();
			todoRecords.update((records) => {
				return [...records, { ...record }];
			});
		} else {
			record.endDate = new Date(dateStr);
		}
		show = false;
	}

    $: { (record.id == 0) ? editing = true : editing = false };
	$: dateStr = record.endDate.toJSON().slice(0, 10);
</script>

<Modal bind:show>
	{#if editing}
		<form class="grid w-96 m-4">
			<h1 class="text-lg font-bold">New Record</h1>
			<div class="">
				<label for="title">Title</label>
				<!-- svelte-ignore a11y-autofocus -->
				<input
					type="text"
					id="title"
					class="block w-full border rounded-lg"
					autofocus
					bind:value={record.title}
				/>
			</div>
			<div>
				<label for="description">Description</label>
				<textarea
					id="description"
					class="block w-full border rounded-lg resize-none"
					bind:value={record.description}
				></textarea>
			</div>
			<div>
				<label for="required-time">Required Time</label>
				<select
					id="required-time"
					class="block w-full p-2 bg-white border rounded-lg"
					bind:value={record.requiredTime}
				>
					<option value="seconds">seconds</option>
					<option value="minutes">minutes</option>
					<option value="hours">hours</option>
					<option value="days">days</option>
					<option value="weeks">weeks</option>
					<option value="months">months</option>
				</select>
			</div>
			<div>
				<label for="endDate">end date</label>
				<input
					type="date"
					id="endDate"
					class="block border rounded-lg"
					value={dateStr}
					on:input={dateInputChange}
				/>
			</div>
			<div>
				<label for="urgency">Urgency</label>
				<select
					id="urgency"
					class="block w-full p-2 bg-white border rounded-lg"
					bind:value={record.importance}
				>
					<!-- <option value="none"></option> -->
					<option value="high">High</option>
					<!-- <option value="medium">Medium</option> -->
					<option value="low">Low</option>
				</select>
			</div>
			<div class="flex justify-end pt-4">
				<button on:click={saveRecord} class="bg-blue-400 p-2 border rounded-lg">Create</button>
				<button on:click={() => show = false} class="p-2 border rounded-lg">Cancel</button>
			</div>
		</form>
	{:else}
		<div class="grid space-y-4 m-4 bg-white">
			<div class="flex py-2 text-center">
				<div class="flex flex-grow">
					<p class="font-light pr-1">#{record.id}</p>
					<h1 class="font-semibold">{record.title}</h1>
				</div>
				<button
					class="border rounded-md py-1 px-2 mr-2 hover:bg-gray-200"
					on:click={handleEditClick}>Edit</button
				>
				<button class="text-center text-2xl font-bold hover:bg-gray-200 rounded-md">...</button>
			</div>
			<div class="border rounded-lg">
				<p class="p-2">{record.description}</p>
			</div>
			<p>Wichtigkeit: {record.importance}</p>
			<p>Benötigte Zeit: {record.requiredTime}</p>
			<p>Datum: {record.endDate.toLocaleDateString()}</p>
		</div>
	{/if}
</Modal>
