/* main_04.js 15강 내용 */

const navToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header_menu');
    
// 햄버거 버튼 클릭 이벤트 //
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.toggle('open');
    })

    // 모바일 화면에서 네비게이션 메뉴 클릭 시 메뉴 숨김 //
    navMenu.addEventListener('click', ()=> {
        navMenu.classList.remove('open');
    })

/* main_05.js 16~17강 내용 */

// 프로젝트 클릭하면 해당 프로젝트만 표현하기 //
const categories = document.querySelector('.category');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event)=>{
    console.log(event);
    // 화면에 있는 버튼을 클릭한 뒤 콘솔화면을 확인 합니다

    const filter = event.target.dataset.category;
    console.log(filter);
    // 화면에 있는 버튼을 클릭한 뒤 콘솔화면 확인 합니다

    projects.forEach((project) => {
        console.log(project.dataset.type);
        //화면에 버튼을 클릭한 뒤 콘솔화면을 확인 합니다

    if (filter === 'all' || filter === project.dataset.type){
        project.style.display = 'block';
    }else{
        project.style.display = 'none';
    }
    if (filter == null){
        return;
    }
    
    })
})