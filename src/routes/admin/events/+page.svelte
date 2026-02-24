<script>

    let {data} = $props();
</script>

<h1>Manage my Events</h1>
<a href="/admin/event/new">

    <button>add new event</button>
</a>

<main>

    {#each data.events as event}

    <div class="event">


        <p>{event.name}</p>
        <h3>{event.category_name}</h3>


         <div>


  <a href="/admin/event/{event.id}/edit">
<button>Edit</button>
</a>
  

        <form action="?/delete" method="POST">
            <input type="hidden" value={event.id} name="id">
        <button type="submit">Delete</button>
        </form>


    </div>

    </div>

    {/each}
</main>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
    padding: 30px 20px;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  a > button {
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 8px 14px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 600px;
    margin: 0 auto;
  }

  .event {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 16px;
    background-color: #fff;
  }

  .event p {
    margin: 0;
    font-weight: 500;
  }

  .event h3 {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: #555;
  }

  .event div {
    display: flex;
    gap: 8px;
  }

  .event button {
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 6px 12px;
    cursor: pointer;
  }

  .event button.delete {
    background-color: #ff5c5c;
  }
</style>

