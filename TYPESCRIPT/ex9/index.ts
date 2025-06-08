let title = document.getElementById('title');
if (title != null) {
  title.innerText = 'hello1';
}
if (title instanceof Element) {
  title.innerText = 'hello2';
}

if (title?.innerText) {
  title.innerText = 'hello3';
}

let link = document.getElementById('link');
if (link instanceof HTMLAnchorElement) {
  link.href = 'https://www.naver.com';
}

let button = document.getElementById('button');
if (button instanceof HTMLButtonElement) {
  button.addEventListener('click', function () {
    alert('click');
  });
}

const img = document.getElementById('image');
if (img instanceof HTMLImageElement) {
  img.src = 'test.jpg';
}

const navers = document.querySelectorAll('.naver');
for (const naver of navers) {
  if (naver instanceof HTMLAnchorElement) {
    naver.href = 'https://kakao.com';
  }
}