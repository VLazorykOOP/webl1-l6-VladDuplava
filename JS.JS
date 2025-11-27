
function logEvent(message) {
    const logger = document.getElementById('logger');
    const time = new Date().toLocaleTimeString();
    logger.innerHTML += `[${time}] ${message}<br>`;
    logger.scrollTop = logger.scrollHeight; 
    console.log(message);
}

// Функція для властивостей документа
function showDocProperties() {
    const output = document.getElementById('docPropsOutput');
    output.innerHTML = "<b>Основні властивості:</b><br>";
    
    const propsToShow = [
        `URL: ${document.URL}`,
        `Title: ${document.title}`,
        `Last Modified: ${document.lastModified}`,
        `Charset: ${document.characterSet}`,
        `Ready State: ${document.readyState}`,
        `User Agent: ${navigator.userAgent}`
    ];

    propsToShow.forEach(prop => {
        output.innerHTML += prop + "<br>";
    });
}

// --- ЗАВДАННЯ 1: ПОДІЇ ВІКНА (WINDOW) ---

window.addEventListener('load', () => logEvent('Сторінка повністю завантажена (onload)'));
window.addEventListener('beforeprint', () => logEvent('Підготовка до друку (onbeforeprint)'));
window.addEventListener('blur', () => logEvent('Вікно втратило фокус (onblur)'));
window.addEventListener('focus', () => logEvent('Вікно отримало фокус (onfocus)'));
window.addEventListener('offline', () => logEvent('Мережа: Офлайн (onoffline)'));
window.addEventListener('online', () => logEvent('Мережа: Онлайн (ononline)'));
window.addEventListener('resize', () => {
    logEvent(`Resize: ${window.innerWidth}x${window.innerHeight}`);
});


// --- ЗАВДАННЯ 2: ПОДІЇ ЕЛЕМЕНТІВ ---

// Чекаємо, поки DOM завантажиться, щоб знайти елементи
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Елемент H2
    const h2 = document.getElementById('headerElement');
    
    h2.addEventListener('click', function() {
        this.style.color = 'red';
        logEvent('H2: Клік (колір змінено)');
    });
    
    h2.addEventListener('dblclick', function() {
        this.style.backgroundColor = 'yellow';
        logEvent('H2: Подвійний клік (фон змінено)');
    });
    
    h2.addEventListener('mouseover', function() {
        this.style.border = '2px solid red';
        logEvent('H2: Мишка наведена');
    });
    
    h2.addEventListener('mouseout', function() {
        this.style.border = '1px dashed blue';
        logEvent('H2: Мишка прибрана');
    });

    // 2. Елемент B (Bold)
    const bElement = document.getElementById('boldElement');
    
    bElement.addEventListener('mousedown', function() {
        this.style.fontSize = '24px';
        logEvent('B: Кнопка миші натиснута');
    });
    
    bElement.addEventListener('mouseup', function() {
        this.style.fontSize = '16px';
        logEvent('B: Кнопка миші відпущена');
    });

    // 3. Елемент I (Italic)
    const iElement = document.getElementById('italicElement');
    
    iElement.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Забороняємо стандартне меню браузера
        alert('Ви клікнули правою кнопкою!');
        logEvent('I: Контекстне меню (правий клік)');
    });

    // 4. Кнопка для властивостей документа
    document.getElementById('btnProps').addEventListener('click', showDocProperties);
});
