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


const keys1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keys2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'];
const keys3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const keys4 = ['ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'ShiftRight'];
const keys5 = ['ControlLeft', 'Win', 'AltLeft', ' ', 'AltRight', '←', '↓', '→', 'ControlRight'];
const keysRu1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keysRu2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'];
const keysRu3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const keysRu4 = ['ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'ShiftRight'];
const keysRu5 = ['ControlLeft', 'Win', 'AltLeft', ' ', 'AltRight', '←', '↓', '→', 'ControlRight'];
const keysShiftEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', "'", ',', '.', '/'];
const keysShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];
const keysShiftRu = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', ','];
const keysShiftRuDef = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '.'];
const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const keysEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];
const keysRus = ['ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
const keysRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];
const keysSpec = ['Ctrl', 'Win', 'Alt', ' ', 'Shift', 'CapsLock', 'Enter', 'Delete', 'Backspace', 'Tab'];
const arrows = ['←', '↓', '→', '↑'];
const leftKeys = ['AltRight', 'ControlRight', 'ShiftRight', 'ShiftLeft', 'ControlLeft', 'AltLeft'];
const keyCodEn = {
  192: '`', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9', 48: '0', 189: '-', 187: '=', 65: 'a', 66: 'b', 67: 'c', 68: 'd', 69: 'e', 70: 'f', 71: 'g', 72: 'h', 73: 'i', 74: 'j', 75: 'k', 76: 'l', 77: 'm', 78: 'n', 79: 'o', 80: 'p', 219: '[', 221: ']', 220: '\\', 81: 'q', 82: 'r', 83: 's', 84: 't', 85: 'u', 86: 'v', 87: 'w', 88: 'x', 89: 'y', 90: 'z', 186: ';', 222: "'", 188: ',', 190: '.', 191: '/', 37: '←', 40: '↓', 39: '→', 38: '↑',
};
const keyCodRu = {
  192: 'ё', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9', 48: '0', 189: '-', 187: '=', 65: 'ф', 66: 'и', 67: 'с', 68: 'в', 69: 'у', 70: 'а', 71: 'п', 72: 'р', 73: 'ш', 74: 'о', 75: 'л', 76: 'д', 77: 'ь', 78: 'т', 79: 'щ', 80: 'з', 219: 'х', 221: 'ъ', 220: '\\', 81: 'й', 82: 'к', 83: 'ы', 84: 'е', 85: 'г', 86: 'м', 87: 'ц', 88: 'ч', 89: 'н', 90: 'я', 186: 'ж', 222: 'э', 188: 'б', 190: 'ю', 191: '.', 37: '←', 40: '↓', 39: '→', 38: '↑',
};
const kCEnS = {
  192: '~', 49: '!', 50: '@', 51: '#', 52: '$', 53: '%', 54: '^', 55: '&', 56: '*', 57: '(', 48: ')', 189: '_', 187: '+', 65: 'a', 66: 'b', 67: 'c', 68: 'd', 69: 'e', 70: 'f', 71: 'g', 72: 'h', 73: 'i', 74: 'j', 75: 'k', 76: 'l', 77: 'm', 78: 'n', 79: 'o', 80: 'p', 219: '{', 221: '}', 220: '|', 81: 'q', 82: 'r', 83: 's', 84: 't', 85: 'u', 86: 'v', 87: 'w', 88: 'x', 89: 'y', 90: 'z', 186: ':', 222: '"', 188: '<', 190: '>', 191: '?', 37: '←', 40: '↓', 39: '→', 38: '↑',
};
const kCRuS = {
  192: 'ё', 49: '!', 50: '"', 51: '№', 52: ';', 53: '%', 54: ':', 55: '?', 56: '*', 57: '(', 48: ')', 189: '_', 187: '+', 65: 'ф', 66: 'и', 67: 'с', 68: 'в', 69: 'у', 70: 'а', 71: 'п', 72: 'р', 73: 'ш', 74: 'о', 75: 'л', 76: 'д', 77: 'ь', 78: 'т', 79: 'щ', 80: 'з', 219: 'х', 221: 'ъ', 220: '/', 81: 'й', 82: 'к', 83: 'ы', 84: 'е', 85: 'г', 86: 'м', 87: 'ц', 88: 'ч', 89: 'н', 90: 'я', 186: 'ж', 222: 'э', 188: 'б', 190: 'ю', 191: ',', 37: '←', 40: '↓', 39: '→', 38: '↑',
};


let shiftSwitch = false;
const DefLang = 'en';
let lang;
let langTogle = false;
let capsTogle = false;
const OKEn = Object.keys(keyCodEn);
const OKEnS = Object.keys(kCEnS);
const OKRu = Object.keys(keyCodRu);
const OKRuS = Object.keys(kCRuS);

if (localStorage.getItem('lang') === null) {
  lang = DefLang;
} else if (localStorage.getItem('lang') !== null) {
  lang = localStorage.getItem('lang');
}



function getKeys(Arr1, Arr2, Arr3, Arr4, Arr5) {
    function getKeysOne(keyArr1) {
      let key1 = '';
      for (let i = 0; i < keyArr1.length; i += 1) {
        if (keyArr1[i] === 'Backspace') {
          key1 += `<div class="button Backspace special">${keyArr1[i]}</div>`;
        } else {
          key1 += `<div class="button">${keyArr1[i]}</div>`;
        }
      }
      document.querySelector('.row1').innerHTML = key1;
    }
  
    getKeysOne(Arr1);
  
    function getKeysTwo(keyArr2) {
      let key2 = '';
      for (let i = 0; i < keyArr2.length; i += 1) {
        if (keyArr2[i] === 'Tab') {
          key2 += `<div class="button Tab special">${keyArr2[i]}</div>`;
        } else {
          key2 += `<div class="button">${keyArr2[i]}</div>`;
        }
      }
      document.querySelector('.row2').innerHTML = key2;
    }
  
    getKeysTwo(Arr2);
  
    function getKeysThree(keyArr3) {
      let key3 = '';
      for (let i = 0; i < keyArr3.length; i += 1) {
        if (keyArr3[i] === 'CapsLock') {
          key3 += `<div class="button CapsLock special">${keyArr3[i]}</div>`;
        } else if (keyArr3[i] === 'Enter') {
          key3 += `<div class="button Enter special">${keyArr3[i]}</div>`;
        } else {
          key3 += `<div class="button">${keyArr3[i]}</div>`;
        }
      }
      document.querySelector('.row3').innerHTML = key3;
    }
  
    getKeysThree(Arr3);
  
    function getKeysFour(keyArr4) {
      let key4 = '';
      for (let i = 0; i < keyArr4.length; i += 1) {
        if (keyArr4[i] === 'ShiftLeft') {
          key4 += '<div class="button ShiftLeft special">Shift</div>';
        } else if (keyArr4[i] === 'ShiftRight') {
          key4 += '<div class="button ShiftRight special">Shift</div>';
        } else {
          key4 += `<div class="button">${keyArr4[i]}</div>`;
        }
      }
      document.querySelector('.row4').innerHTML = key4;
    }
  
    getKeysFour(Arr4);
  
    function getKeysFive(keyArr5) {
      let key5 = '';
      for (let i = 0; i < keyArr5.length; i += 1) {
        if (keyArr5[i] === ' ') {
          key5 += `<div class="button Space special">${keyArr5[i]}</div>`;
        } else if (keyArr5[i] === 'AltRight') {
          key5 += '<div class="button AltRight special">Alt</div>';
        } else if (keyArr5[i] === 'ControlRight') {
          key5 += '<div class="button ControlRight special">Ctrl</div>';
        } else if (keyArr5[i] === 'AltLeft') {
          key5 += '<div class="button AltLeft special">Alt</div>';
        } else if (keyArr5[i] === 'ControlLeft') {
          key5 += '<div class="button ControlLeft special">Ctrl</div>';
        } else {
          key5 += `<div class="button">${keyArr5[i]}</div>`;
        }
      }
      document.querySelector('.row5').innerHTML = key5;
    }
  
    getKeysFive(Arr5);
  }
  
  function getLanguage() {
    if (lang === 'en') {
      getKeys(keys1, keys2, keys3, keys4, keys5);
    } else if (lang === 'ru') {
      getKeys(keysRu1, keysRu2, keysRu3, keysRu4, keysRu5);
    }
  }
  
  getLanguage();
