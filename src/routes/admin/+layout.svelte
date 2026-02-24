<script>

	let { children } = $props();
</script>



<header>

    <h1>Admin dashboard</h1>
</header>

{@render children()}

<style>
    header{
        display: flex;
        align-items: center;
   justify-content: center;
    }
</style>