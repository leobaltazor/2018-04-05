(function (attr, arrLink) {
	var IMGS = document.querySelectorAll("[" + attr + "]");

IMGS.forEach(e=> {
	if (e.hasAttribute('data-down')) {
		e.setAttribute('data-targer', arrLink.length -1);
	} else {
		e.setAttribute('data-targer', 0);
	}
})

	setInterval(()=> {

		IMGS.forEach(element => {

			var next;
			if (element.hasAttribute("data-down")) {
				next = +element.getAttribute('data-targer') - 1 >= 0 ? +element.getAttribute('data-targer') - 1 : arrLink.length - 1;
			} else {
				next = (+element.getAttribute('data-targer') + 1) < arrLink.length ? +element.getAttribute('data-targer') + 1 : 0;
			}
			element.setAttribute("src", arrLink[next]);
			element.setAttribute("data-targer", next);
		});
	}, 10000)
})("data-targer",[
	"https://cdn2.img.ria.ru/images/148393/86/1483938656.jpg",
	"https://www.shock.co/sites/default/files/styles/galeria_despliegue/public/galerias/imagenes/grumpycat662.jpg?itok=fTMWOPpU",
	"http://pipcat.ru/wp-content/uploads/2016/07/5-popular-flat-faced-cat-breeds-55460dd1f02401.jpg"
]);

setInterval(()=>{
	var d = new Date();
	var cloc = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// console.log(cloc);
document.querySelector('div').innerHTML = cloc

}, 1000)


function timer() {
	var d = new Date();
	var H = document.querySelector(".hours");
	var M = document.querySelector(".minuts");
	var S = document.querySelector(".seconds");

	S.classList.add("zero")

	if (+M.innerHTML !== d.getMinutes()) {
 M.classList.toggle("color-red")		
	}

	if (M.classList.contains("color-red")) {
		M.classList.add("big-font")
	} else {
		M.classList.remove("big-font")
	}
H.innerHTML = d.getHours();
M.innerHTML = d.getMinutes();
S.innerHTML = d.getSeconds();

if (+S.innerHTML > 9) {
	S.classList.remove("zero")
}
}

setInterval(timer, 1000)