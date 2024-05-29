<script lang="ts">
	import { newRecordIndex, todoRecords } from '../store';

	export let record: EisenRecord;
	export let formClose: Function;

	function saveRecord() {
		if (record.id == 0) {
			record.id = newRecordIndex();
			todoRecords.update((records) => {
				return [...records, { ...record }];
			});
		} else {
			record.endDate = new Date(dateStr);
		}
		formClose();
	}

	function dateInputChange(e: any) {
		dateStr = e.target.value || record.endDate.toJSON().slice(0, 10);
		// record.endDate = new Date(e.target.value) || record.endDate;
	}

	$: dateStr = record.endDate.toJSON().slice(0, 10);
</script>

<form class="p-6">
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
		<button on:click={() => formClose()} class="p-2 border rounded-lg">Cancel</button>
	</div>
</form>
