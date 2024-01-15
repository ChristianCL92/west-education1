import HttpClient from './http.js';

async function getData() {
  const url = 'http://localhost:3000/courses';

  const http = new HttpClient(url);
    const courses = await http.get();

    console.log(courses);
  
  /* try{

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

