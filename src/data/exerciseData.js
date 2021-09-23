const exerciseData = {
  codeContext: [
    {}
  ],
  displayContext: [
    "//Tutorial"
  ],
  exerciseInitialCode: [
    "<div>Hello World</div>"
  ],
  solutionEvalCode: [
    `const div = this.resultElementRef.current.querySelector('div')
console.log(div, div.innerHTML)
if(div.innerHTML === '<div>Hello World</div>') {
  correct = true
} else {
  correct = false
}`
  ]
}

export default exerciseData