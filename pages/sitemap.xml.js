function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.jaminstratford.com</loc>
     </url>
     <url>
       <loc>https://www.jaminstratford.com/about</loc>
     </url>
     <url>
       <loc>https://www.jaminstratford.com/projects</loc>
     </url>
     <url>
       <loc>https://www.jaminstratford.com/contact</loc>
     </url>
     <url>
       <loc>https://www.jaminstratford.com/resume.pdf</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
