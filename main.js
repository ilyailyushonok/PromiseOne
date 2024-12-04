// https://www.youtube.com/watch?v=BQGJJcCQBqU&list=WL&index=1


// const btn1 = document.querySelector("#btn-1")
// const btn2 = document.querySelector("#btn-2")


// // Создаем обещание
// let promise = new Promise(function (resolve, reject) {
//     console.log("Создаем обещание 1")

//     let count = 20

//     btn1.addEventListener("click", function () {
//         resolve(count)
//         clearInterval(timer)
//     })

//     let timer = setInterval(function () {
//         count--
//         btn1.textContent = "Кнопка" + count
//         if (count == 0) {
//             reject()
//             clearInterval(timer)
//         }
//     }, 200)
// })

// // Обещание исполнено
// promise.then(
//     function (count) {
//         console.log("Обещание исполнено на " + count + " сек у 1 кнопки")
//         btn1.style.backgroundColor = "green"
//         btn1.style.color = "white"
//     },
//     function () {
//         console.log("Обещание провалено у 1 кнопки")
//         btn1.style.backgroundColor = "red"
//         btn1.style.color = "white"
//     })

//     // Создаем обещание 2
// let promise2 = new Promise(function (resolve, reject) {
//     console.log("Создаем обещание 2")

//     let count = 20

//     btn2.addEventListener("click", function () {
//         resolve(count)
//         clearInterval(timer)
//     })

//     let timer = setInterval(function () {
//         count--
//         btn2.textContent = "Кнопка" + count
//         if (count == 0) {
//             reject()
//             clearInterval(timer)
//         }
//     }, 200)
// })

// // Обещание 2 исполнено 
// promise2.then(
//     function (count) {
//         console.log("Обещание исполнено на " + count + " сек у 2 кнопки")
//         btn2.style.backgroundColor = "green"
//         btn2.style.color = "white"
//     },
//     function () {
//         console.log("Обещание провалено у 2 кнопки")
//         btn2.style.backgroundColor = "red"
//         btn2.style.color = "white"

//     })

//     /////////////////////
//     //Promise.all

//     Promise.all([promise,promise2]).then(function(){
//         console.log("Обещания исполнены у ОБЕИХ кнопок!!!")
//     },
//     function(){
//         console.log("Какое-то обещание НЕ исполнено!!!")
//     }
// )




////////// Вторая часть Видео ////////////////////

const imgURLArr=[
    'img/1.jpeg',
    'img/2.jpeg',
    'img/3.jpeg',
    'img/4.jpeg',
    'img/5.jpeg',
    'img/6.jpeg',
    'img/7.jpeg',
    'img/8.jpeg',
    'img/9.jpeg',
    'img/10.jpeg'
]
const promiseArr=[]

for (const url of imgURLArr) {
    const promise=new Promise(function(resolve,reject){
        const img=document.createElement('img')
        img.classList.add("picture","hidden")
        img.src=url

img.addEventListener("load",function(){
    console.log('sfsdf')
    resolve()
})
// ошибка если НАПРИМЕР указать неправильный URL
img.addEventListener("error",function(){
    reject()
})

        document.body.append(img)
    })
    promiseArr.push(promise)
}


//вернуть обещание
Promise.all(promiseArr).then(
    function(){
        document.querySelector(".spinner").classList.remove("loading")
        document.querySelectorAll(".picture").forEach(img=>{
            img.classList.add("show")
        })
    },
        function(){
            document.querySelector(".spinner").classList.remove("loading")
            alert("Возникла Ошибка Загрузки")
        }
    
)