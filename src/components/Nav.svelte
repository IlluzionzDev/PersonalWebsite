<header class="container">
	<nav>
		<ul>
			<li class="brand"><a href="/">Jamin Stratford</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '../css/design-system.scss';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav {
		// Cover whole width
		width: 100%;
		

		ul {
			// Fixed nav height
			// height: 5vh;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			gap: rem(40);
			margin: 0;
			padding: 0;

			li {
				margin: auto 0;
				list-style: none;
				font-size: 1.125rem;
				position: relative;
				padding: 1.5rem 0;

				// Branding on nav
				&.brand {
					@include link-text;
					@include primary-gradient-100;
					@include text-gradient;

					transition: 200ms ease-in-out;

					a {
						&:hover {
							transition: 200ms ease-in-out;

							@include primary-gradient-200;
							@include text-gradient;
						}
					}
				}

				a {
					color: $onyx;
				}

				// Make first element on left (logo)
				&:first-child {
					margin-right: auto;
					padding-left: 0;
				}

				// Make sure expands full width
				&:last-child {
					padding-right: 0;
				}
			}
		}
	}
</style>
