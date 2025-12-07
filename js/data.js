// Data Fake Brand Indonesia
const brandsData = [
    {
        id: 1,
        category: "tiruan-langsung",
        categoryName: "Merek Tiruan Langsung",
        categoryNameEn: "Direct Imitation",
        originalBrand: "Adidas",
        fakeBrand: "Abibas",
        originalImage: "foto fake brand/Kategori Merek Tiruan Langsung/Asli/Adidas.png",
        fakeImage: "foto fake brand/Kategori Merek Tiruan Langsung/Palsu/Abibas.png",
        description: "Abibas meniru merek Adidas dengan menukar posisi huruf 'd' dan 'b'. Logo three stripes juga ditiru dengan modifikasi minimal.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Nama merek yang sangat mirip secara fonetik (Adidas → Abibas)",
                "Logo three stripes yang ikonik",
                "Tipografi dan gaya penulisan nama",
                "Skema warna yang identik"
            ],
            dampakBrandAsli: [
                "Kerugian ekonomi akibat penjualan produk palsu",
                "Dilusi merek (brand dilution) di pasar",
                "Kerusakan reputasi jika produk palsu berkualitas rendah",
                "Kebingungan konsumen (consumer confusion)"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dengan merek terdaftar" },
                { pasal: "Pasal 90", keterangan: "Penggunaan merek yang sama untuk barang sejenis" },
                { pasal: "Pasal 91", keterangan: "Penggunaan merek yang mirip untuk barang sejenis" }
            ]
        }
    },
    {
        id: 2,
        category: "tiruan-langsung",
        categoryName: "Merek Tiruan Langsung",
        categoryNameEn: "Direct Imitation",
        originalBrand: "Nike",
        fakeBrand: "Nkie",
        originalImage: "foto fake brand/Kategori Merek Tiruan Langsung/Asli/Nike.png",
        fakeImage: "foto fake brand/Kategori Merek Tiruan Langsung/Palsu/Nkie.png",
        description: "Nkie meniru Nike dengan menukar posisi huruf 'i' dan 'k'. Logo swoosh juga ditiru dengan bentuk serupa.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Nama merek dengan anagram huruf (Nike → Nkie)",
                "Logo swoosh yang menjadi ciri khas Nike",
                "Font dan style penulisan",
                "Positioning sebagai brand olahraga"
            ],
            dampakBrandAsli: [
                "Kehilangan pangsa pasar di segmen menengah ke bawah",
                "Persepsi negatif terhadap kualitas brand",
                "Biaya tambahan untuk edukasi konsumen",
                "Potensi tuntutan hukum yang mahal"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dengan merek terdaftar" },
                { pasal: "Pasal 90", keterangan: "Penggunaan merek yang sama untuk barang sejenis" },
                { pasal: "Pasal 76", keterangan: "Hak gugat pemilik merek terdaftar" }
            ]
        }
    },
    {
        id: 3,
        category: "tiruan-langsung",
        categoryName: "Merek Tiruan Langsung",
        categoryNameEn: "Direct Imitation",
        originalBrand: "Sony",
        fakeBrand: "Sonia",
        originalImage: "foto fake brand/Kategori Merek Tiruan Langsung/Asli/Sony.png",
        fakeImage: "foto fake brand/Kategori Merek Tiruan Langsung/Palsu/Sonia.png",
        description: "Sonia meniru merek Sony dengan menambahkan huruf 'ia' di akhir. Memanfaatkan reputasi Sony sebagai brand elektronik terpercaya.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Nama merek dengan penambahan suffix (Sony → Sonia)",
                "Tipografi dan gaya logo yang serupa",
                "Asosiasi dengan produk elektronik berkualitas",
                "Warna dan desain kemasan"
            ],
            dampakBrandAsli: [
                "Erosi kepercayaan konsumen terhadap produk Sony",
                "Kerugian finansial dari penjualan produk tiruan",
                "Risiko keamanan produk elektronik palsu",
                "Biaya penegakan hukum dan monitoring pasar"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dengan merek terdaftar" },
                { pasal: "Pasal 91", keterangan: "Penggunaan merek yang mirip untuk barang sejenis" },
                { pasal: "Pasal 94", keterangan: "Penyitaan barang hasil pelanggaran" }
            ]
        }
    },
    {
        id: 4,
        category: "tiruan-langsung",
        categoryName: "Merek Tiruan Langsung",
        categoryNameEn: "Direct Imitation",
        originalBrand: "Supreme",
        fakeBrand: "Superme",
        originalImage: "foto fake brand/Kategori Merek Tiruan Langsung/Asli/Supreme.png",
        fakeImage: "foto fake brand/Kategori Merek Tiruan Langsung/Palsu/Superme.png",
        description: "Superme meniru Supreme dengan menukar posisi huruf 'e' dan 'r'. Box logo merah putih yang ikonik juga ditiru.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Nama merek dengan transposisi huruf (Supreme → Superme)",
                "Box logo merah dengan tulisan putih",
                "Font Futura Bold yang khas",
                "Positioning sebagai streetwear premium"
            ],
            dampakBrandAsli: [
                "Devaluasi eksklusivitas brand Supreme",
                "Kerugian dari pasar reseller dan koleksi",
                "Kebingungan di pasar streetwear",
                "Dampak pada kolaborasi dengan brand lain"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dengan merek terdaftar" },
                { pasal: "Pasal 90", keterangan: "Penggunaan merek yang sama untuk barang sejenis" },
                { pasal: "Pasal 83", keterangan: "Ganti rugi atas pelanggaran merek" }
            ]
        }
    },
    {
        id: 5,
        category: "menyerupai-konsep",
        categoryName: "Menyerupai Konsep",
        categoryNameEn: "Look-alike Packaging",
        originalBrand: "KitKat",
        fakeBrand: "Kicker",
        originalImage: "foto fake brand/Kategori Merek Menyerupai Konsep/Asli/Kitkat.png",
        fakeImage: "foto fake brand/Kategori Merek Menyerupai Konsep/Palsu/Kicker.png",
        description: "Kicker meniru konsep kemasan KitKat dengan warna merah dominan dan bentuk produk wafer cokelat yang serupa.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Skema warna merah yang dominan pada kemasan",
                "Konsep produk wafer berlapis cokelat",
                "Layout dan desain kemasan yang mirip",
                "Nama dengan awalan 'Ki-' yang serupa secara fonetik"
            ],
            dampakBrandAsli: [
                "Konsumen tertipu membeli produk yang bukan KitKat",
                "Penurunan penjualan di segmen pasar tradisional",
                "Risiko kesehatan jika produk tidak memenuhi standar",
                "Dilusi identitas visual brand"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dalam hal kemasan" },
                { pasal: "Pasal 91", keterangan: "Penggunaan merek yang mirip untuk barang sejenis" },
                { pasal: "Pasal 76", keterangan: "Hak gugat atas kerugian materiil dan immateriil" }
            ]
        }
    },
    {
        id: 6,
        category: "menyerupai-konsep",
        categoryName: "Menyerupai Konsep",
        categoryNameEn: "Look-alike Packaging",
        originalBrand: "Oreo",
        fakeBrand: "Boreo",
        originalImage: "foto fake brand/Kategori Merek Menyerupai Konsep/Asli/Oreo.png",
        fakeImage: "foto fake brand/Kategori Merek Menyerupai Konsep/Palsu/Boreo.png",
        description: "Boreo meniru Oreo dengan nama yang sangat mirip dan konsep biskuit sandwich cokelat dengan krim putih di tengah.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Nama merek dengan penambahan huruf 'B' (Oreo → Boreo)",
                "Konsep biskuit sandwich hitam dengan krim putih",
                "Warna kemasan biru yang identik",
                "Bentuk dan ukuran produk yang serupa"
            ],
            dampakBrandAsli: [
                "Kebingungan konsumen di rak toko",
                "Kerugian penjualan terutama di pasar tradisional",
                "Potensi kerusakan reputasi dari kualitas produk tiruan",
                "Biaya tambahan untuk diferensiasi produk"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dengan merek terdaftar" },
                { pasal: "Pasal 91", keterangan: "Penggunaan merek yang mirip untuk barang sejenis" },
                { pasal: "Pasal 92", keterangan: "Penggunaan tanda yang sama untuk barang tidak sejenis" }
            ]
        }
    },
    {
        id: 7,
        category: "menyerupai-konsep",
        categoryName: "Menyerupai Konsep",
        categoryNameEn: "Look-alike Packaging",
        originalBrand: "Silverqueen",
        fakeBrand: "Silverking",
        originalImage: "foto fake brand/Kategori Merek Menyerupai Konsep/Asli/Silverqueen.png",
        fakeImage: "foto fake brand/Kategori Merek Menyerupai Konsep/Palsu/Silverking.png",
        description: "Silverking meniru Silverqueen dengan mengganti kata 'Queen' menjadi 'King'. Konsep kemasan cokelat premium juga ditiru.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Prefix 'Silver-' yang identik dengan brand asli",
                "Konsep penamaan dengan kata kerajaan (Queen → King)",
                "Desain kemasan cokelat premium",
                "Warna dan layout kemasan yang serupa"
            ],
            dampakBrandAsli: [
                "Asosiasi negatif jika produk tiruan berkualitas rendah",
                "Kehilangan pangsa pasar cokelat lokal",
                "Kebingungan konsumen dalam memilih produk",
                "Potensi kerugian dari brand loyalty yang menurun"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dengan merek terdaftar" },
                { pasal: "Pasal 91", keterangan: "Penggunaan merek yang mirip untuk barang sejenis" },
                { pasal: "Pasal 83", keterangan: "Ganti rugi atas pelanggaran merek" }
            ]
        }
    },
    {
        id: 8,
        category: "passing-off",
        categoryName: "Memanfaatkan Ketenaran",
        categoryNameEn: "Passing Off",
        originalBrand: "Crocs",
        fakeBrand: "Cross",
        originalImage: "foto fake brand/Kategori Merek Memanfaatkan Ketenaran/Asli/Crocs.png",
        fakeImage: "foto fake brand/Kategori Merek Memanfaatkan Ketenaran/Palsu/Cross.png",
        description: "Cross memanfaatkan ketenaran Crocs dengan nama yang sangat mirip secara fonetik dan desain sandal karet berlubang yang identik.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Nama merek yang hampir identik secara fonetik (Crocs → Cross)",
                "Desain sandal karet dengan lubang-lubang khas",
                "Konsep sepatu kasual yang nyaman",
                "Target pasar yang sama"
            ],
            dampakBrandAsli: [
                "Passing off - konsumen mengira membeli Crocs asli",
                "Kerugian signifikan di pasar sandal kasual",
                "Devaluasi inovasi desain Crocs",
                "Biaya litigasi untuk melindungi merek"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dengan merek terkenal" },
                { pasal: "Pasal 90", keterangan: "Penggunaan merek yang sama untuk barang sejenis" },
                { pasal: "Pasal 76", keterangan: "Gugatan ganti rugi dan penghentian penggunaan" }
            ]
        }
    },
    {
        id: 9,
        category: "passing-off",
        categoryName: "Memanfaatkan Ketenaran",
        categoryNameEn: "Passing Off",
        originalBrand: "Starbucks",
        fakeBrand: "Starbung",
        originalImage: "foto fake brand/Kategori Merek Memanfaatkan Ketenaran/Asli/Starbucks.png",
        fakeImage: "foto fake brand/Kategori Merek Memanfaatkan Ketenaran/Palsu/Starbung.png",
        description: "Starbung memanfaatkan ketenaran Starbucks dengan nama dan logo yang sangat mirip untuk menarik konsumen yang mencari kopi premium.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Nama merek dengan prefix 'Star-' yang identik",
                "Logo circular dengan figur di tengah",
                "Warna hijau yang menjadi identitas Starbucks",
                "Konsep kedai kopi premium"
            ],
            dampakBrandAsli: [
                "Passing off yang merugikan goodwill Starbucks",
                "Kebingungan konsumen tentang afiliasi brand",
                "Potensi kerusakan reputasi dari kualitas produk tiruan",
                "Dilusi merek terkenal (famous mark dilution)"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1) huruf b", keterangan: "Persamaan pada pokoknya dengan merek terkenal" },
                { pasal: "Pasal 90", keterangan: "Penggunaan merek yang sama secara tanpa hak" },
                { pasal: "Pasal 83", keterangan: "Ganti rugi materiil dan immateriil" }
            ]
        }
    },
    {
        id: 10,
        category: "plagiat-visual",
        categoryName: "Plagiat Visual",
        categoryNameEn: "Visual Plagiarism",
        originalBrand: "Chanel",
        fakeBrand: "Chanel (Palsu)",
        originalImage: "foto fake brand/Kategori Plagiat Visual/Asli/Chanel.png",
        fakeImage: "foto fake brand/Kategori Plagiat Visual/Palsu/Chanel.png",
        description: "Produk Chanel palsu menyalin logo CC yang ikonik dengan modifikasi minimal, sering ditemukan pada tas, parfum, dan aksesoris.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Logo double C yang saling mengunci (interlocking CC)",
                "Nama merek CHANEL yang identik",
                "Desain produk dan kemasan premium",
                "Font dan tipografi yang sama persis"
            ],
            dampakBrandAsli: [
                "Kerugian ekonomi sangat besar di pasar luxury",
                "Devaluasi eksklusivitas brand Chanel",
                "Risiko kesehatan dari parfum/kosmetik palsu",
                "Kerusakan reputasi brand mewah"
            ],
            pasalTerkait: [
                { pasal: "Pasal 90", keterangan: "Penggunaan merek yang sama secara identik" },
                { pasal: "Pasal 94", keterangan: "Penyitaan barang hasil pelanggaran merek" },
                { pasal: "Pasal 91", keterangan: "Ancaman pidana penjara dan denda" }
            ]
        }
    },
    {
        id: 11,
        category: "plagiat-visual",
        categoryName: "Plagiat Visual",
        categoryNameEn: "Visual Plagiarism",
        originalBrand: "PlayStation 3",
        fakeBrand: "Polystation 3",
        originalImage: "foto fake brand/Kategori Plagiat Visual/Asli/Playstation3.png",
        fakeImage: "foto fake brand/Kategori Plagiat Visual/Palsu/polystation3.png",
        description: "Polystation meniru PlayStation dengan logo dan desain konsol yang sangat mirip, memanfaatkan ketenaran konsol game Sony.",
        analysis: {
            persamaanPokoknya: true,
            elemenDitiru: [
                "Nama dengan suffix '-station' yang identik",
                "Logo dengan font dan style yang sangat mirip",
                "Desain konsol dan controller yang serupa",
                "Kemasan dengan layout yang hampir sama"
            ],
            dampakBrandAsli: [
                "Konsumen tertipu membeli konsol palsu",
                "Kerugian besar di pasar gaming",
                "Risiko keamanan dari produk elektronik tidak bersertifikat",
                "Kerusakan reputasi PlayStation sebagai brand gaming"
            ],
            pasalTerkait: [
                { pasal: "Pasal 6 ayat (1)", keterangan: "Persamaan pada pokoknya dengan merek terdaftar" },
                { pasal: "Pasal 90", keterangan: "Penggunaan merek yang sama untuk barang sejenis" },
                { pasal: "Pasal 94", keterangan: "Penyitaan dan pemusnahan barang palsu" }
            ]
        }
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = brandsData;
}
