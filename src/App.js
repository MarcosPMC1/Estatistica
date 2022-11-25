import './App.css';
import ProgressBar from "@ramonak/react-progress-bar";

function App() {
  let qtd = 0;

  const init = () => {
    qtd = document.getElementById("num").value;
    if(qtd !== ''){
      document.getElementsByClassName('init')[0].style.visibility = 'hidden';
      document.getElementsByClassName('init')[0].style.display = 'none';
      document.getElementsByClassName('data')[0].classList.remove('dontshow');
    }
  }
  // moda
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
        return counter.push(contagem[a]);
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
      let result =  filtraModa(contagem, MAX);
      if (result.length === arr.length){
        return 0;
      }else{
        return result;
      }
    }

    //mediana
    function medianof2Arr(arr) {
      let esq=0;
      let mediana;
      arr.sort((a, b) => a-b);
      if(arr.length % 2 === 0){
        let meio = arr.length / 2;
        mediana = (parseInt(arr[meio]) + parseInt(arr[meio - 1])) / 2;
      }else{
        let dir=arr.length-1;
        let meio=(esq+dir)/2;
        mediana = arr[meio];
      }
      return mediana;
  }

  //media
  function media(arr){
    let contador = 0;
    arr.forEach(element => {
      contador += parseInt(element);
    });
    let total = contador / parseInt(arr.length);
    console.log(total);
    return total;
  }

  let val = [];
  const addNum = () => {
    let value = document.getElementById('value').value;
    if (value !== ""){
      val.push(value);
    }
    document.getElementById('value').value = '';
    console.log(val);
    console.log(val.length);
    console.log(qtd);
    if(parseInt(val.length) === parseInt(qtd)){
      document.getElementById('moda').innerHTML = moda(val);
      document.getElementById('mediana').innerHTML = medianof2Arr(val);
      document.getElementById('media').innerHTML = media(val);

      document.getElementsByClassName('data')[0].classList.add('dontshow');
      document.getElementsByClassName('results')[0].classList.remove('dontshow');

      console.log(val.sort((a, b) => a-b));
      console.log("Moda: " + moda(val));
      console.log("Mediana: " + medianof2Arr(val));
      console.log("Media: " + media(val))
    }
  }
  return (
    <div className="App">
      <div className='card'>
        <div className='content init'>
          <h2>Insira a quantidade de dados: </h2>
          <input type='number' id='num'></input>
          <button onClick={init}>Confirmar</button>
        </div>
        <div className='content data dontshow'>
          <h2>Insira um valor: </h2>
          <input type='number' id='value' required></input>
          <button onClick={addNum}>Confirmar</button>
        </div>
        <div className='content results dontshow'>
          <div>
            <h2>Resultado:</h2>
          </div>
          <div className='box--cards'>
            <div className='card--results'>
              <h2>Moda</h2>
              <h4 id='moda'>.</h4>
            </div>
            <div className='card--results'>
              <h2>Mediana</h2>
              <h4 id='mediana'>.</h4>
            </div>
            <div className='card--results'>
              <h2>Média</h2>
              <h4 id='media'>.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
