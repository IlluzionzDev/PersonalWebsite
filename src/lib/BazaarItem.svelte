<script lang="ts">
    export let name;
	export let products;
    export let productMap;
    export let items;
    let productName = 'Enchanted ' + name
    
    // Product object
    let enchantedProduct = products.products[productMap[productName]] != null ? products.products[productMap[productName]] : products.products.COBBLESTONE

    // We will display price data per item
	export let dataObject;

    let info = dataObject.quick_status
    let buyOrders = dataObject.buy_summary
    let sellOrders = dataObject.sell_summary

    // Buy order price of item
    let normalBuyPrice = info.sellPrice
    // Insta sell price
    let enchantedSellPrice = enchantedProduct.quick_status.sellPrice

    let initalPurchaseAmount = 1
    let taxRate = 1.2

    $: baseProfit = enchantedSellPrice - normalBuyPrice
    $: profitPerItem = baseProfit / 160
    $: totalProfit = ((profitPerItem * initalPurchaseAmount) - (normalBuyPrice * initalPurchaseAmount)) * (1 - (taxRate / 100));
</script>

<div class="container">
    <h2>Purchase Amount</h2>
    <input bind:value={initalPurchaseAmount}>
    <p>Profit Per Item: {profitPerItem}</p>
    <p>Expected Profit: {totalProfit}</p>
</div>


<style lang="scss">
	@import '../css/colors.scss';

    input {
        margin: 1rem 0;

        border: solid 1.5px $primary;
        appearance: none;

        font-size: 0.83rem;
		color: $black;
		font-family: Inter;
		font-weight: bold;

		align-items: center;
		justify-content: center;
		position: relative;
		padding: 10px 15px;

		border-radius: 4px;

		transition: all 0.5s;
		box-shadow: 0px 3px 6px 0px rgba($color: #000000, $alpha: 0.16);
    }
</style>