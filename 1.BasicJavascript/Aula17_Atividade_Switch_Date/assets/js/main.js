var Clock = (function () {

    const relogio = document.querySelector("#clock");  
    const todayWeek = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    const monthName = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    function formatTime(date) {
        // ... (lógica para formatar a hora)
        const dateHours = date.getHours();
        const dateMinutes = date.getMinutes();
        const dateSeconds = date.getSeconds();
        const dateTime = `${putZeroLeft(dateHours)}:${putZeroLeft(dateMinutes)}:${putZeroLeft(dateSeconds)}`
        return dateTime;

    }

    function formatDay(date) {
        // ... (lógica para formatar o dia da semana)
        const nameDay = todayWeek[date.getDay()];
        return nameDay;
    }


    function formatDate(date) {
        const dia = date.getDate();
        const mes = monthName[date.getMonth()];
        const ano = date.getFullYear();      
        const formatedDate = `${dia} de ${mes} de ${ano}`; 
        return formatedDate;
      }

    function putZeroLeft (num) {
        return num >= 10 ? num: '0' + num; 
    }

    function updateClock() {
        const today = new Date();
        // ... (lógica para atualizar o relógio)
        const hourFormated = formatTime (today);
        const dayFormated = formatDay (today);
        const dateFormated = formatDate (today);

        var dateFormatednow = `${dayFormated}, ${dateFormated}, ${hourFormated}`;

        return dateFormatednow;
    }

    function startClock() {
        setInterval(() => {
            const formattedDateTime = updateClock();
            relogio.innerHTML = formattedDateTime; // Ou atualize um elemento na página
          }, 1000);        

    }

    return {
        startClock: startClock
    };

})();

Clock.startClock();