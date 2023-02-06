const updateButton = document.querySelector('.update-btn')
const updateText = document.querySelector('.update-text')

function filter() {
	let filterValue, input, ul, li, p, i
	input = document.getElementById('search')
	filterValue = input.value.toUpperCase()
	ul = document.getElementById('Menu')
	li = ul.getElementsByTagName('li')

	for (i = 0; i < li.length; i++) {
		p = li[i].getElementsByTagName('p')[0]
		if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			li[i].style.display = ''
		} else {
			li[i].style.display = 'none'
		}
	}
}

function update() {
	if(updateText.style.display === 'none') {
		updateText.style.display = 'block'
	}
	else {
		updateText.style.display = 'none'
	}
}

updateButton.addEventListener('click', update)

console.log('Załadowano Wszystko')
