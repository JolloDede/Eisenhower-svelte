<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import EisenQuadrat from './EisenQuadrat.svelte';
	import NewEisenRecordForm from './NewEisenRecordForm.svelte';

	let showModal = false;
	let importance: Importance = 'low';
	let close = false;
	let todoRecords: EisenRecord[] = [
		{
			id: 1,
			title: 'test',
			description: 'test desc',
			requiredTime: 'hours',
			endDate: new Date(),
			importance: 'high'
		}
	];

	function showFormular(urg: Importance) {
		importance = urg;
		showModal = true;
		close = false;
	}

	function handleNewEisenRecordSave(newRecord: EisenRecord) {
		// change the id to someting random
		todoRecords[todoRecords.length] = { ...newRecord };
		formClose();
	}

	function formClose() {
		close = true;
	}
</script>

<div class="m-auto w-4/5">
	<div class="">
		<h1>Eisenhower</h1>
		<EisenQuadrat {showFormular} bind:todoRecords />
	</div>
	<Modal bind:showModal bind:close>
		<NewEisenRecordForm bind:open={close} {importance} {formClose} saveRecord={handleNewEisenRecordSave} />
	</Modal>
</div>
