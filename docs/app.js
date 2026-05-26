const APARTMENTS = 8;
const METERS = 3;

let currentLang = "ar";

const apartmentsDiv = document.getElementById("apartments");

function setLanguage(lang) {
  currentLang = lang;
}

function renderApartments() {

  for (let apt = 1; apt <= APARTMENTS; apt++) {

    let metersHTML = "";

    for (let meter = 1; meter <= METERS; meter++) {

      metersHTML += `
        <div class="meter-box">

          <strong>عداد ${meter}</strong>

          <div class="grid-2">

            <div>
              <label>السابقة</label>
              <input type="number" id="prev_${apt}_${meter}" value="0">
            </div>

            <div>
              <label>الحالية</label>
              <input type="number" id="current_${apt}_${meter}">
            </div>

          </div>

        </div>
      `;
    }

    apartmentsDiv.innerHTML += `
      <details>

        <summary>الشقة ${apt}</summary>

        <div class="details-body">

          ${metersHTML}

          <label>غير مدفوع سابق</label>
          <input type="number" id="unpaid_${apt}" value="0">

          <label>رصيد دائن</label>
          <input type="number" id="credit_${apt}" value="0">

        </div>

      </details>
    `;
  }
}

function calculateReports() {

  const reportsDiv = document.getElementById("reports");

  reportsDiv.innerHTML = `
    <div class="report-card">

      <div>

        <div class="report-title">
          Bills of the month
        </div>

        <div class="report-subtitle">
          Example Compact Report
        </div>

        <div class="gauges">

          <div class="gauge-box">
            <div class="gauge" style="--p:72">
              <div class="gauge-inner">72%</div>
            </div>
            <div>Apartment</div>
          </div>

          <div class="gauge-box">
            <div class="gauge" style="--p:25">
              <div class="gauge-inner">25%</div>
            </div>
            <div>M1</div>
          </div>

          <div class="gauge-box">
            <div class="gauge" style="--p:40">
              <div class="gauge-inner">40%</div>
            </div>
            <div>M2</div>
          </div>

          <div class="gauge-box">
            <div class="gauge" style="--p:35">
              <div class="gauge-inner">35%</div>
            </div>
            <div>M3</div>
          </div>

        </div>

        <div class="money-box">

          <div class="mini-row">
            <span>Water</span>
            <span>120 SAR</span>
          </div>

          <div class="mini-row">
            <span>Sewage</span>
            <span>45 SAR</span>
          </div>

          <div class="mini-row">
            <span>Previous</span>
            <span>20 SAR</span>
          </div>

          <div class="mini-row">
            <span>Credit</span>
            <span>10 SAR</span>
          </div>

        </div>

      </div>

      <div>

        <div class="total-box">
          Total: 175 SAR
        </div>

        <button class="export-btn" onclick="exportPNG()">
          Export PNG
        </button>

      </div>

    </div>
  `;
}

function saveCurrentData() {
  alert("Saved");
}

function resetAllData() {
  location.reload();
}

function exportPNG() {

  const report = document.querySelector(".report-card");

  html2canvas(report, {
    scale: 2,
    backgroundColor: "#ffffff"
  }).then(canvas => {

    const link = document.createElement("a");

    link.download = "report.png";
    link.href = canvas.toDataURL();

    link.click();
  });
}

renderApartments();
