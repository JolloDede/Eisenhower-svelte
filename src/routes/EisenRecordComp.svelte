<script lang="ts">
	export let record: EisenRecord;
    export let recordClick: Function;

</script>

<div class="p-1 select-none hover:bg-gray-50 hover:underline hover:font-semibold">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex" on:click={() => recordClick(record)}>
		<h1 class="hover:text-blue-600 hover:underline">{record.title}</h1>
	</div>
</div>
