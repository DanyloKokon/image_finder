
export const PixabayApi = (text, num) => {
    
    return fetch(`https://pixabay.com/api/?q=${text}&page=${num}&key=55126152-cf26a17208285598fdaaabe3f&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(
            new Error ('Error')
        )
    })
}