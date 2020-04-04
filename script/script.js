/*jshint esversion: 6 */

console.log('running script.js');

(function(){
  let tempo = 120,
      running = false,
      audio = new Audio('sound/rim.wav'),
      inc = 1,
      timer;

  let tempoDisplay = document.querySelector('.tempo-number'),
      toggleButton = document.querySelector('.toggle-button'),
      tempoUpBtn = document.querySelector('.tempo-up'),
      tempoDownBtn = document.querySelector('.tempo-down'),
      incBtn = document.querySelector('.inc');

      tempoDisplay.textContent = String(tempo);
      incBtn.textContent = String(inc);



  //Update any changes to the DOM***********************************************
  let updateDOM = () => {
    tempoDisplay.textContent = String(tempo);
    incBtn.textContent = String(inc);
  };

  //****************************************************************************
  let setTempo = () => {
    timer = setInterval(metronome, 60000 / tempo);
  };



  //Increase tempo**************************************************************
  let increaseTempo = () => {
    if(running === false){
      tempo+= inc;
      updateDOM();
    } else {
      tempo+= inc;
      updateDOM();
      clearInterval(timer);
      setTempo();
    }
  };
  tempoUpBtn.addEventListener('click', increaseTempo);

  //Decrease tempo**************************************************************
  let decreaseTempo = () => {
    if(running === false){
      tempo-= inc;
      updateDOM();
    } else {
      tempo-= inc;
      updateDOM();
      clearInterval(timer);
      setTempo();
    }
  };
  tempoDownBtn.addEventListener('click', decreaseTempo);

  //Tempo increment selection***************************************************
  let increment = () => {
    if(inc === 1){
      inc = 5;
    } else if (inc === 5){
      inc = 10;
    } else {
      inc = 1;
    }
    console.log(inc);
    updateDOM();
  };
  incBtn.addEventListener('click', increment);




  //Play the sound**************************************************************
  let metronome = () => {
    audio.load();
    audio.play();
  };

  //Starting and stopping the metronome*****************************************
  let toggle = () => {
    //Start metronome
    if(running === false){
      toggleButton.textContent = 'Stop';
      running = true;
      metronome();
      setTempo();
    }
    //Stop metronome
    else {
      toggleButton.textContent = 'Start';
      running = false;
      clearInterval(timer);
    }
  };
  //The Start and Stop button
  toggleButton.addEventListener('click', toggle);

}());
