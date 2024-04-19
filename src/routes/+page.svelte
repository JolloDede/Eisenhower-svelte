<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import NewItemButton from '$lib/NewItemButton.svelte';
	import EisenQuadrat from './EisenQuadrat.svelte';
	import NewEisenRecordForm from './NewEisenRecordForm.svelte';

	let showModal = false;
	let importance: Importance = 'none';
	let close = false;
	let todoRecords: EisenRecord[] = [{id: 1,title: 'test', description: 'test desc', requiredTime: 'hours' ,endDate: new Date(), importance: 'medium'}]

	function showFormular(urg: Importance) {
		importance = urg;
		showModal = true;
	}

	function formClose() {
		close = true;
	}
</script>

<div class="m-auto w-4/5">
	<div class="">
		<h1>Einsenhower</h1>
		<EisenQuadrat showFormular={showFormular} todoRecords={todoRecords} />
	</div>
	<Modal bind:showModal bind:close={close}>
		<NewEisenRecordForm importance={importance} formClose={formClose} />
	</Modal>
</div>
