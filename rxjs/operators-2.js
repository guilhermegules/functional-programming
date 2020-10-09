const { ajax } = require("rxjs/ajax");
const { XMLHttpRequest } = require("xmlhttprequest");
const { map, concatAll } = require("rxjs/operators");

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: "https://api.github.com/users/guilhermegules/repos",
})
  .pipe(
    map((response) => JSON.parse(response.xhr.responseText)),
    concatAll(), // return only the object like a flat function with multiple dimensional arrays
    map((repository) => repository.full_name)
  )
  .subscribe(console.log);
