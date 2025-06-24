fetch('http://localhost:3000/')
  .then((response) => response.json())
  .then((data) => {
    // Hier kunnen we iets met onze data doen.
    console.log(data);
  });
