'use strict';

let tasks = [
	[
		[
			"Телескоп #1",
			`Найдите увеличение телескопа-рефлектора, зеркало которого имеет радиус кривизны first_param м, а фокусное расстояние окуляра равно second_param мм.`,
			[2, 8],
			[20, 8],
			"8532*first_param/second_param",
			"Подсказка"

		],
		[
			"Телескоп #2",
			"Диаметр объектива телескопа first_param см. Каково теоретическое разрешение для визуальных наблюдений? Ответ дайте в секундах.",
			[20, 8],
			[1, 8],
			"8532*first_param/second_param",
			"Подсказка"

		]
	],
	[
		[
			"Собственное движение звезд #1",
			"Звезда, находясь на расстоянии first_param пк, имеет тангенциальную (перпендикулярную лучу зрения) скорость second_param км/с. За сколько лет она переместится по небу на угловой диаметр Луны (0,5 deg)?",
			[10, 8],
			[20, 8],
			"8532*first_param/second_param",
			"Подсказка"

		]
	],
	[
		[
			"Стефан-Больцман #1",
			"Ахахахахахахахахахахаха first_param пк, имеет тангенциальную (перпендикулярную лучу зрения) скорость second_param км/с. За сколько лет она переместится по небу на угловой диаметр Луны (0,5 deg)?",
			[10, 8],
			[20, 8],
			"8532*first_param/second_param",
			"Подсказка"

		]
	]
];


function construct_right_ans() {
	let right_ans = document.createElement('div');
	let right_ans_text = "Правильный ответ, супер.";
	let right_p = document.createElement('p');

	right_p.innerHTML = right_ans_text;
	right_ans.appendChild(right_p);
	right_ans.style.display = "none";
	right_ans.style.zIndex = "2";
	return right_ans;
}

function construct_wrong_ans() {
	let wrong_ans = document.createElement('div');
	let wrong_ans_text = "Неправильно";
	let wrong_p = document.createElement('p');

	wrong_p.innerHTML = wrong_ans_text;
	wrong_ans.appendChild(wrong_p);
	wrong_ans.style.display = "none";
	wrong_ans.style.zIndex = "3";
	return wrong_ans;
}

function generate_ans(first_param, second_param, i, theme) {
	let ans_body = tasks[theme][i][4];
	
	ans_body = ans_body.replace("first_param", first_param);
	ans_body = ans_body.replace("second_param", second_param);
	let ans  = eval(ans_body);
	ans = round_to_dec(ans);
	
	return ans;
}

function round_to_dec(num) {
	num = num * 10;
	num = Math.floor(num)
	num = num / 10
	return num
}

function fade(element) {
	var op = 1; // initial opacity
	var timer = setInterval(function () {
		if (op <= 0.1) {
			clearInterval(timer);
			element.style.display = 'none';
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op -= op * 0.1;
	}, 50);
}

function unfade(element) {
	var op = 0.1; // initial opacity
	element.style.display = 'block';
	var timer = setInterval(function () {
		if (op >= 1) {
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 10);
}

function randomInteger(min, max) {
	let rand = min + Math.random() * (max - min);
	return Math.round(rand);
}

function generate_borders(num) {
	let tmp = num;
	if (tmp[0] == 1) {
		return 1;
	}
	if (tmp[1] != 1) {

		let ans = randomInteger(Math.floor(tmp[0] - (tmp[0] / tmp[1])), Math.ceil(tmp[0] + (tmp[0] / tmp[1])))
		if (ans == 0) {
			ans += 1;
		}
		return ans;
	} else {
		return tmp[0];
	}

}




function generate_block(i, theme) {
	let block = document.createElement('div');
	let main_text = document.createElement('p');
	let title = document.createElement('h2');
	let form = document.createElement('input');
	let button = document.createElement('button');
	let br = document.createElement('br');
	let hint = document.createElement('p')
	let hint_button = document.createElement('button');
	let skip = document.createElement('button');

	let first_param = generate_borders(tasks[theme][i][2])
	let second_param = generate_borders(tasks[theme][i][3])
	let ans = generate_ans(first_param, second_param, i, theme)
	let temp_task_body = tasks[theme][i][1];


	temp_task_body = temp_task_body.replace("first_param", first_param)
	temp_task_body = temp_task_body.replace("second_param", second_param)
	main_text.innerHTML = temp_task_body;

	title.innerHTML = tasks[theme][i][0];
	block.appendChild(title);

	main_text.classList.add("ex-text");
	block.appendChild(main_text);

	let right_ans = construct_right_ans();
	let wrong_ans = construct_wrong_ans();


	block.appendChild(right_ans);
	block.appendChild(wrong_ans);


	button.innerHTML = "Ответить";
	button.setAttribute("submit", "submit");
	button.classList.add("btn", "amount-but");
	button.style.width = "100px";

	form.value = ans;
	form.type = "text";
	form.setAttribute("form", "form");
	form.classList.add("m-3");

	block.classList.add("container", "mb-3", "round-border", "mt-3");
	block.setAttribute("tasknumber", i);
	block.setAttribute("ans", ans)
	//------------------------------
	hint_button.innerHTML = "Я сдаюсь";
	hint_button.setAttribute("surrender", "surrender")
	hint_button.classList.add("btn", "amount-but", "m-3")
	hint_button.style.width = "100px";

	hint.innerHTML = tasks[0][i][5];
	hint.style.display = "none";
	hint.setAttribute("hint", "hint")
	//------------------------------
	skip.innerHTML = "Пропуск";
	skip.classList.add("amount-but", "btn", "m-3");
	skip.style.width = "200px";
	skip.style.float = "right";
	skip.setAttribute("skip", "skip");
	//------------------------------
	block.appendChild(form);

	block.appendChild(button);
	block.appendChild(hint_button);
	block.append(skip);

	block.appendChild(br);
	block.append(hint);

	block.style.display = "none";
	hidden.appendChild(block);
	$(block).fadeIn();
}

function load_tasks(amount, theme) {
	for (let k = 0; k < amount; k++) {
		let random_num = randomInteger(0, tasks[theme].length - 1)
		generate_block(random_num, theme);
	}
}


var start_generation = this.document.getElementById('generate');
var hidden = this.document.getElementById('hidden');
var plus = this.document.getElementById('plus');
var minus = this.document.getElementById('minus');
var input_amount = document.getElementById("amount");
var background = document.getElementById('background');


start_generation.onclick = function () {
	let count_themes = 0;
	hidden.innerHTML = '';
	hidden.style.display = 'block';


	let themes_array = []
	for (let i = 1; i < 4; i++) {
		let tmp_checkbox = "btncheck" + i.toString();

		tmp_checkbox = document.getElementById(tmp_checkbox)

		if (tmp_checkbox.checked == true) {
			count_themes += 1;
			themes_array.push(tmp_checkbox.getAttribute("theme_index"));
		}
	}

	console.log(themes_array);

	for (let i = 0; i < count_themes; i += 1) {
		if (i == count_themes - 1) {
			let tmp_amount = Math.ceil(input_amount.value / count_themes)
			load_tasks(tmp_amount, themes_array[i]);
		} else {
			let tmp_amount = Math.floor(input_amount.value / count_themes)
			load_tasks(tmp_amount, themes_array[i]);
		}
	}




	document.body.classList.toggle('background');
	document.body.classList.toggle('background');
}

plus.addEventListener("click", function () {
	input_amount.value = Number(input_amount.value) + Number(1);
});


minus.addEventListener("click", function () {
	input_amount.value = Number(input_amount.value) - Number(1);
});

hidden.addEventListener("click", function (event) {
	var par = event.target.parentElement;
	if (event.target.getAttribute("submit") == "submit") {

		let but = event.target.previousElementSibling;

		if (but.value == par.getAttribute("ans")) {

			for (let j = 0; j < par.childNodes.length; j++) {
				if (par.childNodes[j].style.zIndex == "2") {
					par.childNodes[j].style.display = "block";
				}
			}
			for (let j = 0; j < par.childNodes.length; j++) {
				if (par.childNodes[j].style.zIndex == "3") {
					par.childNodes[j].style.display = "none";
				}
			}
			$(par).fadeOut(1000);
		} else {
			var par = event.target.parentElement;
			for (let j = 0; j < par.childNodes.length; j++) {
				if (par.childNodes[j].style.zIndex == "2") {
					par.childNodes[j].style.display = "none";
				}
			}
			for (let j = 0; j < par.childNodes.length; j++) {
				if (par.childNodes[j].style.zIndex == "3") {
					par.childNodes[j].style.display = "block";
				}
			}
		}
	}

	if (event.target.getAttribute("surrender") == "surrender") {

		for (let j = 0; j < par.childNodes.length; j++) {
			if (par.childNodes[j].getAttribute("form") == "form") {
				$(par.childNodes[j]).fadeOut();
			}
			if (par.childNodes[j].getAttribute("submit") == "submit") {
				$(par.childNodes[j]).fadeOut();
			}
			if (par.childNodes[j].getAttribute("hint") == "hint") {
				$(par.childNodes[j]).fadeIn();
			}
			if (par.childNodes[j].getAttribute("surrender") == "surrender") {
				$(par.childNodes[j]).fadeOut();
			}
		}

	}

	if (event.target.getAttribute("skip") == "skip") {
		$(par).fadeOut();
	}


});

$('#exit_btn').on('click', function(){
	let side = $("#sidebar");
	side.toggleClass("sidebar-small");
});
	

