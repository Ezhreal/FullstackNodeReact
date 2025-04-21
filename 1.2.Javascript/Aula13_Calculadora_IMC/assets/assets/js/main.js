const CalculadoraIMC = (function() {    
 
    function Inicializar () {
        const formularioIMC = document.querySelector('#formulario');
      
        function CalculaIMC(e) {            
            e.preventDefault();      
            const inputPeso = e.target.querySelector('#peso');
            const inputAltura = e.target.querySelector('#altura');         
        
            const peso = Number(inputPeso.value);
            const altura = Number(inputAltura.value);
    
            if (!peso) {
                setResultado('Peso inválido', false);
                return;
            }
    
            if (!altura) {
                setResultado('Altura inválida', false);
                return;
            }
    
            const imc = getIMCValue(peso, altura);
            const imcTableReference = getReferenceIMC(imc)
    
            const msg = `Seu IMC é ${imc} (${imcTableReference}).`;
    
            setResultado(msg, true)
        }
    
        function getReferenceIMC (imc) {
            const valueReference = ['Abaixo do Peso','Peso Normal','Acima do Peso','Obesidade Grau I','Obesidade Grau II','Obesidade Grau III']
    
            if(imc >= 39.9) return valueReference[5];
            if(imc >= 34.9) return valueReference[4];
            if(imc >= 29.9) return valueReference[3];
            if(imc >= 24.9) return valueReference[2];
            if(imc >= 18.5) return valueReference[1];
            if(imc <= 18.5) return valueReference[0];
        }
    
        function getIMCValue (peso, altura) {
            const imc = peso / altura ** 2; // elevado ao quadrado ou altura * altura
            return imc.toFixed(2);
          }
          
          function criaP () {
            const p = document.createElement('p');
            return p;
          }
    
        function setResultado (msg, isValid) {
            const resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
          
            const p = criaP();
          
            if (isValid) {
              p.classList.add('paragrafo-resultado');
            } else {
              p.classList.add('bad');
            }
          
            p.innerHTML = msg;
            resultado.appendChild(p);
          }
          
        formularioIMC.addEventListener('submit', CalculaIMC);
    }   
  
    return {
        Inicializar : Inicializar
    };
  })();


  CalculadoraIMC.Inicializar(); 