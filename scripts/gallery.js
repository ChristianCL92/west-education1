import HttpClient from './http.js';

async function getData() {
  const url = 'http://localhost:3001/courses';

  const response = await fetch(url);

  const http = new HttpClient(url);

  const courses = http.get(); /* try{

        const response = await fetch(url);

        if(response.ok) {

            const data = await response.json();

            console.log(data);

        }

    } catch(error) {

        console.error("Error fetching data:", error);

    } */
}

getData();
