<script lang="ts">
	import { NewItemButton } from '$lib';
	import EisenRecordElement from './EisenRecordElement.svelte';
	import { todoRecords } from '../store';

	export let showFormular: Function;
	export let handleRecordInspect: Function;

	let wichtigNotDringend: EisenRecord[];
	let wichtigDringed: EisenRecord[];
	let notWichtigNotDringend: EisenRecord[];
	let notWichtigDringend: EisenRecord[];

	todoRecords.subscribe((records) => {
		wichtigNotDringend = records.filter((ele) => ele.importance == 'high' && !isUrgent(ele));
		wichtigDringed = records.filter((ele) => ele.importance == 'high' && isUrgent(ele));
		notWichtigDringend = records.filter((ele) => ele.importance == 'low' && isUrgent(ele));
		notWichtigNotDringend = records.filter((ele) => ele.importance == 'low' && !isUrgent(ele));
	});

	function isUrgent(record: EisenRecord): boolean {
		switch (record.requiredTime) {
			case 'seconds' || 'minutes' || 'hours':
				// Datediff bigger than a Day
				if (dayBetweenDates(new Date(record.endDateStr), new Date()) <= 1) return true;
				break;
			case 'days':
				// Datediff bigger than a weak
				if (dayBetweenDates(new Date(record.endDateStr), new Date()) <= 7) return true;
				break;
			case 'weeks':
				// Datediff bigger than a Month
				if (dayBetweenDates(new Date(record.endDateStr), new Date()) <= 31) return true;
				break;
			case 'months':
				// Datediff bigger than a year
				if (dayBetweenDates(new Date(record.endDateStr), new Date()) <= 365) return true;
				break;
			default:
				break;
		}
		return false;
	}
</script>

<div class="flex mt-4">
	<div class="flex items-center"><p class="-rotate-90">Wichtigkeit</p></div>
	<div class="flex-grow">
		<div class="grid grid-cols-2 w-full">
			<div class="border min-h-40">
				{#each wichtigNotDringend as record}
					<EisenRecordElement recordClick={handleRecordInspect} bind:record />
				{/each}
				<NewItemButton on:click={() => showFormular('high')} />
			</div>
			<div class="border min-h-40">
				{#each wichtigDringed as record}
					<EisenRecordElement recordClick={handleRecordInspect} bind:record />
				{/each}
				<NewItemButton on:click={() => showFormular('high')} />
			</div>
			<div class="border min-h-40">
				{#each notWichtigNotDringend as record}
					<EisenRecordElement recordClick={handleRecordInspect} bind:record />
				{/each}
				<NewItemButton on:click={() => showFormular('low')} />
			</div>
			<div class="border min-h-40">
				{#each notWichtigDringend as record}
					<EisenRecordElement recordClick={handleRecordInspect} bind:record />
				{/each}
				<NewItemButton on:click={() => showFormular('low')} />
			</div>
		</div>
		<p class="text-center">Dringlichkeit</p>
	</div>
</div>