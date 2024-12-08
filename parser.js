function parseData(input) {
  const lines = input.split("\n");
  const result = [];
  let currentLomba = null;

  lines.forEach(line => {
    line = line.trim();

    if (line.startsWith("`Lomba")) {
      if (currentLomba) result.push(formatLomba(currentLomba));
      currentLomba = { nama: line.replace(/`Lomba\s*/, ""), data: {} };
    } else if (currentLomba) {
      if (/Kelas\s*:\s*/i.test(line)) currentLomba.data.kelas = line.split(":")[1].trim();
      else if (/Nama Team\s*:\s*/i.test(line)) currentLomba.data.namaTeam = line.split(":")[1].trim() || "-";
      else if (/Ketua Team\s*:\s*/i.test(line)) currentLomba.data.ketuaTeam = line.split(":")[1].trim();
      else if (/Nama Pemain\s*:\s*/i.test(line)) currentLomba.data.pemain = [];
      else if (/^\d+\.\s*/.test(line)) currentLomba.data.pemain.push(line.replace(/^\d+\.\s*/, "").trim() || "-");
    }
  });

  if (currentLomba) result.push(formatLomba(currentLomba));
  return result.join("\n\n");
}

function formatLomba(lomba) {
  const { nama, data } = lomba;
  const { kelas, namaTeam, ketuaTeam, pemain } = data;
  const pemainList = pemain.map((p, i) => `${i + 1}. ${p}`).join("\n");
  return `=====Data Lomba=====\n\nLomba : ${nama}\nKelas : ${kelas || "-"}\nNama Team : ${namaTeam || "-"}\nKetua Team : ${ketuaTeam || "-"}\nNama Pemain :\n${pemainList}\n\n`;
}


