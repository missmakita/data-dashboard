console.log(data);
var studentsList = document.getElementById('students-list');

//Generar puntajes aleatorios:
function getRandomScore(min, max) {
	return Math.random() * (max - min) + min;
}

//Generar nivel de inglés aleatorio:
function getRandomEngLevel() {
	var engLevels = ["Basic", "Interm", "Advance"];
	var random = Math.round((Math.random()* (2-0+0)));
	return engLevels[random];
}

//FUNCIÓN CARGAR DATA EN STUDENTS:

	
	//Creando elementos HTML:
	//var studentItem = document.createElement('li');
//	var studentTable = document.createElement('table');
//	var studentRow = document.createElement('tr');
//	var studentData = document.createElement('td');
//	var studentImg = document.createElement('img');
//	var studentData1 = document.createElement('td');
	//var studentName = document.createElement('h1');
	//var studentSpecialty = document.createElement('span');
//	var studentDiv = document.createElement('div');
//	var studentData2 = document.createElement('td');
//	var studentSkillsDiv = document.createElement('div');
//	var studentSkillDiv1	= document.createElement('div');
//	var studentTechGrade = document.createElement('span');
//	var studentSkillTech = document.createElement('span');
//	var studentSkillDiv2	= document.createElement('div');
//	var studentLifeGrade = document.createElement('span');	
//	var studentSkillLife = document.createElement('span');
//	var studentSkillDiv3	= document.createElement('div');
//	var studentEngGrade = document.createElement('span');
//	var studentSkillEng = document.createElement('span');
	
	//Creando nodos para los nuevos elementos:
	//studentsList.appendChild(studentItem);
//	studentItem.appendChild(studentTable);
//	studentTable.appendChild(studentRow);
//	studentRow.appendChild(studentData);
//	studentData.appendChild(studentImg);
//	studentRow.appendChild(studentData1);
//	studentData1.appendChild(studentName);
//	studentData1.appendChild(studentSpecialty);
//	studentData1.appendChild(studentDiv);
//	studentRow.appendChild(studentData2);
//	studentData2.appendChild(studentSkillsDiv);
//	studentSkillsDiv.appendChild(studentSkillDiv1);
//	studentSkillDiv1.appendChild(studentTechGrade);
//	studentSkillDiv1.appendChild(studentSkillTech);
//	studentSkillsDiv.appendChild(studentSkillDiv2);
//	studentSkillDiv2.appendChild(studentLifeGrade);
//	studentSkillDiv2.appendChild(studentSkillLife);
//	studentSkillsDiv.appendChild(studentSkillDiv3);
//	studentSkillDiv3.appendChild(studentEngGrade);
//	studentSkillDiv3.appendChild(studentSkillEng);

	//Creando clases para los nuevos elementos:
	//studentItem.classList.add('student-item');
//	studentTable.classList.add('student-table');
//	studentRow.classList.add('student-info');
//	studentData.classList.add('student-col');
//	studentImg.classList.add('student-img');
//	studentData1.classList.add('student-col');
//	studentName.classList.add('student-name');
//	studentSpecialty.classList.add('student-specialty');
//	studentDiv.classList.add('languages');
//	studentData2.classList.add('student-col');
//	studentSkillsDiv.classList.add('skills');
//	studentSkillDiv1.classList.add('skill');
//	studentTechGrade.classList.add('skill-grade', 'tech-grade');
//	studentSkillTech.classList.add('skill-name');
//	studentSkillDiv2.classList.add('skill');
//	studentLifeGrade.classList.add('skill-grade', 'life-grade');
//	studentSkillLife.classList.add('skill-name');
//	studentSkillDiv3.classList.add('skill');
//	studentEngGrade.classList.add('skill-grade', 'eng-grade');
//	studentSkillEng.classList.add('skill-name');


	for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
		if (Object.keys(data.SCL['2017-2'].students[i])!= '') {
			
			//Creando elementos HTML:
			var studentItem = document.createElement('li');
			var studentTable = document.createElement('table');
			var studentRow = document.createElement('tr');
			var studentData = document.createElement('td');
			var studentImg = document.createElement('img');
			var studentData1 = document.createElement('td');
			var studentName = document.createElement('h1');
			var studentSpecialty = document.createElement('span');
			var studentDiv = document.createElement('div');
			var studentData2 = document.createElement('td');
			var studentSkillsDiv = document.createElement('div');
			var studentSkillDiv1	= document.createElement('div');
			var studentTechGrade = document.createElement('span');
			var studentSkillTech = document.createElement('span');
			var studentSkillDiv2	= document.createElement('div');
			var studentLifeGrade = document.createElement('span');	
			var studentSkillLife = document.createElement('span');
			var studentSkillDiv3	= document.createElement('div');
			var studentEngGrade = document.createElement('span');
			var studentSkillEng = document.createElement('span');
			var verPerfil = document.createElement('span');
			
			//Creando nodos para los nuevos elementos:
			studentsList.appendChild(studentItem);
			studentItem.appendChild(studentTable);
			studentTable.appendChild(studentRow);
			studentRow.appendChild(studentData);
			studentData.appendChild(studentImg);
			studentRow.appendChild(studentData1);
			studentData1.appendChild(studentName);
			studentData1.appendChild(studentSpecialty);
			studentData1.appendChild(studentDiv);
			studentRow.appendChild(studentData2);
			studentData2.appendChild(studentSkillsDiv);
			studentSkillsDiv.appendChild(studentSkillDiv1);
			studentSkillDiv1.appendChild(studentTechGrade);
			studentSkillDiv1.appendChild(studentSkillTech);
			studentSkillsDiv.appendChild(studentSkillDiv2);
			studentSkillDiv2.appendChild(studentLifeGrade);
			studentSkillDiv2.appendChild(studentSkillLife);
			studentSkillsDiv.appendChild(studentSkillDiv3);
			studentSkillDiv3.appendChild(studentEngGrade);
			studentSkillDiv3.appendChild(studentSkillEng);
			studentData2.appendChild(verPerfil);
			
			//Creando clases para los nuevos elementos:
			studentItem.classList.add('student-item');
			studentTable.classList.add('student-table');
			studentRow.classList.add('student-info');
			studentData.classList.add('student-col');
			studentImg.classList.add('student-img');
			studentData1.classList.add('student-col');
			studentName.classList.add('student-name');
			studentSpecialty.classList.add('student-specialty');
			studentDiv.classList.add('languages');
			studentData2.classList.add('student-col');
			studentSkillsDiv.classList.add('skills');
			studentSkillDiv1.classList.add('skill');
			studentTechGrade.classList.add('skill-grade', 'tech-grade');
			studentSkillTech.classList.add('skill-name');
			studentSkillDiv2.classList.add('skill');
			studentLifeGrade.classList.add('skill-grade', 'life-grade');
			studentSkillLife.classList.add('skill-name');
			studentSkillDiv3.classList.add('skill');
			studentEngGrade.classList.add('skill-grade', 'eng-grade');
			studentSkillEng.classList.add('skill-name');
			verPerfil.classList.add('perfil');
			
			//Creando contenidos:
			studentImg.setAttribute('src', data.SCL['2017-2'].students[i].photo);
			studentImg.style.width = '160px';
			studentImg.style.height = '160px';
			studentName.textContent += data.SCL['2017-2'].students[i].name;
			studentSpecialty.textContent += 'Front End Developer';
			studentTechGrade.textContent += Math.round(getRandomScore(50, 100), -2) +'%';
			studentSkillTech.textContent = 'TECH SKILLS';
			studentLifeGrade.textContent += Math.round(getRandomScore(50, 100), -2) +'%';
			studentSkillLife.textContent = 'LIFE SKILLS';
			studentEngGrade.textContent += getRandomEngLevel();
			studentSkillEng.textContent = 'ENGLISH SKILLS';
			verPerfil.textContent = 'Ver perfil ►';
			
			//var result = 0;
//			if (Object.keys(data.SCL['2017-2'].students[i].sprints) != "") {
//				for (var x = 0; x < data.SCL['2017-2'].students[i].sprints.length; x++) {
//					result += data.SCL['2017-2'].students[i].sprints[x].score.tech;	
//					}
//			}	
		}
}

	
	//var studentSpecialty = document.getElementsByClassName('student-specialty');
//	var techGrade = document.getElementsByClassName('tech-grade');
//	var lifeGrade = document.getElementsByClassName('life-grade');
//	var engGrade = document.getElementsByClassName('eng-grade');
	
	
	


	////FUNCION FILTRADO ESTUDIANTES:
//	var jsFilter = document.getElementById('js-filter');
//	var uxFilter = document.getElementById('ux-filter');
//	var frontEndFilter = document.getElementById('frontend-filter');
	
	
	
	//for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
//		console.log(data.SCL['2017-2'].students[i].name);
//		container.innerHTML += '<p>La estudiante número ' + [i+1] + ' es: ' + data.SCL['2017-2'].students[i].name + '</p>'