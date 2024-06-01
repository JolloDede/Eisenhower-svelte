<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Modal from '$lib/Modal.svelte';
	import EisenRecordEditForm from './EisenRecordEditForm.svelte';
	import EisenRecordInspectView from './EisenRecordInspectView.svelte';

	export let record: EisenRecord;
	export let show: boolean;
	export let editing = false;

	function handleEditClick() {
		editing = true;
	}

	function formClose() {
		show = false;
	}
</script>

<Modal bind:show>
	<Card>
		{#if editing}
			<EisenRecordEditForm bind:record {formClose} />
		{:else}
			<EisenRecordInspectView bind:record {handleEditClick} {formClose} />
		{/if}
	</Card>
</Modal>
