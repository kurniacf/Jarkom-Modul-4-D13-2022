# Praktikum Jaringan Komputer Modul 4 Kelompok D13

# Jarkom-Modul-4-D13-2022

| **No** | **Nama**                  | **NRP**    |
| ------ | ------------------------- | ---------- |
| 1      | Marcellino Mahesa Janitra | 5025201105 |
| 2      | Kurnia Cahya Febryanto    | 5025201073 |
| 3      | Abisha Kean Tuana Sirait  | 5025201052 |

---

## Daftar Isi
- [Topologi Jaringan](#topologi-jaringan)
- [Cisco Packet Tracet Method VLSM](#cisco-packet-tracer-method-vlsm)
- [GNS3 Method CIDR](#gns3-method-cidr)

---
## Topologi Jaringan
Diminta untuk membuat topologi jaringan sesuai dengan gambar berikut: </br>
<img src="https://user-images.githubusercontent.com/70510279/203208266-94a63645-8077-42a7-827e-62ed4fa5f26e.png" width="700"/>
</br>

Soal shift dikerjakan pada Cisco Packet Tracer dan GNS3 menggunakan metode perhitungan CLASSLESS yang berbeda.
Keterangan: Bila di CPT menggunakan VLSM, maka di GNS3 menggunakan CIDR atau Sebaliknya

## Cisco Packet Tracer Method VLSM
### Membuat Topologi Jaringan
Langkah pertama adalah membuat topologi jaringan yang sesuai yaitu dengan mengatur IP Address pada setiap interface yang ada. </br>
<img src="https://user-images.githubusercontent.com/70510279/203553759-a2a0cca4-baed-4af7-a428-e9df54b75410.png" width="700"/>

### Membuat Plotting Subnetting
Plottingan dimulan dari A1 hingga A18 yaitu sebagai berikut: </br>
<img src="https://user-images.githubusercontent.com/70510279/203554152-08e177a2-c438-4aae-9cff-f474a2687795.png" width="700"/>
</br>
Setelah dilakukan pembagian subnetting, maka dilakukan pendataan untuk setiap bagian yaitu pada tabel berikut: </br>

| **No** | **Subnet** | **Netmask** | **Host** | **Host Akhir(Digabung)** | 
| ------ | ---------- | ----------- | -------- | -------------- | 
| 1      | A1         | /22         | 1000     | 1001           | 
| 2      | A6         | /23         | 500      | 1001           | 
| 3      | A9         | /23         | 270      | 271            |
| 4      | A2         | /24         | 250      | 251            |
| 5      | A5         | /24         | 210      | 212            |
| 6      | A4         | /25         | 120      | 121            |
| 7      | A8         | /25         | 120      | 121            |
| 8      | A7         | /25         | 70       | 71             |
| 9      | A3         | /26         | 50       | 51             |
| 10     | A10        | /30         | 2        | 2              |
| 11     | A11        | /30         | 2        | 2              |
| 12     | A12        | /30         | 2        | 2              |
| 13     | A13        | /30         | 2        | 2              |
| 14     | A14        | /30         | 2        | 2              |
| 15     | A15        | /30         | 2        | 2              |
| 16     | A16        | /30         | 2        | 2              |
| 17     | A17        | /30         | 2        | 2              |
| 18     | A18        | /30         | 2        | 2              |

### Tree Pembagian IP Address
Setelah dilakukan pembagian subnetting, maka dilakukan pembagian IP Address menggunakan tree pada setiap interface yang ada. Pembagian IP dilakukan dengan menggunakan metode tree yaitu sebagai berikut: </br>
<img src="https://media.discordapp.net/attachments/677050949432377345/1044999039562809505/tree.png?width=1440&height=663" width="700"/>
</br>
Prefix IP yang digunakan harus menggunakan 192.191.X.X karena sesuai dengan pembagian IP kelompok D13. Pada pembagian IP dimulai dari 192.191.1.0/20 kemudian dibagi menjadi 2 bagian yaitu 192.191.1.0/21 hingga IP menjadi 192.191.1.X/30

### Tabel Pembagian IP Address
Mengikuti hasil tree dan pembagian subnetting di awal, maka dilakukan pembagian IP untuk mencari Network ID dan Netmasknya. Tabelnya yaitu sebagai berikut: </br>

| Kode  | Length | Host | Host Akhir (Digabung) | Network ID       | Netmask         | Host Minimal  | Host Maximal   | Broadcast ID   |
| ----- | ------ | ---- | --------------------- | ---------------- | --------------- | ------------- | -------------- | -------------- |
| A1    | /22    | 1000 | 1001                  | 192.191.8.0/22   | 255.255.252.0   | 192.191.8.1   | 192.191.11.254 | 192.191.11.255 |
| A6    | /23    | 500  | 501                   | 192.191.4.0/23   | 255.255.254.0   | 192.191.4.1   | 192.191.5.254  | 192.191.5.255  |
| A9    | /23    | 270  | 271                   | 192.191.6.0/23   | 255.255.254.0   | 192.191.6.1   | 192.191.7.254  | 192.191.7.255  |
| A2    | /24    | 250  | 251                   | 192.191.2.0/24   | 255.255.255.0   | 192.191.2.1   | 192.191.2.254  | 192.191.2.255  |
| A5    | /24    | 210  | 212                   | 192.191.3.0/24   | 255.255.255.0   | 192.191.3.1   | 192.191.3.254  | 192.191.3.255  |
| A4    | /25    | 120  | 121                   | 192.191.0.128/25 | 255.255.255.128 | 192.191.0.129 | .192.191.0.254 | 192.191.0.255  |
| A8    | /25    | 120  | 121                   | 192.191.1.128/25 | 255.255.255.128 | 192.191.1.129 | 192.191.1.254  | 192.191.1.255  |
| A7    | /25    | 70   | 71                    | 192.191.1.0/25   | 255.255.255.128 | 192.191.1.1   | 192.191.126    | 192.191.1.127  |
| A3    | /26    | 50   | 51                    | 192.191.0.64/26  | 255.255.255.252 | 192.191.0.65  | 192.191.126    | 192.191.0.127  |
| A10   | /30    | 2    | 2                     | 192.191.0.0/30   | 255.255.255.192 | 192.191.0.1   | 192.191.0.2    | 192.191.0.3    |
| A11   | /30    | 2    | 2                     | 192.191.0.4/30   | 255.255.255.252 | 192.191.0.5   | 192.191.0.6    | 192.191.0.7    |
| A12   | /30    | 2    | 2                     | 192.191.0.8/30   | 255.255.255.252 | 192.191.0.9   | 192.191.0.10   | 192.191.0.11   |
| A13   | /30    | 2    | 2                     | 192.191.0.12/30  | 255.255.255.252 | 192.191.0.13  | 192.191.0.14   | 192.191.0.15   |
| A14   | /30    | 2    | 2                     | 192.191.0.16/30  | 255.255.255.252 | 192.191.0.17  | 192.191.0.18   | 192.191.0.19   |
| A15   | /30    | 2    | 2                     | 192.191.0.20/30  | 255.255.255.252 | 192.191.0.21  | 192.191.0.22   | 192.191.0.23   |
| A16   | /30    | 2    | 2                     | 192.191.0.24/30  | 255.255.255.252 | 192.191.0.25  | 192.191.0.26   | 192.191.0.27   |
| A17   | /30    | 2    | 2                     | 192.191.0.28/30  | 255.255.255.252 | 192.191.0.29  | 192.191.0.30   | 192.191.0.31   |
| A18   | /30    | 2    | 2                     | 192.191.0.32/30  | 255.255.255.252 | 192.191.0.33  | 192.191.0.34   | 192.191.0.35   |
| TOTAL | /20   | 2618 |                       |                  |                 |               |

</br>
</br>

## GNS3 Method CIDR

### Memmbuat Topologi Jaringan di GNS3
Pada pembuatan topologi jaringan di GNS3, dilakukan pembuatan topologi jaringan sesuai dengan pembagian IP Address yang telah dilakukan sebelumnya. Pembuatan topologi jaringan dilakukan dengan menggunakan metode CIDR yaitu sebagai berikut: </br>
<img src="https://user-images.githubusercontent.com/70510279/203686806-4eee7331-f2e8-469b-a538-cb81c6e7a19d.png" width="700"/>


### Penggabungan dan Pengelompokan Node
Langkah selanjutnya adalah melakukan pembagian dan pengelompokan node yang sesuai. Pada pembagian ini, kami menggunakan gambar dari Cisco Packet karena lebih jelas untuk pemisah kabel hubungnya. 
<img src="https://user-images.githubusercontent.com/70510279/203740560-78e3e25e-38d3-472d-bfc0-dfbab576be04.png" width="700"/>

## Konfigurasi Setiap Node di GNS3

</br>

### Router The Resonance
