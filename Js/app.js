function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function castSpell() {
    const wand = document.getElementById("wand");
    const container = document.getElementById("spark-container");

    // Movimiento de varita
    wand.style.transition = "transform 0.3s";
    wand.style.transform = "rotate(25deg)";

    // Crear chispas
    for (let i = 0; i < 15; i++) {
        const spark = document.createElement("div");
        spark.classList.add("spark");

        spark.style.left = "50%";
        spark.style.top = "20px";
        spark.style.setProperty("--x", Math.random());
        spark.style.setProperty("--y", Math.random());

        container.appendChild(spark);

        setTimeout(() => spark.remove(), 1000);
    }

    setTimeout(() => {
        wand.style.transform = "rotate(0deg)";
    }, 300);
}
