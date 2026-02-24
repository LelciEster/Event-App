<script>
    let {data} = $props();
</script>



<h1>Edit Event</h1>



 <form action="?/edit" method="POST">

  <div>
		<label for="name">Event Name</label>
		<input type="text" id="name" name="name" required value={data.event.name}/>
	</div>

	<div>
		<label for="description">Event Description</label>
		<textarea name="description" id="description" required value={data.event.description}></textarea>
	</div>

	<div>
		<label for="startdate">Event Startdate</label>
		<input type="date" id="startdate" name="startdate" required value={data.event.startdate.toISOString().substring(0,10)}/>
	</div>

	<div>
		<label for="starttime">Event Starttime</label>
		<input type="time" id="starttime" name="starttime" required value={data.event.starttime} />
	</div>

	<button type="submit">Edit Event</button>


 </form>