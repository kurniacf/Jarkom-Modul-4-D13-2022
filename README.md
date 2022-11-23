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

### Membuat Routing
