import Swiper from "swiper/bundle";

// import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded",  () => {
	let solutionSlider = new Swiper (".section-solution__slider",{
		speed: 200,
  		spaceBetween: 10,
		observer: true,
		observeParents: true,
		fadeSpeed: 300,
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: ".solution-btn--next ",
			prevEl: ".solution-btn--prev "
		},
		pagination: {
			el: ".section-solution__pagination",
			clickable: true,
			renderBullet: function (index, className) {
							return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
		on: {
		init: function () {
			let tabsBtn = document.querySelectorAll(".slide-inner__tab");
			if (tabsBtn !== null) {
				tabsBtn.forEach((btn) => {
					btn.addEventListener("click", () => {
						// solutionSlider.destroy();
						solutionSlider.update();
						console.log("Я УНИЧТОЖИЛСЯ")
					});
					});
			}
			
		},
		
		},
		breakpoints: {
			460: {
				allowTouchMove:true,
			},

			800: {
				allowTouchMove:false,
			}
		},
        // swiper.allowTouchMove
	});

	window.solutionSlider = solutionSlider;

	solutionSlider.on('slideChange', function () {
		// console.log('asdasd');
		let res = solutionSlider.update();
		// console.log(res);
	  });
	  



	// let drawSlider = function(selector) {
	// 	console.log('is func drawSlider');
	// 	let solutionSlider = new Swiper (selector,{
	// 		speed: 400,
	// 			spaceBetween: 100,
	// 		observer: true,
	// 		observeParents: true,
	// 		navigation: {
	// 			nextEl: ".arrow-btn--next",
	// 			prevEl: ".arrow-btn--prev"
	// 		}
	// 	});
	
	// 	window.solutionSlider = solutionSlider;		
		
	// 	return solutionSlider;
	// }


	// let slider = drawSlider(".section-solution__slider");

	// slider.on('slideChange', function () {
	// 	console.log('asdasd');
	// 	slider.destroy();
	// 	drawSlider(".section-solution__slider")
	// 	});
	
	


})

// document.addEventListener("DOMContentLoaded",  () => {
// 	let solutionSlider = new Swiper (".section-solution__slider",) 
// })


// document.addEventListener(
// 	"DOMContentLoaded",
// 	function () {
// 		let historySlider = new Swiper(".section-history__slider", {
// 			fadeEffect: { crossFade: true },
// 			speed: 1000,
// 			virtualTranslate: true,
// 			slidersPerView: 1,
// 			effect: "fade",
// 			navigation: {
// 				nextEl: ".section-history__slider .arrow-btn--next",
// 				prevEl: ".section-history__slider .arrow-btn--prev",
// 			},

// document.addEventListener(
// 	"DOMContentLoaded",
// 	function () {
// 		let historySlider = new Swiper(".section-history__slider", {
// 			fadeEffect: { crossFade: true },
// 			speed: 1000,
// 			virtualTranslate: true,
// 			slidersPerView: 1,
// 			effect: "fade",
// 			navigation: {
// 				nextEl: ".section-history__slider .arrow-btn--next",
// 				prevEl: ".section-history__slider .arrow-btn--prev",
// 			},

// 			pagination: {
// 				el: ".section-history__pagination",
// 				clickable: true,
// 				renderBullet: function (index, className) {
// 					return '<span class="' + className + '">' + (index + 1) + "</span>";
// 				},
// 			},

// 			on: {
// 				init: function () {
// 					let slider = document.querySelector(".section-history__slider");
// 					if (slider != null) {
// 						let sliderCurrent = slider.querySelectorAll(".section-history__case span");
// 						sliderCurrent.forEach((el) => {
// 							el.textContent = this.activeIndex + 1;
// 						});
// 					}
// 				},

// 				slideChange: function () {
// 					let slider = document.querySelector(".section-history__slider");
// 					if (slider != null) {
// 						let sliderCurrent = slider.querySelectorAll(".section-history__case span");
// 						sliderCurrent.forEach((el) => {
// 							el.textContent = this.activeIndex + 1;
// 						});
// 					}
// 				},
// 			},
// 		});
// 	},
// 	false
// );







// window.addEventListener("DOMContentLoaded", () => {
// 	let slideParent = document.querySelectorAll(".section-solution__slide");
// 	let tabsParent = document.querySelectorAll(".slide-inner__tabs")

// 	// let searchClick = event.target.slideParent.closest("div")
// 	// console.log(searchClick)

// 	slideParent.onclick = function(event) {
// 		let tabs = event.target.closest("div");
//         console.log(tabs)
// 	}
	
// })





document.addEventListener("DOMContentLoaded",  () => {

	let tabSlider = document.querySelector('.section-solution__slider');

	let allTabBtns = document.querySelectorAll('.slide-inner__tab');
	let allTabBody = document.querySelectorAll('.slide-tab__wrapper');
    let allTabsButtonWrapper = document.querySelectorAll('.slide-inner__tabs');
	// let btnArrow = document.querySelector(".arow__inner");
    
	// btnArrow.addEventListener('click', () => {
		
	// 	allTabsButtonWrapper.classList.toggle('--active');
	// 	btnArrow.classsList.toggle('--active');

	// })

	if( tabSlider !== null ){

		tabSlider.addEventListener('mousedown', (event) => {
			let thisTabBtn = event.target.closest('.slide-inner__tab');
			let thisSlider = event.target.closest('.section-solution__slide');
			let thisTabNumder = thisTabBtn.getAttribute('data-tab');
			let thisAllTabBtns = thisSlider.querySelectorAll('.slide-inner__tab');
			let thisAllTabBody = thisSlider.querySelectorAll('.slide-tab__wrapper');
			console.log('thisBtn', thisTabBtn);
			console.log('thisSlider', thisSlider);
			// console.log('thisTabNumder', thisTabNumder);
			// console.log('thisAllTabBtns', thisAllTabBtns);

			thisAllTabBtns.forEach( (item) => {
				// console.log('item', item);
				item.classList.remove('--active');
			});
			
			thisTabBtn.classList.add('--active');
			
			thisAllTabBody.forEach( (item) => {
				// console.log('item', item);
				item.classList.remove('--active');
			});

			thisSlider.querySelector(`.slide-tab__wrapper[data-tab="${thisTabNumder}"]`)
				.classList.add('--active');

			


		});
		
	}

})




// document.addEventListener("DOMContentLoaded", () => {
// 	let tabSlider = document.querySelector('.section-solution__slider');

// 	let allTabBtns = document.querySelectorAll('.slide-inner__tab');
// 	let allTabBody = document.querySelectorAll('.slide-tab__wrapper');
//     let allTabsButtonWrapper = document.querySelectorAll('.slide-inner__tabs');
// 	let btnArrows = document.querySelectorAll(".arrow__inner");
    
//     btnArrows.forEach( (item) => {
// 		item.addEventListener('click', (event) => {
// 			console.log("кнопка клик")
// 			let thisArrow = event.target.closest('arrow__inner');
// 			if ( thisArrow !== null) {
				

// 				btnArrows.forEach( (item) => {
// 					// console.log('item', item);
// 					item.classList.remove('--visible');
// 				});

// 				thisArrow.classList.add('--visible');
// 			}
// 			 let thisWrapper = event.target.closest("allTabBody");
// 				if ( thisWrapper !== null) {
					

// 					allTabBody.forEach( (item) => {
// 						// console.log('item', item);
// 						item.classList.remove('--visible');
// 					});

// 					thisWrapper.classList.add('--visible') 
// 				} 
			 

// 			// btnArrows.classsList.add('--visible');


	
// 		})
// 	})


	
// })




// document.addEventListener("DOMContentLoaded", () => {
// 	const tabsNavs   = document.querySelectorAll(".slide-inner__tab");
// 	const tabsItems = document.querySelectorAll(".slide-tab__wrapper");
	
	
// 	tabsNavs.forEach(function (item) {
// 		item.addEventListener("click", function (event) {
// 			let currentBtn = event.target;
// 			console.log(currentBtn)
// 			let tabId = currentBtn.getAttribute("data-tab");
// 			console.log(tabId)
// 			let currentTab = document.querySelector(tabId);
// 			console.log(currentTab)
	
// 			if ( ! currentBtn.classList.contains("--active")) {
			  
// 				tabsNavs.forEach(function (item) {
// 					item.classList.remove("--active");
// 				})
		
// 				tabsItems.forEach(function(item) {
// 					item.classList.remove("--active");
// 				})
				
// 				currentBtn.classList.add ("--active");
// 				currentTab.classList.add ("--active");
// 			}
	
			
// 		})
// 	})
// })

// window.addEventListener('DOMContentLoaded', () => {
//     /* Получаем элементы: 
//        1. Все табы/ссылки
//        2. Все блоки со сменяемым контентом 
//        3. Родительский DIV для всех табов */
//    const tabs = document.querySelectorAll('.slide-inner__tab'),
//          tabsContent = document.querySelectorAll('.slide-tab__wrapper'),
//          tabsParrent = document.querySelector('.slide-inner__tabs');
    
//    // Функция - Скрывает все Табы
//    function hideTabContent(){
//       tabsContent.forEach(item => {
//          item.style.display = 'none';
//       });

//       // Удаляется Активный класс у Табов
//       tabs.forEach(item => {
//          item.classList.remove('--active');
//       });
//    }

//    // Функция отображает содержимое i-го Таба и...
//    // ... добавляет Активный класс к i-му Табу
//    function showTabContent(i = 0){
//       tabsContent[i].style.display = 'block';
//       tabs[i].classList.add('--active');
//    }

//    // Скрываем все Табы и отображаем содержимое 0-го Таба - см. выше i = 0
//    hideTabContent();
//    showTabContent();

//    // Для родителя Табов, для события клика - назначается обработчик. см. Делегирование событий
//    tabsParrent.addEventListener('click', (event) => {
//       const target = event.target; // Для удобства помещаем в переменную target -> event.target

//       // Самый сложный момент - см. комментарии ниже
//       if(target && target.classList.contains('slide-inner__tab')){
//          tabs.forEach((item, i) => {
//             if(target == item){
//                hideTabContent();
//                showTabContent(i);
//             }
//          });
//       }
//    });

// });

// window.addEventListener("DOMContentLoaded", () => {
// 	let selectedTab;

// 	function setActiveTab() {
// 		let tabParent = document.querySelector(".slide-inner__tabs");
// 		let tabBtn = document.querySelectorAll(".slide-inner__tab");
// 		let tabWrapper = document.querySelectorAll(".slide-tab__wrapper");
        
// 		tabParent.addEventListener("click", () => {

// 		})

// 	}
// })
