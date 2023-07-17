window.page = 1;

 window.searchImages = function() {

    console.log("hello WORLD");

    const searchForm = document.querySelector("#searchForm");
    const searchBox = document.querySelector("#searchBox");
    const searchResults = document.querySelector("#searchResults");
    const searchMoreBtn = document.querySelector("#searchMoreBtn");


    const accessKey = "hFNfbcGi8jgkvw2i4Ih8dPHXU0dTWU5IE4hoosJ_p0I";
    let keyWord = searchBox.value;
    // let page = 1;

    axios.get(`https://api.unsplash.com/search/photos?page=${window.page}&query=${keyWord}&client_id=${accessKey}&per_page=12`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            const results = response.data.results;

            results.map((result)=>{
                const images = document.createElement('img');
                images.src = result.urls.small;
                const imageLink = document.createElement('a');
                imageLink.href = result.links.html;                ;
                imageLink.target = "_blank";
                imageLink.appendChild(images);
                searchResults.appendChild(imageLink)

            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.page = 1;
    searchImages();
})