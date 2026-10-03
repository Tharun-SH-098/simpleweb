/* SIDEBAR */

function toggleSidebar() {

    document
        .getElementById("sidebar")
        .classList.toggle("open");

}


/* PAGE NAVIGATION */

function showPage(pageId, element) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active-page"
            );

        });

    const page =
        document.getElementById(pageId);

    if (page) {

        page.classList.add(
            "active-page"
        );

    }

    document
        .querySelectorAll(".menu-link")
        .forEach(link => {

            link.classList.remove("active");

        });

    if (element) {

        element.classList.add("active");

    }

    const title =
        pageId.charAt(0).toUpperCase()
        + pageId.slice(1);

    document
        .getElementById("breadcrumbTitle")
        .textContent = title;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* COUNTER ANIMATION */

function animateCounters() {

    const counters =
        document.querySelectorAll(
            ".stat-card h2"
        );

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            Math.max(
                1,
                Math.ceil(target / 60)
            );

        const timer =
            setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent =
                    current.toLocaleString();

            }, 20);

    });

}


/* ACTIVITY CHART */

const chartCanvas =
    document.getElementById(
        "activityChart"
    );

let activityChart;

function createActivityChart(
    labels,
    data
) {

    activityChart =
        new Chart(
            chartCanvas,
            {

                type: "line",

                data: {

                    labels: labels,

                    datasets: [{

                        label:
                            "Recorded Transfers",

                        data: data,

                        borderWidth: 3,

                        tension: .4,

                        fill: true,

                        backgroundColor:
                            "rgba(37,99,235,.08)",

                        borderColor:
                            "#2563eb",

                        pointRadius: 3,

                        pointHoverRadius: 6

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {

                            display: false

                        }

                    },

                    scales: {

                        y: {

                            beginAtZero: true,

                            grid: {

                                color:
                                    "rgba(148,163,184,.12)"

                            },

                            ticks: {

                                font: {
                                    size: 9
                                }

                            }

                        },

                        x: {

                            grid: {

                                display: false

                            },

                            ticks: {

                                font: {
                                    size: 9
                                }

                            }

                        }

                    }

                }

            }
        );

}

createActivityChart(

    ["2011",
     "2013",
     "2015",
     "2017",
     "2019",
     "2021",
     "2023",
     "2025"],

    [310, 420, 510, 450,
     680, 740, 910, 1245]

);


/* UPDATE CHART */

function updateChart() {

    const period =
        document.getElementById(
            "chartPeriod"
        ).value;

    if (period === "quarter") {

        activityChart.data.labels = [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
        ];

        activityChart.data.datasets[0]
            .data =
            [280, 360, 420, 510];

    } else {

        activityChart.data.labels = [
            "2011",
            "2013",
            "2015",
            "2017",
            "2019",
            "2021",
            "2023",
            "2025"
        ];

        activityChart.data.datasets[0]
            .data =
            [310, 420, 510, 450,
             680, 740, 910, 1245];

    }

    activityChart.update();

}


/* CATEGORY CHART */

const categoryCanvas =
    document.getElementById(
        "categoryChart"
    );

new Chart(

    categoryCanvas,

    {

        type: "doughnut",

        data: {

            labels: [

                "Aircraft",
                "Naval Systems",
                "Vehicles",
                "Other"

            ],

            datasets: [{

                data: [
                    34,
                    22,
                    25,
                    19
                ],

                borderWidth: 0,

                backgroundColor: [

                    "#2563eb",
                    "#7c3aed",
                    "#16a34a",
                    "#f59e0b"

                ]

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "72%",

            plugins: {

                legend: {
                    display: false
                }

            }

        }

    }

);


/* SEARCH */

function searchRecords() {

    const input =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const rows =
        document
            .querySelectorAll(
                "#transferTable tbody tr"
            );

    rows.forEach(row => {

        const text =
            row.textContent.toLowerCase();

        row.style.display =
            text.includes(input)
                ? ""
                : "none";

    });

}


/* TRANSFER SEARCH */

function searchAllTransfers(input) {

    const value =
        input.value.toLowerCase();

    const table =
        input
            .closest(".panel")
            .querySelector("table");

    const rows =
        table.querySelectorAll(
            "tbody tr"
        );

    rows.forEach(row => {

        row.style.display =
            row.textContent
                .toLowerCase()
                .includes(value)
                ? ""
                : "none";

    });

}


/* DARK MODE */

function toggleTheme() {

    document
        .body
        .classList
        .toggle("dark");

}


/* NOTIFICATION */

function showNotification() {

    const toast =
        document.getElementById(
            "toast"
        );

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* START */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        animateCounters();

    }
);