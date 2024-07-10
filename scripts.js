var data = {
    chatinit: {
        title: ["Halo! <span class='emoji'> &#128075;</span>", "Saya Chatbot Unias", "Bagaimana saya dapat membantumu?"],
        options: ["Informasi", "Pendaftaran"]
    },
    informasi: {
        title: ["Pilih kategori informasi:"],
        options: ['Website', 'Alamat', 'Fakultas', 'Fasilitas', 'Kontak', 'Sosmed'],
        url: {}
    },
    website: {
        title: ["Dibawah ini link menuju website kampus Universitas Nias"],
        options: ['Website Kampus'],
        url: {
            more: "index.html",
            link: ["https://unias.ac.id/"]
        }
    },
    alamat: {
        title: ["Kantor Rektorat : Jalan Pancasila No. 10 Kota Gunungsitoli, Sumatera Utara Nias 22814 Fakultas FKIP dan FST : Jalan Yos Sudarso No. 118/E-S, Ombolata Ulu, Gunungsitoli, Kota Gunungsitoli, Sumatera Utara 22812"],
        options: ["Google Maps"],
        url: {
            link: ["https://maps.app.goo.gl/fD1Z3fzywUtp5WDF6"]
        }
    },
    fakultas: {
        title: ["Berikut adalah beberapa fakultas di Universitas Nias:"],
        options: ["FKIP", "FE", "FST"],
        url: {}
    },
    fkip: {
        title: ["FAKULTAS KEGURUAN DAN ILMU PENDIDIKAN (FKIP)<br>1. Bimbingan dan Konseling<br>2. Pendidikan Bahasa dan Sastra Indonesia<br>3. Pendidikan Bahasa Inggris<br>4. Pendidikan Biologi<br>5. Pendidikan Ekonomi<br>6. Pendidikan Guru Sekolah Dasar<br>7. Pendidikan Matematika<br>8. Pendidikan Pancasila dan Kewarganegaraan<br>9. Pendidikan Teknik Bangunan"],
        url: {}
    },
    fe: {
        title: ["FAKULTAS EKONOMI (FE)<br>1. Manajemen<br>2. Akuntansi<br>3. Manajemen Perusahaan<br>"],
        url: {}
    },
    fst: {
        title: ["FAKULTAS SAINS DAN TEKNOLOGI (FST)<br>1. Agroteknologi<br>2. Sumber Daya Akuatik<br>3. Teknologi Informasi<br>"],
        url: {}
    },
    fasilitas: {
        title: ["FASILITAS YANG TERSEDIA:"],
        options: ['E-Learning', 'SIMAT', 'Repository', 'OJS', 'Library'],
        url: {
            link: ["https://elearning.unias.ac.id/", "https://simat.unias.ac.id/", "https://repo.unias.ac.id/", "https://ojs.unias.ac.id/", "https://library.unias.ac.id/"]
        }
    },
    kontak: {
        title: ["INFORMASI KONTAK:"],
        options: ['Email : admin@unias.ac.id', 'Telepon : (0639) 2620815'],
        url: {
            link: ["mailto:admin@unias.ac.id", "tel:(0639) 2620815", "https://repo.unias.ac.id/"]
        }
    },
    sosmed: {
        title: ["Pilih Sosial Media Berikut:"],
        options: ['Fb Unias', 'Fb HMPS TI', 'Insta Unias', 'Insta HMPS TI'],
        url: {}
    },
    fbunias: {
        title: ["Dibawah ini link menuju Facebook Universitas Nias"],
        options: ['Facebook'],
        url: {
            link: ["https://web.facebook.com/uniascenterofexcellence"]
        }
    },
    fbhmpsti: {
        title: ["Dibawah ini link menuju Facebook HMPS Teknologi Informasi"],
        options: ['Facebook'],
        url: {
            link: ["https://web.facebook.com/profile.php?id=100089553916250"]
        }
    },
    instaunias: {
        title: ["Dibawah ini link menuju Instagram Univeristas Nias"],
        options: ['Instagram'],
        url: {
            link: ["https://www.instagram.com/info_unias/?hl=en"]
        }
    },
    instahmpsti: {
        title: ["Dibawah ini link menuju Instagram HMPS Teknologi Informasi"],
        options: ['Instagram'],
        url: {
            link: ["https://www.instagram.com/hmps_ti_unias/?hl=en"]
        }
    },
    pendaftaran: {
        title: ["Informasi Pendaftaran"],
        options: ['Info Pendaftaran', 'Syarat Pendaftaran', 'Beasiswa'],
        url: {}
    },
    infopendaftaran: {
        title: ["INFORMASI PENDAFTARAN:"],
        options: ['Gelombang 1 : 01 Maret s/d 31 Maret 2024', 'Gelombang 2 : 01 April s/d 30 April 2024', 'Gelombang 3 : 01 Mei s/d 31 Mei 2024', 'Gelombang 4 : 01 Juni s/d 31 Juli 2024', 'Gelombang 5 : 01 Agustus s/d 10 Agustus 2024'],
        url: {
            link: ["https://pmb.unias.ac.id/", "https://pmb.unias.ac.id/", "https://pmb.unias.ac.id/", "https://pmb.unias.ac.id/", "https://pmb.unias.ac.id/"]
        }
    },
    syaratpendaftaran: {
        title: ["SYARAT PENDAFTARAN:<br><br>a. Scan ijazah dan Scan SKHUN SMA/MA/SMK sederajat yang telah dilegalisir terbaru kedalam format .JPG dengan ukuran maksimal 700Kb<br>b. Bagi Lulusan Perguruan Tinggi lain (Mahasiswa Transfer), Scan Ijazah yang dilegalisir terakhir (untuk ahli jenjang) kedalam format .JPG dengan maksimal ukuran 700Kb<br>c. Scan Transkrip Akademik/Nilai (bagi mahasiswa pindahan) kedalam format .JPG dengan maksimal ukuran 700Kb<br>d. Scan Surat Pindah (bagi mahasiswa pindahan) kedalam format .JPG dengan maksimal ukuran 700Kb<br>e. Scan Fotokopi Kartu Keluarga kedalam format .JPG dengan maksimal ukuran 700Kb<br>f. Pasphoto terbaru ukuran 3x4 cm warna latar Merah dengan maksimal ukuran 500Kb"],
        url: {}
    },
    beasiswa: {
        title: ["FASILITAS BEASISWA:<br><br>a. Beasiswa KIP Kuliah<br>b. Beasiswa UKT<br>c. Beasiswa dari Pemerintah Kab/Kota se-Kepulauan Nias<br>d. Beasiswa Yayasan Perguruan Tinggi Nias<br>e. Beasiswa Donatur Universitas Nias."],
        url: {}
    }
}

document.querySelector(".backBtn").addEventListener("click", function() {
    handleBack();
});

document.getElementById("init").addEventListener("click", showChatBot);

var cbot = document.getElementById("chat-box");
var viewHistory = [];
var len1 = data.chatinit.title.length;

function showChatBot() {
    var chatBox = document.getElementById('test');
    if (chatBox.style.display === 'none') {
        chatBox.style.display = 'block';
        initChat();
    } else {
        chatBox.style.display = 'none';
    }
}

function initChat() {
    j = 0;
    cbot.innerHTML = '';
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 500));
    }
    setTimeout(function () {
        showOptions(data.chatinit.options)
    }, ((len1 + 1) * 500))
}

var j = 0;
function handleChat() {
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options) {
    document.querySelectorAll(".opt").forEach(el => el.classList.add('disabled')); // Pastikan semua opsi memiliki kelas disabled
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<div data-value="' + options[i].replace(/ /g, '').toLowerCase() + '">' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt"); // Pastikan setiap opsi memiliki kelas opt
        opt.addEventListener("click", handleOpt); // Pastikan setiap opsi memiliki event listener yang memanggil handleOpt()
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    if (this.classList.contains('disabled')) return;

    var str = this.innerText;
    var dataValue = this.querySelector('div').getAttribute('data-value');

    // Simpan riwayat tampilan sebelumnya
    viewHistory.push({
        title: cbot.innerHTML,
        options: Array.from(document.querySelectorAll('.opt')).map(opt => opt.outerHTML)
    });

    cbot.innerHTML = '';

    // Tampilkan pesan yang tetap (misalnya "Informasi")
    var elm = document.createElement("p");
    elm.setAttribute("class", "msg");
    elm.innerHTML = '<span class="usrMsg">' + str + '</span>';
    cbot.appendChild(elm);

    // Tampilkan opsi-opsi baru di sekitarnya
    var tempObj = data[dataValue];
    var len2 = tempObj.title.length;

    for (var k = 0; k < len2; k++) {
        var reply = document.createElement("p");
        reply.setAttribute("class", "msg");
        reply.innerHTML = tempObj.title[k];
        cbot.appendChild(reply);
    }

    // Jika opsi memiliki link, arahkan ke link tersebut setelah diklik
    if (tempObj.url && tempObj.url.link && tempObj.url.link.length > 0) {
        // Tambahkan tombol link untuk setiap opsi yang memiliki link
        var linkOptions = tempObj.options.map((opt, index) => {
            return `<div class="opt" data-value="${dataValue + index}">${opt}</div>`;
        }).join('');
        cbot.innerHTML += linkOptions;

        // Tambahkan event listener untuk setiap tombol opsi yang memiliki link
        tempObj.options.forEach((opt, index) => {
            document.querySelector(`.opt[data-value="${dataValue + index}"]`).addEventListener("click", function() {
                window.location.href = tempObj.url.link[index]; // Mengarahkan ke link yang sesuai
            });
        });
    } else {
        // Tampilkan opsi tambahan jika tidak ada link yang harus diarahkan
        showOptions(tempObj.options);
    }

    handleScroll();
}


function handleBack() {
    if (viewHistory.length > 0) {
        var lastView = viewHistory.pop();
        cbot.innerHTML = lastView.title;
        cbot.querySelectorAll('.opt').forEach((opt, i) => {
            opt.outerHTML = lastView.options[i];
        });
        document.querySelectorAll(".opt").forEach(opt => opt.addEventListener("click", handleOpt));
        handleScroll();
    } else {
        cbot.innerHTML = '';
        for (var i = 0; i < len1; i++) {
            var elm = document.createElement("p");
            elm.innerHTML = data.chatinit.title[i];
            elm.setAttribute("class", "msg");
            cbot.appendChild(elm);
        }
        showOptions(data.chatinit.options);
        handleScroll();
    }
}

function handleScroll() {
    cbot.scrollTop = cbot.scrollHeight;
}

function closeChat() {
    var chatFrame = document.getElementById('test');
    chatFrame.style.display = 'none';
}
