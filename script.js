

function getMain() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.append(container);
  const p = document.createElement('p');
  p.className = 'title';
  p.innerHTML = 'RSS Виртуальная клавиатура';
  container.append(p);
  const text = document.createElement('textarea');
  text.className = 'textarea';
  container.append(text);
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  container.append(keyboard);
  const row1 = document.createElement('div');
  row1.className = 'row1';
  keyboard.append(row1);
  const row2 = document.createElement('div');
  row2.className = 'row2';
  keyboard.append(row2);
  const row3 = document.createElement('div');
  row3.className = 'row3';
  keyboard.append(row3);
  const row4 = document.createElement('div');
  row4.className = 'row4';
  keyboard.append(row4);
  const row5 = document.createElement('div');
  row5.className = 'row5';
  keyboard.append(row5);
  const description = document.createElement('p');
  description.className = 'button-container';
  description.innerHTML = 'Клавиатура создана для ОС Windows';
  container.append(description);
  const language = document.createElement('p');
  language.className = 'language';
  language.innerHTML = 'Для переключения языка используйте комбинацию: Ctrl + Alt';
  container.append(language);
}

getMain();

