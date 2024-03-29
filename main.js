
const userIcon = document.querySelector('.nav-user-icon')
const settingMenu = document.querySelector('.setting-menu')
const darkBtn = document.getElementById('dark-btn');

darkBtn.addEventListener('click', () => {
  darkBtn.classList.toggle('dark-btn-on')
  document.body.classList.toggle('dark-theme')
  if (localStorage.getItem('theme') == 'light') {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})
userIcon.addEventListener('click', () => {
  settingMenuToggle();
})

function settingMenuToggle() {
  settingMenu.classList.toggle('setting-menu-height');
}

if (localStorage.getItem('theme') == 'light') {
  darkBtn.classList.remove('dark-btn-on');
  document.body.classList.remove('dark-theme');
} else if (localStorage.getItem('theme') == 'dark') {
  darkBtn.classList.add('dark-btn-on');
  document.body.classList.add('dark-theme');

} else {
  localStorage.setItem('theme', 'light');
}


