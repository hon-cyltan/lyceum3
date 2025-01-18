// Пример расписания для классов
const classScheduleData = {
    "5А": ["Математика", "Русский язык", "История", "Физкультура", "ИЗО", "Музыка"],
    "5Б": ["Литература", "Русский язык", "Математика", "Музыка", "ИЗО", "Технология"],
    "5В": ["Математика", "Природоведение", "Литература", "Музыка", "ИЗО", "Физкультура"],
        "6А": ["Математика", "Русский язык", "История", "Физика", "Химия", "Литература"],
    "6Б": ["Литература", "История", "Математика", "Русский язык", "Физика", "Химия"],
    "6В": ["Химия", "Физика", "Литература", "Русский язык", "Математика", "История"],
    "7А": ["Математика", "Русский язык", "История", "Физика", "Химия", "Литература"],
    "7Б": ["Литература", "История", "Математика", "Русский язык", "Физика", "Химия"],
    "7В": ["Химия", "Физика", "Литература", "Русский язык", "Математика", "История"],
    "8А": ["Математика", "Русский язык", "История", "Физика", "Химия", "Литература"],
    "8Б": ["Литература", "История", "Математика", "Русский язык", "Физика", "Химия"],
    "8В": ["Химия", "Физика", "Литература", "Русский язык", "Математика", "История"],
    "9А": ["Математика", "Русский язык", "История", "Физика", "Химия", "Литература"],
        "9Б": ["Литература", "История", "Математика", "Русский язык", "Физика", "Химия"],
    "9В": ["Химия", "Физика", "Литература", "Русский язык", "Математика", "История"],
    "10А": ["Математика", "Русский язык", "История", "Физика", "Химия", "Литература"],
    "10Б": ["Литература", "История", "Математика", "Русский язык", "Физика", "Химия"],
    "10В": ["Химия", "Физика", "Литература", "Русский язык", "Математика", "История"],
    "11А": ["Математика", "Русский язык", "История", "Физика", "Химия", "Литература"],
        "11Б": ["Литература", "История", "Математика", "Русский язык", "Физика", "Химия"],
        "11В": ["Химия", "Физика", "Литература", "Русский язык", "Математика", "История"]
};


// Пример расписания для учителей
const teacherScheduleData = {
    "Иванов И.И.": ["Алгебра", "Геометрия", "Информатика", "Физика", "Астрономия","Математический анализ"],
    "Петрова А.С.": ["Русский язык", "Литература", "МХК", "Риторика", "Словесность", "Культурология"],
    "Сидорова Е.М.": ["Биология", "Химия", "Анатомия", "Зоология","Физиология", "Экология"],
    "Кузнецова О.В.": ["История", "Обществознание", "География", "Политология", "Право", "Экономика"],
    "Смирнов Д.А.": ["Физическая культура", "ОБЖ", "Легкая атлетика", "Плавание","Спортивные игры", "Шахматы"]
};

const urlParams = new URLSearchParams(window.location.search);
let className, teacherName;

// Обработка расписания для классов
if(window.location.pathname.includes("class_schedule.html")){
     className = urlParams.get('class');
    const classNameElement = document.getElementById('class-name');
    const lessonsList = document.getElementById('lessons-list');
    
    if (className && classScheduleData[className]) {
        classNameElement.innerText = `Расписание для ${className}`;
        classScheduleData[className].forEach(lesson => {
            const li = document.createElement('li');
            li.textContent = lesson;
            lessonsList.appendChild(li);
        });
    } else {
        classNameElement.innerText = "Выберите класс";
        lessonsList.innerHTML = "<li>Нет данных для выбранного класса</li>";
    }
}

// Обработка расписания для учителей
if (window.location.pathname.includes("teacher_schedule.html")) {
    teacherName = urlParams.get('teacher');
    const teacherNameElement = document.getElementById('teacher-name');
    const lessonsList = document.getElementById('lessons-list');

    if (teacherName && teacherScheduleData[teacherName]) {
        teacherNameElement.innerText = `Расписание учителя: ${teacherName}`;
        teacherScheduleData[teacherName].forEach(lesson => {
            const li = document.createElement('li');
            li.textContent = lesson;
            lessonsList.appendChild(li);
        });
    } else {
        teacherNameElement.innerText = "Выберите учителя";
        lessonsList.innerHTML = "<li>Нет данных для выбранного учителя</li>";
    }
}