const onSecond = function() {
  const target = new Date(2019,2,29,23,0,0);
  const now    = new Date();

  const diff = target - now;
  const diff_secs = diff/1000.0;
  const diff_mins = diff_secs/60.0;
  const diff_hours = diff_mins/60.0;
  const diff_days = diff_hours/24.0;

  // whole days
  const whole_days = parseInt(diff_days);

  const fractional_days = diff_days - whole_days;

  // whole hours
  const whole_hours = parseInt(((fractional_days)*86400)/(60.0*60.0));

  const diffAfterHours = diff_secs - ((whole_days*86400)+(whole_hours*3600))
  const whole_mins = parseInt(diffAfterHours/60.0);

  const whole_seconds = parseInt(diffAfterHours - (whole_mins*60.0));
  console.log(`${whole_days} Days ${whole_hours} Hours ${whole_mins} Mins ${whole_seconds} secs`);

  // as there's less than 100 days to brexit, just need 2 digits even for days

  const days0 = parseInt(whole_days/10);
  const days1 = parseInt(whole_days%10);
  const hours0 = parseInt(whole_hours/10);
  const hours1 = parseInt(whole_hours%10);
  const mins0 = parseInt(whole_mins/10);
  const mins1 = parseInt(whole_mins%10);
  const secs0 = parseInt(whole_seconds/10);
  const secs1 = parseInt(whole_seconds%10);

  const digits = {
    days0: days0,
    days1: days1,
    hours0: hours0,
    hours1: hours1,
    mins0: mins0,
    mins1: mins1,
    secs0: secs0,
    secs1: secs1
  };

  Object.keys(digits).forEach((digitKey) => {
    const digitDiv = document.querySelector(`#${digitKey}`);
    digitDiv.innerHTML = '';
    const digitValue = digits[digitKey];
    const digitImageDiv = document.createElement("h1");
    digitImageDiv.textContent=`${digitValue}`;
    digitDiv.appendChild(digitImageDiv);
  });

}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM has loaded");
  const t=setInterval(onSecond,1000);
});
