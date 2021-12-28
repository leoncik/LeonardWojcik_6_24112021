// TODO : check why strict equality for "if (iterator.nextElementSibling.classList == 'liked')" does not work.
/* eslint-disable */
// Toggle like number if user clicks on like icon
export const likeToggler = () => {
    const likeIcon = document.querySelectorAll('.like-icon');
    for (const iterator of likeIcon) {
        iterator.addEventListener('click', () => {
            iterator.nextElementSibling.classList.toggle('liked');
            if (iterator.nextElementSibling.classList == 'liked') {
                iterator.nextElementSibling.textContent =
                    parseInt(iterator.nextElementSibling.textContent) + 1;
            } else {
                iterator.nextElementSibling.textContent =
                    parseInt(iterator.nextElementSibling.textContent) - 1;
            }
        });
    }
};
/* eslint-enable */
