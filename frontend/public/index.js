window.addEventListener('DOMContentLoaded', getTodo()) // 시작시 이 함수 실행
function getTodo(){ // 처음 생성하는 함수
    const div = document.createElement('div');
    const p = document.createElement('p')
    const input = document.createElement('input')
}
function deleted(){
    // 삭제 버튼
}

function addTodo(){ // 추가하는 함수
    const input = document.querySelector('input');
    const btn = document.querySelector('button');
    const ul = document.querySelector('ul');

    const addItem = () => {
        const text = document.createElement('li');
        text.innerText = input.value;
        ul.appendChild(text);
        input.value = '';
        input.focus();
    }

    btn.addEventListener('click', addItem);
    input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){ // 눌린 키가 Enter일 때 텍스트 추가
            addItem();
    }
});
}

