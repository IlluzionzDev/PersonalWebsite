<script>
    import PaddedSection from "$components/PaddedSection.svelte";
</script>

<PaddedSection>
    <div class="hero">
        <div class="content">
            <div class="text">
                <p class="small-heading-2 primary-100">Hi, I'm Jamin Stratford</p>
                <h1 class="display-1">Let me take you</h1>
                <h1 class="display-1"><span class="text-gradient primary-gradient-100">on a journey</span></h1>
                <p class="small-heading-2">with code | design | innovation</p>
                <a href="/"><button>About</button></a>
                <a href="/"><button class="outline">Projects</button></a>
            </div>
        </div>
        <div class="background">
            <div class="shape shape__1"></div>
            <div class="shape shape__2"></div>
            <div class="shape shape__3"></div>
        </div>
    </div>
</PaddedSection>

<style lang="scss">
    // Make it fill most of page
    .hero {
        position: relative;
        display: flex;
        height: 50vh;
    }

    // Main hero content
    .content {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
		align-items: left;
        width: 100%;

        text-align: center;

        h1 {
            line-height: 4rem;

            @include md {
                font-size: rem(48);
                line-height: 3rem;
            }
        }

        .text {
            margin: auto auto;
        }

        .small-heading-2 {
            padding: rem(7) 0;
        }
    }

    // Wrapper for animated background
    .background {
        position: absolute;
        z-index: -999;
        top: -25%;
        left: 25%;
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
		align-items: center;
        text-align: center;
        width: 50%;
        height: 50vh;
    }

    // Spacing of hero buttons
    button {
        margin-top: rem(24);
        margin-right: rem(24);
    }

    // Animation for blob shapes
    @keyframes cycle {
        0% {
            transform: translate(0px, 0px) scale(1);
        }
        33% {
            transform: translate(5%, 7%) scale(1.05);
        }
        66% {
            transform: translate(-5%, 5%) scale(0.95);
        }
        100% {
            transform: translate(0px, 0px) scale(1);
        }
    }


    // Custom moving background shape
    .shape {
        position: absolute;
        width: 50%;
        height: 60%;
        background: $primary-100;
        border-radius: 999px;
        mix-blend-mode: multiply;
        filter: blur(80px);
        opacity: 50%;
        transition: 500ms ease-in-out;
        animation-fill-mode: forwards;

        &__1 {
            margin: 95% 0 50% -55%;
            // background: $secondary-100;
            background: #92e0f8;
            animation: cycle 3s ease-in-out infinite both;
        }

        &__2 {
            margin: 45% 0 0 50%;
            // @include primary-gradient-200;
            background: #c1cdf3;
            animation: cycle 3.7s ease-in-out infinite both;
        }

        &__3 {
            margin: 0 3% 0 0;
            // @include primary-gradient-100;
            background: #b4c3ee;
            animation: cycle 5.6s ease-in-out infinite both;
        }
    }
</style>