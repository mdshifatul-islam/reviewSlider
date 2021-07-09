const allReview = [{
        img: 'img/shifat.jpg',
        name: 'MD. Shifatul Islam',
        position: 'CEO of WEB',
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam hic asperiores iste magni rerum. Doloribus expedita omnis maiores minima nulla? Commodi earum quos sequi iure esse, repellat maxime, iste corrupti, molestiae ipsum alias itaque excepturi? Rerum, illum quidem veritatis quisquam vero illo necessitatibus, quaerat a at adipisci debitis minima sapiente.'
    },
    {
        img: 'img/img1.jpg',
        name: 'Mahabubul Islam Sheikh',
        position: 'Head of kulfi malai',
        reviewText: 'Suspendisse eleifend tellus turpis, at accumsan risus lobortis vitae. Donec sed nibh ut eros tincidunt ultricies. Vivamus sagittis facilisis dui, vitae auctor mauris luctus at. Donec faucibus ex justo, non maximus ipsum lacinia a. Proin vulputate rutrum ipsum, sit amet dapibus massa egestas quis. Mauris sed turpis mattis nunc pharetra consequat .'
    },
    {
        img: 'img/img2.jpg',
        name: 'Shibli sadi asad',
        position: 'Head of aslam industry',
        reviewText: 'Quisque lacus purus, finibus in eros ac, feugiat fermentum elit. Sed metus augue, rutrum ut fermentum a, placerat nec leo. Sed ex lacus, volutpat eget laoreet non, molestie a augue. Duis in elementum erat. Cras tortor diam, dapibus vel nunc ut, pretium blandit est. Cras accumsan nunc blandit urna egestas lacinia. In tempor, ex in convallis pulvinar, lorem ante faucibus metus, et laoreet lacus mauris sed leo. Pellentesque habitant .'
    },
    {
        img: 'img/img3.jpg',
        name: 'Newaz sharif rakib',
        position: 'Head of khalamma group',
        reviewText: 'Aliquam vel tortor felis. Curabitur vel vestibulum est. Nunc accumsan, nibh sit amet volutpat lacinia, nisi odio laoreet quam, efficitur dapibus tortor velit non lorem. Ut et ipsum augue. Donec lorem mi, imperdiet fermentum sagittis eget, accumsan eu nunc. In eu cursus lectus. In molestie dui libero. Vivamus eget dui sem. Sed dapibus torto.'
    },
    {
        img: 'img/img4.jpg',
        name: 'Sanjan chowdhury fardin',
        position: 'Head of ami bncc r lok',
        reviewText: 'Pellentesque vitae rutrum nibh. Mauris accumsan justo dignissim ante rutrum luctus. Integer nulla diam, tristique in ex ut, volutpat ullamcorper ante. In congue est id dapibus dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas condimentum a arcu nec elementum. Maecenas diam eros, dignissim consequat viverra quis, mattis eu diam. Aliq'
    },
    {
        img: 'img/img5.jpg',
        name: 'Habiba akhter juthi',
        position: 'Head ofami barishailla',
        reviewText: 'Cras semper non turpis quis finibus. Quisque tincidunt, elit nec imperdiet placerat, erat elit malesuada metus, ac fermentum velit lorem vel neque. Donec quis libero eu lorem faucibus congue sed ut quam. Etiam magna massa, auctor a molestie eu, laoreet sit amet turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut erat a velit rhoncus tempor quis ac mi. Morbi non libero tincidunt, mollis nibh .'
    },
    {
        img: 'img/img6.jpg',
        name: 'Rifat Islam',
        position: 'Head of ganja industry',
        reviewText: 'Quisque lacus purus, finibus in eros ac, feugiat fermentum elit. Sed metus augue, rutrum ut fermentum a, placerat nec leo. Sed ex lacus, volutpat eget laoreet non, molestie a augue. Duis in elementum erat. Cras tortor diam, dapibus vel nunc ut, pretium blandit est. Cras accumsan nunc blandit urna egestas lacinia. In tempor, ex in convallis pulvinar, lorem ante faucibus metus, et laoreet lacus mauris sed leo. Pellentesque habitant .'
    }
]
const imgTag = document.getElementById("review_img");
const reviewNumber = document.getElementById("review_num");
const reviewName = document.getElementById("review_name");
const reviewPosition = document.getElementById("review_position");
const reviewPara = document.getElementById("review_para");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const allBtn = [prevBtn, nextBtn];

let reviewIndex = 0;

allBtn.forEach((btn) => {

    btn.addEventListener('click', (e) => {
        const btnIdName = e.currentTarget.classList;
        if (btnIdName.contains("prevBtn")) {
            reviewIndex--;
            if (reviewIndex < 0) {
                reviewIndex = (allReview.length - 1)
            }
        } else {
            reviewIndex++;
            if (reviewIndex > (allReview.length - 1)) {
                reviewIndex = 0
            }
        }


        let item = allReview[reviewIndex]
        imgTag.src = item.img;
        reviewNumber.innerHTML = "#" + (reviewIndex + 1);
        reviewName.innerHTML = item.name;
        reviewPosition.innerHTML = item.position;
        reviewPara.innerHTML = item.reviewText;
    })
});


//Ostad er Code


// window.addEventListener("DOMContentLoaded", function(){
//     fliderFunction()
// });

// function fliderFunction(){
//     let item = allReview[reviewIndex]
//     imgTag.src = item.img;
//     reviewNumber.innerHTML = "#" + (reviewIndex + 1);
//     reviewName.innerHTML = item.name;
//     reviewPosition.innerHTML = item.position;
//     reviewPara.innerHTML = item.reviewText;
// }

// prevBtn.addEventListener('click', () => {
//     reviewIndex--;
//     if(reviewIndex < 0){
//         reviewIndex = allReview.length -1;
//     }
//     fliderFunction()
// })


// nextBtn.addEventListener('click', () => {
//     reviewIndex++;
//     if(reviewIndex > allReview.length -1){
//         reviewIndex = 0;
//     }
//     fliderFunction()
// })
