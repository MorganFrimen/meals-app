class Meal {
    constructor (id, categoryIds, title, affordability,complexity,imgeUrl,duration,ingridients,steps,isGlutinFree,isVegan,isVegitarian,isLactoseFree){
        this.id = id
        this.categoryIds = categoryIds
        this.title = title
        this.affordability = affordability
        this.complexity = complexity
        this.imgeUrl = imgeUrl
        this.duration = duration
        this.ingridients = ingridients
        this.steps = steps
        this.isGlutinFree = isGlutinFree
        this.isVegan = isVegan
        this.isVegitarian = isVegitarian
        this.isLactoseFree = isLactoseFree
    }
}
export default Meal