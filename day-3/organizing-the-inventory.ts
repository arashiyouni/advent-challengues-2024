type Inventory = Array<
  { name: string, quantity: number, category: string }
>

//1. Defino la estructura del valor a retornar
interface CategoryInventory {
  [category: string]: {
    [itemName: string]: number
  }
}

function organizeInventory(inventory: Inventory): object {
  const newIventory: CategoryInventory = {}

  inventory.forEach((items) => {
    const {name, quantity, category} = items //por cada objeto me va a extraer este valor

    if(!newIventory[category]){ //si el objeto ya tiene esa categoria, devuelve el arreglo vacio
      newIventory[category] = {}
    }

    //aqui se accede a categoria y a la propiedad 'name' para asignarle el nombre y su cantidad
    newIventory[category][name] = (newIventory[category][name] || 0) + quantity
  })
  

  return newIventory
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]

const organize = organizeInventory(inventory)
console.log(organize)