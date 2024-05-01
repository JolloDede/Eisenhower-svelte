<script lang="ts">
	import { NewItemButton } from '$lib';
	import { json } from '@sveltejs/kit';

	export let todoRecords: EisenRecord[];
	export let showFormular: Function;
	let wichtigNotDringend: EisenRecord[];
	let wichtigDringed: EisenRecord[];
	let notWichtigNotDringend: EisenRecord[];
	let notWichtigDringend: EisenRecord[];

	function isUrgent(record: EisenRecord): boolean {
		switch (record.requiredTime) {
			case 'seconds' || 'minutes' || 'hours':
				// Datediff bigger than a Day
				if (dayBetweenDates(record.endDate, new Date()) <= 1) return true;
				break;
			case 'days':
				// Datediff bigger than a weak
				if (dayBetweenDates(record.endDate, new Date()) <= 7) return true;
				break;
			case 'weeks':
				// Datediff bigger than a Month
				if (dayBetweenDates(record.endDate, new Date()) <= 31) return true;
				break;
			case 'months':
				// Datediff bigger than a year
				if (dayBetweenDates(record.endDate, new Date()) <= 365) return true;
				break;
			default:
				break;
		}
		return false;
	}

	$: wichtigNotDringend = todoRecords.filter(
		(ele) => (ele.importance == 'high') && !isUrgent(ele)
	);
	$: wichtigDringed = todoRecords.filter((ele) => (ele.importance == 'high') && isUrgent(ele));
	$: notWichtigDringend = todoRecords.filter((ele) => (ele.importance == 'low') && isUrgent(ele));
	$: notWichtigNotDringend = todoRecords.filter(
		(ele) => (ele.importance == 'low') && !isUrgent(ele)
	);
</script>

<div class="flex mt-4">
	<div class="flex items-center"><p class="-rotate-90">Wichtigkeit</p></div>
	<div class="flex-grow">
		<div class="grid grid-cols-2 w-full">
			<div class="border min-h-40">
				{#each wichtigNotDringend as record}
					<div class="hover:bg-gray-50">
						<h1>{record.title}</h1>
					</div>
				{/each}
				<NewItemButton on:click={() => showFormular('high')} />
			</div>
			<div class="border min-h-40">
				{#each wichtigDringed as record}
					<div class="hover:bg-gray-50">
						<h1>{record.title}</h1>
					</div>
				{/each}
				<NewItemButton on:click={() => showFormular('high')} />
			</div>
			<div class="border min-h-40">
				{#each notWichtigNotDringend as record}
					<div class="hover:bg-gray-50">
						<h1>{record.title}</h1>
					</div>
				{/each}
				<NewItemButton on:click={() => showFormular('low')} />
			</div>
			<div class="border min-h-40">
				{#each notWichtigDringend as record}
					<div class="hover:bg-gray-50">
						<h1>{record.title}</h1>
					</div>
				{/each}
				<NewItemButton on:click={() => showFormular('low')} />
			</div>
		</div>
		<p class="text-center">Dringlichkeit</p>
	</div>
</div>
