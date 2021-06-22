function copyCode(htmlElement) {
  if (!htmlElement) {
    return
  }

  let elementText = htmlElement.innerText
  let inputElement = document.createElement('input')
  inputElement.setAttribute('value', elementText)
  document.body.appendChild(inputElement)
  inputElement.select()
  document.execCommand('copy')
  inputElement.parentNode.removeChild(inputElement)
}

document.querySelector('#code_button').onclick = function () {
  copyCode(document.querySelector('#my_code'))
}
