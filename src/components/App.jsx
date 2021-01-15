import React from 'react';
import Textarea from "./Textarea";
import Row from "./rows/Row";


var firstNumber = [];
var secondNumber = [];

var arithmetic = [];

var digitOne;
var digitTwo = null;



function App() {
    var [screenNumber, setScreenNuber] = React.useState("");


    // Function for operation - + / *
    function operate(firstDigit, secondDigit, operater) {

        firstDigit = parseFloat(firstDigit);
        secondDigit = parseFloat(secondDigit);
        console.log(operater, firstDigit, secondDigit);
        var result;
        switch (operater) {
            case "+":

                result = (firstDigit + secondDigit);
                break;
            case "*":
                result = (firstDigit * secondDigit);
                break;
            case "/":
                result = firstDigit / secondDigit;
                break;
            case "-":
                result = firstDigit - secondDigit;
                break;
            default:
                return "karan";
            //dndonol
        }

        digitOne = result;
        firstNumber = result.toString().split("");
        secondNumber = [];
        digitTwo = null;
        console.log(result);
        setScreenNuber(() => { return result });
        return result;

    }

    //Function for changing array to string and than number
    function arrayToString(numberArray) {
        console.log(numberArray);
        if (numberArray.includes("-") === true) {
            var outcome = numberArray.toString();

            outcome = outcome.replace(/,/g, "");

            outcome = parseFloat(outcome);

            digitOne === undefined || null ? digitOne = "-" + outcome : digitTwo = "-" + outcome;
            
        } else {
            var outcome = numberArray.toString();

            outcome = outcome.replace(/,/g, "");

            outcome = parseFloat(outcome);

            digitOne === undefined || null ? digitOne = outcome : digitTwo = outcome;
        }
        

    }


    // function for when button is pressed
    function calculate(value) {
        if (typeof value === 'number') {

            if (arithmetic.length === 0) {
                firstNumber.push(value);
                setScreenNuber(() => { return firstNumber.toString().replace(/,/g, "") });
            } else {
                secondNumber.push(value);
                setScreenNuber(() => { return secondNumber.toString().replace(/,/g, "") });
            }


        } else {

            if (value === "*" || value === "/" || value === "-" || value === "+") {
                arithmetic.push(value);



                setScreenNuber((prevalue) => { return arithmetic[arithmetic.length - 1] });
                if (digitOne === undefined) {


                    arrayToString(firstNumber);
                    
                } else if (digitTwo === null) {
                    if (secondNumber.length === 0) {

                    } else {
                        arrayToString(secondNumber);

                        operate(digitOne, digitTwo, arithmetic[arithmetic.length - 2]);
                    }

                } else {

                }
            } else {

            }


            switch (value) {
                case ("="):
                    if (secondNumber.length === 0) {

                    } else {
                        arrayToString(secondNumber);

                        operate(digitOne, digitTwo, arithmetic[arithmetic.length - 1]);
                    }


                    break;
                case ("AC"):
                    digitTwo = null;
                    digitOne = undefined;
                    arithmetic = [];
                    firstNumber = [];
                    secondNumber = [];
                    setScreenNuber(() => { return "0" });
                    break;
                case ("x²"):
                    setScreenNuber((prevalue) => {
                        console.log(prevalue);
                        return (prevalue * prevalue);
                    });
                    break;
                case ("+/-"):
                    setScreenNuber(prevalue => {
                        if (prevalue > 0) {
                            if (secondNumber.length === 0) {
                                firstNumber.push("-");
                                console.log(digitOne);
                                digitOne = arrayToString(firstNumber);
                                console.log(digitOne);
                                return "-" + prevalue;
                            } else if (firstNumber.length === 0) {

                            } else {
                                secondNumber.push("-");
                                digitOne = arrayToString(firstNumber);
                                return "-" + prevalue;
                            }
                        } else if (prevalue === 0) {

                        } else if (prevalue < 0) {
                            if (secondNumber.length === 0) {
                                var x = "-";
                                console.log(firstNumber);
                                for (var i = 0; i < firstNumber.length; i++) {

                                    if (firstNumber[i] === "-") {

                                        firstNumber.splice(i, 1);
                                    }

                                }
                                console.log(firstNumber);
                                digitOne = firstNumber.toString().replace(/,/g, "");
                                return firstNumber.toString().replace(/,/g, "");
                            } else if (firstNumber.length === 0) {

                            } else {
                                var x = "-";

                                for (var i = 0; i < secondNumber.length; i++) {

                                    if (screenNumber[i] === "-") {

                                        screenNumber.splice(i, 1);
                                    }

                                }
                                digitOne = firstNumber.toString().replace(/,/g, "");
                                return secondNumber.toString().replace(/,/g, "");
                            }
                        }
                    })
                    break;
                case ("."):
                    if (secondNumber.length === 0) {
                        firstNumber.push(value);
                        setScreenNuber(() => { return firstNumber.toString().replace(/,/g, "") });
                    } else if (firstNumber.length === 0) {

                    } else {
                        secondNumber.push(value);
                        
                        setScreenNuber(() => { return secondNumber.toString().replace(/,/g, "") });
                    }
                    break;
                case ("cross"):
                    if (secondNumber.length === 0) {
                        firstNumber.pop();
                        setScreenNuber(() => { return firstNumber.toString().replace(/,/g, "") });
                    } else if (firstNumber.length === 0) {

                    } else {
                        secondNumber.pop();
                        setScreenNuber(() => { return secondNumber.toString().replace(/,/g, "") });
                    }
                    break;
                default:
                // code block
            }
        }




    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 hide">1</div>

                <div className="col-12 col-md-6 calculater">

                    <Textarea class="display-area" numberToShow={screenNumber} />


                    <div className="container-fluid ">
                        <Row clicked={calculate} />
                    </div>

                </div>

                <div className="col-md-3 hide"></div>
            </div>
        </div>
    )
}


export default App;