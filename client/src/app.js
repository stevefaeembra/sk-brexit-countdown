const onSecond = function() {
  const target = new Date(2019,2,29,23,0,0);
  const now = new Date();

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

}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM has loaded");
  const t=setInterval(onSecond,1000);
});
