function goToPage(page) {
  if (page === 2) {
    window.location.href = "message.html";
  } else if (page === 3) {
    window.location.href = "surprise.html";
  }
}

function playMusic() {
  const music = document.getElementById("bg-music");
  if (music) {
    music.play().catch(() => {
      // المتصفح يمنع التشغيل التلقائي أحيانًا، نطلب من المستخدم الضغطة
      alert("الرجاء تشغيل الأغنية يدوياً من الصفحة.");
    });
  }
}
