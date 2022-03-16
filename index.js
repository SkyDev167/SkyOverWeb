
// functions
function jsCours(type) {
    console.log('JS cours ' + type)
}
jsCours('test');
// variables
var var2 = '0 entity detected';
console.log(var2);
// Events
const btn = document.querySelector('#btn');
const img = document.getElementById('img');
btn.addEventListener('click', () => {
    img.classList.toggle('show');
})

// *********************************

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');

mouseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + '%';
  }
)

// *********************************
const theme = document.querySelectorAll('.theme');
const dark = document.querySelector('.dark');
const sky = document.querySelector('.sky');
const yellow = document.querySelector('.theme');

theme.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target.id)
    document.body.classList.remove("darkTheme", "yellowTheme", "skyTheme")
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
        case "yellow":
        document.body.classList.add("yellowTheme");
        break;
        case "sky":
          document.body.classList.add("skyTheme")
          alert('SkyTheme Actived');
          break;
          default:
            null;
    }
  })
})


