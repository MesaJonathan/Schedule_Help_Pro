import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ClassView.css'

function ClassView() {

    //for getting the course that was selected
    const location = useLocation();
    const course = location.state.course

    //for getting the schedule using web scraping
    /*
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
        console.log(searchResults[0].link);
    })()
        .catch(err => console.error(err))
        .finally(() => browser?.close())
    ;
    */


    return(
        <div className='course'>
            <h1>{course.name} ({course.code})</h1>
            <h2>Course Syllabus: </h2>
            <h2>{course.pres}</h2>
            <h2>Course ID: {course.id}</h2>
            <h2>Description:</h2>
            <h3>{course.desc}</h3>
            <Link to='/classlist'><p>Return to Class List</p></Link>
        </div>
    )
}

export default ClassView