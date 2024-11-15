fetch('https://dummyjson.com/recipes/1')
.then(res => res.json())
.then(console.log);