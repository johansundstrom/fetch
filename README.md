# Fetch

* metod för att enkelt och logiskt hämta resurser asynkront på nätverket
* Ersätter XMLHttpRequest
* Hanterar CORS
* `fetch()` returnerar en promise 

```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  .catch(error => console.log(error));
```

