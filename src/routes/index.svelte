<script context="module">
    // Load Bazaar Items
    export async function load({ status, error }) {
        let products;
        let items;

        await fetch(`https://api.hypixel.net/skyblock/bazaar`)
        .then(r => r.json())
        .then(data => {
            products = data
        });

        await fetch(`https://api.hypixel.net/resources/skyblock/items`)
        .then(r => r.json())
        .then(data => {
            items = data
        });

		return {
			props: { products, items }
		};
	}
</script>

<script lang="ts">
    import BazaarItem from "$lib/BazaarItem.svelte";

    // Product object
	export let products;
    export let items;

    // Map of names
    let productMap = new Map<string, string>()
    let productName = 'Cobblestone'

    items.items.forEach(element => {
        productMap[element.name] = element.id
    });

    // Product object
    let product = products.products[productMap[productName]] != null ? products.products[productMap[productName]] : products.products.COBBLESTONE

    function updateProduct() {
        product = products.products[productMap[productName]] != null ? products.products[productMap[productName]] : products.products.COBBLESTONE
    }
</script>

<div class="container_center">
    <div class="app">
        <h1>Bazaar Flipper</h1>
        
        <h2>Item</h2>
        <input bind:value={productName}>

        <button class="btn btn-solid" on:click={updateProduct}>Update</button>

        {#key product}
            <svelte:component this="{BazaarItem}" name={productName} dataObject={product} {products} {items} {productMap}/>
        {/key}
    </div>
</div>

<style lang="scss">
	@import '../css/colors.scss';

    .app {
        margin: auto;
        text-align: center;
    }

    h1 {
        padding: 1rem;
    }

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
