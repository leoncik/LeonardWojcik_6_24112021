const params = new URL(document.location).searchParams;
const urlId = params.get('id');

alert(`The Id of this photographer is ${urlId}`);
