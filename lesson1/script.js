let data = [
    {
        "id": "1",
        "author": "книга 1",
        "name": "названиие книги 1...",
        "date": "01.08.2022"
    },
    {
        "id": "2",
        "author": "книга 2",
        "name": "названиие книги 2...",
        "date": "02.08.2022"
    },
    {
        "id": "3",
        "author": "книга 3",
        "name": "названиие книги 3...",
        "date": "03.08.2022"
    },
    {
        "id": "4",
        "author": "книга 4",
        "name": "названиие книги 4...",
        "date": "04.08.2022"
    }
]
// console.log(data)
function createBook(id, author, name, date) {
    let findId = false; // флаг
    data.forEach(function (book) {
        if (book.id == id) {
            findId = true
        }
    })
    if (findId) {
        return "Такая книга уже есть"
    } else {
        data.push({
            "id": id,
            "author": author,
            "name": name,
            "date": date
        })
        return "Книга добавлена"
    }
}
function updateBOOK(id) {   

}
function DeleteBook(id, author, name, date) {

}
function ShowAllBooks(id, author, name, date){
    let array = []
    for (let i = 0; i < data.length; i++){
        console.log(data[i])
    }
    
}
// РАБОТАЕТ НЕ ТРОГАТЬ!!!///////////////////////////////////////////////////////////////////////
function searchbbbyid() {
    let array = []

    let id = document.getElementById("1")
    console.log("По поиску:", id.value)

    for (let i = 0; i < data.length; i++) {
        if (data[i]["id"] == id.value) {
            array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(array)
        }
    }
}
function searchbbbyauthor() {
    let array = []

    let author = document.getElementById("2")
    for (let i = 0; i < data.length; i++) {
        if (data[i]["author"] == author.value) {
            array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(array)
        }
    }
}
function searchbbbyname() {
    let array = []

    let name = document.getElementById("3")
    for (let i = 0; i < data.length; i++) {
        if (data[i]["name"] == name.value) {
            array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(array)
        }
    }
}
function searchbbbydate() {
    let array = []

    let date = document.getElementById("4")
    for (let i = 0; i < data.length; i++) {
        if (data[i]["date"] == date.value) {
            array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(array)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////