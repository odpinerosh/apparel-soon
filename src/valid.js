const txtMail = document.getElementById('txtMail');
const btnSubmit = document.getElementById('btnSubmit');

const funValidar = el => {
    el.preventDefault();
    el.classList.remove("border-danger");
  
    if(txtMail.value=='' || !funTestMail(txtMail.value)) {
      funAppplyVal(txtMail);
      return false;
    }
  
  }  
  
  const funAppplyVal = (elem) => {
    elem.focus();
    elem.classList.add('border-danger');
  
    return true;
  }
  
  
  const funTestMail = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }
  
  btnSubmit.addEventListener('click', funValidar);