<script>
    import ProjectCard from "$components/ProjectCard.svelte"
    import SectionHeader from "$components/SectionHeader.svelte";
    import projectsJson from '$content/projects.json';
    import PaddedSection from "$components/PaddedSection.svelte";
    const projects = projectsJson.projects;
</script>

<PaddedSection>
    <SectionHeader 
        slogan="A bit of code here..."
        title="Projects"
        subtitle="See what kind of innovation has been happening"
        description="I love seeing what I can create with nothing but code and imagniation. Take a look at some things I’ve been able to do."
    />
    <div class="cards">
        {#each projects as project}
            <ProjectCard projectNumber={project.id} projectName={project.name} projectDescription={project.description} projectLink={project.link} 
            projectRepo={projects.repo}/>
        {/each}
    </div>
    <div class="links">
        <a href="/projects">Take a deeper look -></a>
    </div>
</PaddedSection>

<style lang="scss">
    .cards {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 3rem 0;
        gap: rem(80) rem(100);
        flex-wrap: wrap;

        @include sm {
            justify-content: center;
        }
    }

    .links {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: rem(135);

        @include lg {
            margin-top: rem(85);
        }
    }
</style>