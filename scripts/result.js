(function () {
    const  Result = {
        answers: [],
        init() {
            //checkUserData();
            checkUserResult();
            const resultScoreElement = document.getElementById('result-score');
            const url = new URL(location.href);
            const  id = url.searchParams.get('id');
            const  score = url.searchParams.get('score');
            const  total = url.searchParams.get('total');

            const scoreText = score + '/' + total;

            resultScoreElement.textContent = scoreText;

            const seeCorrectAnswers = document.getElementById('see-answer-questions');

            seeCorrectAnswers.onclick = function () {
                // const score = 0;
                // newUrl.searchParams.set('score', score);
               // const newUrl = new URL('answer.html');
               // newUrl.searchParams.set('id', id);
               // newUrl.searchParams.set('name', name);
               // newUrl.searchParams.set('lastName', lastName);
               // newUrl.searchParams.set('email', email);
                location.href = 'answer.html?score=' + score + '&total=' + total + '&id=' + id;

            }

            }
        };




    Result.init();
})();