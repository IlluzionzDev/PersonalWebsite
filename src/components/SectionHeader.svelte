<script lang="ts">
	// Probs
	export let slogan;
	export let title;
	export let subtitle;
	export let description;
</script>

<div class="container">
	<p class="slogan sub-heading-1 primary-200">{slogan}</p>
	<h2 class="title">{title}</h2>
	<p class="subtitle sub-text">{subtitle}</p>
	{#if description}
		<p class="description body-2">{description}</p>
	{/if}
</div>

<style lang="scss">
	.slogan {
		margin-bottom: rem(10);

		@include md {
			text-align: center;
			margin: rem(10) auto;
		}
	}

	.title {
		@include md {
			text-align: center;
			margin: auto;
		}
	}

	.subtitle {
		@include md {
			text-align: center;
			margin: auto;
		}
	}

	.description {
		margin-top: rem(20);
		max-width: 40%;

		@include md {
			text-align: center;
			margin: rem(20) auto;
			max-width: 80%;
		}
	}
</style>
