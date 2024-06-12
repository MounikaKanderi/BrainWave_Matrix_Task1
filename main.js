window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        
        const task_finish_el = document.createElement('button');
        task_finish_el.classList.add('finish');
        task_finish_el.innerText = 'FINISH';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_finish_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = '';

        task_finish_el.addEventListener('click', (e) => {
            if (task_finish_el.innerText.toLowerCase() == "finish") {
                task_input_el.style.textDecoration = "line-through"; // Strike through text
                task_finish_el.innerText = "Finished";
                task_finish_el.style.textDecoration = "line-through"; // Strike through button text
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
});
