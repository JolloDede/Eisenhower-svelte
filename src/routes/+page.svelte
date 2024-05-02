<script lang="ts">
	import Modal from '$lib/Modal.svelte';
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

	function formClose() {
		showModal = false;
		close = true;
	}
</script>

<div class="m-auto w-4/5">
	<div class="">
		<h1>Eisenhower</h1>
		<EisenQuadrat {showFormular} />
	</div>
	<Modal bind:showModal bind:close>
		<NewEisenRecordForm {importance} {formClose} />
	</Modal>
</div>
