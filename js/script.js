// ============================================
// The Rooted Library - Premium JavaScript
// ============================================

// Data Premium
const booksData = [
    {
        id: 1,
        title: "Tarombo ni Raja Sisingamangaraja XII",
        author: "Dr. Parulian Simanjuntak",
        year: 2015,
        desc: "Sejarah lengkap silsilah Raja Sisingamangaraja XII dan keturunannya yang heroik"
    },
    {
        id: 2,
        title: "Adat Alem Batak Toba",
        author: "Mangaradja Onggang Parlindungan",
        year: 1998,
        desc: "Pedoman lengkap adat istiadat dan upacara adat Batak Toba tradisional"
    },
    {
        id: 3,
        title: "Gorga Batak: Seni dan Filosofinya",
        author: "Dr. Sautmegin Situmorang",
        year: 2020,
        desc: "Studi mendalam tentang motif ukiran gorga dan makna filosofisnya"
    },
    {
        id: 4,
        title: "Saur Matua ni Batak Toba",
        author: "Pdt. Dr. J. L. S. Hutabarat",
        year: 1985,
        desc: "Kumpulan 500+ pepatah bijak Batak Toba beserta tafsir lengkap"
    },
    {
        id: 5,
        title: "Marga-Marga Batak Toba Lengkap",
        author: "Tim Peneliti Budaya Batak",
        year: 2022,
        desc: "Daftar lengkap 119 marga Batak Toba beserta asal-usul dan distribusi global"
    }
];

let reviews = [
    {
        name: "Sangap Sian Toraja",
        text: "Koleksi buku Batak Toba paling lengkap yang pernah saya temukan! Sangat membantu penelitian adat saya.",
        time: "3 jam lalu"
    },
    {
        name: "Juan Siagian",
        text: "Platform digital premium untuk pelestarian budaya Batak. UI/UX sangat modern dan responsif!",
        time: "1 hari lalu"
    }
];

let dbBooks = [
    {id: 1, judul: "Tarombo Batak", penulis: "Sutan", tahun: 2005},
    {id: 2, judul: "Gorga Tradisional", penulis: "Parada", tahun: 2018}
];

// Initialize Premium
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    loadBooks();
    loadReviews();
    renderDbTable();
    setupEventListeners();
}

// Navigation Premium
function showSection(sectionId)
NEXT
