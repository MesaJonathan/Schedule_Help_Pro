export function syllabusScrape(course){
    const puppeteer = require("puppeteer"); // ^13.5.1
    let browser;
    (async () => {
        const searchQuery = course.name + " " + course.code + " UF syllabus";

        browser = await puppeteer.launch();
        const [page] = await browser.pages();
        await page.goto("https://www.google.com/", {waitUntil: "domcontentloaded"});
        await page.waitForSelector('input[aria-label="Search"]', {visible: true});
        await page.type('input[aria-label="Search"]', searchQuery);
        await Promise.all([
            page.waitForNavigation(),
            page.keyboard.press("Enter"),
        ]);
        await page.waitForSelector(".LC20lb", {visible: true});
        const searchResults = await page.$$eval(".LC20lb", els => 
            els.map(e => ({title: e.innerText, link: e.parentNode.href}))
        );
        return(searchResults[0].link);
    })()
        .catch(err => console.error(err))
        .finally(() => browser?.close())
}
