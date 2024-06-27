// Object to track values.
const Calculator = {
    Display_Value: '0', // Display 0 on screen
    First_Operand: null, // First operand
    Wait_Second_Operand: false, // Check for second operand
    operator: null, // Operator
};

// Load click sound
const clickSound = new Audio('./media/tie.mp3');

// Update values on button click.
function Input_Digit(digit) {
    clickSound.play();
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// Handle decimal points.
function Input_Decimal(dot) {
    clickSound.play();
    if (Calculator.Wait_Second_Operand) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// Handle operators.
function Handle_Operator(Next_Operator) {
    clickSound.play();
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_Input;
    } else if (operator) {
        const result = Perform_Calculation[operator](First_Operand, Value_Input);
        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

// Perform calculations.
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

// Reset calculator.
function Calculator_Reset() {
    clickSound.play();
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// Update display.
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

// Monitor button clicks.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) return;

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
});

