const tabsContent = document.querySelectorAll('.tabcontent'),
  tabs = document.querySelectorAll('.tabheader__item'),
  tabsParent = document.querySelector('.tabheader__items')

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add('hide')
    item.classList.remove('show', 'fade')
  })

  tabs.forEach((item) => {
    item.classList.remove('tabheader__item_active')
  })
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade')
  tabsContent[i].classList.remove('hide')
  tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabs.forEach((item, i) => {
  item.addEventListener('click', () => {
    hideTabContent()
    showTabContent(i)
  })
})
