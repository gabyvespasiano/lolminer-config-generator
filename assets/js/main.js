
document.getElementById("fillValuesButton").addEventListener("click", function(e) {
    llenarValores();
});
document.getElementById("genValuesButton").addEventListener("click", function(e) {
     generateValues();
});
document.getElementById("copyValuesButton").addEventListener("click", function(e) {
    navigator.clipboard.writeText(document.getElementById('final').textContent)
});
const coffInputs = document.querySelectorAll('.coff-input');
const cclkInputs = document.querySelectorAll('.cclk-input');
const mclkInputs = document.querySelectorAll('.mclk-input');
const plInputs = document.querySelectorAll('.pl-input');
function llenarValores() {
    // Obtener el valor del input y separarlo por línea
    const inputValues = document.getElementById('input-valores').value.split('--');
    // Crear arreglos para cada grupo de valores
    // console.log(inputValues)
    const coffValues = [];
    const cclkValues = [];
    const mclkValues = [];
    const plValues = [];
  
    // Iterar sobre cada línea y separar los valores por coma
    inputValues.forEach(linea => {
        if (linea == ""){

        }else{
            
            const valores = linea.split(' ')[1].split(',');
            switch(linea.split(' ')[0]) {
            case 'coff':
                coffValues.push(...valores);
                break;
            case 'cclk':
                cclkValues.push(...valores);
                break;
            case 'mclk':
                mclkValues.push(...valores);
                break;
            case 'pl':
                plValues.push(...valores);
                break;
            default:
                break;
            }

        }
    });
  
    // Obtener los inputs y asignarles los valores correspondientes
    coffInputs.forEach((input, index) => {
        if (coffValues[index] == undefined){
          input.value = "*";
        }else{
          input.value = coffValues[index];
        }        
      });
      
      cclkInputs.forEach((input, index) => {
        if (cclkValues[index] == undefined){
          input.value = "*";
        }else{
          input.value = cclkValues[index];
        }     
      });
      
      mclkInputs.forEach((input, index) => {
        if (mclkValues[index] == undefined){
          input.value = "*";
        }else{
          input.value = mclkValues[index];
        }     
      });
      
      plInputs.forEach((input, index) => {
        if (plValues[index] == undefined){
          input.value = "*";
        }else{
          input.value = plValues[index];
        }     
      });
  }
  function generateValues() {

    let values = '--coff ';
    for (let i = 0; i < coffInputs.length; i++) {
      values += coffInputs[i].value;
      if (i < coffInputs.length - 1) {
        values += ',';
      }
    }
  
    values += ' --cclk ';
    for (let i = 0; i < cclkInputs.length; i++) {
      values += cclkInputs[i].value;
      if (i < cclkInputs.length - 1) {
        values += ',';
      }
    }
  
    values += ' --mclk ';
    for (let i = 0; i < mclkInputs.length; i++) {
      values += mclkInputs[i].value;
      if (i < mclkInputs.length - 1) {
        values += ',';
      }
    }
  
    values += ' --pl ';
    for (let i = 0; i < plInputs.length; i++) {
      values += plInputs[i].value;
      if (i < plInputs.length - 1) {
        values += ',';
      }
    }
  
    document.getElementById('final').textContent=values;
  }
  
//   llenarValores();