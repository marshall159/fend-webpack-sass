function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
        })

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            document.getElementById('weather').innerHTML = json.title
        })
}

export { handleSubmit }
