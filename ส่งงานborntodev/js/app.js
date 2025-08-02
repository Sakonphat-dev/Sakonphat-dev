document.getElementById("bmiForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const weight = parseFloat(document.getElementById("weight").value);
      const heightCm = parseFloat(document.getElementById("height").value);
      const heightM = heightCm / 100;

      const bmi = weight / (heightM * heightM);
      const result = bmi.toFixed(2);

      let status = "";
      if (bmi < 18.5) {
        status = "น้ำหนักน้อย";
      } else if (bmi < 23) {
        status = "น้ำหนักปกติ";
      } else if (bmi < 25) {
        status = "น้ำหนักเกิน";
      } else if (bmi < 30) {
        status = "อ้วน";
      } else {
        status = "อ้วนมาก";
      }

      const resultDiv = document.getElementById("result");
      resultDiv.classList.remove("d-none");
      resultDiv.innerHTML = `BMI ของคุณคือ <strong>${result}</strong> (${status})`;
    });
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>