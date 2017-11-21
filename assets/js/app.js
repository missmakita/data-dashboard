console.log(data);


//Generar especialización aleatorio:
function getRandomSpecialty() {
	var specialties = ["Javascript", "UX Designer", "Front End Developer"];
	var random = Math.round((Math.random()* (2-0+0)));
	return specialties[random];
}

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

var studentsList = document.getElementById('students-list');

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
			var studentLang1 = document.createElement('span');
			var studentLang2 = document.createElement('span');
			var studentLang3 = document.createElement('span');
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
			var studentSkillDiv4	= document.createElement('div');
			var studentAsistScore = document.createElement('span');
			var studentAsistencia = document.createElement('span');
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
			studentDiv.appendChild(studentLang1);
			studentDiv.appendChild(studentLang2);
			studentDiv.appendChild(studentLang3);
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
			studentSkillsDiv.appendChild(studentSkillDiv4);
			studentSkillDiv4.appendChild(studentAsistScore);
			studentSkillDiv4.appendChild(studentAsistencia);
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
			studentSkillDiv4.classList.add('skill');
			studentAsistScore.classList.add('skill-grade', 'asist-score');
			studentAsistencia.classList.add('skill-name');
			verPerfil.classList.add('perfil');
			
			//Creando contenidos:
			studentImg.setAttribute('src', data.SCL['2017-2'].students[i].photo);
			studentImg.style.width = '160px';
			studentImg.style.height = '160px';
			studentName.textContent += data.SCL['2017-2'].students[i].name;
			studentSpecialty.textContent += getRandomSpecialty();
			studentLang1.textContent = 'JAVASCRIPT';
			studentLang2.textContent = 'APIs';
			studentLang3.textContent = 'JQUERY';
			studentTechGrade.textContent += Math.round(getRandomScore(50, 100), -2) +'%';
			studentSkillTech.textContent = 'TECH SKILLS';
			studentLifeGrade.textContent += Math.round(getRandomScore(50, 100), -2) +'%';
			studentSkillLife.textContent = 'LIFE SKILLS';
			studentEngGrade.textContent += getRandomEngLevel();
			studentSkillEng.textContent = 'ENGLISH SKILLS';
			studentAsistScore.textContent += '81%'; 
			studentAsistencia.textContent = 'ASISTENCIA';
			verPerfil.textContent = 'Ver perfil ►';

		}
}

//FUNCIÓN BÚSQUEDA DE ESTUDIANTES:








//FUNCION FILTRADO ESTUDIANTES:
//	var jsFilter = document.getElementById('js-filter');
//	var uxFilter = document.getElementById('ux-filter');
//	var frontEndFilter = document.getElementById('frontend-filter');
	
	