// playground.js

window.onload = (e)=>{
    console.log(e)
    console.log(new Date().getTime())

}

const changeRecord = []
const startTime = new Date().getTime()
const getTimeStamp = () => new Date().getTime() - startTime

const $ = (e) => document.querySelector(e)

const myCodeMirror = CodeMirror($('#editor'), {
    value: "function myScript(){return 100;}\n",
    mode:  "javascript",
    lineNumbers: true
  });

//   myCodeMirror.setValue('Fer')



//  myCodeMirror.dom.dispatchEvent('change')
// myCodeMirror.doc.replaceRange('B', {line:0, ch:0}, {line:0, ch:1})
 
  myCodeMirror.on('keyHandled', (myCodeMirror,name, e)=>{
      console.log('----------------')
      console.log('---keyHandled---')
      console.log( myCodeMirror)
      console.log( name)
      console.log(e)
      console.log('################')


  })

  myCodeMirror.on('change', (myCodeMirror,change)=>{
    console.log('----------------')
    console.log('---  change  ---')
    console.log( change)
    change.timeStamp = getTimeStamp()
    console.log(getTimeStamp())
    console.log('################')
    changeRecord.push(change)
})

// playChange(0)

function playChange(ind, deltaTime = 0){
    if(ind < changeRecord.length){
        setTimeout(()=>{
            myCodeMirror.doc.replaceRange(changeRecord[ind].text, changeRecord[ind].from, changeRecord[ind].to)
            playChange(ind+1, changeRecord[ind].timeStamp)
        },changeRecord[ind].timeStamp - deltaTime)
    }else{
      return
}
}