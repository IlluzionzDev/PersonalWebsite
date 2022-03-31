<script lang="ts">
	// A simple card that holds some information
	export let projectNumber: string = '0';
	export let projectName = 'Undefined';
	export let projectDescription = 'None';
	export let projectLink = '#';
	export let projectRepo = '#'
</script>

<div class="card">
	<div class="background" />
	<p class="button-text primary-300">Project #{projectNumber}</p>
	<h1 class="sub-heading-1">{projectName}</h1>
	<p class="body-3">{projectDescription}</p>
	<div class="buttons">
		<a href={projectRepo}><span class="material-icons">code</span></a>
		<a href={projectLink} target="_blank">view more -></a>
	</div>
</div>

<style lang="scss">
	.card {
		width: 100%;
		flex: 2;

		@include shadow-soft;
		position: relative;
		padding: rem(23) rem(34);

		background: $primary-200;
		border-radius: 20px;
		color: $white-100;

		display: flex;
		flex-direction: column;

		.body-3 {
			margin-top: rem(17);
			min-height: rem(100);
		}

		@include lg {
			flex: none;
		}

		.buttons {
			width: 100%;

			display: flex;
			justify-content: space-between;
			align-items: center;

			margin-top: rem(14);

			// Links
			a {
				color: $white;

				&:hover {
					color: $primary-300
				}
			}
		}
	}
</style>
