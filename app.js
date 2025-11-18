let fio = document.querySelector('.fio')
let yosh = document.querySelector('.yosh')
let maktab = document.querySelector('.maktab')
let list = document.querySelector('.list')

let oquvchi = []
let boshliq =null
let btn = document.querySelector('.btn')
btn.onclick = function(e) {
    e.preventDefault()
    let f = fio.value.trim()
    let y = yosh.value.trim()
    let m = maktab.value.trim()


    if (!f || !y || !m) {
        alert('malumot toldiring')
        return
    }

    oquvchi.push({ f, y, m })
    chiz()
    tozalash()

}

function chiz() {
    list.innerHTML = ''
    oquvchi.forEach((item, index) => {
        list.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.f}</td>
            <td>${item.y}</td>
            <td>${item.m}</td>
            <td>
                <button onclick="ozgartir(${index})" data-bs-toggle="modal" data-bs-target="#myModal">♻️</button>
                <button onclick="ochirish(${index})">❌</button>
            </td>
        </tr>


        <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Malumotni ochirmoqchimisiz?</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <input type="text" placeholder="F.I.O" class="form-control f1">
                    <input type="text" placeholder="yosh" class="form-control my-3 y1">
                    <input type="text" placeholder="Maktab" class="form-control m1">
                    <button class="btn btn-success mt-3 w-100 " onclick="bb()" data-bs-dismiss="modal">Submit</button>

                </div>

            </div>
        </div>
    </div>
     
    `
    })
}


function tozalash() {
    fio.value = ''
    yosh.value = ''
    maktab.value = ''
}


function ochirish(index) {
    if (confirm('siz rostan ochirmoqchimisiz?')) {
        oquvchi.splice(index, 1)
        chiz()
    }

}


function ozgartir(index) {
  let item =oquvchi[index]

  let f1 =document.querySelector(".f1")
  let y1 =document.querySelector(".y1")
  let m1 =document.querySelector(".m1")
  

  f1.value=item.f
  y1.value=item.y
  m1.value=item.m
  boshliq=index
  

}
function bb () {
  let f1 =document.querySelector(".f1")
  let y1 =document.querySelector(".y1")
  let m1 =document.querySelector(".m1")
  let f = f1.value.trim()
  let y = y1.value.trim()
  let m = m1.value.trim()

    if (!f || !y || !m) {
        alert('malumot toldiring')
        return
    }
    
    oquvchi[boshliq]={ f,y,m}
    chiz()
    tozalash()
    boshliq =null

}


// xatolar //

