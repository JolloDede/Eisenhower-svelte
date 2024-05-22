<script lang="ts">
	import EisenQuadrat from './EisenQuadrat.svelte';
	import EisenRecordComponent from './EisenRecordComponent.svelte';

	let show = false;
	let selectedRecord: EisenRecord = {
		id: 0,
		title: '',
		description: '',
		endDateStr: new Date().toJSON(),
		importance: 'low',
		requiredTime: 'minutes'
	};

	function showFormular(urg: Importance) {
		clearRecord();
		selectedRecord.importance = urg;
		show = true;
	}

	function clearRecord() {
		selectedRecord = {
			id: 0,
			title: '',
			description: '',
			requiredTime: 'minutes',
			endDateStr: new Date().toJSON(),
			importance: 'low'
		};
	}

	function handleRecordInspect(record: EisenRecord) {
		selectedRecord = record;
		show = true;
	}

</script>

<div class="m-auto w-4/5">
	<div class="">
		<h1>Eisenhower</h1>
		<EisenQuadrat {showFormular} {handleRecordInspect} />
	</div>
	<EisenRecordComponent bind:record={selectedRecord} bind:show />
</div>
