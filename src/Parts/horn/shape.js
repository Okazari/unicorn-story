export const shapeName = 'horn'

class Horn extends mojs.CustomShape {
  getShape() {
    return `<path
      d="M 90.65,15.04
         C 91.61,15.65 84.09,30.17 83.74,30.22
           81.52,30.43 79.30,29.26 78.74,28.09
           78.78,28.00 89.70,14.43 90.65,15.04 Z" />`
  }
}
mojs.addShape(shapeName, Horn)

export default shapeName
