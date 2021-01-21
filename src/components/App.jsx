import React from 'react';
import Textarea from "./Textarea";
import Row from "./rows/Row";


var firstNumber = [];
var secondNumber = [];

var arithmetic = [];

var digitOne;
var digitTwo = null;

var result;

function App() {
    // Change input placeholder variable to change on click
    var [screenNumber, setScreenNuber] = React.useState("");


    function showOnScreen(givenArray) {
        return givenArray.toString().replace(/,/g, "");
    }



    // Function for operation - + / *
    function operate(firstDigit, secondDigit, operater) {
        firstDigit = parseFloat(firstDigit);
        secondDigit = parseFloat(secondDigit);
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
        }
        digitOne = result;
        firstNumber = result.toString().split("");
        secondNumber = [];
        digitTwo = null;
        setScreenNuber(() => { return result });
        return result;
    }

    //Function for changing array to string and than number and negative to postive number
    function arrayToString(numberArray) {

        var outcome = numberArray.toString();
        outcome = outcome.replace(/,/g, "");
        outcome = parseFloat(outcome);

        if (numberArray.includes("-") === true) {
            digitOne === undefined || null ? digitOne = "-" + outcome : digitTwo = "-" + outcome;
        } else {
            digitOne === undefined || null ? digitOne = outcome : digitTwo = outcome;
        }
    }


    // function for when button is pressed
    function calculate(value) {

        if (typeof value === 'number') {

            if (arithmetic.length === 0) {
                firstNumber.push(value);
                setScreenNuber(() => { return showOnScreen(firstNumber); });
            } else {
                secondNumber.push(value);
                setScreenNuber(() => { return showOnScreen(secondNumber); });
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
                        digitOne = (prevalue * prevalue);
                        var digitoneToString = digitOne.toString();
                        firstNumber = digitoneToString.split("");
                            digitTwo = null;
                        return (digitOne);
                    });
                    break;

                case ("+/-"):
                    setScreenNuber(prevalue => {
                        if (prevalue > 0) {
                            if (secondNumber.length === 0) {
                                firstNumber.push("-");
                                digitOne = arrayToString(firstNumber);
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
                                
                                console.log(firstNumber);
                                for (var i = 0; i < firstNumber.length; i++) {
                                    if (firstNumber[i] === "-") {
                                        firstNumber.splice(i, 1);
                                    }
                                }
                                digitOne = firstNumber.toString().replace(/,/g, "");
                                return firstNumber.toString().replace(/,/g, "");
                            } else if (firstNumber.length === 0) {

                            } else {
                                

                                for (var a = 0; a < secondNumber.length; a++) {

                                    if (screenNumber[a] === "-") {

                                        screenNumber.splice(a, 1);
                                    }

                                }
                                digitOne = showOnScreen(firstNumber);
                                return showOnScreen(secondNumber);
                            }
                        }
                    })
                    break;


                case ("."):
                    if (secondNumber.length === 0) {
                        firstNumber.push(value);
                        setScreenNuber(() => { return showOnScreen(firstNumber); });
                    } else if (firstNumber.length === 0) {

                    } else {
                        secondNumber.push(value);
                        setScreenNuber(() => { return showOnScreen(secondNumber); });
                    }
                    break;

                case ("cross"):
                    if (secondNumber.length === 0) {
                        firstNumber.pop();
                        digitOne = parseFloat(showOnScreen(firstNumber));
                        setScreenNuber(() => { return showOnScreen(firstNumber); });
                    } else if (firstNumber.length === 0) {

                    } else {
                        secondNumber.pop();
                        setScreenNuber(() => { return showOnScreen(secondNumber); });
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


                    <div className="container button-area">
                        <Row clicked={calculate} />
                    </div>

                </div>

                <div className="col-md-3 hide"></div>
            </div>
        </div>
    )
}


export default App;