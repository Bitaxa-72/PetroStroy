export const switchForm = () => {
    const infoForm = document.querySelector('[data-form="userInfo"]');
    const passForm = document.querySelector('[data-form="userPass"]');
    const infoSwitch = document.querySelector('[data-form="infoBox"]');
    const passSwitch = document.querySelector('[data-form="passBox"]');
    const infoTitle = document.querySelector('[data-form="infoTitle"]');
    const passTitle = document.querySelector('[data-form="passTitle"]');
    const infoAcc = document.querySelector('[data-form="infoAcc"]');
    const passAcc = document.querySelector('[data-form="passAcc"]');

    if (!infoForm || !passForm || !infoSwitch || !passSwitch || !infoTitle || !passTitle || !infoAcc || !passAcc) {
        return;
    }

    const intoPass = () => {
        passSwitch.addEventListener('click', (e) => {
            const target = e.target.closest('a');
            if (target) e.preventDefault();
            passForm.classList.toggle('lk__activeDisplay');
            passSwitch.classList.toggle('lk__nav-item--active');
            passTitle.classList.toggle('lk__datauser--active');
            passAcc.classList.toggle('lk__title--active');
            infoForm.classList.remove('lk__activeDisplay');
            infoSwitch.classList.remove('lk__nav-item--active');
            infoTitle.classList.remove('lk__datauser--active');
            infoAcc.classList.remove('lk__title--active');
        })
    }

    intoPass();

    const intoInfo = () => {
        infoSwitch.addEventListener('click', (e) => {
            const target = e.target.closest('a');
            if (target) e.preventDefault();
            infoForm.classList.toggle('lk__activeDisplay');
            infoSwitch.classList.toggle('lk__nav-item--active');
            infoTitle.classList.toggle('lk__datauser--active');
            infoAcc.classList.toggle('lk__title--active');
            passForm.classList.remove('lk__activeDisplay');
            passSwitch.classList.remove('lk__nav-item--active');
            passTitle.classList.remove('lk__datauser--active');
            passAcc.classList.remove('lk__title--active');
        })
    }

    intoInfo();

};

export const inputImage = () => {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.image-upload').forEach(input => {
            input.addEventListener('change', function () {
                const file = this.files[0];
                if (!file) return;
                if (!file.type.startsWith('image/')) {
                    alert('Можно загружать только картинки');
                    return;
                }
                const reader = new FileReader();
                reader.onload = e => {
                    const img = this.closest('.lk__imageUploadInput').querySelector('img');
                    if (img) {
                        img.src = e.target.result;
                        img.style.width = '40px';
                        img.style.height = '40px';
                    }
                };
                reader.readAsDataURL(file);
            });
        });
    });
}