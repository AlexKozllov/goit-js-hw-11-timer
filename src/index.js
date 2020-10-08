import css from "./css/style.css";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.days = document.querySelector(selector);
    this.targetDate = targetDate;
    this.interval = "";
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getDays(time) {
    return this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  }
  getHours(time) {
    return this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
  }
  getMins(time) {
    return this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  }
  getSecs(time) {
    return this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }
  updateClockface(time) {
    if (time) {
      this.days.children[0].children[0].textContent = this.getDays(time);
      this.days.children[1].children[0].textContent = this.getHours(time);
      this.days.children[2].children[0].textContent = this.getMins(time);
      this.days.children[3].children[0].textContent = this.getSecs(time);
    }
  }
  setTime() {
    this.deltaTime = this.targetDate - Date.now();
    this.updateClockface(this.deltaTime);
  }
  start() {
    this.setTime();
    this.interval = setInterval(() => {
      this.setTime();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1 2021"),
});

timer.start();
