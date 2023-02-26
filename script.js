const timer = document.querySelector('.timer');
const dateTo = new Date('2023-07-01');

const SEC_IN_MS = 1000;
const MIN_IN_MS = SEC_IN_MS * 60;
const HOUR_IN_MS = MIN_IN_MS * 60;
const DAY_IN_MS = HOUR_IN_MS * 24;

const calculateTime = () => {
  const distance = dateTo.getTime() - new Date().getTime();

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerText = `${days} დღე ${hours}სთ ${minutes}წთ ${seconds}წმ`;
};

setInterval(calculateTime, 1000);
