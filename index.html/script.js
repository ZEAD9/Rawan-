
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const envelope = document.getElementById("envelope");

// زرار فتح المفاجأة وإظهار الرسالة
openBtn.addEventListener("click", function () {

    openBtn.disabled = true;
    openBtn.textContent = "مفاجأة رورو 💜";

    // إظهار الظرف
    envelope.classList.add("show");

    // فتح الظرف
    setTimeout(function () {
        envelope.classList.add("open");
    }, 300);

    // إظهار الرسالة
    setTimeout(function () {
        letter.classList.remove("hidden");

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 1500);

});
