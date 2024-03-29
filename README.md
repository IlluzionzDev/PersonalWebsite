# [Jamin Stratford Personal Website](https://www.jaminstratford.com/)

This is my personal website as an extension of my personal brand. It contains information about my current doings, some technology I'm currently using, and an archive of my projects.

An in-built blog will also be releasing so I can post technical blogs and integrate those across my social media.

## Tech Stack

This website is built with the following technologies:

-   React ([NextJS](https://nextjs.org/))
-   Framer-Motion

## Content

Currently, dynamic content for the site is managed in the `/content` directory.

### Skills

Current skills displayed on the website are exported from a typescript file at `/content/skills.js`. It exports a simple string array.

### Projects

Current projects are contained in a JSON file at `/content/projects.json`. This contains all the information on the project and the website handles rendering where needed, here is the schema for the file.

```json
{
    "projects": [
        {
            "name": "Project Name", // Display name of project
            "description": "Project Description", // Long description of project
            "skills": ["Node.js", "React.js", "WebSockets", "Redux"], // Array of skills used
            "link": "https://linktoproject.com", // Link to hosted verion (if any)
            "source": "https://projectcode.com", // Link to hosted code
            "featured": true // If is displayed as a featured project
        }
    ]
}
```

## Project Structure

-   /components
    -   Local components for this website
-   /content
    -   CMS content for the website
-   /pages
    -   Website pages
-   /public
    -   Static website content
-   /styles
    -   Global website specific scss
