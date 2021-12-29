// TODO : check why strict equality for "if (iterator.nextElementSibling.classList == 'liked')" does not work.
/* eslint-disable */
// Toggle like number if user clicks on like icon
// TODO : increment total of likes
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

// TODO : put the totalLike function inside factory ?
export const findTotalLikes = (media) => {
    let totalOfLikes = 0;

    media.forEach((element) => {
        totalOfLikes += element.likes;
        console.log(totalOfLikes);

        /*
    ? is there performance differences between forEach and for...of ?
    for (const iterator of media) {
        totalOfLikes = totalOfLikes + iterator.likes;
        console.log(totalOfLikes);
    } */
    });
};
