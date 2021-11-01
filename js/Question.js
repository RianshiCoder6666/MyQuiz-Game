class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here....");
    this.input2 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(500, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(300, 80);

    this.option1.html("1. Everyone " );
    this.option1.position(350, 110);

    this.option2.html("2. Envelope" );
    this.option2.position(350, 130);

    this.option3.html("3. Estimate " );
    this.option3.position(350, 150);

    this.option4.html("4. Example" );
    this.option4.position(350, 170);

    this.input1.position(350, 240);
    this.input1.class("Input");
    this.input2.position(550, 240);
    this.input2.class("Input");
    this.button.position(400, 300);
    this.button.class("Input");

    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted!");
      this.message.position(500, 350);
    });
  }
}
