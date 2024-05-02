<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import { todoRecords } from '../store';
	import EisenQuadrat from './EisenQuadrat.svelte';
	import NewEisenRecordForm from './NewEisenRecordForm.svelte';

	let showModal = false;
	let importance: Importance = 'low';
	let close = false;

	function showFormular(urg: Importance) {
		importance = urg;
		showModal = true;
		close = false;
	}

	function handleNewEisenRecordSave(newRecord: EisenRecord) {
		// change the id to someting random
		todoRecords.update(records => {
			return [...records, {...newRecord}]
		})
		// todoRecords[todoRecords.length] = { ...newRecord };
		formClose();
	}

	function formClose() {
		close = true;
	}
	todoRecords.subscribe(() => console.log("test"))
</script>

<div class="m-auto w-4/5">
	<div class="">
		<h1>Eisenhower</h1>
		<EisenQuadrat {showFormular} />
	</div>
	<Modal bind:showModal bind:close>
		<NewEisenRecordForm bind:open={close} {importance} {formClose} saveRecord={handleNewEisenRecordSave} />
	</Modal>
</div>
