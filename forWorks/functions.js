function сhangeTemplate() {

    
    console.log("fsddfsfsfsdfsfsdf")
    let e_blockDetail = document.querySelector(".catalog-detail__main");

    if( ! e_blockDetail.classList.contains('--is_mobile')  ){
        let w_galleryBlock = document.querySelector(".gallery-mosaic");
    
        if (window.innerWidth <= 460) {
            w_galleryBlock.appendChild( e_blockDetail);
            e_blockDetail.classList.add('--is_mobile');
        } 
    } 

}


document.addEventListener('DOMContentLoaded',  (event) => {сhangeTemplate()});
window.onorientationchange= function(event) { сhangeTemplate()};
window.addEventListener('resize', function (event) { сhangeTemplate()});