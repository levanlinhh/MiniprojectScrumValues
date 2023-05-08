// Lấy vùng chứa biểu đồ
var ctx = document.getElementById("scrum-chart").getContext("2d");

// Lấy giá trị của input khi người dùng nhấn vào nút "Hiển thị kết quả"
document
  .getElementById("show-result-btn")
  .addEventListener("click", function () {
    const Commitment =
      parseInt(document.getElementById("commitment-input").value) || 0;
    const Openness =
      parseInt(document.getElementById("openness-input").value) || 0;
    const Respect =
      parseInt(document.getElementById("respect-input").value) || 0;
    const Courage =
      parseInt(document.getElementById("courage-input").value) || 0;
    const Focus = parseInt(document.getElementById("focus-input").value) || 0;

    // Kiểm tra giá trị nhập vào
    if (
      isNaN(Commitment) ||
      isNaN(Openness) ||
      isNaN(Respect) ||
      isNaN(Courage) ||
      isNaN(Focus)
    ) {
      alert("Bạn chưa nhập giá trị nào!");
    } else if (
      Commitment < 1 ||
      Commitment > 5 ||
      Openness < 1 ||
      Openness > 5 ||
      Respect < 1 ||
      Respect > 5 ||
      Courage < 1 ||
      Courage > 5 ||
      Focus < 1 ||
      Focus > 5
    ) {
      alert("Giá trị nhập vào phải từ 1 đến 5 và không được âm, phải là số");
    } else {
      // Tổng các giá trị input
      const total = 5;

      // Tạo biểu đồ bằng Chart.js
      var myChart = new Chart(ctx, {
        type: "radar",
        data: {
          labels: ["Courage", "Commitment", "Focus", "Openness", "Respect"],
          datasets: [
            {
              label: "Scrum Values",
              data: [Courage, Commitment, Focus, Openness, Respect],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 0,
            },
            {
              label: "",
              data: [0, 1, 2, 3, 4, 5],
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 0,
            },
          ],
        },
        options: {
          scale: {
            ticks: {
              beginAtZero: true,
              min: 0, // Giá trị nhỏ nhất trên trục biểu đồ là 0
              max: total, // Giới hạn giá trị tối đa của trục biểu đồ là 5
              stepSize: 1, // Chia khoảng cách giữa các giá trị trục biểu đồ là 1
            },
          },
        },
      });
    }
  });
