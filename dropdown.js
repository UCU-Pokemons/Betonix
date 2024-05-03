const dropdowns = document.querySelectorAll('.calculate-price-content-box-element-dropdown')

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.dropdown-select-option');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.dropdown-options');
    const options = dropdown.querySelectorAll('.dropdown-options li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () =>{
        select.classList.toggle('dropdown-select-option-clicked')
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('dropdown-options-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('dropdown-select-option-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('dropdown-options-open');
            options.forEach(option1 => {
                option1.classList.remove('active-dropdown-option');
            });

            option.classList.add('active-dropdown-option');
        });
    });
});