
document.addEventListener("DOMContentLoaded", function () {
 
const detailButtons = document.querySelectorAll('.detailsBtn');

detailButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const row = this.closest('tr');
    const detailsRow = row.nextElementSibling;

   
    detailsRow.classList.toggle('active');

   
    this.textContent = detailsRow.classList.contains('active')
      ? 'إخفاء التفاصيل'
      : 'إظهار التفاصيل';
  });
});

  const form = document.getElementById("addAppForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmission);
  }
});

function validateAppName(name) {
  const regexappName = /^[A-Za-z]+$/;//للكتابة بحروف اتكليزية فقط و بدون فراغات
  return regexappName.test(name);
}
function validateManufacturer(name) {
  const regexcompany = /^[a-zA-Z0-9]+$/;//للكتابة بحروف انكليزية و ارقام 
  return regexcompany.test(name);
}

function validateURL(url) {
  const regexUrl = /^(http|https):\/\/[^ "]+$/;
  return regexUrl.test(url);
}

function handleFormSubmission(e) {
  e.preventDefault();

  const setErrorMessage = (id, msg) => {
    const errorElement = document.getElementById(id + "-error");
    if (errorElement) errorElement.textContent = msg;
  };
  
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach((el) => (el.textContent = ""));



    const isFreeElement = document.querySelector(
      'input[name="isFree"]:checked'
    );
    const isFree = isFreeElement ? isFreeElement.value : "";
    const newAppData = {
      name: AppName,
      maker: ManufacturerName,
      site: WebsiteURL,
      isFree: isFree === "yes" ? "مجاني" : "غير مجاني",
      category: document.getElementById("usageField").value,
    };
  }
  function sendData(){
    console.log("تم ارسال البيانات بنجاح");//بعد نجاح الارسال اعد المستخدم الى الصفحة السابقة
    window.location.href=(apps.html);
    return false;
  
  }
