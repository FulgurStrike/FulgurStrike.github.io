let sortBar = document.querySelector('.sort-bar');

let sortBarChildren = sortBar.children;

for (let i=0; i<sortBarChildren.length; i++) {
  const element = sortBarChildren[i];
  element.addEventListener("click", filter);
}

function getClassNames() {
  const parentDiv = document.querySelector(".main");
  const children = parentDiv.children;
  const classNames = new Set();

  for (let i=0; i<children.length; i++) {
    const child = children[i];
    const classes = child.className.split(" ");
    classes.forEach(cls => {
      if (cls !== "child") {
        classNames.add(cls);
      }
    });
    
  }
  
  const uniqueClassNames = [...classNames];

  return uniqueClassNames;

}

let uniqueClassNames = getClassNames();

function filterByLanguage(className) {
  const target = event.target.id;
  
  const elements = document.getElementsByClassName(`${className}`);
  const element = document.querySelector(`.${className}`)

  for (let i=0; i<elements.length; i++) {
    elements[i].style.display = "block";
  }

  const elementClass = element.className.split(" ")[1];

  const notElementClasses = uniqueClassNames.filter(element => element!== className);

  let elementNotMatching;

  notElementClasses.forEach(elm => {
     elementNotMatching = document.getElementsByClassName(`${elm}`);
  });

  for (let i=0; i<elementNotMatching.length; i++) {
    elementNotMatching[i].style.display = "none";
  }

}

function filter(event) {
  const target = event.target.id;
  
  switch (target) {
    case 'JSButton':
      filterByLanguage("JS");
      break;
    case 'JavaButton':
      filterByLanguage("Java");
    break;
    case 'All':
      const main = document.querySelector(".main");
      const mainChildren = main.children;

      for (let i=0; i<mainChildren.length; i++) {
        mainChildren[i].style.display = 'block';
      }
  }
}
