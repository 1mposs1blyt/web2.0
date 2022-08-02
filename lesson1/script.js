let data = [
    {
        "id": "1",
        "author": "я",
        "name": "названиие книги...",
        "date": "02.08.2022"
    },
    {
        "id": "2",
        "author": "я",
        "name": "названиие книги...",
        "date": "02.08.2022"
    },
    {
        "id": "3",
        "author": "я",
        "name": "названиие книги...",
        "date": "02.08.2022"
    },
    {
        "id": "4",
        "author": "я",
        "name": "названиие книги...",
        "date": "02.08.2022"
    }
]
console.log(data)
function createBOOK(id, author, name, date) {
    let findid = false;
    data.forEach(function (book) {
        if (book.id = id) {
            return true
        }
    })
    if (findid) {
        return "Книга уже существует"
    }else{
        data.push({
            'id':id,
            "author": author,
            "name":name,
            "date": date
        })
        return "Книга добвлена"
    }
}

function searchbbbyid() {
    let id = document.getElementById("1").innerHTML
    let author = document.getElementById("2")
    let name = document.getElementById("3")
    let date = document.getElementById("4")
    console.log(id)
    data.forEach(function (book) {
        if (book.id == id){
            console.log(book.name)
        }
    })
}
function searchbbbyauthor() {

}
function searchbbbyname() {

}
function searchbbbydate() {

}