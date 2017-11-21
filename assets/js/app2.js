console.log(data);
var studentsList = document.getElementById('students-list');

// Nav Bar Menu:
var header = document.getElementById('header');

var navMenu = document.createElement('nav');
var logoHeader = document.createElement('div');
var imgLogo = document.createElement('img');
var menuBurger = document.createElement('span');
var iconBurger = document.createElement('i');

header.appendChild(navMenu);
navMenu.appendChild(logoHeader);
logoHeader.appendChild(imgLogo);
navMenu.appendChild(menuBurger);
menuBurger.appendChild(iconBurger);

navMenu.classList.add('menu');
logoHeader.classList.add('logo-header');
imgLogo.classList.add('logo');
imgLogo.setAttribute('src', 'assets/images/logo-laboratoria.svg');
menuBurger.classList.add('menu-burger');
iconBurger.classList.add('fa', 'fa-bars', 'fa-2x');
iconBurger.setAttribute('aria-hidden', 'true');

// Nav bar Sub-Menú:
var navSubMenu = document.createElement('nav');
var subMenu1 = document.createElement('div');
var sedeBtn = document.createElement('span');
var sedeBtnPullDown = document.createElement('span');
var iconoBtnPullDown = document.createElement('i');
var subMenu2 = document.createElement('div');
var subMenuBtn1 = document.createElement('span');
var subMenuBtn1Link = document.createElement('a');
var subMenuBtn2 = document.createElement('span');
var subMenuBtn2Link = document.createElement('a');
var subMenuBtn3 = document.createElement('span');
var subMenuBtn3Link = document.createElement('a');

header.appendChild(navSubMenu);
navSubMenu.appendChild(subMenu1);
subMenu1.appendChild(sedeBtn);
subMenu1.appendChild(sedeBtnPullDown);
sedeBtnPullDown.appendChild(iconoBtnPullDown);
navSubMenu.appendChild(subMenu2);
subMenu2.appendChild(subMenuBtn1);
subMenuBtn1.appendChild(subMenuBtn1Link);
subMenu2.appendChild(subMenuBtn2);
subMenuBtn2.appendChild(subMenuBtn2Link);
subMenu2.appendChild(subMenuBtn3);
subMenuBtn3.appendChild(subMenuBtn3Link);

navSubMenu.classList.add('submenu');
subMenu1.classList.add('submenu1');
sedeBtn.classList.add('sede-gen');
sedeBtnPullDown.classList.add('submenu1-pull');
iconoBtnPullDown.classList.add('fa', 'fa-caret-down', 'fa-2x');
subMenu2.classList.add('submenu2');
subMenuBtn1.classList.add('submenu2-btn');
subMenuBtn2.classList.add('submenu2-btn');
subMenuBtn3.classList.add('submenu2-btn');

sedeBtn.textContent = 'SANTIAGO DE CHILE 2017 - II';
iconoBtnPullDown.setAttribute = ('aria-hidden', 'true');
subMenuBtn1Link.setAttribute = ('href', 'index.html');
subMenuBtn1Link.textContent = 'OVERVIEW';
subMenuBtn2Link.setAttribute = ('href', 'students.html');
subMenuBtn2Link.textContent = 'STUDENTS';
subMenuBtn3Link.setAttribute = ('href', '#');
subMenuBtn3Link.textContent = 'TEACHERS';


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

var studentsList = document.getElementById('students-list');


			
			
//Creando contenidos:


// Filtrado Checkbox SPECIALIZATION:
var jsFilter = document.getElementById("JS");
var uxFilter = document.getElementById("UX");
var frontEndFilter = document.getElementById("front-end");

 
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
		
		// cREANDO CONTENIDOS:
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

// Filtrado Checkbox CITY:
var aqp = document.getElementById("AQP");
var lim = document.getElementById("LIM");
var cdMx = document.getElementById("CDMX");
var scl = document.getElementById("SCL");

//FUNCIÓN BÚSQUEDA DE ESTUDIANTES:

//FUNCION FILTRADO ESTUDIANTES:
//	var jsFilter = document.getElementById('js-filter');
//	var uxFilter = document.getElementById('ux-filter');
//	var frontEndFilter = document.getElementById('frontend-filter');
	
	