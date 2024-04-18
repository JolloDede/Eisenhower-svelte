<script lang="ts">
	let eisenRecord: EisenRecord = {
		id: 0,
		title: '',
		description: '',
		endDate: new Date(),
		severity: 'none'
	};
</script>

<form>
	<div>
		<label for="title">Title</label>
		<input type="text" id="title" value={eisenRecord.title} />
	</div>
	<div>
		<label for="description">Description</label>
		<textarea id="description" value={eisenRecord.description}></textarea>
	</div>
	<div>
		<label for="endDate">end date</label>
		<input type="datetime" id="endDate" value={eisenRecord.endDate} />
	</div>
	<div>
		<label for="severity">severity</label>
		<select id="severity" value={eisenRecord.severity}>
			<option value="none"></option>
			<option value="high">High</option>
			<option value="medium">Medium</option>
			<option value="low">Low</option>
		</select>
	</div>
</form>
