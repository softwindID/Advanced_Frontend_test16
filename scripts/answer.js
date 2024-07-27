(function () {
    const  Answers = {

        quiz: null,
        currentQuestionIndex: 0,
        answerQuestionTitleElement: null,
        testNameElement: null,
        answerQuestionOptionsElement: null,
        answerQuestionOptionElement: null,
        rightAnswers: [],
        testId: null,
        quizResults: [],
        labelElement: null,
        currentQuestionId: null,


        init() {
            const url = new URL(location.href);
            this.testId = url.searchParams.get('id');
            if (this.testId) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://testologia.ru/get-quiz?id=' + this.testId, false);
                xhr.send();
                if (xhr.status === 200 && xhr.responseText) {
                    try {
                        this.quiz = JSON.parse(xhr.responseText);
                    } catch (e) {
                        location.href = 'index.html';
                    }

                    this.getRightAnswers();
                    this.userResult();
                    this.showTest();
                } else {
                    location.href = 'index.html';
                }
            } else {
                location.href = 'index.html';

            }

        },


        getRightAnswers() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://testologia.ru/get-quiz-right?id=' + this.testId, false);
            xhr.send();
            if (this.testId) {
            (xhr.status === 200 && xhr.responseText)
                try {
                    this.rightAnswers = JSON.parse(xhr.responseText);
                } catch (e) {
                    console.error('Ошибка при получении правильных ответов:', e);
                }
            } else {
                console.error('Ошибка при запросе правильных ответов:', xhr.status);
            }
        },



        showTest() {
            console.log(this.quiz);
            this.testNameElement = document.getElementById('test-name');
            this.testNameElement.innerText = this.quiz.name;

            this.answerQuestionTitleElement = document.getElementById('answer-question-title');
            this.answerQuestionOptionsElement = document.getElementById('answer-options');

            this.answerQuestionOptionElement = document.getElementById('answer-question-option');

             this.quiz.questions.forEach((question, index )=> {
                 const currentQuestionId = question.id;
                 const currentQuestionIndex = index + 1;
                 const answerQuestionTitleElement = document.createElement('div');
                 answerQuestionTitleElement.className = 'answer-question-title';
                 answerQuestionTitleElement.innerHTML = '<span>Вопрос ' + currentQuestionIndex + ':</span> ' + question.question;

                 this.answerQuestionOptionsElement.appendChild(answerQuestionTitleElement);

             question.answers.forEach(answer => {
                 const answerQuestionOptionElement = document.createElement('div');
                 answerQuestionOptionElement.className = 'answer-question-option';
                 const inputId = 'answer-' + answer.id;
                 const inputElement = document.createElement('input');
                 inputElement.className = 'answer-option';
                 inputElement.setAttribute('id', inputId);
                 inputElement.setAttribute('type', 'radio');
                 inputElement.disabled = true;
                 inputElement.setAttribute('name', 'answer-' + question.id);
                 inputElement.setAttribute('value', answer.id);

                 const labelElement = document.createElement('label');
                 labelElement.setAttribute('for', inputId);
                 labelElement.innerHTML = answer.answer;


                 this.quizResults.find(result => result.questionId === question.id);

                 if(this.quizResults[index]) {
                 if (answer.id === this.quizResults[index].chosenAnswerId) {
                     labelElement.style.color = '#DC3333';
                     inputElement.style.border = '6px solid #DC3333';
                  if (this.rightAnswers[index] === this.quizResults[index].chosenAnswerId){
                      labelElement.style.color = '#5FDC33';
                      inputElement.style.border = '6px solid #5FDC33';
                  }
                 }
                 }


                 answerQuestionOptionElement.appendChild(inputElement);
                 answerQuestionOptionElement.appendChild(labelElement);

                 this.answerQuestionOptionsElement.appendChild(answerQuestionOptionElement);

             });


                 const url = new URL(location.href);
                 const  id = url.searchParams.get('id');
                 const  score = url.searchParams.get('score');
                 const  total = url.searchParams.get('total');


                 const goBack = document.getElementById('go-back-answer');

                 goBack.onclick = function () {

                     location.href = 'result.html?score=' + score + '&total=' + total + '&id=' + id;

                 }

             });


        },
        userResult() {
            const quizResults = JSON.parse(localStorage.getItem('quizResults'));
            this.quizResults = quizResults.userResult;



        },

    };


    Answers.init();
})();