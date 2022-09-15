<script>
  let count = 0
  const increment = () => {
    count += 1
  }
  $: doubled = count*2
</script>

<button on:click={increment}>
  count is {count} and doubled is {doubled}
</button>
