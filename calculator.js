function show(result){
    form.textview.value=form.textview.value+result; 
}  

function backspace(){
    form.textview.value=form.textview.value.substring(0, form.textview.value.length-1);
}
