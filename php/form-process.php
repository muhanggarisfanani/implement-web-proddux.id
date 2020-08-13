<?php

$errorMSG = "";

// NAMA
if (empty($_POST["nama"])) {
    $errorMSG = "Nama diperlukan\n";
} else {
    $nama = $_POST["nama"];
}

// INSTANSI
if (empty($_POST["instansi"])) {
    $errorMSG = "Instansi diperlukan\n";
} else {
    $instansi = $_POST["instansi"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email diperlukan\n";
} else {
    $email = $_POST["email"];
}

// Kontak
if (empty($_POST["kontak"])) {
    $errorMSG .= "Kontak diperlukan\n";
} else {
    $kontak = $_POST["kontak"];
}

// Is Mahasiswa
if (isset($_POST['mahasiswa']) && $_POST['mahasiswa'] == 'Ya') 
{
    $mahasiswa = $_POST['mahasiswa'];
}
else
{
    $mahasiswa = 'Bukan';
}

// Jenis Proyek
if (empty($_POST["jenisproyek"])) {
    $errorMSG .= "Jenis proyek diperlukan\n";
} else {
    $jenisproyek = $_POST["jenisproyek"];
}

// Detail Spesifikasi
if (empty($_POST["detailspek"])) {
    $errorMSG .= "Detail Spesifikasi Proyek diperlukan\n";
} else {
    $detailspek = $_POST["detailspek"];
}

// Sudah Memiliki Desain?
$isHasDesign = $_POST["options1"];

// Ekspektasi Biaya
if (empty($_POST["biaya"])) {
    $errorMSG .= "Ekspektasi biaya diperlukan\n";
} else {
    $biaya = $_POST["biaya"];
}

// Ekspektasi Deadline
if (empty($_POST["deadline"])) {
    $errorMSG .= "Ekspektasi deadline diperlukan\n";
} else {
    $deadline = $_POST["deadline"];
}

// Dapat Info Proddux Indonesia dari?
$sumberinfo = $_POST["sumberinfo"];

// Kemungkinan Dilakukan Tatap Muka
$isTatapMuka = $_POST["options2"];

// Promo
$promo = $_POST["promo"];

$EmailTo = "executive@proddux.id";
$Subject = "Request proyek | Proddux Indonesia";

// prepare email body text
$Body .= "Nama: \n";
$Body .= $nama;
$Body .= "\n\n";
$Body .= "Instansi: \n";
$Body .= $instansi;
$Body .= "\n\n";
$Body .= "Email: \n";
$Body .= $email;
$Body .= "\n\n";
$Body .= "Kontak: \n";
$Body .= $kontak;
$Body .= "\n\n";
$Body .= "Mahasiswa: \n";
$Body .= $mahasiswa;
$Body .= "\n\n";
$Body .= "Jenis proyek: \n";
$Body .= $jenisproyek;
$Body .= "\n\n";
$Body .= "Detail spesifikasi proyek: \n";
$Body .= $detailspek;
$Body .= "\n\n";
$Body .= "Sudah memiliki desain: \n";
$Body .= $isHasDesign;
$Body .= "\n\n";
$Body .= "Ekspektasi biaya (Rp): \n";
$Body .= $biaya;
$Body .= "\n\n";
$Body .= "Ekspektasi deadline: \n";
$Body .= $deadline;
$Body .= "\n\n";
$Body .= "Sumber info: \n";
$Body .= $sumberinfo;
$Body .= "\n\n";
$Body .= "Dapat melakukan tatap muka?: \n";
$Body .= $isTatapMuka;
$Body .= "\n\n";
$Body .= "Kode promo: \n";
$Body .= $promo;
$Body .= "\n\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
    header("Location: ../submitted/"); 
    exit();
}else{
    if($errorMSG == ""){
        header("Location: ../error/"); 
        exit();
    } else {
        echo $errorMSG;
    }
}

?>