<script lang="ts">
	export let importance: Importance;
	export let formClose: Function;

	let eisenRecord: EisenRecord = {
		id: 0,
		title: '',
		description: '',
		endDate: new Date(Date.now()),
		importance: 'none'
	};

	function dateInputChange(e: any) {
		eisenRecord.endDate = e.target.value || eisenRecord.endDate;
	}

	$: dateStr = eisenRecord.endDate.toJSON().slice(0, 10);
	$: eisenRecord.importance = importance
</script>

<form class="grid w-96 m-4">
	<h1 class="text-lg font-bold">New Record</h1>
	<div class="">
		<label for="title">Title</label>
		<input type="text" id="title" class="block w-full border rounded-lg" value={eisenRecord.title} />
	</div>
	<div>
		<label for="description">Description</label>
		<textarea id="description" class="block w-full border rounded-lg resize-none" value={eisenRecord.description}></textarea>
	</div>
	<div>
		<label for="endDate">end date</label>
		<input type="date" id="endDate" class="block border rounded-lg" value={dateStr} on:input={dateInputChange} />
	</div>
	<div>
		<label for="urgency">Urgency</label>
		<select id="urgency" class="block w-full p-2 bg-white border rounded-lg" bind:value={eisenRecord.importance}>
			<option value="none"></option>
			<option value="high">High</option>
			<option value="medium">Medium</option>
			<option value="low">Low</option>
		</select>
	</div>
	<div class="flex justify-end pt-4">
		<button on:click={() => formClose()} class="bg-blue-400 p-2 border rounded-lg">Create</button>
		<button on:click={() => formClose()} class="p-2 border rounded-lg">Cancel</button>
	</div>
</form>
