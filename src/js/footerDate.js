const FOOTER_DATE_ID = 'footerDate'

function footerDate() {
  const el = document.getElementById(FOOTER_DATE_ID);
  const year = new Date().getFullYear();

  return el.innerHTML = year;
}

export default footerDate;