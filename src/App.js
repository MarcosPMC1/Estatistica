import './App.css';

function App() {
  const calcular = () => {
    const qtd = document.getElementById("num").value;
    let val = [];
    for (let i = qtd; i > 0; i--) {
      val.push(prompt("insiara um valor"));
    }
    console.log(val.sort((a, b) => a-b));
    console.log("Moda: " + moda(val));
    console.log("Mediana: " + medianof2Arr(val));
    console.log("Media: " + media(val))
  }

  const achaMaior = (counter) => Math.max.apply(null, counter)
  const ordenacao = (a, b) => a - b;
  const ordenar = (arr, ordenacao) => arr.sort(ordenacao)
  const mapear = (name) => {
    return {count: 1, name: name}
  }
  const reduzir = (a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
    }
    const mapearParaArray = (contagem) => {
      const counter = []
      Object.keys(contagem).filter((a) => {
        counter.push(contagem[a])
      })
      return counter
    }
    const filtraModa = (contagem, MAX) => Object.keys(contagem).filter((a) => {
      return (contagem[a] === MAX) ? contagem[a] : null
    })

    function moda(arr) {
      const ordenado =  ordenar(arr, ordenacao)
      let contagem = ordenado.map(mapear).reduce(reduzir, {}) 
      const counter = mapearParaArray(contagem)
      const MAX = achaMaior(counter) 
      return filtraModa(contagem, MAX)
    }

    function medianof2Arr(arr) {
      let esq=0;
      let mediana;
      arr.sort((a, b) => a-b);
      if(arr.length % 2 == 0){
        let meio = arr.length / 2;
        mediana = (parseInt(arr[meio]) + parseInt(arr[meio - 1])) / 2;
      }else{
        let dir=arr.length-1;
        let meio=(esq+dir)/2;
        mediana = arr[meio];
      }
      return mediana;
  }

  function media(arr){
    let contador = 0;
    arr.forEach(element => {
      contador += parseInt(element);
    });
    let total = contador / parseInt(arr.length);
    console.log(total);
    return total;
  }

  return (
    <div className="App">
      <input type='number' id='num'></input>
      <button onClick={calcular}>Confirmar</button>
    </div>
  );
}

export default App;
