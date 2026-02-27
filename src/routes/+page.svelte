<script>
  let { data } = $props();
</script>

<div class="container">
  <h1>SvelteKit + SQLite</h1>
  <p class="subtitle">A simple full-stack app with a database</p>

  <form method="POST" action="?/create">
    <input type="text" name="name" placeholder="Add a new item..." required />
    <button type="submit">Add</button>
  </form>

  {#if data.items.length === 0}
    <p class="empty">No items yet. Add one above!</p>
  {:else}
    <ul class="items-list">
      {#each data.items as item}
        <li>
          <span class="item-name">{item.name}</span>
          <form method="POST" action="?/delete" style="display:inline">
            <input type="hidden" name="id" value={item.id} />
            <button type="submit" class="delete-btn">Delete</button>
          </form>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .container {
    max-width: 640px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .subtitle {
    color: #888;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  input[type="text"] {
    flex: 1;
    padding: 0.625rem 0.875rem;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 0.5rem;
    color: #ededed;
    font-size: 0.9375rem;
    outline: none;
  }
  input[type="text"]:focus { border-color: #555; }
  input[type="text"]::placeholder { color: #555; }
  button {
    padding: 0.625rem 1.25rem;
    background: #ededed;
    color: #0a0a0a;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
  }
  button:hover { background: #d4d4d4; }
  .items-list {
    list-style: none;
  }
  .items-list li {
    padding: 0.875rem;
    border-bottom: 1px solid #1a1a1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item-name { font-weight: 500; }
  .delete-btn {
    background: transparent;
    color: #555;
    border: 1px solid #333;
    border-radius: 0.375rem;
    padding: 0.25rem 0.625rem;
    font-size: 0.8125rem;
  }
  .empty {
    text-align: center;
    color: #555;
    padding: 3rem 0;
  }
</style>
