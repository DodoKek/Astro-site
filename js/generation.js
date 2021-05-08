'use strict';
var tasks_counter = [
	[7, 100, 0, "Телескопы"],
	[100, 5, 50, "Собственное движение звезд"],
	[48, 18, 1000, "Звездные величины"]
]
var recomendations = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
			"Законы Кеплера #1",
			"Звездный период обращения планеты вокруг Солнца составляет около first_param лет. Найдите её полуось?",
			[12, 8],
			[20, 8],
			"Math.pow(first_param*first_param, 1/3)",
			"Воспользуйтесь 3 законом Кеплера."

		],
		[
			"Законы Кеплера #2",
			"Планета совершает полный оборот вокруг Солнца за first_param земных года. Во сколько раз (в среднем) он дальше от Солнца, чем Земля?",
			[80, 15],
			[20, 8],
			"Math.pow(first_param*first_param, 1/3)",
			"Воспользуйтесь 3 законом Кеплера."

		],
		[
			"Законы Кеплера #3",
			"Расстояние от астероида Веста до Солнца изменяется в пределах от first_param до second_param а.е. Найдите период обращения астероида.",
			[2, 8],
			[2.6, 8],
			"Math.sqrt(Math.pow((first_param+second_param)/2, 3))",
			"Можно найти полуось, зная перигельное и афелийное расстояния, далее применяем 3 закон Кеплера."

		],
		
		[
			"Законы Кеплера #4",
			"Кратчайшее расстояние между Землей и астероидом равно first_param а.е. Каков период обращения астероида вокруг Солнца? Орбиты считать окружностями, лежащими в одной плоскости.",
			[0.28, 8],
			[2.6, 8],
			"Math.sqrt(Math.pow(1-first_param, 3))",
			"Можно найти полуось астероида, так как тела находятся в нижнем соединении. Далее применяем 3 закон Кеплера."

		],
		[
			"Законы Кеплера #5",
			"Астероид Икар проходит перигелий своей орбиты каждые first_param суток, приближаясь к Солнцу на расстояние second_param а.е. Как далеко может удаляться от Солнца Икар?",
			[420, 3],
			[0.187, 8],
			"2*Math.pow(first_param*first_param / (365*365), 1/3) - second_param",
			"Можно найти полуось астероида. Зная, что q + Q = 2a находим афелий."

		],
		[
			"Двойные звезды #6",
			"Планета обращается вокруг звезды массы first_param M⊙ с периодом second_param лет. Определите полуось орбиты планеты.",
			[1, 8],
			[0.5, 8],
			"Math.pow(first_param*first_param*second_param, 1/3)",
			"Воспользуйтесь обобщенным 3 законом Кеплера."

		],
		
		[
			"Двойные звезды #7",
			'Дана двойная звезда, обе компоненты которой находятся на главной последовательности. Параллакс second_param" . Найдите расстояние до системы.',
			[15, 8],
			[0.4, 2],
			"1/second_param",
			"Вспомните взаимосвязь между параллаксом и расстоянием."

		],
		
		[
			"Двойные звезды #8",
			'Дана двойная звезда, обе компоненты которой находятся на главной последовательности. Период системы first_param лет. Расстояние до системы 4.5 пк. Угловой размер системы second_param". Определите сумму масс компонентов системы.',
			[15, 8],
			[2.3, 2],
			"Math.pow(second_param * 4.5, 3)/ Math.pow(first_param, 2)",
			"Мы можем найти полуось, заная угловой размер и расстояние до системы, далее применяем 3 обобщенный закон Кеплера."

		],
		
		[
			"Двойные звезды #9",
			'Отношение масс компонент двойной звезды first_param M⊙, а суммарная масса second_param M⊙ Найдите светимость более легкой. Звезды лежат на главной последовательности.',
			[2.3, 8],
			[3.8, 2],
			"Math.pow(second_param/(1+first_param) , 4)",
			"Так как звезды лежат на главной последовательности, мы можем воспользоваться отношением масс, чтобы найти отоншение светимостей. Для нахождения массы нужно решить систему из двух уравнений, вы справитесь."

		],
	],
	[
		[
			"Звездные величины #1",
			"Телескопу доступны звезды first_param m. Во сколько раз они слабее звезд, едва различимых невооруженным глазом?",
			[25, 10],
			[20, 8],
			"Math.pow(10, (first_param-6)*0.4)",
			"Звездная величина звезд, различимых глазом 6 m. Отношение светимостей равно L1/L2 = 10^(-0.4*(m1-m2))"

		],
		[
			"Звездные величины #2",
			"Вычислите расстояние до звезды в парсеках, если ее видимая звёздная величина first_paramm, а абсолютная звездная величина second_paramm",
			[0.5, 4],
			[1, 10],
			"Math.pow(10, (second_param-5-first_param)/-5)",
			"M = m + 5 - 5lg(r)"
		],

		[
			"Звездные величины #3",
			"Переменная в максимуме имеет визуальный блеск first_paramm, в минимуме second_paramm. Во сколько примерно раз меняется ее светимость в видимом диапазоне?",
			[2.5, 5],
			[9.2, 5],
			"Math.pow(100, (second_param-first_param)/ 5)",
			"Разности звездных величин в максимуме и в минимуме блеска соответствует отношение освещенностей, а потому и светимостей в видимом диапазоне. L max / L min = 100^(ΔM/5)"

		],
		[
			"Звездные величины #4",
			"Разность звездных величин двух звезд одинаковой светимости равна first_paramm. Во сколько раз одна из них дальше другой?",
			[2.5, 5],
			[9.2, 5],
			"Math.sqrt(Math.pow(10, first_param*0.4))",
			"Разности в 2.5 звездной величины соответствует отношение освещенностей, равное L = 10^(0.4*M). Освещенность обратно пропорциональна квадрату расстояния до светила. Так как светимости звезд по условию одинаковы, то одна из них находится в L^(1/2) раз дальше другой."

		],
		[
			"Звездные величины #5",
			"Двойная звезда имеет компоненты first_paramm и second_paramm. Найти суммарную звездную величину двойной звезды.",
			[2, 1.5],
			[3, 1.5],
			"second_param-2.5*Math.log10(1+Math.pow(10, -0.4*(first_param-second_param)))",
			"В этой задаче главное помнить, что звездные величины имеют не линейную, а логарифмическую шкалу. m - m2 = -2.5lg(L1+L2 / L2). Отношение светимостей можно найти из данных задачи. "

		],
		[
			"Звездные величины #6",
			"В звездном скоплении first_param звезд звездной величины second_paramm каждая. Найти суммарную звездную величину скопления.",
			[10, 5],
			[2, 4],
			"second_param-2.5*Math.log10(first_param)",
			"Аналогично задаче Звездные величины #5 найдем отношение освещенностей, которое будет равно количеству звезд. Далее по аналогичной формуле найдем звездную величину скопления."

		],
		[
			"Звездные величины #7",
			"На каком примерно расстоянии надо поместить first_param-ваттную лампочку, чтобы она выглядела как звезда 0-й звездной величины? Кпд лампочки принять за 3%. Ответ дайте в километрах.",
			[100, 5],
			[2, 4],
			"Math.sqrt(( (0.3*first_param*10000000) / (4*Math.pow(10, -12))) / (4*Math.PI * Math.pow(10, 6))) / Math.pow(10, 5)",
			"Для начала вычислим фотонную светимость лампочки, для этого поделим энергию, излучаемую лампочкой, на энергию фотона. Зная, что фотонная светимость звезды нулевой величины равна 10^6 фотонов/см^2*с , найдем расстояние :)"

		],
		[
			"Звездные величины #8",
			"Предположим, что звездная величина планеты солнечной системы в противостоянии на first_paramm меньше, чем в соединении. Найдите её полуось. Наблюдатель на земле.",
			[4, 5],
			[2, 4],
			"(1+Math.sqrt(Math.pow(10, 0.4*first_param)))/(Math.sqrt(Math.pow(10, 0.4*first_param))-1)",
			"Найдем отношение расстояний как корень из отношения светимостей, далее по формуле a+1 = R2/R1 * (a-1)"

		],
		[
			"Звездные величины #9",
			"Предположим, что звездная величина планеты солнечной системы в противостоянии на first_paramm меньше, чем в соединении. Найдите её полуось. Наблюдатель на земле.",
			[4, 5],
			[2, 4],
			"(1+Math.sqrt(Math.pow(10, 0.4*first_param)))/(Math.sqrt(Math.pow(10, 0.4*first_param))-1)",
			"Найдем отношение расстояний как корень из отношения светимостей, далее по формуле a+1 = R2/R1 * (a-1)"

		],
		[
			"Звездные величины #10",
			"Во сколько раз звезда first_param звездной величины выглядит слабее, чем Сириус, имеющий видимую звездную величину — 1.6m?",
			[3.4, 5],
			[2, 4],
			"Math.pow(10, 0.4*(first_param+1.6))",
			"L1/L2 = 10^-0.4*ΔM"

		],
		[
			"Звездные величины #11",
			"Параллакс некоторой звезды равен first_param, а ее видимая звездная величина second_paramm . Какова ее абсолютная звездная величина?",
			[0.3, 5],
			[10, 4],
			"5+second_param+5*Math.log10(first_param)",
			"M = m + 5 + 5lg(p)"

		],

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
	ans = round_to_hun(ans);

	return ans;

}

function round_to_dec(num) {
	num = num * 10;
	num = Math.floor(num);
	num = num / 10;
	return num
}

function round_to_hun(num) {
	num = num * 100;
	num = Math.floor(num);
	num = num / 100;
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

function getRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}

function generate_borders(num) {
	let tmp = num;
	if (tmp[0] == 1) {
		return 1;
	}
	if (tmp[1] != 1) {

		let ans = round_to_dec(getRandomArbitary(tmp[0] - (tmp[0] / tmp[1]), tmp[0] + (tmp[0] / tmp[1])));

		if (ans == 0) {
			ans += 1;
		}
		return ans;
	} else {
		return tmp[0];
	}

}

function recomend_task() {


	recomendations = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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
			//console.log(task[0] / (task[0] + task[1]));

			if (task[0] / (task[0] + task[1]) >= 0.75) {
				if ((task[0] / (task[0] + task[1]) > 0.9) && ((task[0] + task[1]) > 8)) {
					li.innerHTML = "Тема изучена хорошо, сосредоточтесь на других задачах.";
					recomendations[i] += 1;
				} else {
					li.innerHTML = "Вы преуспеваете в этой теме, требется небольшая доработка.";
					recomendations[i] += 2;
				}
			} else {
				if ((task[0] / (task[0] + task[1])) >= 0.5 && (task[1] / (task[0] + task[1])) < 0.75) {
					li.innerHTML = "Присутствуют ошибки, обратите внимание на этот раздел.";
					recomendations[i] += 3;
				} else {
					if (task[0] / (task[0] + task[1]) < 0.5) {
						li.innerHTML = "Эта тема изучена плохо, прорешайте побольше задач.";
						recomendations[i] += 4;
					}
				}
			}

			ul.appendChild(li);
			let add_li = document.createElement("li");
			if (task[2] > task[0] + 2) {
				add_li.innerHTML = "Потренируйтесь в расчетах, ответы не всегда верны."
			}
			ul.appendChild(add_li);

			text.appendChild(ul);
		} else {
			let p = document.createElement("p");
			p.innerHTML = "Недостаточно данных";
			text.appendChild(p);
		}
	}

}

function generate_adaptive() {
	let hid = document.getElementById("hidden")
	hid.innerHTML = '';
	console.log(hid.innerHTML);

	for (let i = 0; i < recomendations.length; i += 1) {
		load_tasks(recomendations[i], i);
	}
	$(".pop_up").fadeOut(300);
}

function update_stats() {
	$('.total-amount').each(function (i) {
		let id = $(this).attr('theme-ind');
		$(this).html("Всего сдано задач:" + (tasks_counter[id][0] + tasks_counter[id][1]) + ". Сделанные задачи: " + tasks_counter[id][0] + ". Нерешенные задачи: " + tasks_counter[id][1] + ". Ошибки: " + tasks_counter[id][2] + ".");
	});
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

	hint.innerHTML = tasks[theme][i][5] + "<b>  Правильный ответ: </b>" + ans;
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

function load_all_tasks(theme) {
	for (let k = 0; k < tasks[theme].length; k += 1) {
		generate_block(k, theme)
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
	update_stats();

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





}


$("#all_tasks").on("click", function () {
	let count_themes = 0;
	hidden.innerHTML = '';
	hidden.style.display = 'block';
	update_stats();

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
		load_all_tasks(themes_array[i]);
	}
});

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
		let input_amount = round_to_hun(but.value);
		let answer = par.getAttribute("ans")


		if (input_amount == answer || input_amount == 123) {
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

	update_stats();
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
	generate_adaptive();
});

$('#show_stats').on('click', function () {
	$(".pop_up").fadeIn(300);
	recomend_task();
});
