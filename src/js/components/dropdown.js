export const dropDownSelect = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const input = document.getElementById('workTypes');
        const dropdown = document.getElementById('dropdown');
        const selectedList = document.getElementById('selected-list');
        const clearBtn = document.getElementById('clear-all');
        let selectedItems = [];

        input.addEventListener('focus', () => {
            dropdown.style.display = 'block';
        });

        input.addEventListener('input', () => {
            if (input.value.trim().length > 1) {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        });

        input.addEventListener('blur', () => {
            setTimeout(() => dropdown.style.display = 'none', 200);
        });

        dropdown.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                addItem(e.target.dataset.value);
                dropdown.style.display = 'none';
                input.value = '';
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                addItem(input.value.trim());
                input.value = '';
                dropdown.style.display = 'none';
                e.preventDefault();
            }
        });

        clearBtn.addEventListener('click', () => {
            selectedItems = [];
            selectedList.innerHTML = '';
        });

        function addItem(value) {
            if (!selectedItems.includes(value)) {
                selectedItems.push(value);
                const span = document.createElement('span');
                span.classList.add('selected-item');
                span.textContent = value;

                const removeBtn = document.createElement('span');
                removeBtn.classList.add('remove-item');
                removeBtn.textContent = '×';
                removeBtn.addEventListener('click', () => {
                    selectedItems = selectedItems.filter(item => item !== value);
                    span.remove();
                });

                span.appendChild(removeBtn);
                selectedList.appendChild(span);
            }
        }
    });
};