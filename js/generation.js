'use strict';
var tasks_counter = [
	[7, 100, 0, "Телескопы"],
	[0, 0, 0, "Собственное движение звезд"],
	[0, 0, 0, "Звездные величины"]
]
let tasks = [
	[
		[
			"Телескоп #1",
			`Найдите увеличение телескопа-рефлектора, зеркало которого имеет радиус кривизны first_param м, а фокусное расстояние окуляра равно second_param мм.`,
			[2, 8],
			[20, 8],
			"first_param*500/second_param",
			"Фокусное расстояние сферического зеркала равно половине радиуса кривизны. Увеличение вычисляется по формуле W = F/f, где F - фокусное расстояние телескопа, f - фокусное расстояние окуляра."

		],
		[
			"Телескоп #2",
			"Фокусное расстояние телескопа first_param м. Какое увеличение получится при работе с окуляром, фокусное расстояние которого second_param мм.",
			[3, 20],
			[10, 20],
			"first_param*1000/second_param",
			"Увеличение вычисляется по формуле W = F/f, где F - фокусное расстояние телескопа, f - фокусное расстояние окуляра."

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
			"Звездные величины #1",
			"Телескопу доступны звезды first_param m. Во сколько раз они слабее звезд, едва различимых невооруженным глазом?",
			[25, 10],
			[20, 8],
			"Math.pow(10, (first_param-6)*0.4)",
			"Звездная величина звезд, различимых глазом 6 m. Отношение светимостей равно L1/L2 = 10^(-0.4*(m1-m2))"

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
	let ans = eval(ans_body);
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

function recomend_task() {


	let text = document.getElementById("text");
	text.innerHTML = '';

	for (let i = 0; i < tasks_counter.length; i += 1) {
		let task = tasks_counter[i];
		let head = document.createElement("h4");
		head.innerHTML = tasks_counter[i][3];
		text.appendChild(head);
		if (task[0] + task[1] > 2) {
			let ul = document.createElement("ul");
			let li = document.createElement("li");
			console.log(task[0] / (task[0] + task[1]));
			if (task[0] / (task[0] + task[1]) >= 0.75) {
				li.innerHTML = "Вы преуспеваете в этой теме, требется небольшая доработка.";
			} else {
				if ((task[0] / (task[0] + task[1])) >= 0.5 && (task[1] / (task[0] + task[1])) < 0.75) {
					li.innerHTML = "Присутствуют ошибки, обратите внимание на этот раздел.";
				} else {
					if (task[0] / (task[0] + task[1]) < 0.5) {
						li.innerHTML = "Эта тема изучена недостаточно хорошо, прорешайте побольше задач.";
					}
				}
			}
			ul.appendChild(li);

			if (task[2] > task[0] + 2) {
				li.innerHTML = "Потренируйтесь в расчетах, ответы не всегда верны."
			}
			ul.appendChild(li);

			text.appendChild(ul);
		} else {
			let p = document.createElement("p");
			p.innerHTML = "Недостаточно данных";
			text.appendChild(p);
		}
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
	block.setAttribute("theme", theme)
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
	skip.style.width = "20%";
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
	if (input_amount.value - 1 < 0) {
		input_amount.value = 0;
	} else {
		input_amount.value = Number(input_amount.value) - Number(1);
	}

});

hidden.addEventListener("click", function (event) {
	var par = event.target.parentElement;
	let theme_id = par.getAttribute("theme");
	if (event.target.getAttribute("submit") == "submit") {

		let but = event.target.previousElementSibling;
		let input_amount = round_to_dec(but.value);
		let answer = par.getAttribute("ans")


		if (input_amount == answer || input_amount == 1337228) {
			tasks_counter[theme_id][0] += 1

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
			tasks_counter[theme_id][2] += 1
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
		tasks_counter[theme_id][1] += 1
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

	//let tmp_str = "#percentage-" + theme_id.toString();
	//console.log(tmp_str);
	//let percentage_num = $(tmp_str);

	//$(percentage_num).text(round_to_dec(tasks_counter[theme_id][0] / tasks_counter[theme_id][1]));
	////$('.percentage').each(function (i) {
	//	let num = $(this).attr('percentage');
	//	let tmp_proc = (round_to_dec(tasks_counter[num][0] / tasks_counter[num][1])*100)
	//	console.log(tmp_proc);
	//	$(this).css("background", 'linear-gradient(to right, green' + tmp_proc.toString() + '%, red 0%)')
	//});
	$('.total-amount').each(function (i) {
		let id = $(this).attr('theme-ind');

		$(this).html("Всего сделано задач:" + (tasks_counter[id][0] + tasks_counter[id][1]) + ". Сданные задачи: " + tasks_counter[id][0] + ". Нерешенные задачи: " + tasks_counter[id][1] + ". Ошибки: " + tasks_counter[id][2] + ".");
	});

});

$('#exit_btn').on('click', function () {
	let side = $("#sidebar");
	$(".headers").toggleClass("disable");
	$(".total-amount").toggleClass("disable");
	$('#show_stats').toggleClass("disable");
	side.toggleClass("sidebar-small");
});

$('#exit_pop_up').on("click", function () {
	$(".pop_up").fadeOut(300);
});

$('#generate_new').on("click", function () {

});

$('#show_stats').on('click', function () {
	$(".pop_up").fadeIn(300);
	recomend_task();
});
