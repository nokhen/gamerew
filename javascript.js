const getLike = document.querySelector('.like');
const getLikeNum = document.querySelector('.LikeNum');

// Like Button
let like = 0;

incrasesLike = () => {
    like ++
    getLikeNum.innerHTML = `${like}`
}

likeClick = () => {
    incraseLike()

}

getLike.addEventListener(('click'), likeClick)