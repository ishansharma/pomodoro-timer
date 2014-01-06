var pomodoroTime = 25;
var breakTime = 5;
var isPomodoro = 1;
var isBreak = 0;
var timeLeft = 25;
var pomodoroPaused = 0;
var pomodorosCompleted = 0;
var intervalId;
var timerText = document.getElementById('timer_text');
var button = document.getElementById('main_button');
var reportText = document.getElementById('report_text');


function reduceTime() {
	if (isBreak && !(timeLeft)) {
		button.className = 'button start';
		button.innerHTML = 'Start';
		breakTime = 5;
		isPomodoro = 1;
		isBreak = 0;
		timeLeft = 25;
		pomodoroPaused = 0;
		timerText.innerHTML = timeLeft;
		// reportText.innerHTML = pomodorosCompleted + " Pomodoros Completed";
		window.clearInterval(intervalId);
		return 0;
	}
	if (!(pomodoroPaused)) {
		if (timeLeft > 0) {
			timeLeft -= 1;
			timerText.innerHTML = timeLeft;
		}
		else if (timeLeft <= 0) {
			if (isBreak == 0) {
				timeLeft = 5;
				pomodorosCompleted += 1;
				reportText.innerHTML = pomodorosCompleted + " Pomodoros Completed";
			}
			isPomodoro = 0;
			isBreak = 1; 
			timerText.innerHTML = timeLeft;
		}
	}
	else {
		window.clearInterval(intervalId);
	}
}

function stopTimer() {
	pomodoroPaused = 1;
}

/* Handles the main login */
function fire() {
	if (button.className == 'button start') {
		button.className = 'button pause';
		button.innerHTML = 'Pause';
		pomodoroPaused = 0
		/* Function to start timer */
		if (isPomodoro) {
			intervalId = window.setInterval(reduceTime, 60000);
		}
	}
	else {
		button.className = 'button start';
		button.innerHTML = 'Start';
		/* Function to pause timer*/
		if (isPomodoro) {
			stopTimer();
		}
	}
}