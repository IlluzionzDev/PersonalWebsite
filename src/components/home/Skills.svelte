<script lang="ts">
    import SectionHeader from "$components/SectionHeader.svelte";
    import PaddedSection from "$components/PaddedSection.svelte";
    import skillsJson from '$content/skills.json';
    const skills = skillsJson.skills;
</script>

<PaddedSection>
    <SectionHeader 
        slogan="...and a touch of debugging there"
        title="Skills"
        subtitle="See what technologies I like to use"
        description="I love to learn and utilise popular and useful technologies. Take a look at some of the tools I use."
    />

    <div class="skills">
        {#each skills as skill}
            <button>{skill}</button>
        {/each}
    </div>
</PaddedSection>

<style lang="scss">
    .sub-heading-1 {
        margin-bottom: rem(10);
    }

    .body-2 {
        margin-top: rem(20);
    }

    .skills {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;

        @include md {
            justify-content: center;
        }

        align-items: left;
        margin-top: rem(45);
        gap: rem(25);

        button {
            border-radius: 10px;
            background: $primary-100;
            padding: rem(10) rem(16);
        }
    }
</style>