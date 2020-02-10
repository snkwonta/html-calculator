function show(result){
    form.textview.value=form.textview.value+result; 
}  

function backspace(){
    form.textview.value=form.textview.value.substring(0, form.textview.value.length-1);
}

try {
    eval('var valid_statement = 7; \n invalid_statement())))');
} catch (error) {
    var err = new Error();
    err.message = 'Error. Cannot evaluate ' + err.message;
    throw err;
    
}
