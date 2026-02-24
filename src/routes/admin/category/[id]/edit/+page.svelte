<script>
    let { data } = $props();
</script>
 
<h1>Edit Category</h1>
 
<div>
    <form method='POST' action="?/edit">
        <div>
            <label for="name">Category name</label>
            <input type="text" id="name" name="name" required value={data.category.name}/>
        </div>
 
 
        <div>
            <button type="submit">Update Category</button>
        </div>
    </form>
</div>
 