<script>
    // Basic calculations
    let normalBuyPrice = 0.0
    let enchantedSellPrice = 0.0
    let initalPurchaseAmount = 1
    let taxRate = 1.2

    $: baseProfit = enchantedSellPrice - normalBuyPrice
    $: profitPerItem = baseProfit / 160
    $: totalProfit = ((profitPerItem * initalPurchaseAmount) - (normalBuyPrice * initalPurchaseAmount)) * (1 - (taxRate / 100));
</script>

<div class="container_center">
    <div class="app">
        <h1>Bazaar Flipper</h1>
        
        <p>Normal Buy Price</p>
        <input bind:value={normalBuyPrice}>

        <p>Enchanted Sell Price</p>
        <input bind:value={enchantedSellPrice}>

        <p>Amount Bought of Normal</p>
        <input bind:value={initalPurchaseAmount}>

        <p>Tax Rate</p>
        <input bind:value={taxRate}>

        <p>Profit Per Item: {profitPerItem}</p>
        <p>Total Profit: {totalProfit}</p>
    </div>
</div>

<style lang="scss">
	@import '../css/colors.scss';

    .app {
        margin: auto;
        text-align: center;
    }
</style>
