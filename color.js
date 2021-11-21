let general = document.querySelector('.general')
let loadBtn = document.querySelector('.general > .load')
let saveBtn = document.querySelector('.general > .save')
let resetBtn = document.querySelector('.general > .reset')
let exitBtn = document.querySelector('.general > .exit')
let mode = document.querySelector('.mode')
let modeSingle = document.querySelector('.mode > .single')
let modeMulti = document.querySelector('.mode > .multi')
let modeDrop = document.querySelector('.mode > .drop')
let change = document.querySelector('.change')
let changeCss = document.querySelector('.change > .css')
let changeCssSave = document.querySelector('.change > .css_save')
let changeScss = document.querySelector('.change > .scss')
let changeScssSave = document.querySelector('.change > .scss_save')
let changeSass = document.querySelector('.change > .sass')
let changeSassSave = document.querySelector('.change > .sass_save')
let changeHtml = document.querySelector('.change > .html')
let changeHtmlSave = document.querySelector('.change > .html_save')
let pallete = document.querySelector('.pallete')

let single = document.querySelector('.singleInput')
let multiple = document.querySelector('.multipleInput')
let dropper = document.querySelector('.dropperInput')

let singleInput = document.querySelector('#singleInput')
let singleInputBtn = document.querySelector('#singleInputBtn')
let multipleInput = document.querySelector('#multipleInput')
let multipleInputBtn = document.querySelector('#multipleInputBtn')
let dropperInput = document.querySelector('#dropperInput')
let dropperInputBtn = document.querySelector('#dropperInputBtn')

let inputVarName = document.querySelector('#varName')
let inputcolorClassName = document.querySelector('#colorClassName')
let inputbgClassName = document.querySelector('#bgClassName')

let outThumb = 'css'
let output = document.querySelector('.output')

let enter = ['color list']
let addColor = 1

let dowloadCss
let dowloadCssPlus
let dowloadScss
let dowloadSass

let varNamePrefix = 'c'
let colorStylePrefix = 'c'
let backgroundStylePrefix = 'bg'

//+++++++++++++++++++++++++++++++++++++
/* +++++ФУНКЦИЯ ОЧИСТКИ КЛАССОВ+++++ */
//+++++++++++++++++++++++++++++++++++++
function clearMode(parent) {
  for (i = 0; i < parent.children.length; i++) {
    if ((parent.children[i].classList.contain = 'active')) {
      parent.children[i].classList.remove('active')
    }
  }
}
//-------------------------------------

//+++++++++++++++++++++++++++++++++++++
/* ++++ПЕРЕКЛЮЧЕНИЕ РЕЖИМА ВВОДА++++ */
//+++++++++++++++++++++++++++++++++++++
modeSingle.onclick = function () {
  clearMode(mode)
  modeSingle.classList.add('active')
  single.style.display = 'flex'
  multiple.style.display = 'none'
  dropper.style.display = 'none'
}
modeMulti.onclick = function () {
  clearMode(mode)
  modeMulti.classList.add('active')
  single.style.display = 'none'
  multiple.style.display = 'flex'
  dropper.style.display = 'none'
}
modeDrop.onclick = function () {
  clearMode(mode)
  modeDrop.classList.add('active')
  single.style.display = 'none'
  multiple.style.display = 'none'
  dropper.style.display = 'flex'
}
//------------------------------------

//++++++++++++++++++++++++++++++++++++++
/* +++++++ВЫБОР РЕЖИМА ВЫВОДА++++++++ */
//++++++++++++++++++++++++++++++++++++++
changeCss.onclick = function () {
  clearMode(change)
  changeCss.classList.add('active')
  outThumb = 'css'
  show()
}
changeScss.onclick = function () {
  clearMode(change)
  changeScss.classList.add('active')
  outThumb = 'scss'
  show()
}
changeSass.onclick = function () {
  clearMode(change)
  changeSass.classList.add('active')
  outThumb = 'sass'
  show()
}
changeHtml.onclick = function () {
  clearMode(change)
  changeHtml.classList.add('active')
  outThumb = 'css+'
  show()
}
//-------------------------------------

//+++++++++++++++++++++++++++++++++++++
/* ОБНОВЛЯЕМ ПАЛИТРУ ПОСЛЕ ИЗМЕНЕНИЙ */
//+++++++++++++++++++++++++++++++++++++
function show() {
  pallete.innerHTML = ''
  createPalleteInset()
  outputGo()
}
//-------------------------------------

function outputGo() {
  if (outThumb == 'css') {
    createCssOutput()
  }
  if (outThumb == 'scss') {
    createScssOutput()
  }
  if (outThumb == 'sass') {
    createSassOutput()
  }
  if (outThumb == 'css+') {
    createCssPlusOutput()
  }
}

//+++++++++++++++++++++++++++++++++++++
/*++++ ДОПОЛНЯЕМ ПАЛИТРУ ИНСЕТАМИ+++ */
//+++++++++++++++++++++++++++++++++++++

function createPalleteInset() {
  for (i = 1; i < enter.length; i++) {
    //СОЗДАНИЕ ИНСЕТА
    let palleteInset = document.createElement('div')
    palleteInset.classList.add('pallete_inset')
    let colorShape = document.createElement('div')
    colorShape.classList.add('color-shape')
    colorShape.style.backgroundColor = `${enter[i]}`
    let colorTxt = document.createElement('h4')
    colorTxt.classList.add('colorTxt')
    colorTxt.innerText = `${i}: ${enter[i]}`
    let cross = document.createElement('div')
    cross.classList.add('cross')
    cross.innerText = '✘'
    cross.setAttribute('onclick', `delItem(${i})`)
    //ВСТРАИВАНИЕ ГОТОВОГО ИНСЕТА
    palleteInset.prepend(colorShape, colorTxt, cross)
    pallete.append(palleteInset)
  }
}
//--------------------------------------

//++++++++++++++++++++++++++++++++++++++
/*++ ДОБАВЛЯЕМ НОВЫЙ ЦВЕТ В ПАЛИТРУ ++*/
//++++++++++++++++++++++++++++++++++++++
function addNewColor(color) {
  enter[addColor] = color
  addColor++
  show()
}
//--------------------------------------

//+++++++++++++++++++++++++++++++++++++
/* +++СРАВНИВАЕМ С УЖЕ ИМЕЮЩИМИСЯ+++ */
//+++++++++++++++++++++++++++++++++++++
function examination(color) {
  for (p = 0; p < enter.length; p++) {
    if (color == enter[p]) {
      alert(`повторный ввод ${color}`)
      return
    }
  }
  addNewColor(color)
}
//-------------------------------------

//+++++++++++++++++++++++++++++++++++++
/*+++++ГЛАВНЫЕ ОРГАНЫ УПРАВЛЕНИЯ+++++*/
// СЛУШАТЕЛЬ FILE INPUT
document
  .getElementById('myFile')
  .addEventListener('change', handleFileSelect, false)
//++++СБРОС ЗНАЧЕНИЙ АКТИВНОГО ОКНА++++
resetBtn.onclick = function () {
  location.reload()
}
//+++++++ЗАКРЫТИЕ АКТИВНОГО ОКНА+++++++
exitBtn.onclick = function () {
  //   window.close()
}
//-------------------------------------

//+++++++++++++++++++++++++++++++++++++
/* ++++++ОДИНОЧНОЕ ДОБАВЛЕНИЕ+++++++ */
//+++++++++++++++++++++++++++++++++++++
singleInputBtn.onclick = function () {
  if (singleInput.value.length != 6) {
    alert(`Input Error! 
     The value must consist of 6 characters without "#" 
     and also correspond to the format of the hexadecimal color system.`)
    return
  } else {
    singleInput.value = singleInput.value.toLowerCase()
    examination(`#${singleInput.value}`)
  }
}
//-------------------------------------

//+++++++++++++++++++++++++++++++++++++
/* ++++++++ЦВЕТОВАЯ ПИПЕТКА+++++++++ */
//+++++++++++++++++++++++++++++++++++++
dropperInputBtn.onclick = function () {
  examination(dropperInput.value)
}
//--------------------------------------

//++++++++++++++++++++++++++++++++++++++
/* ++++++ МУЛЬТИ ВВОД ЗНАЧЕНИЙ +++++ */
//++++++++++++++++++++++++++++++++++++++
multipleInputBtn.onclick = function () {
  letsInsert()
}

//++++++++++++++++++++++++++++++++++++++
/*++ ФУНКЦИЯ ОБРАБОТКИ МУЛЬТИ ВВОДА ++*/
//++++++++++++++++++++++++++++++++++++++
function letsInsert() {
  let newTemp = []
  multipleInput.value = multipleInput.value.toLowerCase()

  for (let s = 0; s < multipleInput.value.length - 1; s += 7) {
    let ifError = multipleInput.value[6 + s]
    if (ifError != ',') {
      if (ifError != ' ') {
        if (ifError != undefined) {
          if (ifError != `\n`) {
            if (ifError != `\r`) {
              alert(`error in the input data, check the correspondence 
                  of the input in the formats: \n
                  1) '000000 ffffff aaaaaa fafafa' -space between HEX data\n
                  2) '000000,ffffff,aaaaaa,fafafa' -comma between HEX data\n
                  Important! hex value lenght must be 6 symbols`)
              return
            }
          }
        }
      }
    }
  }

  for (let s = 0; s < multipleInput.value.length; s += 7) {
    newTemp[s / 7] = `#${multipleInput.value[0 + s]}${
      multipleInput.value[1 + s]
    }${multipleInput.value[2 + s]}${multipleInput.value[3 + s]}${
      multipleInput.value[4 + s]
    }${multipleInput.value[5 + s]}`
  }

  for (i = 0; i < newTemp.length; i++) {
    for (p = 0; p < enter.length; p++) {
      if (newTemp[i] == enter[p]) {
        alert(`повторный ввод ${newTemp[i]}`)
        newTemp.splice(`${i}`, 1)
      }
    }
    enter.push(newTemp[i])
  }
  addColor = enter.length
  multipleInput.value = ''
  show()
}
//--------------------------------------

//++++++++++++++++++++++++++++++++++++++
/* ++++++++++ DELETE ITEM +++++++++++ */
//++++++++++++++++++++++++++++++++++++++
function delItem(number) {
  enter.splice(`${number}`, 1)
  addColor--
  show()
}
//--------------------------------------

//++++++++++++++++++++++++++++++++++++++
/* ++++++++++++FILE INPUT++++++++++++ */
//++++++++++++++++++++++++++++++++++++++
function handleFileSelect(evt) {
  let newFile = document.querySelector('#myFile')
  let file = newFile.files[0]

  let reader = new FileReader()

  reader.readAsText(file)

  reader.onload = function () {
    let result = reader.result

    enter = result.split(',')
    addColor = enter.length
    show()
  }

  reader.onerror = function () {
    alert(`Input Error! \n 
    Please select and upload the correct file. \n
    You can find detailed information in the help menu
    in the upper right corner of the program window.`)
  }
}
//--------------------------------------

//++++++++++++++++++++++++++++++++++++++
/* ++++++++++ SCSS OUTPUT +++++++++++ */
//++++++++++++++++++++++++++++++++++++++
function createScssOutput() {
  output.innerText = ''
  let VarsScssTemp
  let vTemp = output.innerText
  let vEachTemp = ''
  let vEachTemp1 = ''
  let vEachTemp2 = ''

  for (i = 1; i < enter.length; i++) {
    VarsScssTemp = `$${varNamePrefix}${i}:${enter[i]};\n`
    vTemp = output.innerText
    output.innerText = `${vTemp} ${VarsScssTemp}`
  }

  vTemp = output.innerText

  for (i = 1; i < enter.length; i++) {
    vEachTemp1 = `${i}:$${varNamePrefix}${i},`
    vEachTemp2 = vEachTemp2 + vEachTemp1
    vEachTemp = `${vEachTemp2}`
  }

  if (addColor >= 2) {
    output.innerText = `${vTemp}\n @each $number,$hex in 
  (${vEachTemp})
  {.${colorStylePrefix}#{$number}{color: $hex;}\n
  .${backgroundStylePrefix}#{$number}{background-color:$hex;}}`
  } else {
    output.innerHTML = `code preview be here, load your color vars values in HEX format`
  }
  dowloadScss = output.innerText
}
//----------------------------------------------
/*------------ END SCSS OUTPUT ---------------*/
//----------------------------------------------

//++++++++++++++++++++++++++++++++++++++
/* ++++++++++ SASS OUTPUT +++++++++++ */
//++++++++++++++++++++++++++++++++++++++
function createSassOutput() {
  output.innerText = ''
  let VarsSassTemp
  let vTemp = output.innerText
  let vEachTemp = ''
  let vEachTemp1 = ''
  let vEachTemp2 = ''
  let out

  for (i = 1; i < enter.length; i++) {
    VarsScssTemp = `$${varNamePrefix}${i}:${enter[i]}\n`
    vTemp = output.innerText
    output.innerText = `${vTemp} ${VarsScssTemp}`
  }

  vTemp = output.innerHTML

  for (i = 0; i < enter.length - 1; i++) {
    vEachTemp1 = `${i + 1}:$${varNamePrefix}${i + 1},`
    vEachTemp2 = vEachTemp2 + vEachTemp1
    vEachTemp = vEachTemp2
  }

  if (addColor >= 2) {
    output.innerHTML = `${vTemp} <br><br>
     $colorsList: (${vEachTemp})<br><br>
     @each $number,$hex in $colorsList
     <pre>   .${colorStylePrefix}#{$number}</pre>
     <pre>      color: $hex</pre>
     <pre>   .${backgroundStylePrefix}#{$number}</pre>
     <pre>      background-color:$hex</pre>`
  } else {
    output.innerHTML = `code preview be here, load your color vars values in HEX format`
  }
  dowloadSass = output.innerText
}
//----------------------------------------------
/*------------ END SASS OUTPUT ---------------*/
//----------------------------------------------

//++++++++++++++++++++++++++++++++++++++
/* ++++++++++ CSS OUTPUT +++++++++++ */
//++++++++++++++++++++++++++++++++++++++
function createCssOutput() {
  let cssTemp1
  let cssTemp2 = `/* css color classes */ <br>`
  for (i = 1; i < enter.length; i++) {
    cssTemp1 = `.${colorStylePrefix}${i} {color: ${enter[i]}};<br>`
    cssTemp2 = cssTemp2 + cssTemp1
    cssTemp1 = `.${backgroundStylePrefix}${i} {background-color: ${enter[i]}};<br>`
    cssTemp2 = cssTemp2 + cssTemp1
  }
  if (addColor >= 2) {
    output.innerHTML = cssTemp2
  } else {
    output.innerHTML = `code preview be here, load your color vars values in HEX format`
  }
  dowloadCss = output.innerText
}
//----------------------------------------------
/*------------ END SASS OUTPUT ---------------*/
//----------------------------------------------

//++++++++++++++++++++++++++++++++++++++
/* ++++++++++ CSS+ OUTPUT +++++++++++ */
//++++++++++++++++++++++++++++++++++++++
function createCssPlusOutput() {
  let outAllCssPlus
  let cssVarTemp1
  let cssVarTemp2
  for (i = 0; i < enter.length - 1; i++) {
    cssVarTemp1 = `--${varNamePrefix}${i + 1}: ${enter[i + 1]};<br>`
    if (i == 0) {
      cssVarTemp2 = cssVarTemp1
    } else {
      cssVarTemp2 = cssVarTemp2 + cssVarTemp1
    }
  }

  let cssTemp1
  let cssTemp2
  for (i = 0; i < enter.length - 1; i++) {
    cssTemp1 = `.${colorStylePrefix}${i + 1} {color: var(--${varNamePrefix}${
      i + 1
    })};<br>`
    if (i == 0) {
      cssTemp2 = cssTemp1
    } else {
      cssTemp2 = cssTemp2 + cssTemp1
    }

    cssTemp1 = `.${backgroundStylePrefix}${
      i + 1
    } {background-color: var(--${varNamePrefix}${i + 1})};<br>`
    cssTemp2 = cssTemp2 + cssTemp1
  }

  outAllCssPlus = `:root{<br>${cssVarTemp2}}<br><br>${cssTemp2}`

  if (addColor >= 2) {
    output.innerHTML = outAllCssPlus
  } else {
    output.innerHTML = `code preview be here, load your color vars values in HEX format`
  }
  dowloadCssPlus = output.innerText
}
//----------------------------------------------
/*------------ END SASS OUTPUT ---------------*/
//----------------------------------------------

saveBtn.onclick = function () {
  let ne = document.createElement('div')
  ne.innerText = enter
  download('project.csg', ne.innerText)
}

changeHtmlSave.onclick = function () {
  createCssPlusOutput()
  download('colors.css', dowloadCssPlus)
  outputGo()
}

changeCssSave.onclick = function () {
  createCssOutput()
  download('colors.css', dowloadCss)
  outputGo()
}

changeScssSave.onclick = function () {
  createScssOutput()
  download('colors.scss', dowloadScss)
  outputGo()
}

changeSassSave.onclick = function () {
  createSassOutput()
  download('colors.sass', dowloadSass)
  outputGo()
}

function download(filename, text) {
  var pom = document.createElement('a')
  pom.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text),
  )
  pom.setAttribute('download', filename)

  if (document.createEvent) {
    var event = document.createEvent('MouseEvents')
    event.initEvent('click', true, true)
    pom.dispatchEvent(event)
  } else {
    pom.click()
  }
}

inputVarName.addEventListener('change', setp1)
inputcolorClassName.addEventListener('change', setp2)
inputbgClassName.addEventListener('change', setp3)

function setp1() {
  varNamePrefix = inputVarName.value
}
function setp2() {
  colorStylePrefix = inputcolorClassName.value
}
function setp3() {
  backgroundStylePrefix = inputbgClassName.value
}
