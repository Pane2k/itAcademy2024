document.addEventListener('DOMContentLoaded', function() {
    var menuData = [
      {
        text: "АККУМУЛЯТОРЫ",
        isParent: true,
        children: [
          {
            text: "AKE MAGNUM",
            isParent: true,
            children: [
              { text: "MAGNUM 60Ah" },
              { text: "MAGNUM 75Ah" },
              { text: "MAGNUM 90Ah" },
              { text: "MAGNUM 132Ah" },
              { text: "MAGNUM 190Ah" },
              { text: "MAGNUM 230Ah" }
            ]
          },
          { text: "АКБ ЗВЕРЬ", isParent: false },
          {
            text: "ТЮМЕНСКИЙ\nАККУМУЛЯТОРНЫЙ ЗАВОД",
            isParent: true,
            children: [
              { text: "ТЗ 60Ah" },
              { text: "ТЗ 75Ah" },
              { text: "ТЗ 90Ah" },
              { text: "ТЗ 100Ah" }
            ]
          },
          { text: "AKB AKOM", isParent: false },
          { text: "AKB BARS", isParent: false },
          { text: "AKS ТЮМЕНСКИЙ МЕДВЕДЬ", isParent: false },
          { text: "AKE ENRUN", isParent: false },
          { text: "AKG UNIX (WESTA)", isParent: false },
          { text: "AKB EDCON", isParent: false },
          { text: "AKB AFA", isParent: false },
          { text: "AKB BOSCH", isParent: false },
          { text: "AKE MUTLU", isParent: false },
          { text: "ОРИГИНАЛЬНЫЕ АКБ", isParent: false },
          { text: "ГЕЛИЕВЫЕ АКБ ОРТІМА", isParent: false }
        ]
      },
      {
        text: "АВТОМАСЛА",
        isParent: true,
        children: [
          {
            text: "MOTUL",
            isParent: true,
            children: [
              { text: "MOTUL 10W-40" },
              { text: "MOTUL 5W-30" },
              { text: "MOTUL 0W-20" }
            ]
          },
          {
            text: "CASTROL",
            isParent: true,
            children: [
              { text: "CASTROL 10W-40" },
              { text: "CASTROL 5W-30" }
            ]
          },
          { text: "SHELL", isParent: false },
          { text: "IDEMITSU", isParent: false }
        ]
      },
      {
        text: "АКСЕССУАРЫ",
        isParent: true,
        children: [
          { text: "Дворники", isParent: false },
          { text: "Чехлы", isParent: false },
          { text: "Коврики", isParent: false }
        ]
      },
      {
        text: "АВТОХИМИЯ",
        isParent: true,
        children: [
          { text: "Омыватели", isParent: false },
          { text: "Полироли", isParent: false },
          { text: "Автошампуни", isParent: false }
        ]
      }
    ];
    var menuContainer = document.getElementById('menu-container');
    var menuList = document.createElement('ul');
    menuList.className = 'main-menu';
  
    function createMenuItem(item) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.href = '#';
      link.textContent = item.text;
      listItem.appendChild(link);
  
      if (item.isParent && item.children) {
        listItem.classList.add('has-children');
        var subMenuList = document.createElement('ul');
        subMenuList.className = 'sub-menu';
        for (var i = 0; i < item.children.length; i++) {
          subMenuList.appendChild(createMenuItem(item.children[i]));
        }
        listItem.appendChild(subMenuList);
        link.classList.add('parent-link');
        var arrow = document.createElement('span');
        arrow.className = 'dropdown-arrow';
        link.appendChild(arrow);
  
        link.addEventListener('click', function(event) {
          event.preventDefault();
          var thiselement = this;
          var submenu = this.parentNode.querySelector('.sub-menu');
          if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
          }
          thiselement.classList.toggle('activeElement');
        });
      }
  
      return listItem;
    }
  
    for (var i = 0; i < menuData.length; i++) {
      menuList.appendChild(createMenuItem(menuData[i]));
    }
  
    menuContainer.appendChild(menuList);
  });