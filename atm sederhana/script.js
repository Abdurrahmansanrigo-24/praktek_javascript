let saldo = 1000000; // saldo awal
  const pinBenar = "1111";

  function login() {
    let pin = document.getElementById("pinInput").value;
    if (pin === pinBenar) {
      showSection("menuSection");
      document.getElementById("saldo").innerText = saldo.toLocaleString();
    } else {
      alert("PIN salah!");
    }
  }

  function setorUang() {
    let jumlah = parseInt(document.getElementById("setorInput").value);
    if (jumlah > 0) {
      saldo += jumlah;
      document.getElementById("saldo").innerText = saldo.toLocaleString();
      document.getElementById("setorInput").value = "";
      showSection("menuSection");
    } else {
      alert("Jumlah tidak valid!");
    }
  }

  function tarikUang() {
    let jumlah = parseInt(document.getElementById("tarikInput").value);
    if (jumlah > 0 && jumlah <= saldo) {
      saldo -= jumlah;
      document.getElementById("saldo").innerText = saldo.toLocaleString();
      document.getElementById("tarikInput").value = "";
      showSection("menuSection");
    } else if (jumlah > saldo) {
      alert("Saldo tidak cukup!");
    } else {
      alert("Jumlah tidak valid!");
    }
  }

  function logout() {
    showSection("loginSection");
    document.getElementById("pinInput").value = "";
  }

  function showSection(sectionId) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("menuSection").style.display = "none";
    document.getElementById("setorSection").style.display = "none";
    document.getElementById("tarikSection").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
  }