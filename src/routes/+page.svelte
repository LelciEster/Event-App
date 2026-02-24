<script>
  let { data } = $props();
</script>

<h1>Events</h1>
<h2>{data.pageTitle}</h2>

<div class="events-grid">
  {#each data.events as event}
    <div class="event-card">
      <a href={"/event/" + event.id}>
        <h3>{event.name}</h3>
        <p class="description">{event.description}</p>
        <p>
          📅 {new Date(event.startdate).toDateString()}
          ⏰ {event.starttime}
        </p>
        <p class="category">{event.category_name}</p>
      </a>
    </div>
  {/each}
</div>

<style>

    .body{
 padding: 2px;

    }
  .events-grid {
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    margin-top: 1rem;
  }

  .event-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 5px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .event-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }

  .event-card a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .description {
    color: #555;
    margin: 0.5rem 0;
  }

  .category {
    margin-top: 0.6rem;
    font-weight: 600;
    color: #6b7280;
  }

  h3 {
    margin: 3px;
  }
</style>
S