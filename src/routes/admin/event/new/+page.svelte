
 <script>
	let {data} =$props();
	console.log(data.categories);
	</script>



<form method="POST" action="?/create">

	<h1>new event</h1>
	<div>
		<label for="name">Event Name</label>
		<input type="text" id="name" name="name" required />
	</div>

	<div>
		<label for="description">Event Description</label>
		<textarea name="description" id="description"></textarea>
	</div>

	<div>
		<label for="startdate">Event Startdate</label>
		<input type="date" id="startdate" name="startdate" />
	</div>

	<div>
		<label for="starttime">Event Starttime</label>
		<input type="time" id="starttime" name="starttime" />
	</div>

	<div>
		<div>
			<label for="category">select a category</label>
			<select name="category" id="category">
				{#each data.categories as category }
					<option value="{category.id}">{category.name}</option>
				{/each}
			</select>
		</div>
	</div>

	<button type="submit">Create Event</button>
</form>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9fafb;
    padding: 50px 20px;
    color: #333;
  }

  form {
    max-width: 500px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 25px;
  }

  div {
    margin-bottom: 18px;
  }

  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
  }

  input[type="text"],
  input[type="date"],
  input[type="time"],
  textarea,
  select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    transition: border 0.2s;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: #6c63ff;
    outline: none;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  button {
    padding: 12px 20px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
	margin: 2px;
  }

  button:hover {
    background-color: #5750d1;
  }
</style>


