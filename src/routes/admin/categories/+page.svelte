<script>
    let {data} = $props();
</script>
 
<h1>Manage my categories</h1>

<div class="add-btn-wrapper">
    <a href="/admin/category/new">
        <button class="imadhi">Add new category</button>
    </a>
</div>

<main>
    {#each data.categories as category}
    <div class="category">
        <p>{category.name}</p>
        <div>
            <a href="/admin/category/{category.id}/edit">
                <button>Edit</button>
            </a>
            <form action="?/delete" method="POST">            
                <input type="hidden" name="id" value={category.id} />
                <button type="submit">Delete</button>
            </form>
        </div>
    </div>
    {/each}
</main>
 
<style>
  h1 {
    text-align: center;
    margin-bottom: 25px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .add-btn-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

  .imadhi {
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .imadhi:hover {
    background-color: #5750d1;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 600px;
    margin: 0 auto;
  }

  .category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #fff;
    transition: box-shadow 0.2s;
  }

  .category:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }

  .category p {
    margin: 0;
    font-weight: 500;
  }

  .category div {
    display: flex;
    gap: 8px;
  }

  .category button {
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 8px 14px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .category button:hover {
    background-color: #5750d1;
  }

  form {
    margin: 0;
  }
</style>