window.onload = function () {
  var tabs = document.getElementById('tab-container').children;
  var tabcontents = document.getElementById('tab-content').children;

  var myFunction = function () {
    var tabchange = this.tabindex;
    for (var int = 0; int < tabcontents.length; int++) {
      tabcontents[int].className = ' tabcontent';
      tabs[int].className = ' tab';
    }
    tabcontents[tabchange].classList.add('tab-active');
    this.classList.add('current-tab');
  }

  for (var index = 0; index < tabs.length; index++) {
    tabs[index].tabindex = index;
    tabs[index].addEventListener('click', myFunction, false);
  }

};
